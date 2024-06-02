"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const db_1 = __importDefault(require("../config/db"));
const utils_1 = require("../utils");
class AuthService {
    async login(auth) {
        const user = await db_1.default.user.findFirst({
            where: {
                email: auth.username,
            },
        });
        if (!user)
            return;
        const passwordHash = user.password;
        const isPasswordValid = await (0, utils_1.validate)(passwordHash, auth.password);
        if (!isPasswordValid)
            return;
        return (0, utils_1.genToken)(auth.username);
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map