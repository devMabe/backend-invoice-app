"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const db_1 = __importDefault(require("../config/db"));
class UserService {
    async getByEmail(email) {
        const found = await db_1.default.user.findFirst({
            where: {
                email,
            },
        });
        if (!found)
            return;
        return found;
    }
    async getById(id) {
        const found = await db_1.default.user.findFirst({
            where: {
                id,
            },
        });
        if (!found)
            return;
        return found;
    }
    async create(data) {
        const response = await db_1.default.user.create({
            data,
        });
        return response;
    }
}
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map