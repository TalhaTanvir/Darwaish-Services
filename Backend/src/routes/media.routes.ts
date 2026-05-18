import { Router } from "express";
import { uploadImage } from "../controllers/media.controller";
import { protectAdmin } from "../middlewares/auth.middleware";
import { uploadSingleImage } from "../middlewares/upload.middleware";

const mediaRouter = Router();

mediaRouter.post("/upload-image", protectAdmin, uploadSingleImage, uploadImage);

export default mediaRouter;
