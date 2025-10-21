
export interface IMovie {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    vote_average: number;
    release_date: string;
    genre_ids?: number[]; // для discoverMovies API
}

export interface IGenre {
    id: number;
    name: string;
}
export interface IMovieDetails {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    release_date: string;
    vote_average: number;
    genres: IGenre[];
}
