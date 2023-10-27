import { ILogger } from "../../../domain/core/logger/ILogger";
import { IUpdateUser } from "../../../domain/use_cases/user";
import { IUserRepository } from "../../../domain/repository/user/user.repository";
import { User } from "../../../domain/models/user/user";

export class UpdateService implements IUpdateUser {
  constructor(
    private userRepository: IUserRepository,
    private logger: ILogger,
  ) {}

  execute(user: User): Promise<User> {
    this.logger.debug(`Updating user with id : ${user._id}`);
    this.logger.debug(`${user}`);
    return this.userRepository.updateUser(user);
  }
}
