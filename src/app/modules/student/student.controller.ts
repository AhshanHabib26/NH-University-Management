import { Request, Response } from 'express';
import { studentServices } from './student.services';
import studentValidationSchema from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const student = req.body;
    const dataValidation =  studentValidationSchema.parse(student)
    const result = await studentServices.studentCreateService(dataValidation);

    res.status(200).json({
      success: true,
      message: 'Student created succesfully!',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Server Error',
      error: {
        code: 500,
        description: error.message || 'Server Error',
      },
    });
  }
};

export const studentController = {
  createStudent,
};
