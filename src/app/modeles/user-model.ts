export class User{
  
    private  _firstname: string='';
    private _lastname: string='';
    private _email: string='';
    private _password: string='';
    constructor(firstname: string, lastname: string, email: string, password: string){}
     
    

    get firstname():string{return this._firstname;}
    set firstname(value: string){this._firstname= value;}
    get lastname():string{return this._lastname;}
    set lastname(value: string){this._lastname= value;}
 
    get  email():string{return this._email;}
    set email(value: string){this._email= value;}
    get  password():string{return this._password;}
    set password(value: string){this._password= value;}
}