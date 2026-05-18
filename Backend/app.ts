import express, { Request, Response } from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import bookingRouter from "./src/routes/booking.routes";
import heroRouter from "./src/routes/hero.routes";
import servicesRouter from "./src/routes/services.routes";
import faqRouter from "./src/routes/faq.routes";
import testimonialsRouter from "./src/routes/testimonials.routes";
import authRouter from "./src/routes/auth.routes";
import mediaRouter from "./src/routes/media.routes";
import { globalErrorHandler } from "./src/middlewares/error.middleware";
import { notFoundHandler } from "./src/middlewares/notFound.middleware";

const app = express();
const corsOrigin = process.env.CORS_ORIGIN || "http://localhost:3000";
const allowedOrigins = corsOrigin.split(",").map((origin) => origin.trim());

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 200,
  standardHeaders: true,
  legacyHeaders: false,
  message: { message: "Too many requests, please try again later." },
});

app.use(helmet());
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(apiLimiter);
app.use(express.json({ limit: "1mb" }));
app.use(cookieParser());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
  });
});

app.get("/health", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
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
app.use("/api/media", mediaRouter);

app.use(notFoundHandler);
app.use(globalErrorHandler);

export default app;
