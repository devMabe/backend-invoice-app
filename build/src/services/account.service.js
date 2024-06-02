"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountService = void 0;
const db_1 = __importDefault(require("../config/db"));
class AccountService {
    async create(data) {
        return await db_1.default.account.create({
            data,
        });
    }
    async getAll(userId) {
        return await db_1.default.account.findMany({
            where: {
                userId,
            },
            orderBy: {
                createdAt: "desc",
            },
        });
    }
    async getById(id) {
        const found = await db_1.default.account.findFirst({
            where: {
                id,
            },
        });
        if (!found)
            return;
        return found;
    }
    async getByName(name) {
        const found = await db_1.default.account.findFirst({
            where: {
                name,
            },
        });
        if (!found)
            return;
        return found;
    }
    async delete(id) {
        return await db_1.default.account.delete({
            where: {
                id,
            },
        });
    }
    async update(id, data) {
        return await db_1.default.account.update({
            data,
            where: {
                id,
            },
        });
    }
}
exports.AccountService = AccountService;
//# sourceMappingURL=account.service.js.map