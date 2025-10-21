import {IMovieDetails} from "@/app/models/Movietype";

const BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MjBlOGU1NWM1ZjY4ZjVkMGIwMTZlNWNkZmZhYTU2MSIsIm5iZiI6MTc1OTA3ODI5NS4yODE5OTk4LCJzdWIiOiI2OGQ5Njc5NzBjZWY3MTdjOTJiNDE1OTkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.maRNwhtt-FFMCCzJ46Clb8uIY16neGM55NS3IpnQHks';

async function fetchJson(url: string) {
    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${BEARER_TOKEN}`,
            'Content-Type': 'application/json',
        },
        next: { revalidate: 60 },
    });

    if (!res.ok) {
        const text = await res.text();
        console.error('TMDB fetch error:', res.status, res.statusText, text);
        throw new Error(`TMDB fetch failed: ${res.status} ${res.statusText}`);
    }

    return res.json();
}

export async function getMovieDetails(movieId: number): Promise<IMovieDetails> {
    return fetchJson(`${BASE_URL}/movie/${movieId}?language=en-US`);
}
export async function discoverMovies(params: {
    page?: number;
    with_genres?: string;
    query?: string;
}) {
    const { page = 1, with_genres = '', query = '' } = params;
    let url = `${BASE_URL}/discover/movie?language=en-US&page=${page}`;
    if (with_genres) url += `&with_genres=${with_genres}`;
    if (query) url = `${BASE_URL}/search/movie?query=${query}&page=${page}`;
    return fetchJson(url);
}

export async function getGenres() {
    return fetchJson(`${BASE_URL}/genre/movie/list?language=en-US`);
}

