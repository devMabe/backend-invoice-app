import { FastifyReply, FastifyRequest } from "fastify";

export class HealthController {
  getHello(_request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({
      message: "Hola mundo",
    });
  }
}

export default HealthController;
