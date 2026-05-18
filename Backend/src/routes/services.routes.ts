import { Router } from "express";
import {
  createServicesSection,
  deleteServicesSection,
  getActiveServicesSection,
  getAllServicesSections,
  getServicesSectionById,
  updateServicesSection,
} from "../controllers/services.controller";
import { protectAdmin } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate.middleware";
import { objectIdParamSchema } from "../validations/common.validation";
import {
  createServicesBodySchema,
  updateServicesBodySchema,
} from "../validations/services.validation";

const servicesRouter = Router();

servicesRouter.post(
  "/",
  protectAdmin,
  validate({ body: createServicesBodySchema }),
  createServicesSection
);
servicesRouter.get("/", protectAdmin, getAllServicesSections);
servicesRouter.get("/active", getActiveServicesSection);
servicesRouter.get("/:id", protectAdmin, validate({ params: objectIdParamSchema }), getServicesSectionById);
servicesRouter.put(
  "/:id",
  protectAdmin,
  validate({ params: objectIdParamSchema, body: updateServicesBodySchema }),
  updateServicesSection
);
servicesRouter.delete("/:id", protectAdmin, validate({ params: objectIdParamSchema }), deleteServicesSection);

export default servicesRouter;

