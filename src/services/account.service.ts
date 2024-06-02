import { Account } from "../schemas/account.schema";
import db from "../config/db";

export class AccountService {
  async create(data: Account) {
    return await db.account.create({
      data,
    });
  }

  async getAll(userId: number) {
    return await db.account.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async getById(id: number) {
    const found = await db.account.findFirst({
      where: {
        id,
      },
    });

    if (!found) return;

    return found;
  }

  async getByName(name: string) {
    const found = await db.account.findFirst({
      where: {
        name,
      },
    });

    if (!found) return;

    return found;
  }

  async delete(id: number) {
    return await db.account.delete({
      where: {
        id,
      },
    });
  }

  async update(id: number, data: Partial<Account>) {
    return await db.account.update({
      data,
      where: {
        id,
      },
    });
  }
}
