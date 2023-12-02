import { NextFunction, Request, Response } from 'express';
import { userService } from './user.services';

const createUserWithStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;
    const result = await userService.createUserWithStudent(
      password,
      studentData,
    );

    res.status(200).json({
      success: true,
      message: 'Student created successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const userController = {
  createUserWithStudent,
};
