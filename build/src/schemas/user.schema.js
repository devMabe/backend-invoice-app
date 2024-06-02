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
        lastName: {
            type: "string",
            nullable: false,
        },
        email: {
            type: "string",
            nullable: false,
        },
        password: {
            type: "string",
            nullable: false,
            minLength: 6,
        },
    },
    required: ["name", "lastName", "email", "password"],
    additionalProperties: false,
};
const opts = {
    schema: {
        body: exports.bodySchema,
    },
};
exports.default = opts;
//# sourceMappingURL=user.schema.js.map