import { Router } from 'express';
import authRouter from './auth';
import chirpsRouter from './chirps';
import usersRouter from './users';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);
router.use('/chirps', chirpsRouter);

router.use(tokenMiddleware);
router.use(isLoggedIn);

router.use('/users', usersRouter);

export default router;