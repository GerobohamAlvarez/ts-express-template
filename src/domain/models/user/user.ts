import { Identity } from "../../core/types/id.type";

export class User {
  constructor(
    public _id: Identity,
    readonly name: string,
    readonly age: number,
    readonly email: string,
  ) {}
}
