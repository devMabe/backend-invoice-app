import { FastifyReply, FastifyRequest } from "fastify";
import { User } from "../schemas/user.schema";
import { UserService } from "../services/user.service";

export class UserController {
  private userService: UserService;

  constructor({ userService }) {
    this.userService = userService;

    this.create = this.create.bind(this);
  }

  async create(req: FastifyRequest<{ Body: User }>, reply: FastifyReply) {
    const { body } = req;

    try {
      const exists = await this.userService.getByEmail(body.email);
      if (exists) {
        reply.status(400).send({
          error_code: "user_already_exists",
          message: "There is already a user with that email",
        });
      }
      const response = await this.userService.create(body);
      if (response) {
        reply.status(200);
      }
    } catch (error: any) {
      reply.status(500).send({
        code: error.code,
        message: error.message,
      });
    }
  }
}

export default UserController;
