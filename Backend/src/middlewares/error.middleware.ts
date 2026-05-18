import { NextFunction, Request, Response } from "express";
import { Error as MongooseError } from "mongoose";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import multer from "multer";
import AppError from "../errors/AppError";

type ErrorResponse = {
  success: false;
  status: "fail" | "error";
  message: string;
  errors?: string[];
  stack?: string;
};

type ExtendedError = Error & {
  statusCode?: number;
  status?: "fail" | "error";
  isOperational?: boolean;
  code?: number;
  path?: string;
  value?: unknown;
  errors?: Record<string, { message: string }>;
};

const handleCastError = (err: ExtendedError) =>
  new AppError(
    `Invalid ${err.path ?? "field"}: ${String(err.value)}.`,
    400
  );

const handleValidationError = (err: ExtendedError) => {
  const messages = Object.values(err.errors ?? {}).map(
    (item) => item.message
  );

  return new AppError(messages.join(" "), 400);
};

const handleJwtError = () => new AppError("Invalid token. Please log in again.", 401);

const handleJwtExpiredError = () =>
  new AppError("Your token has expired. Please log in again.", 401);

const handleMulterError = (err: multer.MulterError) => {
  if (err.code === "LIMIT_FILE_SIZE") {
    return new AppError("Image size must be less than or equal to 5MB.", 400);
  }

  return new AppError(err.message, 400);
};

const sendErrorDev = (err: ExtendedError, res: Response) => {
  const response: ErrorResponse = {
    success: false,
    status: err.status ?? "error",
    message: err.message,
    stack: err.stack,
  };

  return res.status(err.statusCode ?? 500).json(response);
};

const sendErrorProd = (err: ExtendedError, res: Response) => {
  if (err.isOperational) {
    const response: ErrorResponse = {
      success: false,
      status: err.status ?? "fail",
      message: err.message,
    };

    return res.status(err.statusCode ?? 500).json(response);
  }

  console.error("UNEXPECTED ERROR:", err);

  return res.status(500).json({
    success: false,
    status: "error",
    message: "Something went wrong.",
  } satisfies ErrorResponse);
};

export const globalErrorHandler = (
  error: ExtendedError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  let err: ExtendedError = {
    ...error,
    name: error.name,
    message: error.message,
    statusCode: error.statusCode ?? 500,
    status: error.status ?? "error",
    isOperational: error.isOperational ?? false,
  };

  if (error instanceof MongooseError.CastError) {
    err = handleCastError(error as ExtendedError);
  }

  if (error instanceof MongooseError.ValidationError) {
    err = handleValidationError(error as ExtendedError);
  }

  if (error instanceof JsonWebTokenError) {
    err = handleJwtError();
  }

  if (error instanceof TokenExpiredError) {
    err = handleJwtExpiredError();
  }

  if (error instanceof multer.MulterError) {
    err = handleMulterError(error);
  }

  if (process.env.NODE_ENV === "production") {
    return sendErrorProd(err, res);
  }

  return sendErrorDev(err, res);
};
