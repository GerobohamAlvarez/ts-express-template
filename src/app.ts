import {
  authMiddleware,
  loginController,
  registerController,
} from "common/dependency/infrastructure/dependency.container";

import express, { Express } from "express";

export class ApplicationName {

  private app: Express = express();

  constructor() {
    this.config();
    this.setUpMiddlewares();
    this.setUpRoutes();
  }
  private config(){
  }

  private setUpMiddlewares(){

    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));

  }

  private setUpRoutes(){
    // Public routes
    this.app.use("/v1/auth/register" , registerController.handle.bind(registerController));
    this.app.use("/v1/auth/login" , loginController.handle.bind(loginController));
    // Private routes
    this.app.use(authMiddleware.handle.bind(authMiddleware));
  }

  public getInstance(){
    return this.app;
  }

}

export default ApplicationName;
