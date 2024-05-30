import { FastifyInstance } from "fastify";
import HealthController from "../controllers/health.controller";

export default async (instance: FastifyInstance) => {
  const healthController = new HealthController();

  instance.get("/health", healthController.getHello);
};
