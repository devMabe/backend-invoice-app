import type { JSONSchemaType } from "ajv";

export interface User {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export const bodySchema: JSONSchemaType<User> = {
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
    body: bodySchema,
  },
};

export default opts;
