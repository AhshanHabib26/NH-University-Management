import express from 'express';
import { studentController } from './student.controller';
const studentRouter = express.Router();

studentRouter.get('/:studentId', studentController.getSingleStudent);
studentRouter.patch('/:studentId', studentController.updateStudent);
studentRouter.delete('/:studentId', studentController.deleteStudent);
studentRouter.get('/', studentController.getAllStudent);

export default studentRouter;
