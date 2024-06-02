"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initContainer = exports.initAwilix = void 0;
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const user_service_1 = require("../services/user.service");
const awilix_1 = require("@fastify/awilix");
const awilix_2 = require("awilix");
const auth_service_1 = require("../services/auth.service");
const auth_controller_1 = require("../controllers/auth.controller");
const account_service_1 = require("../services/account.service");
const account_controller_1 = require("../controllers/account.controller");
const initAwilix = async (app) => {
    await app.register(awilix_1.fastifyAwilixPlugin);
};
exports.initAwilix = initAwilix;
const initContainer = () => {
    awilix_1.diContainer.register({
        userService: (0, awilix_2.asClass)(user_service_1.UserService, {
            lifetime: awilix_2.Lifetime.SINGLETON,
        }),
        authService: (0, awilix_2.asClass)(auth_service_1.AuthService, {
            lifetime: awilix_2.Lifetime.SINGLETON,
        }),
        accountService: (0, awilix_2.asClass)(account_service_1.AccountService, {
            lifetime: awilix_2.Lifetime.SINGLETON,
        }),
        userController: (0, awilix_2.asClass)(user_controller_1.default, {
            lifetime: awilix_2.Lifetime.SINGLETON,
        }),
        authController: (0, awilix_2.asClass)(auth_controller_1.AuthController, {
            lifetime: awilix_2.Lifetime.SINGLETON,
        }),
        accountController: (0, awilix_2.asClass)(account_controller_1.AccountController, {
            lifetime: awilix_2.Lifetime.SINGLETON,
        }),
    });
};
exports.initContainer = initContainer;
//# sourceMappingURL=index.js.map