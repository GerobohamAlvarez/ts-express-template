import { Request, Response } from "express";
import { ILoginAuth } from "auth/domain/use_cases/login.auth";
import { ISignTokenAuth } from "auth/domain/use_cases/sign_token.auth";

export class LoginController {

  constructor(
    private loginService : ILoginAuth,
    private signTokenService: ISignTokenAuth,
  ) {
  }

  async handle(req:Request , res: Response):Promise<void> {
      const { username , password } = req.body;

      const authUser = await this.loginService.execute(username , password);

      const token = await this.signTokenService.execute(authUser);

      res.status(200).json({
        token
      });
  }

}