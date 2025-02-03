import { CharactersResult } from "./charactersResult";

export class DataSource{
    constructor(){}
    async getCharacters(page:number): Promise<CharactersResult>{
        const respone = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
        return respone.json();
    }
}