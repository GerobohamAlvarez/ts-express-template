import { User } from "../../models/user/user";

export interface ICreateUser {
  execute(user: User): Promise<User>
}
