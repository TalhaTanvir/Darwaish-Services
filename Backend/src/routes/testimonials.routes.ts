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

const testimonialsRouter = Router();

testimonialsRouter.post("/", protectAdmin, createTestimonialsSection);
testimonialsRouter.get("/", protectAdmin, getAllTestimonialsSections);
testimonialsRouter.get("/active", getActiveTestimonialsSection);
testimonialsRouter.get("/:id", protectAdmin, getTestimonialsSectionById);
testimonialsRouter.put("/:id", protectAdmin, updateTestimonialsSection);
testimonialsRouter.delete("/:id", protectAdmin, deleteTestimonialsSection);

export default testimonialsRouter;

