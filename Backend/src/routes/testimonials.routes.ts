import { Router } from "express";
import {
  createTestimonialsSection,
  deleteTestimonialsSection,
  getActiveTestimonialsSection,
  getAllTestimonialsSections,
  getTestimonialsSectionById,
  updateTestimonialsSection,
} from "../controllers/testimonials.controller";

const testimonialsRouter = Router();

testimonialsRouter.post("/", createTestimonialsSection);
testimonialsRouter.get("/", getAllTestimonialsSections);
testimonialsRouter.get("/active", getActiveTestimonialsSection);
testimonialsRouter.get("/:id", getTestimonialsSectionById);
testimonialsRouter.put("/:id", updateTestimonialsSection);
testimonialsRouter.delete("/:id", deleteTestimonialsSection);

export default testimonialsRouter;
