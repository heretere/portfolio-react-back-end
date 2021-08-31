import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./ErrorResponse";

const notAllowed = (req: Request, _: Response, next: NextFunction) => {
  return next(
    new ErrorResponse(404, `${req.method} not found on ${req.originalUrl}`)
  );
};

export default notAllowed;
