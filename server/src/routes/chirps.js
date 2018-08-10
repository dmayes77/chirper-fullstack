import { Router } from 'express';
import Table from '../table';

let router = Router();
let chirpsTable = new Table('chirps');

router.get('/', async (req, res) => {
	console.log(req.user);
	try {
		let classes = await chirpsTable.getAll()
		res.json(classes);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.post('/', async (req, res) => {
	try {
		// idObj will look like { id: 7 }
		let idObj = await chirpsTable.insert({
			content: req.body.content,
		});
		res.status(201).json(idObj);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get('/:id', async (req, res) => {
	try {
		let foundClass = await chirpsTable.getOne(req.params.id);
		res.json(foundClass);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.put('/:id', async (req, res) => {
	try {
		// not concerned about getting a value back, just waiting on update to finish
		await chirpsTable.update(req.params.id, req.body);
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.delete('/:id', async (req, res) => {
	try {
		// not concerned about getting a value back, just waiting on delete to finish
		await chirpsTable.delete(req.params.id);
		res.sendStatus(200);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

export default router;