import { AuthUser } from "auth/domain/model/auth-user.auth";
import { IAuthRepository } from "auth/domain/repository/auth.repository";
import { IHashtable } from "common/security/domain/hash.interface";
import { ILogger } from "common/logger/domain/ILogger";
import { ILoginAuth } from "auth/domain/use_cases/login.auth";
import { UnauthorizedException } from "auth/domain/exceptions/unauthorized.exception";



export class LoginService implements ILoginAuth {
  constructor(
    private encryptService:IHashtable,
    private authRepository: IAuthRepository,
    private logger:ILogger
  ) {}
  async execute(username: string, password: string): Promise<AuthUser> {

    this.logger.debug(`Login user : '${username}' with password: '${password.replace(".", "*")}' `);

    const securePass:string = await this.encryptService.encode(password);

    const user:AuthUser|null = await this.authRepository.findUserByUsernameAndPassword(username , securePass);

    if(!user) {
      throw new UnauthorizedException(`Unable to login with user: '${username}' `);
    }

    return user;
  }


}