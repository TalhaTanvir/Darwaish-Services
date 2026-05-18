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
import { validate } from "../middlewares/validate.middleware";
import { objectIdParamSchema } from "../validations/common.validation";
import {
  createBookingBodySchema,
  updateBookingBodySchema,
} from "../validations/booking.validation";

const bookingRouter = Router();

bookingRouter.post("/", validate({ body: createBookingBodySchema }), createBooking);
bookingRouter.get("/", protectAdmin, getAllBookings);
bookingRouter.get("/active", getActiveBookings);
bookingRouter.get("/:id", protectAdmin, validate({ params: objectIdParamSchema }), getBookingById);
bookingRouter.put(
  "/:id",
  protectAdmin,
  validate({ params: objectIdParamSchema, body: updateBookingBodySchema }),
  updateBooking
);
bookingRouter.delete("/:id", protectAdmin, validate({ params: objectIdParamSchema }), deleteBooking);

export default bookingRouter;

