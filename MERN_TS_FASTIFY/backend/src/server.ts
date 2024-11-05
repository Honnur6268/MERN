import fastify from "fastify";
import "dotenv/config";
import { connectDb } from "./db/db";
import productRouter from "./routes/product.route";
import config from "./config/config";
import gradient from "gradient-string";
import { apiSchemas } from "./validators/apiSchemas";
import userApiRoutes from "./routes/userRoutes";

export const server = fastify({
  logger: {
    redact: ["req.headers.authorization"],
    level: "info",
  },
});

const PORT = parseInt(process.env.PORT || "8080");

server.get("/health-check", (reqest, reply) => {
  reply.send("Hello, Fastify");
});

(async () => {
  for (const schema of apiSchemas) {
    server.addSchema(schema);
  }
  try {
    await connectDb();

    server.register(productRouter, { prefix: "/api/products" });
    server.register(userApiRoutes, { prefix: "/api/user" });

    server.listen({ port: config.PORT }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(gradient("blue", "blue")(`server listening at ${address}`));
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1);
  }
})();
