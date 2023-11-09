import { AuthUser } from "auth/domain/model/auth-user.auth";
import { Roles } from "auth/domain/model/roles.auth";

export interface IRegisterAuth {

  execute( username: string , password: string , roles: Roles[]): Promise<AuthUser>;

}