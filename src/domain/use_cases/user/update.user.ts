import { User } from "../../models/user/user";

export interface IUpdateUser {
  execute(user: User): Promise<User>
}
