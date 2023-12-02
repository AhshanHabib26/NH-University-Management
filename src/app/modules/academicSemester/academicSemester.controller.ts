import asyncHandler from '../../middlewares/asyncHandler';
import { academicSemesterService } from './academicSemester.services';

const createAcademicSemester = asyncHandler(async (req, res, next) => {
  const result = await academicSemesterService.createAcademicSemesterIntoDB(
    req.body,
  );

  res.status(200).json({
    success: true,
    message: 'Academic Semester is created successfully!',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
};
