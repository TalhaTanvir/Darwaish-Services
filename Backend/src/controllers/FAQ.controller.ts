import { Request, Response } from "express";
import mongoose from "mongoose";
import FAQSectionModel, { IFAQItem } from "../models/FAQ.model";

type FAQPayload = {
  heading?: string;
  subheading?: string;
  items?: IFAQItem[];
  isActive?: boolean;
};

export const createFAQSection = async (req: Request, res: Response) => {
  try {
    const payload: FAQPayload = req.body;

    if (!payload.heading || !payload.heading.trim()) {
      return res.status(400).json({ message: "Heading is required." });
    }

    const created = await FAQSectionModel.create({
      heading: payload.heading.trim(),
      subheading: payload.subheading ?? "",
      items: Array.isArray(payload.items) ? payload.items : [],
      isActive: payload.isActive ?? true,
    });

    return res.status(201).json({
      message: "FAQ section created successfully.",
      data: created,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create FAQ section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllFAQSections = async (_req: Request, res: Response) => {
  try {
    const sections = await FAQSectionModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: sections });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch FAQ sections.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getActiveFAQSection = async (_req: Request, res: Response) => {
  try {
    const active = await FAQSectionModel.findOne({ isActive: true }).sort({
      updatedAt: -1,
    });

    if (!active) {
      return res.status(404).json({ message: "No active FAQ section found." });
    }

    return res.status(200).json({ data: active });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch active FAQ section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getFAQSectionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid FAQ section ID." });
    }

    const section = await FAQSectionModel.findById(id);

    if (!section) {
      return res.status(404).json({ message: "FAQ section not found." });
    }

    return res.status(200).json({ data: section });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch FAQ section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateFAQSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload: FAQPayload = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid FAQ section ID." });
    }

    if (payload.heading !== undefined && !payload.heading.trim()) {
      return res.status(400).json({ message: "Heading cannot be empty." });
    }

    const updateData: FAQPayload = {
      ...payload,
      heading: payload.heading?.trim(),
    };

    const updated = await FAQSectionModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "FAQ section not found." });
    }

    return res.status(200).json({
      message: "FAQ section updated successfully.",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update FAQ section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteFAQSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid FAQ section ID." });
    }

    const deleted = await FAQSectionModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "FAQ section not found." });
    }

    return res.status(200).json({
      message: "FAQ section deleted successfully.",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete FAQ section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
