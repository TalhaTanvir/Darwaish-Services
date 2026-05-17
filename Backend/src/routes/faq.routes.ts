import { Router } from "express";
import {
  createFAQSection,
  deleteFAQSection,
  getActiveFAQSection,
  getAllFAQSections,
  getFAQSectionById,
  updateFAQSection,
} from "../controllers/faq.controller";
import { protectAdmin } from "../middlewares/auth.middleware";

const faqRouter = Router();

faqRouter.post("/", protectAdmin, createFAQSection);
faqRouter.get("/", protectAdmin, getAllFAQSections);
faqRouter.get("/active", getActiveFAQSection);
faqRouter.get("/:id", protectAdmin, getFAQSectionById);
faqRouter.put("/:id", protectAdmin, updateFAQSection);
faqRouter.delete("/:id", protectAdmin, deleteFAQSection);

export default faqRouter;
