import { AuthUser } from "auth/domain/model/auth-user.model";


export interface IAuthRepository {

  createUser(user: AuthUser): Promise<AuthUser>;
  findUserByUsernameAndPassword(username: string, password: string): Promise<AuthUser | null>;

}