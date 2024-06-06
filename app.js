import { sendMail } from "./controllers/sendMail.js";
import express from "express";
import { authenticateToken } from "./middleware/auth.js";

const app = express();

app.use(express.json());

app.post("/sendMail", authenticateToken, sendMail);

app.listen(9090, () => console.log("server running"));
