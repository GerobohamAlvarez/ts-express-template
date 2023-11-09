import { AuthUser } from "auth/domain/model/auth-user.auth";
import { IAuthRepository } from "auth/domain/repository/auth.repository";
import { Roles } from "../../domain/model/roles.auth";

export class AuthRepository implements IAuthRepository {

  private users:AuthUser[] = [];

  async findUserByUsernameAndPassword(username: string, password: string): Promise<AuthUser | null> {

    const user = this.users.filter(( _user ) => {
      return _user.login === username && _user.password === password;
    });

    return user.pop() || null;
  }

  async createUser(username: string, password: string, roles: Roles[]): Promise<AuthUser> {

    const _id = (this.users.length + 1).toString();

    const user:AuthUser = {
      _id: _id,
      login: username,
      password,
      roles: roles,
    };

    this.users.push(user);

    return user;
  }

}