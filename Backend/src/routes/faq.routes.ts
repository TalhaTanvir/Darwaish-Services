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
import { validate } from "../middlewares/validate.middleware";
import { objectIdParamSchema } from "../validations/common.validation";
import {
  createFAQBodySchema,
  updateFAQBodySchema,
} from "../validations/faq.validation";

const faqRouter = Router();

faqRouter.post("/", protectAdmin, validate({ body: createFAQBodySchema }), createFAQSection);
faqRouter.get("/", protectAdmin, getAllFAQSections);
faqRouter.get("/active", getActiveFAQSection);
faqRouter.get("/:id", protectAdmin, validate({ params: objectIdParamSchema }), getFAQSectionById);
faqRouter.put(
  "/:id",
  protectAdmin,
  validate({ params: objectIdParamSchema, body: updateFAQBodySchema }),
  updateFAQSection
);
faqRouter.delete("/:id", protectAdmin, validate({ params: objectIdParamSchema }), deleteFAQSection);

export default faqRouter;
