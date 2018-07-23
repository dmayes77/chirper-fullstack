const express = require('express');
const db = require('../models');

let router = express.Router();

//Index Route - list all chirps
router.get('/', (req, res) => {
	db.Chirp.find()
		.then(chirps => {
			res.json(chirps);
		})
		.catch(err => {
			res.send(err);
		});
});

//Create Route - create a new chirp
router.post('/', (req, res) => {
	db.Chirp.create(req.body)
		.then(newChirp => {
			res.status(201).json(newChirp);
		})
		.catch(err => {
			res.send(err);
		});
});

//Show Route - show info about one specific chirp
router.get('/:id', (req, res) => {
	db.Chirp.findById(req.params.id)
		.then(foundChirp => {
			res.json(foundChirp);
		})
		.catch(err => {
			res.send(err);
		});
});

//Update Route - update a specific chirp
router.put('/:id', (req, res) => {
	db.Chirp.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
		.then(updatedChirp => {
			res.json(updatedChirp);
		})
		.catch(err => {
			res.send(err);
		});
});

//Delete Route - delete a specific chirp
router.delete('/:id', (req, res) => {
	db.Chirp.remove({ _id: req.params.id })
		.then(() => {
			res.sendStatus(200);
		})
		.catch(err => {
			res.send(err);
		});
});

module.exports = router;
