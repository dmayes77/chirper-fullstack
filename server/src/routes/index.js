import { Router } from 'express';
import peopleRouter from './people';
import usersRouter from './users';
import chirpsRouter from './chirps';

let router = Router();

router.use('/people', peopleRouter);
router.use('/users', usersRouter);
router.use('/chirps', chirpsRouter);

export default router;