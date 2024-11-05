export const apiResponse = (
  res,
  success,
  message,
  data = null,
  statusCode = 200
) => {
  res.status(statusCode).json({ success, message, data });
};
