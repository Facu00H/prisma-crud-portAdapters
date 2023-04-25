import express, { urlencoded, json } from "express";
import { RegisterRoutes } from "../dist/routes";

export const app = express();

// Use body parser to read sent json payloads
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());

RegisterRoutes(app);