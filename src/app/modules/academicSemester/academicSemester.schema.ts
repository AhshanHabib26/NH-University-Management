import { Schema, model } from 'mongoose';
import { TAcademicSemester, TMonths } from './academicSemester.interface';

const Months: TMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const academicSemesterSchema = new Schema<TAcademicSemester>({
  name: {
    type: String,
    enum: ['Autumn', 'Summar', 'Fall'],
    required: true,
  },
  code: {
    type: String,
    enum: ['01', '02', '03'],
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  startMonth: {
    type: String,
    enum: Months,
  },
  endMonth: {
    type: String,
    enum: Months,
  },
});

// Check if already Semester Name and Semester Year exists
academicSemesterSchema.pre('save', async function (next) {
  const isNameAndYearExists = await AcademicSemester.findOne({
    year: this.year,
    name: this.name,
  });
  if (isNameAndYearExists) {
    throw new Error('Semester is already exsists');
  }
  next();
});

export const AcademicSemester = model<TAcademicSemester>(
  'AcademicSemester',
  academicSemesterSchema,
);
