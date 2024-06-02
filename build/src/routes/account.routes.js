"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("@fastify/awilix");
const account_schema_1 = __importDefault(require("../schemas/account.schema"));
exports.default = async (instance) => {
    const accountController = awilix_1.diContainer.resolve("accountController");
    instance.setErrorHandler((error, _request, reply) => {
        reply.status(400).send({
            error_code: "invalid_schema",
            message: error.message,
        });
    });
    instance.route({
        method: "POST",
        url: "/accounts",
        schema: account_schema_1.default.schema,
        handler: async (request, reply) => await accountController.create(request, reply),
    });
    instance.route({
        method: "PUT",
        url: "/accounts/:id",
        handler: async (request, reply) => await accountController.update(request, reply),
    });
    instance.route({
        method: "GET",
        url: "/accounts/get-by-user-id/:userId",
        handler: async (request, reply) => await accountController.getAll(request, reply),
    });
    instance.route({
        method: "GET",
        url: "/accounts/:id",
        handler: async (request, reply) => await accountController.get(request, reply),
    });
    instance.route({
        method: "DELETE",
        url: "/accounts/:id",
        handler: async (request, reply) => await accountController.delete(request, reply),
    });
};
//# sourceMappingURL=account.routes.js.map