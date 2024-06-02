"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodySchema = void 0;
exports.bodySchema = {
    type: "object",
    properties: {
        name: {
            type: "string",
            nullable: false,
        },
        amount: {
            type: "number",
            minimum: 1,
            nullable: false,
        },
        userId: {
            type: "number",
            nullable: false,
        },
    },
    required: ["name", "amount", "userId"],
    additionalProperties: false,
};
const opts = {
    schema: {
        body: exports.bodySchema,
    },
};
exports.default = opts;
//# sourceMappingURL=account.schema.js.map