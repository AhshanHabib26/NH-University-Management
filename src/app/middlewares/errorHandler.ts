import { NextFunction, Request, Response } from 'express';

const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const statusCode = err.status ?? 500;
  const message = err.message || 'Something went wrong.';

  return res.status(statusCode).json({
    error: statusCode,
    message: message,
  });
};

export default errorHandler
