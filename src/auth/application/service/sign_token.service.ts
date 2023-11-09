import * as jwt from "jsonwebtoken";
import { AuthUser } from "auth/domain/model/auth-user.auth";
import { ISignTokenAuth } from "auth/domain/use_cases/sign_token.auth";



export class SignTokenService implements ISignTokenAuth {

  constructor( private readonly secret: string ) {
  }
  async execute(user: AuthUser): Promise<string> {
    return jwt.sign(user, this.secret, { });
  }

}