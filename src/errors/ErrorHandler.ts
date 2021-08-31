import { NextFunction, Request, Response } from "express";
import ErrorResponse from "./ErrorResponse";

const errorHandler = (
  error: ErrorResponse,
  _0: Request,
  res: Response,
  _1: NextFunction
) => {
  const { status = 500, message = "An error occurred" } = error;

  return res.status(status).json({ error: message });
};

export default errorHandler;
