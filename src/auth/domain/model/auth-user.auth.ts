import { Roles } from "auth/domain/model/roles.auth";

export interface AuthUser {
  readonly _id?:string;
  readonly login: string;
  readonly password: string;
  readonly roles: Roles[];
}
