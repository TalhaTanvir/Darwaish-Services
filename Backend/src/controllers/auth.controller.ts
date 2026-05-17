import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt, { Secret, SignOptions } from "jsonwebtoken";
import AdminModel from "../models/admin.model";
import type { AdminRole } from "../models/admin.model";

type RegisterPayload = {
  name?: string;
  email?: string;
  password?: string;
  role?: AdminRole;
};

type LoginPayload = {
  email?: string;
  password?: string;
};

const buildToken = (adminId: string) => {
  const jwtSecret = process.env.JWT_SECRET;
  const jwtExpiresIn = process.env.JWT_EXPIRES_IN || "7d";

  if (!jwtSecret) {
    throw new Error("JWT_SECRET is missing in environment variables.");
  }

  const options: SignOptions = {
    expiresIn: jwtExpiresIn as SignOptions["expiresIn"],
  };

  return jwt.sign({ id: adminId }, jwtSecret as Secret, options);
};

export const registerAdmin = async (req: Request, res: Response) => {
  try {
    const payload: RegisterPayload = req.body;

    if (!payload.name || !payload.name.trim()) {
      return res.status(400).json({ message: "Name is required." });
    }

    if (!payload.email || !payload.email.trim()) {
      return res.status(400).json({ message: "Email is required." });
    }

    if (!payload.password || payload.password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be at least 6 characters." });
    }

    const normalizedEmail = payload.email.trim().toLowerCase();
    const existingAdmin = await AdminModel.findOne({ email: normalizedEmail });

    if (existingAdmin) {
      return res.status(409).json({ message: "Admin already exists." });
    }

    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const created = await AdminModel.create({
      name: payload.name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      role: payload.role ?? "admin",
      isActive: true,
    });

    const token = buildToken(String(created._id));

    return res.status(201).json({
      message: "Admin registered successfully.",
      data: {
        _id: created._id,
        name: created.name,
        email: created.email,
        role: created.role,
        isActive: created.isActive,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to register admin.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const loginAdmin = async (req: Request, res: Response) => {
  try {
    const payload: LoginPayload = req.body;

    if (!payload.email || !payload.email.trim()) {
      return res.status(400).json({ message: "Email is required." });
    }

    if (!payload.password) {
      return res.status(400).json({ message: "Password is required." });
    }

    const normalizedEmail = payload.email.trim().toLowerCase();

    const admin = await AdminModel.findOne({ email: normalizedEmail });

    if (!admin) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    if (!admin.isActive) {
      return res.status(403).json({ message: "Admin account is inactive." });
    }

    const isPasswordMatched = await bcrypt.compare(
      payload.password,
      admin.password
    );

    if (!isPasswordMatched) {
      return res.status(401).json({ message: "Invalid email or password." });
    }

    const token = buildToken(String(admin._id));

    return res.status(200).json({
      message: "Admin logged in successfully.",
      data: {
        _id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role,
        isActive: admin.isActive,
      },
      token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to login admin.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAdminProfile = async (req: Request, res: Response) => {
  try {
    const admin = req.admin;

    if (!admin) {
      return res.status(401).json({ message: "Unauthorized access." });
    }

    return res.status(200).json({
      data: admin,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch profile.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
