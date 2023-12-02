import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.schema';
import { academicSemesterNameAndCodeMapper } from './academicSemester.utils';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {


  if (academicSemesterNameAndCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

export const academicSemesterService = {
  createAcademicSemesterIntoDB,
};
