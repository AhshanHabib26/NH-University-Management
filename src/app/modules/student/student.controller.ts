import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.services';

const getAllStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await studentServices.getAllStudent();
    res.status(200).json({
      success: true,
      message: 'Student fatched successfully!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const studentController = {
  getAllStudent,
};
