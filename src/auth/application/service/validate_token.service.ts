import * as jwt from "jsonwebtoken";
import { AuthUser } from "auth/domain/model/auth-user.model";
import { IAuthRepository } from "auth/domain/repository/auth.repository";
import { IValidateTokenAuth } from "auth/domain/use_cases/validate_token.auth";
import { UnauthorizedException } from "../../domain/exceptions/unauthorized.exception";

export class ValidateTokenService implements IValidateTokenAuth {

  constructor(
    private readonly secret: string,
    private authRepository: IAuthRepository,
  ) {
  }
  async execute(token: string): Promise<AuthUser> {
    const { login , password } = jwt.verify(token , this.secret) as AuthUser;

    const user = await this.authRepository.findUserByUsernameAndPassword(login , password);

    if(!user) {
      throw new UnauthorizedException(`Unable to login with user: '${login}' `);
    }

    return user;
  }

}