"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_schema_1 = __importDefault(require("../schemas/user.schema"));
const awilix_1 = require("@fastify/awilix");
exports.default = async (instance) => {
    const userController = awilix_1.diContainer.resolve("userController");
    instance.setErrorHandler((error, _request, reply) => {
        reply.status(400).send({
            error_code: "invalid_schema",
            message: error.message,
        });
    });
    instance.route({
        method: "POST",
        url: "/users",
        schema: user_schema_1.default.schema,
        handler: async (request, reply) => await userController.create(request, reply),
    });
    // instance.put("/users/:userId", userController.update);
};
//# sourceMappingURL=user.routes.js.map