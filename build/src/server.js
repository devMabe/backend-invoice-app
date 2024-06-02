"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const routes_1 = __importDefault(require("./routes"));
const container_1 = require("./container");
const server = (0, fastify_1.default)({
    ajv: {
        plugins: [require("ajv-merge-patch")],
    },
    disableRequestLogging: true,
});
const configServer = () => {
    (0, container_1.initContainer)();
    server.register(container_1.initAwilix);
    server.register(routes_1.default);
};
configServer();
exports.default = server;
//# sourceMappingURL=server.js.map