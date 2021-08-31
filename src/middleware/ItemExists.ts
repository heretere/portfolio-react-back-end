import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../errors/ErrorResponse";

const itemExists =
  (
    read: (id: number, optionalId?: number) => Promise<any>,
    paramId: string,
    paramName: string,
    optionalName?: string
  ) =>
  (req: Request, res: Response, next: NextFunction) => {
    read(
      Number(req.params[paramId]),
      optionalName ? Number(req.params[optionalName]) : undefined
    )
      .then((item) => {
        if (!item) {
          return next(
            new ErrorResponse(
              404,
              `${paramName} with id ${req.params[paramId]} does not exist.`
            )
          );
        }

        res.locals[paramId] = item;
        next();
      })
      .catch((e) => next(ErrorResponse.createErrorResponseFromError(e)));
  };

export default itemExists;
