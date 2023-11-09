export interface IEncrypt {

  encode( message:string ): Promise<string>;

  decode( message:string ): Promise<string>;

}