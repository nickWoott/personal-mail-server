import express, { Router } from "express";
import router from "./routes/routes";

const app = express();

app.use("/api/", router);

export default app;
