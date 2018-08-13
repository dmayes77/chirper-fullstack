import { Router } from 'express';
import { Redirect } from 'react-router-dom';
import Table from '../table';
import { callProcedure } from '../config/db';
import { isLoggedIn } from '../middleware/auth.mw';

let router = Router();
let chirpsTable = new Table('chirps');

router.get('/', async (req, res) => {
	console.log(req.user);
	try {
		let chirps = await chirpsTable.getAll();
		res.json(chirps);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.post('/', async (req, res) => {
	try {
		// idObj will look like { id: 7 }
		let idObj = await chirpsTable.insert(req.body);
		res.status(201).json(idObj);
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
});

router.get('/:id', async (req, res) => {
	try {
		let foundChirp = await chirpsTable.getOne(req.params.id);
		res.json(foundChirp);
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

router.get('/users/:userid', (req, res) => {
	callProcedure('spGetAllUserChirps', [req.params.userid])
		.then(results => {
			return res.json(results[0]);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
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
