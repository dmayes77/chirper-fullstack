import { Router } from 'express';
import authRouter from './auth';
import chirpsRouter from './chirps';
import usersRouter from './users';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router
	.route('*')
	.post(tokenMiddleware, isLoggedIn)
	.put(tokenMiddleware, isLoggedIn)
	.delete(tokenMiddleware, isLoggedIn);

router.use('/chirps', chirpsRouter);
router.use('/users', usersRouter);

export default router;
