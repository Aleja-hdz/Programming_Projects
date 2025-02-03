import { EpisodesResult } from "./episodesResult";

export class DataSource{
    constructor(){}
    async getEpisodes(page:number): Promise<EpisodesResult>{
        const respone = await fetch(`https://rickandmortyapi.com/api/episode?page=${page}`);
        return respone.json();
    }
}