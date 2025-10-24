import { Router } from 'express';
import { signIn, signUp } from '../controllers/auth.controler.js';

const authRouter = Router();

authRouter.post('/sign-up', signUp);

authRouter.post('/sign-in', signIn);

authRouter.post('/sign-out', () => {});

export default authRouter;
