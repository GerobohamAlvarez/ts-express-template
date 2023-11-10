import { AuthUser } from "auth/domain/model/auth-user.model";

export interface ILoginAuth {

  execute( login: string , password: string): Promise<AuthUser>;

}