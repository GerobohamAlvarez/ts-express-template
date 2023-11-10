import { AuthUser } from "auth/domain/model/auth-user.model";

export interface IValidateTokenAuth {
  execute( token: string ): Promise<AuthUser>
}