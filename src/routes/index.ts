import type { FastifyInstance } from "fastify";
import healthRoute from "./health.route";

export default function Routes(server: FastifyInstance): FastifyInstance {
  server.register(healthRoute);

  return server;
}
