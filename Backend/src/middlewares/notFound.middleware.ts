import { NextFunction, Request, Response } from "express";
import AppError from "../errors/AppError";

export const notFoundHandler = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  return next(new AppError(`Cannot find ${req.originalUrl} on this server.`, 404));
};
