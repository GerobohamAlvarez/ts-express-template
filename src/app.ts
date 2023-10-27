import express, { Express } from "express";

import { UserRouter } from "./infrastructure/dependency/dependency.container";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/users", UserRouter.loadRoutes());

export default app;
