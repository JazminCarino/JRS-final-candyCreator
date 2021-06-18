export class User {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;

    constructor (obj:any){
        console.log(obj)
        Object.assign(this, obj);
    }
}