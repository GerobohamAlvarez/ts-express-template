import { AuthUser } from "auth/domain/model/auth-user.auth";
import { IAuthRepository } from "auth/domain/repository/auth.repository";
import { IHashtable } from "common/security/domain/hash.interface";
import { ILogger } from "common/logger/domain/ILogger";
import { IRegisterAuth } from "auth/domain/use_cases/register.auth";
import { Roles } from "auth/domain/model/roles.auth";

export class RegisterService implements IRegisterAuth {

  constructor(
    private encryptService:IHashtable,
    private authRepository: IAuthRepository,
    private logger:ILogger
  ) {}

  async execute(username: string, password: string, roles: Roles[]): Promise<AuthUser> {

    this.logger.info(`Creating new user : ${username}`);

    const encryptPassword:string = await this.encryptService.encode(password);

    return await this.authRepository.createUser(username , encryptPassword , roles);

  }

}