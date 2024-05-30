export class Pokemon {
    constructor(public id: number,
         public name: string,
         public hp: number,
         public cp: number,
         public picture: string,
         public types: string[],
         public created: Date
        ){}

        
}