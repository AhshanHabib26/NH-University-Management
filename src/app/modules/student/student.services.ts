import { Student } from './student.schema';

const getAllStudent = async () => {
  const result = await Student.find();
  return result;
};

export const studentServices = {
  getAllStudent,
};
