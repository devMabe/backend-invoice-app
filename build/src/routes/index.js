"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const health_route_1 = __importDefault(require("./health.route"));
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const account_routes_1 = __importDefault(require("./account.routes"));
function Routes(server) {
    server.register(health_route_1.default);
    server.register(user_routes_1.default);
    server.register(auth_routes_1.default);
    server.register(account_routes_1.default);
    return server;
}
exports.default = Routes;
//# sourceMappingURL=index.js.map