interface StatusCodeObject {
  code: number;
  name: string;
}

interface SuccessResponse {
  timestamp: Date;
  statusCode: number;
  status: string;
  message: string;
  success: boolean;
  data: any;
}

interface ErrorResponse {
  timestamp: Date;
  statusCode: number;
  status: string;
  message: string;
  success: boolean;
}

export const createSuccessResponse = (
  statusCodeObject: StatusCodeObject,
  message?: string,
  data?: any
): SuccessResponse => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject.code,
    status: statusCodeObject.name,
    message: message || "no message provided",
    success: true,
    data: data || {},
  };
};

export const createErrorResponse = (
  statusCodeObject: StatusCodeObject,
  message?: string
): ErrorResponse => {
  return {
    timestamp: new Date(),
    statusCode: statusCodeObject.code || 500,
    status: statusCodeObject.name || "Internal Server Error",
    message: message || "Error",
    success: false,
  };
};
