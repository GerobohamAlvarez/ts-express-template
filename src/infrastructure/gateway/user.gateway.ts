import express, { Router } from "express";
import { UserRestController } from "../controllers/user.controller";

export class UserGateway {
  private readonly _router: Router;
  constructor(private userController: UserRestController) {
    this._router = express.Router();
  }

  loadRoutes(): Router {
    this._router.get(
      "/:id",
      this.userController.getUserById.bind(this.userController),
    );

    this._router.delete(
      "/:id",
      this.userController.deleteUserById.bind(this.userController),
    );

    this._router.put(
      "/",
      this.userController.updateUser.bind(this.userController),
    );

    this._router.post(
      "/",
      this.userController.createUser.bind(this.userController),
    );

    return this._router;
  }
}
