import { Router } from 'express';
import db from '../db';

let router = Router();

//Index Route - list all chirps
router.get('/:id?', (req, res) => {
	let id = req.params.id;
	if (id) {
		db.Chirp.findById(id)
			.then(foundChirp => {
				res.json(foundChirp);
			})
			.catch(err => {
				res.send(err);
			});
	} else {
		db.Chirp.find()
		.then(chirps => {
			res.json(chirps);
		})
		.catch(err => {
			res.send(err);
		});
	}
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

//Update Route - update a specific chirp
router.put('/:id/edit', (req, res) => {
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
