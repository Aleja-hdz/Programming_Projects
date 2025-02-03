import { LocationsResult } from "./locationsResult";

export class DataSource{
    constructor(){}
    async getLocations(page:number): Promise<LocationsResult>{
        const respone = await fetch(`https://rickandmortyapi.com/api/location?page=${page}`);
        return respone.json();
    }
}