import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import bookingRouter from "./src/routes/booking.routes";
import heroRouter from "./src/routes/hero.routes";
import servicesRouter from "./src/routes/services.routes";
import faqRouter from "./src/routes/faq.routes";
import testimonialsRouter from "./src/routes/testimonials.routes";
import authRouter from "./src/routes/auth.routes";

const app = express();

app.use(express.json());
app.use(cookieParser());

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
app.use("/api/auth", authRouter);

export default app;
