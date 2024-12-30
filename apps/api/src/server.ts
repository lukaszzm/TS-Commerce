import express, { type Express } from "express";
import morgan from "morgan";
import cors, { CorsOptions } from "cors";
import api from "@/api";

const corsOptions: CorsOptions = {
  origin: process.env.STOREFRONT_URL,
  optionsSuccessStatus: 200,
};

export const createServer = (): Express => {
  const app = express();
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors(corsOptions))
    .use(api);

  return app;
};
