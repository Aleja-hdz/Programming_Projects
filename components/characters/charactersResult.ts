import { Character } from "./characterType";

export type CharactersResult = {
    info:{
        pages: number;
        cout: number;
        next: string | null;
        prev: string | null;
    },
    results: Character[];
}