import express, { Router } from "express";
import { healthcheck } from "../controllers/healthcheck.js";
import { sendMail } from "../controllers/sendMail.js";
import { authenticateToken } from "../middleware/auth.js";

const router = Router();

router.get("/healthcheck", healthcheck);
router.post("/sendMail", authenticateToken, sendMail);


export default router;
