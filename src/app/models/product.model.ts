export class Product {
    id: number;
    name: string;
    price: string;
    catId: number;
    

    constructor (obj:any){
        console.log(obj)
        Object.assign(this, obj);
    }
    
}