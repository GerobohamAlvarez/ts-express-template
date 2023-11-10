import { AuthUser } from "auth/domain/model/auth-user.model";
import { ILogger } from "common/logger/domain/ILogger";
import { ILogoutAuth } from "auth/domain/use_cases/logout.auth";


export class LogoutService implements ILogoutAuth {

  constructor(
    private logger:ILogger,
  ) {}

  execute(user: AuthUser): void {
    this.logger.debug(`Logout user: '${user.login}'`);
  }

}