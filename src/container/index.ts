import { FastifyInstance } from "fastify";
import UserController from "../controllers/user.controller";
import { UserService } from "../services/user.service";
import { fastifyAwilixPlugin, diContainer } from "@fastify/awilix";
import { asClass, Lifetime } from "awilix";
import { AuthService } from "../services/auth.service";
import { AuthController } from "../controllers/auth.controller";
import { AccountService } from "../services/account.service";
import { AccountController } from "../controllers/account.controller";

declare module "@fastify/awilix" {
  interface Cradle {
    userService: UserService;
    authService: AuthService;
    accountService: AccountService;
    userController: UserController;
    authController: AuthController;
    accountController: AccountController;
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
    authService: asClass(AuthService, {
      lifetime: Lifetime.SINGLETON,
    }),
    accountService: asClass(AccountService, {
      lifetime: Lifetime.SINGLETON,
    }),
    userController: asClass(UserController, {
      lifetime: Lifetime.SINGLETON,
    }),
    authController: asClass(AuthController, {
      lifetime: Lifetime.SINGLETON,
    }),
    accountController: asClass(AccountController, {
      lifetime: Lifetime.SINGLETON,
    }),
  });
};
