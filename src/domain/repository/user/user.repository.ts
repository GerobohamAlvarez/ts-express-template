import { Identity } from "../../core/types/id.type";
import { User } from "../../models/user/user";

export interface IUserRepository {
  findUserById(_id: Identity): Promise<User | null | undefined>

  updateUser(user: User): Promise<User>

  deleteUser(_id: Identity): Promise<boolean>

  createUser(user: User): Promise<User>
}
