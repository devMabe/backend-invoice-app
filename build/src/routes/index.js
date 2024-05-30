"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const health_route_1 = __importDefault(require("./health.route"));
function Routes(server) {
    server.register(health_route_1.default);
    return server;
}
exports.default = Routes;
//# sourceMappingURL=index.js.map