import { FastifyInstance } from "fastify";
import AuthSchema from "../schemas/auth.schema";
import { diContainer } from "@fastify/awilix";

export default async (instance: FastifyInstance) => {
  const authController = diContainer.resolve("authController");

  instance.setErrorHandler((error, _request, reply) => {
    reply.status(400).send({
      error_code: "invalid_schema",
      message: error.message,
    });
  });

  instance.route({
    method: "POST",
    url: "/auth/login",
    schema: AuthSchema.schema,
    handler: async (request, reply) =>
      await authController.login(request as any, reply),
  });
};
