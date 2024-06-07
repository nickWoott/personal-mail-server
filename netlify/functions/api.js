import express, { Router } from "express";
import serverless from "serverless-http";
import router from "../../routes/routes";

const api = express();

api.use("/api/", router);

export const handler = serverless(api);
