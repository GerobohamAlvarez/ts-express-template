import { IFindUserById } from "../../../domain/use_cases/user";
import { ILogger } from "../../../domain/core/logger/ILogger";
import { IUserRepository } from "../../../domain/repository/user/user.repository";
import { Identity } from "../../../domain/core/types/id.type";
import { User } from "../../../domain/models/user/user";

export class FindByIdService implements IFindUserById {
  constructor(
    private userRepository: IUserRepository,
    private logger: ILogger,
  ) {}

  async execute(_id: Identity): Promise<User | null | undefined> {
    this.logger.debug(`Searching user by id : ${_id}`);
    return await this.userRepository.findUserById(_id);
  }
}
