import { hash, compare } from "bcryptjs";
import * as jwt from "jsonwebtoken";

export const encrypt = async (password: string) => {
  return await hash(password, 10);
};

export const validate = async (passwordHash: string, password: string) => {
  return await compare(password, passwordHash);
};

export function genToken(email: string) {
  const secretKey = process.env["SECRET_KEY"] || "papotico";

  const token = jwt.sign({ email }, secretKey, {
    expiresIn: "1h",
  });
  return token;
}

export function verifyToken(token: string) {
  const secretKey = process.env["SECRET_KEY"] || "papotico";

  const valid = jwt.verify(token, secretKey);

  return valid;
}

export default {
  encrypt,
  validate,
};
