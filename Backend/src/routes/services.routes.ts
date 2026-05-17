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

const servicesRouter = Router();

servicesRouter.post("/", protectAdmin, createServicesSection);
servicesRouter.get("/", protectAdmin, getAllServicesSections);
servicesRouter.get("/active", getActiveServicesSection);
servicesRouter.get("/:id", protectAdmin, getServicesSectionById);
servicesRouter.put("/:id", protectAdmin, updateServicesSection);
servicesRouter.delete("/:id", protectAdmin, deleteServicesSection);

export default servicesRouter;

