import { FastifyReply, FastifyRequest } from "fastify";

export class HealthController {
  getHello(request: FastifyRequest, reply: FastifyReply) {
    return reply.status(200).send({
      message: "Hola mundo",
    });
  }
}

export default HealthController;
