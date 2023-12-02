import exppress from 'express';
import { userController } from './user.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidations } from '../student/student.validation';
const userRouter = exppress.Router();

userRouter.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  userController.createUserWithStudent,
);

export default userRouter;
