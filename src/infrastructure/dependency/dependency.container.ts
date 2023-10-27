import {
  ICreateUser,
  IDeleteUser,
  IFindUserById,
  IUpdateUser,
} from "../../domain/use_cases/user";

import { CreateService } from "../../application/user_cases/user/create.service";
import { DeleteService } from "../../application/user_cases/user/delete.service";
import { FindByIdService } from "../../application/user_cases/user/findById.service";
import { ILogger } from "../../domain/core/logger/ILogger";
import { IUserRepository } from "../../domain/repository/user/user.repository";
import { InMemoryRepository } from "../../application/repository/user/InMemory.repository";
import { StandardOutputLogger } from "../core/stdout.logger";
import { UpdateService } from "../../application/user_cases/user/update.service";
import { UserGateway } from "../gateway/user.gateway";
import { UserRestController } from "../controllers/user.controller";

// DI CONTAINER

// CORE

export const Logger: ILogger = new StandardOutputLogger();

// USERS DEPENDENCIES
export const UserRepository: IUserRepository = new InMemoryRepository(Logger);
export const CreateUserUseCase: ICreateUser = new CreateService(
  UserRepository,
  Logger,
);
export const FindUserByIdUseCase: IFindUserById = new FindByIdService(
  UserRepository,
  Logger,
);
export const DeleteUserUseCase: IDeleteUser = new DeleteService(
  UserRepository,
  Logger,
);
export const UpdateUserUseCase: IUpdateUser = new UpdateService(
  UserRepository,
  Logger,
);

export const UserController: UserRestController = new UserRestController(
  FindUserByIdUseCase,
  CreateUserUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
  Logger,
);

export const UserRouter: UserGateway = new UserGateway(UserController);
