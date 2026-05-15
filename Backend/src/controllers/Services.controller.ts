import { Request, Response } from "express";
import mongoose from "mongoose";
import ServicesSectionModel, {
  IServiceItem,
} from "../models/Services.model";

type ServicesPayload = {
  heading?: string;
  subheading?: string;
  services?: IServiceItem[];
  isActive?: boolean;
};

export const createServicesSection = async (req: Request, res: Response) => {
  try {
    const payload: ServicesPayload = req.body;

    if (!payload.heading || !payload.heading.trim()) {
      return res.status(400).json({ message: "Heading is required." });
    }

    const created = await ServicesSectionModel.create({
      heading: payload.heading.trim(),
      subheading: payload.subheading ?? "",
      services: Array.isArray(payload.services) ? payload.services : [],
      isActive: payload.isActive ?? true,
    });

    return res.status(201).json({
      message: "Services section created successfully.",
      data: created,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create services section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllServicesSections = async (_req: Request, res: Response) => {
  try {
    const sections = await ServicesSectionModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: sections });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch services sections.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getActiveServicesSection = async (
  _req: Request,
  res: Response
) => {
  try {
    const active = await ServicesSectionModel.findOne({ isActive: true }).sort({
      updatedAt: -1,
    });

    if (!active) {
      return res
        .status(404)
        .json({ message: "No active services section found." });
    }

    return res.status(200).json({ data: active });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch active services section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getServicesSectionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid services section ID." });
    }

    const section = await ServicesSectionModel.findById(id);

    if (!section) {
      return res.status(404).json({ message: "Services section not found." });
    }

    return res.status(200).json({ data: section });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch services section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateServicesSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload: ServicesPayload = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid services section ID." });
    }

    if (payload.heading !== undefined && !payload.heading.trim()) {
      return res.status(400).json({ message: "Heading cannot be empty." });
    }

    const updateData: ServicesPayload = {
      ...payload,
      heading: payload.heading?.trim(),
    };

    const updated = await ServicesSectionModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "Services section not found." });
    }

    return res.status(200).json({
      message: "Services section updated successfully.",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update services section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteServicesSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid services section ID." });
    }

    const deleted = await ServicesSectionModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Services section not found." });
    }

    return res.status(200).json({
      message: "Services section deleted successfully.",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete services section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
