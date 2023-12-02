import { Student } from './student.interface';
import { Student } from './student.schema';

const studentCreateService = async (student: Student) => {
  const result = await Student.create(student);
  return result;
};

export const studentServices = {
  studentCreateService,
};
