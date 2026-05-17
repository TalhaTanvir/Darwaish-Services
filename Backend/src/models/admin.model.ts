import { Schema, model, models } from "mongoose";

export type AdminRole = "super-admin" | "admin";

export interface IAdmin {
  name: string;
  email: string;
  password: string;
  role: AdminRole;
  isActive: boolean;
}

const AdminSchema = new Schema<IAdmin>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      trim: true,
    },
    role: {
      type: String,
      enum: ["super-admin", "admin"],
      default: "admin",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const AdminModel = models.Admin || model<IAdmin>("Admin", AdminSchema);

export default AdminModel;
