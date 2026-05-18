import { Router } from "express";
import {
  createTestimonialsSection,
  deleteTestimonialsSection,
  getActiveTestimonialsSection,
  getAllTestimonialsSections,
  getTestimonialsSectionById,
  updateTestimonialsSection,
} from "../controllers/testimonials.controller";
import { protectAdmin } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { objectIdParamSchema } from "../validations/common.validation";
import {
  createTestimonialsBodySchema,
  updateTestimonialsBodySchema,
} from "../validations/testimonials.validation";

const testimonialsRouter = Router();

testimonialsRouter.post(
  "/",
  protectAdmin,
  validate({ body: createTestimonialsBodySchema }),
  createTestimonialsSection
);
testimonialsRouter.get("/", protectAdmin, getAllTestimonialsSections);
testimonialsRouter.get("/active", getActiveTestimonialsSection);
testimonialsRouter.get(
  "/:id",
  protectAdmin,
  validate({ params: objectIdParamSchema }),
  getTestimonialsSectionById
);
testimonialsRouter.put(
  "/:id",
  protectAdmin,
  validate({ params: objectIdParamSchema, body: updateTestimonialsBodySchema }),
  updateTestimonialsSection
);
testimonialsRouter.delete(
  "/:id",
  protectAdmin,
  validate({ params: objectIdParamSchema }),
  deleteTestimonialsSection
);

export default testimonialsRouter;

