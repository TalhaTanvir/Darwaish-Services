import { Request, Response } from "express";
import mongoose from "mongoose";
import HeroSectionModel, { IHeroImage } from "../models/hero.model";

type HeroPayload = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  images?: IHeroImage[];
  isActive?: boolean;
};

export const createHeroSection = async (req: Request, res: Response) => {
  try {
    const payload: HeroPayload = req.body;

    if (!payload.title || !payload.title.trim()) {
      return res.status(400).json({ message: "Title is required." });
    }

    const created = await HeroSectionModel.create({
      title: payload.title.trim(),
      subtitle: payload.subtitle ?? "",
      description: payload.description ?? "",
      buttonText: payload.buttonText ?? "",
      buttonLink: payload.buttonLink ?? "",
      images: Array.isArray(payload.images) ? payload.images : [],
      isActive: payload.isActive ?? true,
    });

    return res.status(201).json({
      message: "Hero section created successfully.",
      data: created,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create hero section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllHeroSections = async (_req: Request, res: Response) => {
  try {
    const sections = await HeroSectionModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: sections });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch hero sections.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getActiveHeroSection = async (_req: Request, res: Response) => {
  try {
    const active = await HeroSectionModel.findOne({ isActive: true }).sort({
      updatedAt: -1,
    });

    if (!active) {
      return res.status(404).json({ message: "No active hero section found." });
    }

    return res.status(200).json({ data: active });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch active hero section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getHeroSectionById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid hero section ID." });
    }

    const section = await HeroSectionModel.findById(id);

    if (!section) {
      return res.status(404).json({ message: "Hero section not found." });
    }

    return res.status(200).json({ data: section });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch hero section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateHeroSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload: HeroPayload = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid hero section ID." });
    }

    if (payload.title !== undefined && !payload.title.trim()) {
      return res.status(400).json({ message: "Title cannot be empty." });
    }

    const updateData: HeroPayload = {
      ...payload,
      title: payload.title?.trim(),
    };

    const updated = await HeroSectionModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Hero section not found." });
    }

    return res.status(200).json({
      message: "Hero section updated successfully.",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update hero section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteHeroSection = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid hero section ID." });
    }

    const deleted = await HeroSectionModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Hero section not found." });
    }

    return res.status(200).json({
      message: "Hero section deleted successfully.",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete hero section.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
