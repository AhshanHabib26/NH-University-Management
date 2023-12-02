import { userService } from './user.services';
import asyncHandler from '../../middlewares/asyncHandler';

const createUserWithStudent = asyncHandler(async (req, res, next) => {
  const { password, student: studentData } = req.body;
  const result = await userService.createUserWithStudent(password, studentData);

  res.status(200).json({
    success: true,
    message: 'Student created successfully!',
    data: result,
  });
});

export const userController = {
  createUserWithStudent,
};
