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
import { validate } from "../middlewares/validate.middleware";
import { objectIdParamSchema } from "../validations/common.validation";
import {
  createHeroBodySchema,
  updateHeroBodySchema,
} from "../validations/hero.validation";

const heroRouter = Router();

heroRouter.post("/", protectAdmin, validate({ body: createHeroBodySchema }), createHeroSection);
heroRouter.get("/", protectAdmin, getAllHeroSections);
heroRouter.get("/active", getActiveHeroSection);
heroRouter.get("/:id", protectAdmin, validate({ params: objectIdParamSchema }), getHeroSectionById);
heroRouter.put(
  "/:id",
  protectAdmin,
  validate({ params: objectIdParamSchema, body: updateHeroBodySchema }),
  updateHeroSection
);
heroRouter.delete("/:id", protectAdmin, validate({ params: objectIdParamSchema }), deleteHeroSection);

export default heroRouter;

