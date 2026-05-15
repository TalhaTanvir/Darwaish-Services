import { Router } from "express";
import {
  createHeroSection,
  deleteHeroSection,
  getActiveHeroSection,
  getAllHeroSections,
  getHeroSectionById,
  updateHeroSection,
} from "../controllers/Hero.controller";

const heroRouter = Router();

heroRouter.post("/", createHeroSection);
heroRouter.get("/", getAllHeroSections);
heroRouter.get("/active", getActiveHeroSection);
heroRouter.get("/:id", getHeroSectionById);
heroRouter.put("/:id", updateHeroSection);
heroRouter.delete("/:id", deleteHeroSection);

export default heroRouter;
