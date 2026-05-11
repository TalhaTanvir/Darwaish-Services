import express, { Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3000;

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

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
