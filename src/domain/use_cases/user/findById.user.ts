import { Identity } from "../../core/types/id.type";
import { User } from "../../models/user/user";

export interface IFindUserById {
  execute(_id: Identity): Promise<User | null | undefined>
}
