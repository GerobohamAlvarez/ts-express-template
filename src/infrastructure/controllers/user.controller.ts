import {
  ICreateUser,
  IDeleteUser,
  IFindUserById,
  IUpdateUser,
} from "../../domain/use_cases/user";
import { Request, Response } from "express";
import { ILogger } from "../../domain/core/logger/ILogger";
import { Identity } from "../../domain/core/types/id.type";
import { User } from "../../domain/models/user/user";

export class UserRestController {
  constructor(
    private findByIdUseCase: IFindUserById,
    private createUserUseCase: ICreateUser,
    private updateUserUseCase: IUpdateUser,
    private deleteUserUseCase: IDeleteUser,
    private logger: ILogger,
  ) {
    this.logger.debug("UserRestController initialized...");
  }

  public async getUserById(req: Request, res: Response): Promise<void> {
    this.logger.debug("Searching user by id:  " + req?.params?.id);
    const id: Identity = req.params.id;

    const user = await this.findByIdUseCase.execute(id);

    if (!user) {
      res.status(404).send();
    }

    res.status(200).send(user);
  }

  async createUser(req: Request, res: Response): Promise<void> {
    const user: User = req.body;

    if (!user) {
      res.status(400);
    }

    const createdUser = await this.createUserUseCase.execute(user);

    res.status(200).send(createdUser);
  }

  async updateUser(req: Request, res: Response): Promise<void> {
    const user: User = req.body;

    if (!user) {
      res.status(400);
    }

    const updatedUser = await this.updateUserUseCase.execute(user);

    res.status(200).send(updatedUser);
  }

  async deleteUserById(req: Request, res: Response): Promise<void> {
    const id: Identity = req.params.id;

    const hasBeenDeleted = await this.deleteUserUseCase.execute(id);

    if (!hasBeenDeleted) {
      res.status(400).send();
    } else {
      res.status(200).send();
    }
  }
}
