import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../errors/ErrorResponse";
import SkillService from "./SkillService";
import itemExists from "../middleware/ItemExists";

const list = (req: Request, res: Response, next: NextFunction) => {
  return SkillService.list(Number(req.params.projectId))
    .then((data) => res.json({ data }))
    .catch((e) => next(ErrorResponse.createErrorResponseFromError(e)));
};

const read = (_: Request, res: Response) => {
  return res.json({ data: res.locals.skillId });
};

export default {
  list,
  read: [itemExists(SkillService.read, "skillId", "Skill", "projectId"), read],
};
