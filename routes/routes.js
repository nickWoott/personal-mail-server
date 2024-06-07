import express, { Router } from "express";
import { healthcheck } from "../controllers/healthcheck";
import { sendMail } from "../controllers/sendMail";

const router = Router();

router.get("/healthcheck", healthcheck);
router.post("/sendMail", sendMail);

export default router;
