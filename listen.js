import { sendMail } from "./controllers/sendMail.js";
import express from "express";
import { authenticateToken } from "./middleware/auth.js";
import dotenv from "dotenv";
import { healthcheck } from "./controllers/healthcheck.js";
import router from "./routes/routes.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const { PORT } = process.env;

const app = express();

app.use(express.json());

app.get("/healthcheck", healthcheck);
app.post("/sendMail", authenticateToken, sendMail);

app.listen(PORT, () => console.log("server running"));
