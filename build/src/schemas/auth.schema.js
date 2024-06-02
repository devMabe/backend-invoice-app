"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodySchema = void 0;
exports.bodySchema = {
    type: "object",
    properties: {
        username: {
            type: "string",
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.source,
            nullable: false,
        },
        password: {
            type: "string",
            minLength: 6,
            nullable: false,
        },
    },
    required: ["username", "password"],
    additionalProperties: false,
};
const opts = {
    schema: {
        body: exports.bodySchema,
    },
};
exports.default = opts;
//# sourceMappingURL=auth.schema.js.map