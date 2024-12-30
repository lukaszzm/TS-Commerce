import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import api from "@/api";

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use(api);

  return app;
};
