import type { FastifyInstance } from "fastify";
import healthRoute from "./health.route";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import accountRoutes from "./account.routes";

export default function Routes(server: FastifyInstance): FastifyInstance {
  server.register(healthRoute);
  server.register(userRoutes);
  server.register(authRoutes);
  server.register(accountRoutes);

  return server;
}
