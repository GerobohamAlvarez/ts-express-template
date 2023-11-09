import { NextFunction, Request, Response } from "express";

import { ILogger } from "common/logger/domain/ILogger";
import { IValidateTokenAuth } from "auth/domain/use_cases/validate_token.auth";
import { UnauthorizedException } from "auth/domain/exceptions/unauthorized.exception";


export class AuthenticateMiddlewareBuilder {

  constructor(
    private validateTokenService: IValidateTokenAuth,
    private logger:ILogger,
  ) {
  }

  async handle(req : Request, _res : Response, next : NextFunction) : Promise<void> {

    this.logger.debug("AuthenticateMiddlewareBuilder: Handling authentication.");

    const headerToken = req.headers.authorization;

    if(!headerToken){
      this.logger.debug("AuthenticateMiddlewareBuilder: Not authorization header...");
      throw new UnauthorizedException("Not authorization header...");
    }

    const [bearer , token] = headerToken.split(":");

    if(bearer === "bearer" || !token){
      this.logger.debug("AuthenticateMiddlewareBuilder: Authorization headers do not meet requirements.");
      throw new UnauthorizedException("Authorization headers do not meet requirements");
    }

    req["user"] = await this.validateTokenService.execute(token);

    next();

  };

}