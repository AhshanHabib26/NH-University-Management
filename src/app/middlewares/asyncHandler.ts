import { NextFunction, Request, RequestHandler } from 'express';
import { Response } from 'express-serve-static-core';

const asyncHandler =
  (fn: RequestHandler) => (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export default asyncHandler;
