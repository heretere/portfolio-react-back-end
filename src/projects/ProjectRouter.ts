import express from "express";
import ProjectController from "./ProjectController";
import methodNotAllowed from "../errors/MethodNotAllowed";
import SkillRouter from "../skills/SkillRouter";

const projectRouter = express.Router();

projectRouter.use(
  "/:projectId([0-9]+)/skills",
  ProjectController.projectExists,
  SkillRouter
);

projectRouter
  .route("/:projectId([0-9]+)")
  .get(ProjectController.read)
  .all(methodNotAllowed);

projectRouter
  .route("/")
  .get(ProjectController.list)
  .post(ProjectController.create)
  .all(methodNotAllowed);

export default projectRouter;
