"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
class AuthController {
    constructor({ authService }) {
        this.authService = authService;
    }
    async login(request, reply) {
        const { body } = request;
        const token = await this.authService.login(body);
        if (!token) {
            reply.status(401).send({
                error_code: "Invalid_credentials",
                message: "The user or password incorrect",
            });
        }
        reply.status(200).send({
            access_token: token,
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map