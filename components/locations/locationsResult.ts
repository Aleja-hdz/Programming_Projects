import { Locations } from "./locationsType";

export type LocationsResult = {
    info:{
        pages: number;
        count: number;
        next: string | null;
        prev: string | null;
    },
    results: Locations[];
}