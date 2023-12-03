import { studentServices } from './student.services';
import asyncHandler from '../../middlewares/asyncHandler';

const getAllStudent = asyncHandler(async (req, res, next) => {
  const result = await studentServices.getAllStudentFromDB();
  res.status(200).json({
    success: true,
    message: 'Student fatched successfully!',
    data: result,
  });
});

const getSingleStudent = asyncHandler(async (req, res, next) => {
  const { studentId } = req.params;

  const result = await studentServices.getSingleStudentIntoDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Single Student fatched successfully!',
    data: result,
  });
});

const updateStudent = asyncHandler(async (req, res, next) => {
  const { studentId } = req.params;
  const { student } = req.body;
  const result = await studentServices.updateStudentIntoDB(studentId, student);
  res.status(200).json({
    success: true,
    message: 'Student updated successfully!',
    data: result,
  });
});

const deleteStudent = asyncHandler(async (req, res) => {
  const { studentId } = req.params;
  const result = await studentServices.deleteStudentFromDB(studentId);
  res.status(200).json({
    success: true,
    message: 'Student deleted successfully!',
    data: result,
  });
});

export const studentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
  deleteStudent,
};
