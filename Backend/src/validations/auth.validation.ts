import { z } from "zod";

const nameSchema = z.string().trim().min(1, "Name is required.");
const emailSchema = z.string().trim().email("Invalid email format.");
const passwordSchema = z
  .string()
  .min(6, "Password must be at least 6 characters.");
const roleSchema = z.enum(["super-admin", "admin"]);

export const registerAdminSchema = z.object({
  name: nameSchema,
  email: emailSchema,
  password: passwordSchema,
  role: roleSchema.optional(),
});

export const loginAdminSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, "Password is required."),
});
