import { Request, Response } from "express";
import { IRegisterAuth } from "auth/domain/use_cases/register.auth";

export class RegisterController {

  constructor(
    private createUserService: IRegisterAuth
  ) {
  }


  async handle(req:Request , res: Response):Promise<void> {

    const { login , password } = req.body;

    const user = await this.createUserService.execute( login , password);

    res.status(200).json(user);

  }

}