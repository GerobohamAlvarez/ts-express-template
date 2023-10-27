import { IDeleteUser } from "../../../domain/use_cases/user";
import { ILogger } from "../../../domain/core/logger/ILogger";
import { IUserRepository } from "../../../domain/repository/user/user.repository";
import { Identity } from "../../../domain/core/types/id.type";

export class DeleteService implements IDeleteUser {
  constructor(
    private userRepository: IUserRepository,
    private logger: ILogger,
  ) {}

  async execute(_id: Identity): Promise<boolean> {
    this.logger.debug(`Deleting user by id: ${_id}`);
    return this.userRepository.deleteUser(_id);
  }
}
