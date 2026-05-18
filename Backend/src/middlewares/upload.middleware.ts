import multer from "multer";
import AppError from "../errors/AppError";

const storage = multer.memoryStorage();

const imageFileFilter: multer.Options["fileFilter"] = (_req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    return cb(null, true);
  }

  return cb(new AppError("Only image files are allowed.", 400));
};

const upload = multer({
  storage,
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024,
  },
});

export const uploadSingleImage = upload.single("image");
