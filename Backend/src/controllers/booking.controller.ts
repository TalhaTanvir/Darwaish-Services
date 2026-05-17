import { Request, Response } from "express";
import mongoose from "mongoose";
import BookingModel, { BookingStatus } from "../models/booking.model";

type BookingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  preferredDate?: string | Date;
  message?: string;
  status?: BookingStatus;
  isActive?: boolean;
};

export const createBooking = async (req: Request, res: Response) => {
  try {
    const payload: BookingPayload = req.body;

    if (!payload.name || !payload.name.trim()) {
      return res.status(400).json({ message: "Name is required." });
    }

    if (!payload.email || !payload.email.trim()) {
      return res.status(400).json({ message: "Email is required." });
    }

    if (!payload.phone || !payload.phone.trim()) {
      return res.status(400).json({ message: "Phone is required." });
    }

    if (!payload.service || !payload.service.trim()) {
      return res.status(400).json({ message: "Service is required." });
    }

    const created = await BookingModel.create({
      name: payload.name.trim(),
      email: payload.email.trim().toLowerCase(),
      phone: payload.phone.trim(),
      service: payload.service.trim(),
      preferredDate: payload.preferredDate,
      message: payload.message ?? "",
      status: payload.status ?? "pending",
      isActive: payload.isActive ?? true,
    });

    return res.status(201).json({
      message: "Booking created successfully.",
      data: created,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create booking.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getAllBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await BookingModel.find().sort({ createdAt: -1 });
    return res.status(200).json({ data: bookings });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch bookings.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getActiveBookings = async (_req: Request, res: Response) => {
  try {
    const bookings = await BookingModel.find({ isActive: true }).sort({
      createdAt: -1,
    });

    return res.status(200).json({ data: bookings });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch active bookings.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const getBookingById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid booking ID." });
    }

    const booking = await BookingModel.findById(id);

    if (!booking) {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(200).json({ data: booking });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch booking.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const updateBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const payload: BookingPayload = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid booking ID." });
    }

    if (payload.name !== undefined && !payload.name.trim()) {
      return res.status(400).json({ message: "Name cannot be empty." });
    }

    if (payload.email !== undefined && !payload.email.trim()) {
      return res.status(400).json({ message: "Email cannot be empty." });
    }

    if (payload.phone !== undefined && !payload.phone.trim()) {
      return res.status(400).json({ message: "Phone cannot be empty." });
    }

    if (payload.service !== undefined && !payload.service.trim()) {
      return res.status(400).json({ message: "Service cannot be empty." });
    }

    const updateData: BookingPayload = {
      ...payload,
      name: payload.name?.trim(),
      email: payload.email?.trim().toLowerCase(),
      phone: payload.phone?.trim(),
      service: payload.service?.trim(),
      message: payload.message?.trim(),
    };

    const updated = await BookingModel.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(200).json({
      message: "Booking updated successfully.",
      data: updated,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to update booking.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

export const deleteBooking = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid booking ID." });
    }

    const deleted = await BookingModel.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Booking not found." });
    }

    return res.status(200).json({
      message: "Booking deleted successfully.",
      data: deleted,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to delete booking.",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};
