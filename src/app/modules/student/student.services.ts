import mongoose from 'mongoose';
import { TStudent } from './student.interface';
import { Student } from './student.schema';
import { User } from '../user/user.schema';

const getAllStudentFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentIntoDB = async (id: string) => {
  console.log(id);
  const result = await Student.findOne({ id });
  console.log(result);
  return result;
};

const updateStudentIntoDB = async (id: string, payload: Partial<TStudent>) => {
  const isExsitsId = await Student.findOne({ id });
  if (!isExsitsId) {
    throw new Error('Student not found');
  }
  // Primitive and Non-primitve Data Dynamically Update
  const { name, guardian, localGuardian, ...remainingStudentData } = payload;

  const modifiedUpdatedData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdatedData[`name.${key}`] = value;
    }
  }

  if (guardian && Object.keys(guardian).length) {
    for (const [key, value] of Object.entries(guardian)) {
      modifiedUpdatedData[`guardian.${key}`] = value;
    }
  }

  if (localGuardian && Object.keys(localGuardian).length) {
    for (const [key, value] of Object.entries(localGuardian)) {
      modifiedUpdatedData[`localGuardian.${key}`] = value;
    }
  }

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdatedData, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  //Step 1 : Session Start
  const session = await mongoose.startSession();

  // Step 2 : Create Try-Catch block
  try {
    // Step 3 : Start Transaction
    session.startTransaction();

    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new Error('Failed to delete student');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedUser) {
      throw new Error('Failed to delete user');
    }

    // Step 4 : Commit Transaction & End Session
    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    // Step 5 : If error, Abort Transaction & End Session
    await session.abortTransaction();
    await session.endSession();
    throw new Error('Failed to delete student');
  }
};

export const studentServices = {
  getAllStudentFromDB,
  getSingleStudentIntoDB,
  updateStudentIntoDB,
  deleteStudentFromDB,
};
