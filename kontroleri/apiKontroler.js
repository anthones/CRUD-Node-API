var Potsetuvanja = require('../modeli/potsetnik');
var bodyParser = require('body-parser');

module.exports = function(app) {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.get('/api/potsetnici/:korisnik', function(baranje, odgovor) {
		Potsetuvanja.find({ korisnik: baranje.params.korisnik }, 
			function(greska, potsetnici) {
				if (greska) throw err;

				odgovor.send(potsetnici);
			});
	});

	app.get('/api/potsetnik/:id', function(baranje, odgovor) {
		Potsetuvanja.findById({ _id: baranje.params.id }, 
			function(greska, potsetnik) {
				if (greska) throw err;
				odgovor.send(potsetnik);
			});
	});

	app.post('/api/potsetnik', function(baranje, odgovor) {
		if (baranje.body.id) {
			Potsetuvanja.findByIdAndUpdate(baranje.body.id, {
				potsetuvanje: baranje.body.potsetuvanje, 
				daliEGotovo: baranje.body.daliEGotovo, 
				imaPrikacuvanje: baranje.body.imaPrikacuvanje
			}, function(greska, potsetnik) {
				if (greska) throw err;

				odgovor.send('Success');
			})
		}

		else {
			var novPotsetnik = Potsetuvanja({
				korisnik: 'Antonie',
				potsetuvanje: baranje.body.potsetuvanje,
				daliEGotovo: baranje.body.daliEGotovo,
				imaPrikacuvanje: baranje.body.imaPrikacuvanje
			});
			novPotsetnik.save(function(greska) {
				if (greska) throw err;
				odgovor.send('Success');
			});
		}
	});

	app.delete('/api/potsetnik', function(baranje, odgovor) {
		Potsetuvanja.findByIdAndRemove(baranje.body.id, function(greska) {
			if (greska) throw err;
			odgovor.send('Success');
		})
	});
}