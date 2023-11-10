import { AuthUser } from "auth/domain/model/auth-user.model";
import { IAuthRepository } from "auth/domain/repository/auth.repository";
import { ILogger } from "common/logger/domain/ILogger";
import { IRegisterAuth } from "auth/domain/use_cases/register.auth";

export class RegisterService implements IRegisterAuth {

  constructor(
    private authRepository: IAuthRepository,
    private logger:ILogger
  ) {}

  async execute( login: string, password: string ): Promise<AuthUser> {

    this.logger.info(`Creating new user : ${login}`);

    const user = AuthUser.build(login , password);

    return await this.authRepository.createUser(user);

  }

}