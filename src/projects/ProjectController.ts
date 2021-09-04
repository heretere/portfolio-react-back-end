import { NextFunction, Request, Response } from "express";
import ProjectService from "./ProjectService";
import ErrorResponse from "../errors/ErrorResponse";
import itemExists from "../middleware/ItemExists";
import ValidateProperties, { Property } from "../middleware/ValidateProperties";

const validProperties = [
  new Property("name", (name) => name),
  new Property("description", (description) => description),
  new Property("url", (url) => url),
  new Property("icon", (icon) => icon),
  new Property("start_date", (date) =>
    new Date(Date.parse(date)).toISOString().substring(0, 10)
  ),
  new Property("end_date", (date) =>
    new Date(Date.parse(date)).toISOString().substring(0, 10)
  ),
];

const projectExists = itemExists(ProjectService.read, "projectId", "Project");

const list = (_: Request, res: Response, next: NextFunction) =>
  ProjectService.list()
    .then((data) => res.json({ data }))
    .catch((e) => next(ErrorResponse.createErrorResponseFromError(e)));

const read = (_: Request, res: Response) =>
  res.json({ data: res.locals.projectId });

const create = (_: Request, res: Response, next: NextFunction) => {
  ProjectService.create(res.locals.createdProject)
    .then((data) => res.status(201).json({ data }))
    .catch((e) => next(ErrorResponse.createErrorResponseFromError(e)));
};

const update = (_: Request, res: Response, next: NextFunction) => {
  ProjectService.update(res.locals.updatedProject)
    .then((data) => res.json({ data }))
    .catch((e) => next(ErrorResponse.createErrorResponseFromError(e)));
};

const destroy = (_: Request, res: Response, next: NextFunction) => {
  ProjectService.delete(Number(res.locals.projectId.id))
    .then((data) => res.json({ data }))
    .catch((e) => next(ErrorResponse.createErrorResponseFromError(e)));
};

export default {
  list,
  read: [projectExists, read],
  create: [
    ValidateProperties(validProperties, "createdProject", false),
    create,
  ],
  update: [
    projectExists,
    ValidateProperties(validProperties, "updatedProject", true),
    update,
  ],
  delete: [projectExists, destroy],
  projectExists,
};
