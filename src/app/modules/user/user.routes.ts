import exppress from 'express';
import { userController } from './user.controller';
const userRouter = exppress.Router();

userRouter.post('/create-student', userController.createUserWithStudent);

export default userRouter;
