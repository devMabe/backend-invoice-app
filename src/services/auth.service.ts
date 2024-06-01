import { Auth } from "../schemas/auth.schema";
import db from "../config/db";
import { genToken, validate } from "../utils";

export class AuthService {
  async login(auth: Auth) {
    const user = await db.user.findFirst({
      where: {
        email: auth.username,
      },
    });

    if (!user) return;

    const passwordHash = user.password;
    const isPasswordValid = await validate(passwordHash, auth.password);

    if (!isPasswordValid) return;

    return genToken(auth.username);
  }
}
