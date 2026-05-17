import { Schema, model, models } from "mongoose";

export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

export interface IBooking {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate?: Date;
  message?: string;
  status: BookingStatus;
  isActive: boolean;
}

const BookingSchema = new Schema<IBooking>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    service: {
      type: String,
      required: true,
      trim: true,
    },
    preferredDate: {
      type: Date,
      required: false,
    },
    message: {
      type: String,
      trim: true,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled", "completed"],
      default: "pending",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const BookingModel = models.Booking || model<IBooking>("Booking", BookingSchema);

export default BookingModel;
