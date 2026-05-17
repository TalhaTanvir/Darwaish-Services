import { Router } from "express";
import {
  createServicesSection,
  deleteServicesSection,
  getActiveServicesSection,
  getAllServicesSections,
  getServicesSectionById,
  updateServicesSection,
} from "../controllers/services.controller";

const servicesRouter = Router();

servicesRouter.post("/", createServicesSection);
servicesRouter.get("/", getAllServicesSections);
servicesRouter.get("/active", getActiveServicesSection);
servicesRouter.get("/:id", getServicesSectionById);
servicesRouter.put("/:id", updateServicesSection);
servicesRouter.delete("/:id", deleteServicesSection);

export default servicesRouter;
