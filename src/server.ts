import fastify from "fastify";
import type { FastifyInstance } from "fastify";
import Routes from "./routes";

const server: FastifyInstance = fastify();

const configServer = () => {
  server.register(Routes);
};

configServer();

export default server;
