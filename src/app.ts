import express from "express";
import "dotenv/config";
import { moviedb } from "./config/db";
import movieRouter from "./routes/movie";

const app = express();

moviedb();

app.use(`/moies`, movieRouter);

app.listen(5000, () => {
  console.log("we running in port 5000 now ");
});