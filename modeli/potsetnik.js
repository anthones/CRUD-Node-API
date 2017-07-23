var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var potsetnikSchema = new Schema({
	korisnik: String,
	potsetuvanje: String,
	daliEGotovo: Boolean,
	ImaPrikacuvanje: Boolean
});

var Potsetuvanja = mongoose.model('Potsetuvanja', potsetnikSchema);

module.exports = Potsetuvanja;