import express, { Request, Response } from "express";
import heroRouter from "./src/routes/Hero.routes";

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

export default app;
