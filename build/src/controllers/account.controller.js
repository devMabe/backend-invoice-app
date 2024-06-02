"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountController = void 0;
class AccountController {
    constructor({ accountService, userService }) {
        this.accountService = accountService;
        this.userService = userService;
    }
    async getAll(request, reply) {
        const { params } = request;
        const userId = Number(params.userId);
        const userExist = await this.userService.getById(userId);
        if (!userExist) {
            reply.status(404).send({
                error_code: "User_not_found",
                code: "User not found",
            });
        }
        const response = await this.accountService.getAll(userId);
        reply.status(200).send(response);
    }
    async get(request, reply) {
        const { params } = request;
        const id = Number(params.id);
        const accountExists = await this.accountService.getById(id);
        if (!accountExists) {
            reply.status(404).send({
                error_code: "Account_not_found",
                code: "Account not found",
            });
        }
        const response = await this.accountService.getById(id);
        reply.status(200).send(response);
    }
    async create(request, reply) {
        const { body } = request;
        const exists = await this.accountService.getByName(body.name);
        if (exists) {
            reply.status(400).send({
                error_code: "Account_already_exists",
                code: "Account name already exists",
            });
        }
        const userExist = await this.userService.getById(body.userId);
        if (!userExist) {
            reply.status(404).send({
                error_code: "User_not_found",
                code: "User not found",
            });
        }
        const response = await this.accountService.create(body);
        reply.status(200).send(response);
    }
    async delete(request, reply) {
        const { params } = request;
        const id = Number(params.id);
        const accountExists = await this.accountService.getById(id);
        if (!accountExists) {
            reply.status(404).send({
                error_code: "Account_not_found",
                code: "Account not found",
            });
        }
        const response = await this.accountService.delete(id);
        reply.status(200).send(response);
    }
    async update(request, reply) {
        const { body, params } = request;
        const id = Number(params.id);
        const accountExists = await this.accountService.getById(id);
        if (!accountExists) {
            reply.status(404).send({
                error_code: "Account_not_found",
                code: "Account not found",
            });
        }
        const response = await this.accountService.update(id, body);
        reply.status(200).send(response);
    }
}
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map