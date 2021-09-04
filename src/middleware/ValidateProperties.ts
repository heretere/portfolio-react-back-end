import { NextFunction, Request, Response } from "express";
import ErrorResponse from "../errors/ErrorResponse";

export class Property {
  constructor(
    public readonly key: string,
    public readonly conversion: (value: any) => any
  ) {}
}

const validateProperties =
  (properties: Property[], objectName: string, allowMissing: boolean = true) =>
  (req: Request, res: Response, next: NextFunction) => {
    res.locals[objectName] = {};

    const invalidProperties = Object.entries(req.body.data).filter(([k, v]) => {
      const property = properties.find((prop) => prop.key === k);

      if (!property) return !allowMissing;

      const conversion = property.conversion(v);

      if (conversion === undefined) return true;

      res.locals[objectName][k] = conversion;
    });

    if (invalidProperties.length) {
      return next(
        new ErrorResponse(
          400,
          `Invalid properties: ${invalidProperties.join(", ")}`
        )
      );
    }

    return next();
  };

export default validateProperties;
