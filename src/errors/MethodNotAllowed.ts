import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./ErrorResponse";

const methodNotAllowed = (req: Request, _: Response, next: NextFunction) => {
  return next(
    new ErrorResponse(405, `${req.method} not allowed on ${req.originalUrl}`)
  );
};

export default methodNotAllowed;
