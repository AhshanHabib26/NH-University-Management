import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../middlewares/validateRequest';
import { academicSemesterValidation } from './academicSemester.validation';
const academicSemesterRouter = express.Router();

academicSemesterRouter.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidation.createAcademicSemesterValidation),
  academicSemesterController.createAcademicSemester,
);

export default academicSemesterRouter;
