import { AuthUser } from "auth/domain/model/auth-user.auth";

export interface ILoginAuth {

  execute( username: string , password: string): Promise<AuthUser>;

}