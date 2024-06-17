import express, { Router } from "express";
import serverless from "serverless-http";
import router from "../../routes/routes";
import app from "../../server";

export const handler = serverless(app);


