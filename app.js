var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('./config');
var osnovenKontroler = require('./kontroleri/osnovenKontroler');
var apiKontroler = require('./kontroleri/apiKontroler');

var porta = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));



app.set('view engine', 'ejs');

mongoose.connect(config.getKonekcijaBaza());

osnovenKontroler(app);
apiKontroler(app);


app.listen(porta);