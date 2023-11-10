import { AuthRepository } from "auth/infrastructure/database/auth.repository";
import { AuthenticateMiddlewareBuilder } from "auth/infrastructure/middleware/authenticate.middleware";
import { IAuthRepository } from "auth/domain/repository/auth.repository";
import { ILogger } from "common/logger/domain/ILogger";
import { ILoginAuth } from "auth/domain/use_cases/login.auth";
import { ILogoutAuth } from "auth/domain/use_cases/logout.auth";
import { IRegisterAuth } from "auth/domain/use_cases/register.auth";
import { ISignTokenAuth } from "auth/domain/use_cases/sign_token.auth";
import { IValidateTokenAuth } from "auth/domain/use_cases/validate_token.auth";
import { LoginController } from "auth/infrastructure/controller/login.controller";
import { LoginService } from "auth/application/service/login.service";
import { LogoutService } from "auth/application/service/logout.service";
import { RegisterController } from "auth/infrastructure/controller/register.controller";
import { RegisterService } from "auth/application/service/register.service";
import { SignTokenService } from "auth/application/service/sign_token.service";
import { StandardOutputLogger } from "common/logger/infrastructure/stdout.logger";
import { ValidateTokenService } from "auth/application/service/validate_token.service";

// DI CONTAINER

// COMMON
export const logger: ILogger = new StandardOutputLogger();

// AUTH MODULE
export const authRepository: IAuthRepository = new AuthRepository();
export const loginUseCase: ILoginAuth = new LoginService( authRepository , logger);
export const logoutUseCase: ILogoutAuth = new LogoutService(logger);

export const validateTokenUserCase: IValidateTokenAuth = new ValidateTokenService(process.env["SECRET"] || "" , authRepository);

export const signTokenUserCase: ISignTokenAuth = new SignTokenService(process.env["SECRET"] || "");

export const registerUserCase: IRegisterAuth = new RegisterService( authRepository , logger);

export const loginController = new LoginController(loginUseCase , signTokenUserCase);

export const registerController = new RegisterController(registerUserCase);
export const authMiddleware = new AuthenticateMiddlewareBuilder( validateTokenUserCase , logger);