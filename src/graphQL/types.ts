export interface Starship {
    name: string;
    model: string;
}

export interface StarshipsResponse {
    allStarships: {
        starships: Starship[];
    };
}