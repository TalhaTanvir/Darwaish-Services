import { Router } from "express";
import {
  createBooking,
  deleteBooking,
  getActiveBookings,
  getAllBookings,
  getBookingById,
  updateBooking,
} from "../controllers/booking.controller";
import { protectAdmin } from "../middlewares/auth.middleware";

const bookingRouter = Router();

bookingRouter.post("/", createBooking);
bookingRouter.get("/", protectAdmin, getAllBookings);
bookingRouter.get("/active", getActiveBookings);
bookingRouter.get("/:id", protectAdmin, getBookingById);
bookingRouter.put("/:id", protectAdmin, updateBooking);
bookingRouter.delete("/:id", protectAdmin, deleteBooking);

export default bookingRouter;

