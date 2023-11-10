import crypto from "node:crypto";

export class AuthUser {

    private _id!: string;
    private readonly _password!: string;
    private _login!: string;

    constructor(
        id:string,
        login:string,
        password:string,
    ){
        this._id = id;
        this._login = login;
        this._password = password;
    }

    public static build( login: string , password : string) : AuthUser {

        const id = crypto.randomUUID().toString();
        this.ensureValidLogin(login);
        const encryptedPassword = AuthUser.encryptPassword(password);
        return new AuthUser(id , login , encryptedPassword);
    }

    get id() {
        return this._id;
    }

    protected set id( id : string){
        this._id = id;
    }

    protected set username(login: string) {
        AuthUser.ensureValidLogin(login);
        this._login = login;
    }

    public get login() : string {
        return this._login;
    }

    protected static isValidUsername(login: string):boolean{
        return login.length > 5;
    }

    protected static ensureValidLogin(login: string):void{
        if(!this.isValidUsername(login)){
            throw new Error("Invalid login: do not meet requirements");
        }
    }

    protected static encryptPassword(password: string){
        this.ensureValidPassword(password);
        return crypto.createHash("sha256" )
            .update(password)
            .digest().toString();
    }

    get password() {
        return this._password;
    }

    protected static isValidPassword(password: string):boolean{
        return password.length > 5;
    }

    protected static ensureValidPassword(password:string){
        if(!this.isValidPassword(password)){
            throw new Error("Invalid password: do not meet requirements");
        }
    }

}
