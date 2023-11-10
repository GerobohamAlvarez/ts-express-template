import { AuthUser } from "auth/domain/model/auth-user.model";

export interface ISignTokenAuth {

  execute(user:AuthUser): Promise<string>;

}