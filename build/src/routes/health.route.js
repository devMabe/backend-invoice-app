"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const health_controller_1 = __importDefault(require("../controllers/health.controller"));
exports.default = async (instance) => {
    const healthController = new health_controller_1.default();
    instance.get("/health", healthController.getHello);
};
//# sourceMappingURL=health.route.js.map