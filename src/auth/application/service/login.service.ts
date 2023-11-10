import { AuthUser } from "auth/domain/model/auth-user.model";
import { IAuthRepository } from "auth/domain/repository/auth.repository";
import { ILogger } from "common/logger/domain/ILogger";
import { ILoginAuth } from "auth/domain/use_cases/login.auth";
import { UnauthorizedException } from "auth/domain/exceptions/unauthorized.exception";

export class LoginService implements ILoginAuth {
  constructor(
    private authRepository: IAuthRepository,
    private logger:ILogger
  ) {}
  async execute(login: string, password: string): Promise<AuthUser> {

    const user = AuthUser.build(login , password);

    this.logger.debug(`Login user : '${user.login}'.`);

    const authUser:AuthUser|null = await this.authRepository.findUserByUsernameAndPassword(user.login , user.password);

    if(!authUser) {
      throw new UnauthorizedException(`Unable to login with user: '${login}' `);
    }

    return authUser;
  }


}