import { Router } from "express";
import {
  createFAQSection,
  deleteFAQSection,
  getActiveFAQSection,
  getAllFAQSections,
  getFAQSectionById,
  updateFAQSection,
} from "../controllers/FAQ.controller";

const faqRouter = Router();

faqRouter.post("/", createFAQSection);
faqRouter.get("/", getAllFAQSections);
faqRouter.get("/active", getActiveFAQSection);
faqRouter.get("/:id", getFAQSectionById);
faqRouter.put("/:id", updateFAQSection);
faqRouter.delete("/:id", deleteFAQSection);

export default faqRouter;
