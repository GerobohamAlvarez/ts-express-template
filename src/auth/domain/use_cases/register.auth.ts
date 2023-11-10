import { AuthUser } from "auth/domain/model/auth-user.model";

export interface IRegisterAuth {

  execute( login: string , password: string ): Promise<AuthUser>;

}