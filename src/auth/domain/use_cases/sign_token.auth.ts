import { AuthUser } from "auth/domain/model/auth-user.auth";

export interface ISignTokenAuth {

  execute(user:AuthUser): Promise<string>;

}