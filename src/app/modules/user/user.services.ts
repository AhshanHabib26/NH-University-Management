import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.schema';
import { TUser } from './user.interface';
import { User } from './user.schema';

const createUserWithStudent = async (
  password: string,
  studentData: TStudent,
) => {
  let userData: Partial<TUser> = {};

  userData.password = password || (process.env.DEFULT_PASS as string);
  userData.role = 'student';
  userData.id = '20230001';

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
