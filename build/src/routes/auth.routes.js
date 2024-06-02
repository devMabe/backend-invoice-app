"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_schema_1 = __importDefault(require("../schemas/auth.schema"));
const awilix_1 = require("@fastify/awilix");
exports.default = async (instance) => {
    const authController = awilix_1.diContainer.resolve("authController");
    instance.setErrorHandler((error, _request, reply) => {
        reply.status(400).send({
            error_code: "invalid_schema",
            message: error.message,
        });
    });
    instance.route({
        method: "POST",
        url: "/auth/login",
        schema: auth_schema_1.default.schema,
        handler: async (request, reply) => await authController.login(request, reply),
    });
};
//# sourceMappingURL=auth.routes.js.map