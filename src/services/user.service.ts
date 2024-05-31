import db from "../config/db";
import { User } from "../schemas/user.schema";

export class UserService {
  async getByEmail(email: string) {
    const found = await db.user.findFirst({
      where: {
        email,
      },
    });
    if (!found) return;

    return found;
  }
  async create(data: User) {
    const response = await db.user.create({
      data,
    });

    return response;
  }
}
