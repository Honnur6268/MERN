import { isAlpha, phoneRegex } from "@/utils/regexUtils";
import { buildJsonSchemas } from "fastify-zod";
import z from "zod";

const createUserApiSchema = z.object({
  userId: z.string().optional(),
  firstName: z
    .string()
    .regex(isAlpha, "first name should be alphabets")
    .min(1, {
      message: "firstName should be of  at least 1 character or more",
    })
    .max(36, {
      message: "firstName should  not be greater than 36 characters",
    }),
  lastName: z
    .string()
    .regex(isAlpha, "last name should be alphabets")
    .min(1, {
      message: "last Name must have at least 1 character or more",
    })
    .max(50, {
      message: "last Name should be less than 50 characters",
    }),
  address: z.string(),
  email: z.string().regex(new RegExp("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"), {
    message: "please provide a valid email",
  }),
  mobileNumber: z
    .string()
    .regex(phoneRegex, "Invalid Number")
    .min(10, {
      message: "Mobile number should be 10 characters ex 9876543210",
    })
    .max(10, {
      message: "Mobile number should be 10 characters ex 9876543210",
    }),
  country: z.string(),
  status: z.boolean().optional(),
});

export const { schemas: apiSchemas, $ref } = buildJsonSchemas({
  createUserApiSchema,
});
