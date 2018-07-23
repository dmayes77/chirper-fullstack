const mongoose = require("mongoose");

let chirpSchema = new mongoose.Schema({
	name:{
		type: String,
		required: 'Name cannot be blank!'
	},
	chirp:{
		type: String,
		required: 'Chirp cannot be blank!'
	},
	created_date: {
		type: Date,
		default: Date.now
	}

});

let Chirp = mongoose.model('Chirp', chirpSchema);

module.exports = Chirp;