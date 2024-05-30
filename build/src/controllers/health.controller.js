"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthController = void 0;
class HealthController {
    getHello(_request, reply) {
        return reply.status(200).send({
            message: "Hola mundo",
        });
    }
}
exports.HealthController = HealthController;
exports.default = HealthController;
//# sourceMappingURL=health.controller.js.map