var configVrednosti = require('./config');

module.exports = {
	getKonekcijaBaza: function() {
		return 'mongodb://' + configVrednosti.korisnik + ':' + configVrednosti.lozinka + '@ds115493.mlab.com:15493/nodepotsetnik';
	}
}