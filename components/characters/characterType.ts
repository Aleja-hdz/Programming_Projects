export type Character = {
    id: number;
    name: string;
    status: "Alive" | "Dead" | "unknown";
	origin: string;
	species: string;
	location: {
		name: string;
	}
	image: string;
}