import express from "express";
import controller from "./ProjectController";
import methodNotAllowed from "../errors/MethodNotAllowed";

const projectRouter = express.Router();

projectRouter.route("/").get(controller.list).all(methodNotAllowed);
projectRouter.route("/:projectId([0-9]+)").all(methodNotAllowed);

export default projectRouter;
