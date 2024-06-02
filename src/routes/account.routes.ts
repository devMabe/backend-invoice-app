import { FastifyInstance, FastifyRequest } from "fastify";
import { diContainer } from "@fastify/awilix";
import AccountSchema from "../schemas/account.schema";

export default async (instance: FastifyInstance) => {
  const accountController = diContainer.resolve("accountController");

  instance.setErrorHandler((error, _request, reply) => {
    reply.status(400).send({
      error_code: "invalid_schema",
      message: error.message,
    });
  });

  instance.route({
    method: "POST",
    url: "/accounts",
    schema: AccountSchema.schema,
    handler: async (request, reply) =>
      await accountController.create(request as any, reply),
  });

  instance.route({
    method: "PUT",
    url: "/accounts/:id",
    handler: async (request, reply) =>
      await accountController.update(request as any, reply),
  });

  instance.route({
    method: "GET",
    url: "/accounts/get-by-user-id/:userId",
    handler: async (
      request: FastifyRequest<{ Params: { userId: number } }>,
      reply
    ) => await accountController.getAll(request, reply),
  });

  instance.route({
    method: "GET",
    url: "/accounts/:id",
    handler: async (
      request: FastifyRequest<{ Params: { id: number } }>,
      reply
    ) => await accountController.get(request, reply),
  });

  instance.route({
    method: "DELETE",
    url: "/accounts/:id",
    handler: async (
      request: FastifyRequest<{ Params: { id: number } }>,
      reply
    ) => await accountController.delete(request, reply),
  });
};
