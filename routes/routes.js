import express, { Router } from "express";
import { healthcheck } from "../controllers/healthcheck";
import { sendMail } from "../controllers/sendMail";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.get("/healthcheck", healthcheck);
router.post("/sendMail", authenticateToken, sendMail);

export default router;
