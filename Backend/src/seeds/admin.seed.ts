import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { connectDatabase } from "../config/Database";
import AdminModel from "../models/admin.model";

dotenv.config();

const seedAdmin = async (): Promise<void> => {
  const adminName = (process.env.ADMIN_NAME || "Super Admin").trim();
  const adminEmail = (process.env.ADMIN_EMAIL || "").trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD || "";
  const adminRole = "super-admin";

  if (!adminEmail) {
    throw new Error("ADMIN_EMAIL is missing in .env");
  }

  if (!adminPassword || adminPassword.length < 6) {
    throw new Error("ADMIN_PASSWORD must be at least 6 characters");
  }

  await connectDatabase();

  const hashedPassword = await bcrypt.hash(adminPassword, 10);
  const existingAdmin = await AdminModel.findOne({ email: adminEmail });

  if (existingAdmin) {
    existingAdmin.name = adminName;
    existingAdmin.password = hashedPassword;
    existingAdmin.role = adminRole;
    existingAdmin.isActive = true;
    await existingAdmin.save();
    console.log(`Admin updated: ${adminEmail}`);
    return;
  }

  await AdminModel.create({
    name: adminName,
    email: adminEmail,
    password: hashedPassword,
    role: adminRole,
    isActive: true,
  });

  console.log(`Admin created: ${adminEmail}`);
};

const runSeed = async (): Promise<void> => {
  try {
    await seedAdmin();
  } catch (error) {
    console.error(
      "Admin seed failed:",
      error instanceof Error ? error.message : error
    );
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

void runSeed();
