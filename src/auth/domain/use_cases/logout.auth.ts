import { AuthUser } from "auth/domain/model/auth-user.model";

export interface ILogoutAuth {

  execute( user:AuthUser) : void;

}