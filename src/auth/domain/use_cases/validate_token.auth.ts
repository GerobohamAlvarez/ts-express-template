import { AuthUser } from "auth/domain/model/auth-user.auth";

export interface IValidateTokenAuth {
  execute( token: string ): Promise<AuthUser>
}