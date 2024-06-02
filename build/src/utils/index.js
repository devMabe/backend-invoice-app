"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.genToken = exports.validate = exports.encrypt = void 0;
const bcryptjs_1 = require("bcryptjs");
const jwt = __importStar(require("jsonwebtoken"));
const encrypt = async (password) => {
    return await (0, bcryptjs_1.hash)(password, 10);
};
exports.encrypt = encrypt;
const validate = async (passwordHash, password) => {
    return await (0, bcryptjs_1.compare)(password, passwordHash);
};
exports.validate = validate;
function genToken(email) {
    const secretKey = process.env["SECRET_KEY"] || "papotico";
    const token = jwt.sign({ email }, secretKey, {
        expiresIn: "1h",
    });
    return token;
}
exports.genToken = genToken;
function verifyToken(token) {
    const secretKey = process.env["SECRET_KEY"] || "papotico";
    const valid = jwt.verify(token, secretKey);
    return valid;
}
exports.verifyToken = verifyToken;
exports.default = {
    encrypt: exports.encrypt,
    validate: exports.validate,
};
//# sourceMappingURL=index.js.map