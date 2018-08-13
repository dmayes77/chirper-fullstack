import { Router } from 'express';
import Table from '../table';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';
import { executeQuery, callProcedure } from '../config/db';

let router = Router();
let usersTable = new Table('users');

router.get('/me', tokenMiddleware, isLoggedIn, (req, res) => {
	res.json(req.user);
});

router.get('/:id', (req, res) => {
	usersTable
		.getOne(req.params.id)
		.then(results => {
			return res.json(results);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

router.get('/:name', (req, res) => {
	executeQuery(`select id from users where name = '${req.params.username}'`)
		.then(results => {
			return res.json(results[0]);
		})
		.catch(err => {
			console.log(err);
			res.sendStatus(500);
		});
});

export default router;
