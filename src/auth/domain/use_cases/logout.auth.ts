import { AuthUser } from "auth/domain/model/auth-user.auth";

export interface ILogoutAuth {

  execute( user:AuthUser) : void;

}