import { FastifyReply, FastifyRequest } from "fastify";
import { AccountService } from "../services/account.service";
import { Account } from "../schemas/account.schema";
import { UserService } from "../services/user.service";

export class AccountController {
  private accountService: AccountService;
  private userService: UserService;

  constructor({ accountService, userService }) {
    this.accountService = accountService;
    this.userService = userService;
  }

  async getAll(
    request: FastifyRequest<{ Params: { userId: number } }>,
    reply: FastifyReply
  ) {
    const { params } = request;
    const userId = Number(params.userId);

    const userExist = await this.userService.getById(userId);

    if (!userExist) {
      reply.status(404).send({
        error_code: "User_not_found",
        code: "User not found",
      });
    }

    const response = await this.accountService.getAll(userId);

    reply.status(200).send(response);
  }

  async get(
    request: FastifyRequest<{ Params: { id: number } }>,
    reply: FastifyReply
  ) {
    const { params } = request;
    const id = Number(params.id);

    const accountExists = await this.accountService.getById(id);

    if (!accountExists) {
      reply.status(404).send({
        error_code: "Account_not_found",
        code: "Account not found",
      });
    }

    const response = await this.accountService.getById(id);

    reply.status(200).send(response);
  }

  async create(
    request: FastifyRequest<{ Body: Account }>,
    reply: FastifyReply
  ) {
    const { body } = request;
    const exists = await this.accountService.getByName(body.name);

    if (exists) {
      reply.status(400).send({
        error_code: "Account_already_exists",
        code: "Account name already exists",
      });
    }

    const userExist = await this.userService.getById(body.userId);

    if (!userExist) {
      reply.status(404).send({
        error_code: "User_not_found",
        code: "User not found",
      });
    }

    const response = await this.accountService.create(body);

    reply.status(200).send(response);
  }

  async delete(
    request: FastifyRequest<{ Params: { id: number } }>,
    reply: FastifyReply
  ) {
    const { params } = request;
    const id = Number(params.id);

    const accountExists = await this.accountService.getById(id);

    if (!accountExists) {
      reply.status(404).send({
        error_code: "Account_not_found",
        code: "Account not found",
      });
    }

    const response = await this.accountService.delete(id);

    reply.status(200).send(response);
  }

  async update(
    request: FastifyRequest<{ Params: { id: number }; Body: Account }>,
    reply: FastifyReply
  ) {
    const { body, params } = request;

    const id = Number(params.id);

    const accountExists = await this.accountService.getById(id);

    if (!accountExists) {
      reply.status(404).send({
        error_code: "Account_not_found",
        code: "Account not found",
      });
    }

    const response = await this.accountService.update(id, body);

    reply.status(200).send(response);
  }
}
