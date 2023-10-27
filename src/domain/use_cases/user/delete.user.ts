import { Identity } from "../../core/types/id.type";

export interface IDeleteUser {
  execute(_id: Identity): Promise<boolean>
}
