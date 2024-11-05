import {
  createUserServiceHandler,
  getAllUserServiceHandler,
} from "@/controller/user.controller";
import { $ref } from "@/validators/apiSchemas";
import { FastifyInstance, RouteHandlerMethod } from "fastify";
import { string } from "zod";

async function userApiRoutes(server: FastifyInstance) {
  server.post(
    "/create",
    {
      schema: {
        body: $ref("createUserApiSchema"),
        response: {
          400: {
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    createUserServiceHandler as RouteHandlerMethod
  );

  server.get(
    "/list",
    {
      schema: {
        response: {
          400: {
            type: "object",
            properties: {
              message: { type: "string" },
            },
          },
        },
      },
    },
    getAllUserServiceHandler as RouteHandlerMethod
  );
}

export default userApiRoutes;
