import { Request, Response } from "express";
import { uploadImageToCloudinary } from "../services/media.service";

export const uploadImage = async (req: Request, res: Response) => {
  try {
    const admin = req.admin;

    if (!admin) {
      return res.status(401).json({ message: "Unauthorized access." });
    }

    if (!req.file) {
      return res.status(400).json({ message: "Image file is required." });
    }

    const result = await uploadImageToCloudinary({
      buffer: req.file.buffer,
      mimetype: req.file.mimetype,
    });

    return res.status(200).json({
      message: "Image uploaded successfully.",
      data: result,
    });
  } catch (error: unknown) {
    console.error("Upload image error:", error);

    const normalizedMessage =
      error instanceof Error
        ? error.message
        : typeof error === "object" && error !== null && "message" in error
        ? String((error as { message?: unknown }).message)
        : JSON.stringify(error);

    return res.status(500).json({
      message: "Failed to upload image.",
      error: normalizedMessage || "Unknown error",
    });
  }
};
