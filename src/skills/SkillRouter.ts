import express from "express";
import methodNotAllowed from "../errors/MethodNotAllowed";
import SkillController from "./SkillController";

const skillRouter = express.Router({ mergeParams: true });

skillRouter.route("/").get(SkillController.list).all(methodNotAllowed);
skillRouter
  .route("/:skillId([0-9]+)")
  .get(SkillController.read)
  .all(methodNotAllowed);

export default skillRouter;
