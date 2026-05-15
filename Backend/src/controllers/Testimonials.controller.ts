import { Request, Response } from "express";
import mongoose from "mongoose";
import TestimonialsSectionModel, {
  ITestimonialItem,
} from "../models/Testimonials.model";

type TestimonialsPayload = {
  heading?: string;
  subheading?: string;
  testimonials?: ITestimonialItem[];
  isActive?: boolean;
};

export const createTestimonialsSection = async (req: Request, res: Response) => {
  try {
    const payload: TestimonialsPayload = req.body;

    if (!payload.heading || !payload.heading.trim()) {
      return res.status(400).json({ message: "Heading is required." });
    }

    const created = await TestimonialsSectionModel.create({
      heading: payload.heading.trim(),
      subheading: payload.subheading ?? "",
      testimonials: Array.isArray(payload.testimonials) ? payload.testimonials : [],
      isActive: payload.isActive ?? true,
    });

    return res.status(201).json({
      message: "Testimonials section created successfully.",
      data: created,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create testimonials section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllTestimonialsSections = async (_req: Request, res: Response) => {
  try {
    const sections = await TestimonialsSectionModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: sections });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch testimonials sections.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getActiveTestimonialsSection = async (_req: Request, res: Response) => {
  try {
    const active = await TestimonialsSectionModel.findOne({ isActive: true }).sort({
      updatedAt: -1,
    });

    if (!active) {
      return res
        .status(404)
        .json({ message: "No active testimonials section found." });
    }

    return res.status(200).json({ data: active });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch active testimonials section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getTestimonialsSectionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid testimonials section ID." });
    }

    const section = await TestimonialsSectionModel.findById(id);

    if (!section) {
      return res.status(404).json({ message: "Testimonials section not found." });
    }

    return res.status(200).json({ data: section });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch testimonials section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateTestimonialsSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload: TestimonialsPayload = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid testimonials section ID." });
    }

    if (payload.heading !== undefined && !payload.heading.trim()) {
      return res.status(400).json({ message: "Heading cannot be empty." });
    }

    const updateData: TestimonialsPayload = {
      ...payload,
      heading: payload.heading?.trim(),
    };

    const updated = await TestimonialsSectionModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      return res.status(404).json({ message: "Testimonials section not found." });
    }

    return res.status(200).json({
      message: "Testimonials section updated successfully.",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update testimonials section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteTestimonialsSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid testimonials section ID." });
    }

    const deleted = await TestimonialsSectionModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Testimonials section not found." });
    }

    return res.status(200).json({
      message: "Testimonials section deleted successfully.",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete testimonials section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
