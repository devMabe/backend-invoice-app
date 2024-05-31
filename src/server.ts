import fastify from "fastify";
import type { FastifyInstance } from "fastify";
import Routes from "./routes";
import { initAwilix, initContainer } from "./container";

const server: FastifyInstance = fastify({
  ajv: {
    plugins: [require("ajv-merge-patch")],
  },
  disableRequestLogging: true,
});

const configServer = () => {
  initContainer();

  server.register(initAwilix);
  server.register(Routes);
};

configServer();

export default server;
