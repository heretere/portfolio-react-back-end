export default class ErrorResponse {
  public readonly status: number;
  public readonly message: string;
  public readonly stack: string | undefined;

  constructor(status: number, message: string, stack?: string | undefined) {
    this.status = status;
    this.message = message;
    this.stack = stack;
  }

  static createErrorResponseFromError(error: Error) {
    return new ErrorResponse(500, error.message, error.stack);
  }
}
