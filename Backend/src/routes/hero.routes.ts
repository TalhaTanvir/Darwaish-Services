import { Router } from "express";
import {
  createHeroSection,
  deleteHeroSection,
  getActiveHeroSection,
  getAllHeroSections,
  getHeroSectionById,
  updateHeroSection,
} from "../controllers/hero.controller";
import { protectAdmin } from "../middlewares/auth.middleware";

const heroRouter = Router();

heroRouter.post("/", protectAdmin, createHeroSection);
heroRouter.get("/", protectAdmin, getAllHeroSections);
heroRouter.get("/active", getActiveHeroSection);
heroRouter.get("/:id", protectAdmin, getHeroSectionById);
heroRouter.put("/:id", protectAdmin, updateHeroSection);
heroRouter.delete("/:id", protectAdmin, deleteHeroSection);

export default heroRouter;

