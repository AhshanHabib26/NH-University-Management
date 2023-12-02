import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.schema';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.schema';
import { TUser } from './user.interface';
import { User } from './user.schema';
import generateStudentId from './user.utils';

const createUserWithStudent = async (
  password: string,
  studentData: TStudent,
) => {
  let userData: Partial<TUser> = {};

  userData.password = password || (process.env.DEFULT_PASS as string);
  userData.role = 'student';

  // Find Academic Semester Info
  const admissionSemester: any = await AcademicSemester.findById(
    studentData.admissionSemester,
  );

  userData.id = await generateStudentId(admissionSemester);

  const result = await User.create(userData);

  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;

    const data = await Student.create(studentData);
    return data;
  }
};

export const userService = {
  createUserWithStudent,
};
