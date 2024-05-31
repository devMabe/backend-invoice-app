import type { FastifyInstance } from "fastify";
import healthRoute from "./health.route";
import userRoutes from "./user.routes";

export default function Routes(server: FastifyInstance): FastifyInstance {
  server.register(healthRoute);
  server.register(userRoutes);

  return server;
}
