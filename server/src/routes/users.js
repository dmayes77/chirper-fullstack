import { Router } from 'express';
import Table from '../table';
import { isLoggedIn } from '../middleware/auth.mw';

let router = Router();

let users = new Table('users');

router.get('/me', isLoggedIn, (req, res) => {
	res.json(req.user);
})

// router.get('/:id?', (req, res) => {
// 	let id = req.params.id;
// 	if (id) {
// 		users.getOne(id).then(user => {
// 			res.json(user);
// 		})
// 	} else {
// 		users.getAll().then(users => {
// 			res.json(users);
// 		})
// 	}
// });

// router.post('/', (req, res) => {
// 	let user = req.body;
// 	users.insert(user).then(id => {
// 		res.json(id);
// 	});
// });

// router.put('/:id/edit', (req, res) => {
// 	let id = req.params.id;
// 	users.update(id, req.body).then(results => {
// 		res.json(results);
// 	})
// });

// router.delete("/:id", (req, res) => {
// 	let id = req.params.id;
// 	users.delete(id)
// 		.then(() => {
// 			res.sendStatus(200);
// 		})
// });

export default router;
