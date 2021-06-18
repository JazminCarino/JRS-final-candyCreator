import { CandyOption } from "./candyOption.model";

export class Candy {
    id?: number;

    name?: string;

    catId?: number;

    flavor1?: CandyOption;
    flavor2?: CandyOption;
    
    addIn1?: CandyOption;
    addIn2?: CandyOption;
    addIn3?: CandyOption;

    finish1?: CandyOption;
    finish2?: CandyOption;
   
    constructor (obj:any){
        console.log(obj)
        Object.assign(this, obj);
    }
    
}