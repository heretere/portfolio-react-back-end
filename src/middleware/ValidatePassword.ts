import { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import ErrorResponse from "../errors/ErrorResponse";

config();

const { ADMIN_PASSWORD = "admin" } = process.env;

const validatePassword = (req: Request, _: Response, next: NextFunction) => {
  if (req.body.password !== ADMIN_PASSWORD) {
    return next(
      new ErrorResponse(
        403,
        `Access denied on ${req.originalUrl} for method ${req.method}`
      )
    );
  }

  return next();
};

export default validatePassword;
