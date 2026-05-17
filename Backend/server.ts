import dotenv from "dotenv";
import app from "./app";
import { initializeDatabase } from "./src/config/database";

dotenv.config();

const port = Number(process.env.PORT) || 3000;

const startServer = async () => {
  await initializeDatabase();

  app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
  });
};

startServer();
