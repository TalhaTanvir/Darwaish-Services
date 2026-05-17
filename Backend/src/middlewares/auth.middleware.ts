import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";
import dotenv from "dotenv";
import AdminModel from "../models/admin.model";

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
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Authorization token is required." });
    }

    const token = authHeader.split(" ")[1] as string;
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in environment variables.");
    }
    const jwtSecret: Secret = process.env.JWT_SECRET;

    const decoded = jwt.verify(token, jwtSecret);

    if (typeof decoded === "string" || !("id" in decoded)) {
      return res.status(401).json({ message: "Invalid token." });
    }

    const payload = decoded as JwtPayload & DecodedAdminPayload;

    const admin = await AdminModel.findById(payload.id).select("-password");

    if (!admin) {
      return res.status(401).json({ message: "Invalid token." });
    }

    if (!admin.isActive) {
      return res.status(403).json({ message: "Admin account is inactive." });
    }

    req.admin = {
      _id: String(admin._id),
      name: admin.name,
      email: admin.email,
      role: admin.role,
      isActive: admin.isActive,
    };

    return next();
  } catch (_error) {
    return res.status(401).json({ message: "Unauthorized access." });
  }
};
