export class User{
    idUser:Number;
    username : string;
    password : string;
    enable : boolean;
    roles : string;
name : string;
    phone:string; 

    constructor(idUser:Number,name: string, username: string, password: string,phone:string,roles:string,enable:boolean) {
       this.idUser=idUser;
        this.name = name;
        this.username = username;
        this.password = password;
        this.roles =roles;
        this.enable=enable;
        this.phone=phone;
    }
}
