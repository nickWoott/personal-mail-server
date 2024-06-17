
import dotenv from "dotenv";
import app from "./server.js";

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

const { PORT } = process.env;

app.listen(PORT, () => console.log("server running"));
