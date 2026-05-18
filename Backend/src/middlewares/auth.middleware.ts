import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import AdminModel from "../models/admin.model";
import AppError from "../errors/AppError";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      admin?: {
        _id: string;
        name: string;
        email: string;
        role: string;
        isActive: boolean;
      };
    }
  }
}

type DecodedAdminPayload = {
  id: string;
};

export const protectAdmin = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return next(new AppError("Authorization token is required.", 401));
  }

  const token = authHeader.split(" ")[1] as string;

  if (!process.env.JWT_SECRET) {
    return next(new AppError("Server JWT secret is not configured.", 500));
  }

  const jwtSecret: Secret = process.env.JWT_SECRET;
  const decoded = jwt.verify(token, jwtSecret);

  if (typeof decoded === "string" || !("id" in decoded)) {
    return next(new AppError("Invalid token.", 401));
  }

  const payload = decoded as JwtPayload & DecodedAdminPayload;

  const admin = await AdminModel.findById(payload.id).select("-password");

  if (!admin) {
    return next(new AppError("Invalid token.", 401));
  }

  if (!admin.isActive) {
    return next(new AppError("Admin account is inactive.", 403));
  }

  req.admin = {
    _id: String(admin._id),
    name: admin.name,
    email: admin.email,
    role: admin.role,
    isActive: admin.isActive,
  };

  return next();
};
