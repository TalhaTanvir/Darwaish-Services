import express, { Request, Response } from "express";
import bookingRouter from "./src/routes/Booking.routes";
import heroRouter from "./src/routes/Hero.routes";
import servicesRouter from "./src/routes/Services.routes";
import faqRouter from "./src/routes/FAQ.routes";
import testimonialsRouter from "./src/routes/Testimonials.routes";

const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    message: "Server is running",
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/hero", heroRouter);
app.use("/api/booking", bookingRouter);
app.use("/api/services", servicesRouter);
app.use("/api/faq", faqRouter);
app.use("/api/testimonials", testimonialsRouter);

export default app;
