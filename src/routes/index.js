import usersRouter from "./users";
import authenticationRouter from "./authentication";
import express from "express";

const routers = [usersRouter, authenticationRouter];
const router = express.Router();

const routes = (app) => {
  routers.forEach((route) => {
    router.use(route);
  });
  app.use('/api/v1',router);
  return app;
};

export default routes
