import { Router } from "express";
import {
  getAdminProfile,
  loginAdmin,
  registerAdmin,
} from "../controllers/auth.controller";
import { protectAdmin } from "../middlewares/auth.middleware";

const authRouter = Router();

authRouter.post("/register", registerAdmin);
authRouter.post("/login", loginAdmin);
authRouter.get("/profile", protectAdmin, getAdminProfile);

export default authRouter;
