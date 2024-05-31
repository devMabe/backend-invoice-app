import { FastifyInstance } from "fastify";
import UserController from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { fastifyAwilixPlugin, diContainer } from "@fastify/awilix";
import { asClass, Lifetime } from "awilix";

declare module "@fastify/awilix" {
  interface Cradle {
    userService: UserService;
    userController: UserController;
  }
}

export const initAwilix = async (app: FastifyInstance) => {
  await app.register(fastifyAwilixPlugin);
};

export const initContainer = () => {
  diContainer.register({
    userService: asClass(UserService, {
      lifetime: Lifetime.SINGLETON,
    }),
    userController: asClass(UserController, {
      lifetime: Lifetime.SINGLETON,
    }),
  });
};
