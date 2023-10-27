import { ICreateUser } from "../../../domain/use_cases/user";
import { ILogger } from "../../../domain/core/logger/ILogger";
import { IUserRepository } from "../../../domain/repository/user/user.repository";
import { User } from "../../../domain/models/user/user";

export class CreateService implements ICreateUser {
  constructor(
    private userRepository: IUserRepository,
    private logger: ILogger,
  ) {}

  async execute(user: User): Promise<User> {
    this.logger.debug(`Creating user : ${user} `);
    return this.userRepository.createUser(user);
  }
}
