const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/chirps-api');

mongoose.Promise = Promise;

module.exports.Chirp = require('../src/models/chirp');

