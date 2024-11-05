import { FastifyInstance, RouteHandlerMethod } from "fastify";
import { getAllProducts } from "../controller/product.controller";

async function productRouter(server: FastifyInstance) {
  server.get(
    "/",
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
    getAllProducts as RouteHandlerMethod
  );
}

// productRouter.get("/", getAllProducts);
// productRouter.post("/", createProduct);
// productRouter.put("/", updateProduct);
// productRouter.delete("/", deleteProduct);

export default productRouter;
