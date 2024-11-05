import { Response } from "express";

export const apiResponse = (
  res: Response,
  success: boolean,
  message: string,
  data: object | null = null,
  statusCode: number = 200
) => {
  res.status(statusCode).json({ success, message, data });
};
