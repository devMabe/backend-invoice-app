import { hash, compare } from "bcryptjs";

export const encrypt = async (password: string) => {
  return await hash(password, 10);
};

export const validate = async (passwordHash: string, password: string) => {
  return await compare(password, passwordHash);
};

export default {
  encrypt,
  validate,
};
