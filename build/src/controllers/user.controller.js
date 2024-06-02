"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const utils_1 = require("../utils");
class UserController {
    constructor({ userService }) {
        this.userService = userService;
        this.create = this.create.bind(this);
    }
    async create(req, reply) {
        const { body } = req;
        try {
            const exists = await this.userService.getByEmail(body.email);
            if (exists) {
                reply.status(400).send({
                    error_code: "user_already_exists",
                    message: "There is already a user with that email",
                });
            }
            else {
                body.password = await (0, utils_1.encrypt)(body.password);
                const response = await this.userService.create(body);
                if (response) {
                    reply.status(200);
                }
            }
        }
        catch (error) {
            reply.status(500).send({
                code: error.code,
                message: error.message,
            });
        }
    }
}
exports.UserController = UserController;
exports.default = UserController;
//# sourceMappingURL=user.controller.js.map