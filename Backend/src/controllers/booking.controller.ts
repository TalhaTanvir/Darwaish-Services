import { Request, Response } from "express";
import mongoose from "mongoose";
import BookingModel, { BookingStatus } from "../models/booking.model";
import AppError from "../errors/AppError";
import { catchAsync } from "../utils/catchAsync";

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

export const createBooking = catchAsync(async (req: Request, res: Response) => {
  const payload: BookingPayload = req.body;

  if (!payload.name || !payload.name.trim()) {
    throw new AppError("Name is required.", 400);
  }

  if (!payload.email || !payload.email.trim()) {
    throw new AppError("Email is required.", 400);
  }

  if (!payload.phone || !payload.phone.trim()) {
    throw new AppError("Phone is required.", 400);
  }

  if (!payload.service || !payload.service.trim()) {
    throw new AppError("Service is required.", 400);
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
    success: true,
    message: "Booking created successfully.",
    data: created,
  });
});

export const getAllBookings = catchAsync(async (_req: Request, res: Response) => {
  const bookings = await BookingModel.find().sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: bookings,
  });
});

export const getActiveBookings = catchAsync(async (_req: Request, res: Response) => {
  const bookings = await BookingModel.find({ isActive: true }).sort({ createdAt: -1 });

  return res.status(200).json({
    success: true,
    data: bookings,
  });
});

export const getBookingById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw new AppError("Invalid booking ID.", 400);
  }

  const booking = await BookingModel.findById(id);

  if (!booking) {
    throw new AppError("Booking not found.", 404);
  }

  return res.status(200).json({
    success: true,
    data: booking,
  });
});

export const updateBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload: BookingPayload = req.body;

  if (!mongoose.isValidObjectId(id)) {
    throw new AppError("Invalid booking ID.", 400);
  }

  if (payload.name !== undefined && !payload.name.trim()) {
    throw new AppError("Name cannot be empty.", 400);
  }

  if (payload.email !== undefined && !payload.email.trim()) {
    throw new AppError("Email cannot be empty.", 400);
  }

  if (payload.phone !== undefined && !payload.phone.trim()) {
    throw new AppError("Phone cannot be empty.", 400);
  }

  if (payload.service !== undefined && !payload.service.trim()) {
    throw new AppError("Service cannot be empty.", 400);
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
    throw new AppError("Booking not found.", 404);
  }

  return res.status(200).json({
    success: true,
    message: "Booking updated successfully.",
    data: updated,
  });
});

export const deleteBooking = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    throw new AppError("Invalid booking ID.", 400);
  }

  const deleted = await BookingModel.findByIdAndDelete(id);

  if (!deleted) {
    throw new AppError("Booking not found.", 404);
  }

  return res.status(200).json({
    success: true,
    message: "Booking deleted successfully.",
    data: deleted,
  });
});
