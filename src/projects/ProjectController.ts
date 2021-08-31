import { NextFunction, Request, Response } from "express";
import ProjectService from "./ProjectService";
import ErrorResponse from "../errors/ErrorResponse";

const list = (_: Request, res: Response, next: NextFunction) => {
  ProjectService.list()
    .then((data) => res.json({ data }))
    .catch((e) => next(ErrorResponse.createErrorResponseFromError(e)));
};

export default {
  list,
};
