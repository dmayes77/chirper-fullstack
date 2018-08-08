import { Router } from 'express';
import Table from '../table';
let router = Router();

let chirps = new Table('chirps');

//Get one or all chirps
router.get('/:id?', (req, res) => {
	let id = req.params.id;
	if (id) {
		chirps.getOne(id).then(chirp => {
			res.json(chirp);
		});
	} else {
		chirps.getAll().then(chirps => {
			res.json(chirps);
		});
	}
});

//Creat new chirp
router.post('/', (req, res) => {
	let chirp = req.body;
	chirps.insert(chirp).then(id => {
		res.json(id);
	});
});

//Update a particular chirp
router.put('/:id', (req, res) => {
	let id = req.params.id;
	chirps.update(id, req.body, {new: true}).then(results => {
		res.json(results);
	});
});

//Delete a particular chirp
router.delete('/:id', (req, res) => {
	let id = req.params.id;
	chirps.delete(id).then(() => {
		res.sendStatus(200);
	});
});

export default router;
