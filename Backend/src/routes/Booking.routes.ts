import { Router } from "express";
import {
  createBooking,
  deleteBooking,
  getActiveBookings,
  getAllBookings,
  getBookingById,
  updateBooking,
} from "../controllers/Booking.controller";

const bookingRouter = Router();

bookingRouter.post("/", createBooking);
bookingRouter.get("/", getAllBookings);
bookingRouter.get("/active", getActiveBookings);
bookingRouter.get("/:id", getBookingById);
bookingRouter.put("/:id", updateBooking);
bookingRouter.delete("/:id", deleteBooking);

export default bookingRouter;
