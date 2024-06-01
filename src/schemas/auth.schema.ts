import { JSONSchemaType } from "ajv";

export interface Auth {
  username: string;
  password: string;
}

export const bodySchema: JSONSchemaType<Auth> = {
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
    body: bodySchema,
  },
};

export default opts;
