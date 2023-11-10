import { AuthUser } from "auth/domain/model/auth-user.model";
import { IAuthRepository } from "auth/domain/repository/auth.repository";

export class AuthRepository implements IAuthRepository {

  private users:AuthUser[] = [];

  async findUserByUsernameAndPassword(username: string, password: string): Promise<AuthUser | null> {

    const user = this.users.filter(( _user ) => {
      return _user.login === username && _user.password === password;
    });

    return user.pop() || null;
  }

  async createUser( user: AuthUser ): Promise<AuthUser> {

    this.users.push(user);

    return user;
  }

}