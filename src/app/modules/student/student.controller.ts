import { studentServices } from './student.services';
import asyncHandler from '../../middlewares/asyncHandler';

const getAllStudent = asyncHandler(async (req, res, next) => {
  const result = await studentServices.getAllStudent();
  res.status(200).json({
    success: true,
    message: 'Student fatched successfully!',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
};
