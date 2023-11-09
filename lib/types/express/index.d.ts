// to make the file a module and avoid the TypeScript error
import { AuthUser } from "auth/domain/model/auth-user.auth";

export {};

declare global {
  namespace Express {
    export interface Request {
      user: AuthUser,
    }
  }
}