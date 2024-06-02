import { JSONSchemaType } from "ajv";

export interface Account {
  name: string;
  amount: number;
  userId: number;
}

export const bodySchema: JSONSchemaType<Account> = {
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
    body: bodySchema,
  },
};

export default opts;
