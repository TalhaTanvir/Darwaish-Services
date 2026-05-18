import { Router } from "express";
import {
  getAdminProfile,
  loginAdmin,
  registerAdmin,
} from "../controllers/auth.controller";
import { protectAdmin } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import {
  loginAdminSchema,
  registerAdminSchema,
} from "../validations/auth.validation";

const authRouter = Router();

authRouter.post("/register", validate({ body: registerAdminSchema }), registerAdmin);
authRouter.post("/login", validate({ body: loginAdminSchema }), loginAdmin);
authRouter.get("/profile", protectAdmin, getAdminProfile);

export default authRouter;
