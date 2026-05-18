import { z } from "zod";

const bookingStatusSchema = z.enum([
  "pending",
  "confirmed",
  "cancelled",
  "completed",
]);

const createBookingBodySchema = z.object({
  name: z.string().trim().min(1, "Name is required."),
  email: z.string().trim().email("Invalid email format."),
  phone: z.string().trim().min(1, "Phone is required."),
  service: z.string().trim().min(1, "Service is required."),
  preferredDate: z.coerce.date().optional(),
  message: z.string().optional(),
  status: bookingStatusSchema.optional(),
  isActive: z.boolean().optional(),
});

const updateBookingBodySchema = createBookingBodySchema
  .partial()
  .refine((payload) => Object.keys(payload).length > 0, {
    message: "At least one field is required to update booking.",
  });

export { bookingStatusSchema, createBookingBodySchema, updateBookingBodySchema };
