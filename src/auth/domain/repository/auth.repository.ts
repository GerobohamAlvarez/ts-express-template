import { AuthUser } from "auth/domain/model/auth-user.auth";
import { Roles } from "auth/domain/model/roles.auth";

export interface IAuthRepository {

  createUser(username: string, password: string , roles: Roles[]): Promise<AuthUser>;
  findUserByUsernameAndPassword(username: string, password: string): Promise<AuthUser | null>;

}