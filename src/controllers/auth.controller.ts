import { FastifyReply, FastifyRequest } from "fastify";
import { AuthService } from "../services/auth.service";
import { Auth } from "../schemas/auth.schema";

export class AuthController {
  private authService: AuthService;

  constructor({ authService }) {
    this.authService = authService;
  }

  async login(request: FastifyRequest<{ Body: Auth }>, reply: FastifyReply) {
    const { body } = request;
    const token = await this.authService.login(body);

    if (!token) {
      reply.status(401).send({
        error_code: "Invalid_credentials",
        message: "The user or password incorrect",
      });
    }

    reply.status(200).send({
      access_token: token,
    });
  }
}
