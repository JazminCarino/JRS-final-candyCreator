export class CandyOption {
    id?: number;
    optionName?: string; // flavor, shape, ...
    optionValue?: string; // actual value of option
    catId?: number; // chocolate or gummy (1 or 2)
    desctiption?: string;

    constructor(obj: any) {
        Object.assign(this, obj);
    }

    // static readonly OPTION_NAMES = ['flavor', 'shape'];
    
}