import { FastifyInstance } from "fastify";
import UserSchema from "../schemas/user.schema";
import { diContainer } from "@fastify/awilix";

export default async (instance: FastifyInstance) => {
  const userController = diContainer.resolve("userController");

  instance.setErrorHandler((error, _request, reply) => {
    reply.status(400).send({
      error_code: "invalid_schema",
      message: error.message,
    });
  });

  instance.route({
    method: "POST",
    url: "/users",
    schema: UserSchema.schema,
    handler: async (request, reply) =>
      await userController.create(request as any, reply),
  });
};
