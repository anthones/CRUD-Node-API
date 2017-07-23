var Potsetuvanja = require('../modeli/potsetnik.js')

module.exports = function(app) {
	app.get('/api/osnovniPotsetuvanja', function(baranje, odgovor){
		var osnovniPotsetuvanja = [
			{
				korisnik: 'Antonie',
				potsetuvanje: 'plati smetki',
				daliEGotovo: false,
				imaPrikacuvanje: false
			},
			{
				korisnik: 'Antonie',
				potsetuvanje: 'ispij lekovi',
				daliEGotovo: false,
				imaPrikacuvanje: false
			},
			{
				korisnik: 'Antonie',
				potsetuvanje: 'izlezi nadvor',
				daliEGotovo: false,
				imaPrikacuvanje: false
			}
		];
		Potsetuvanja.create(osnovniPotsetuvanja, function(greska, rezultati) {
			if (greska) throw err;
			odgovor.send(rezultati);
		});
	});
}