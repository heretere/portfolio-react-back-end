import notAllowed from "./errors/NotAllowed";
import errorHandler from "./errors/ErrorHandler";
import express from "express";
import projectRouter from "./projects/ProjectRouter";
import skillRouter from "./skills/SkillRouter";
import { config } from "dotenv";
import cors from "cors";

config();

const app = express();
const { CORS_ORIGIN = "*" } = process.env;

app.use(cors({ origin: CORS_ORIGIN }));
app.use(express.json());

app.use("/projects", projectRouter);
app.use("/skills", skillRouter);

app.use(notAllowed);
app.use(errorHandler);

export default app;
