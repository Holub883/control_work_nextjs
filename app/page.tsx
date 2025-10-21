import Link from 'next/link';
import { discoverMovies, getGenres } from './api/api';
import MoviesList from './components/MoviesList';
type Props = {
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function Page({ searchParams }: Props) {
    const query = typeof searchParams?.query === 'string' ? searchParams.query : '';
    const page = Number(searchParams?.page ?? 1);
    const genre = typeof searchParams?.genre === 'string' ? searchParams.genre : '';
    const [genresRes, moviesRes] = await Promise.all([
        getGenres(),
        discoverMovies({ page, with_genres: genre, query }),
    ]);
    const genres = Array.isArray(genresRes.genres) ? genresRes.genres : [];
    const movies = Array.isArray(moviesRes.results) ? moviesRes.results : [];

    return (
        <main className="movies-page">
            <div className="genres-filter">
                <Link href={`/?${new URLSearchParams({ ...(query ? { query } : {}) }).toString()}`} className={!genre ? 'active' : ''}>
                    All
                </Link>

                {genres?.map(g=> (
                    <Link
                        key={g.id}
                        href={`/?${new URLSearchParams({
                            ...(query ? { query } : {}),
                            genre: String(g.id),
                        }).toString()}`}
                        className={String(g.id) === genre ? 'active' : ''}
                    >
                        {g.name}
                    </Link>
                ))}
            </div>

            <MoviesList movies={movies} genres={genres} />

            <div className="pagination">
                <Link
                    href={`/?${new URLSearchParams({
                        ...(query ? { query } : {}),
                        ...(genre ? { genre } : {}),
                        page: String(Math.max(1, page - 1)),
                    }).toString()}`}
                    className={`page-btn ${page === 1 ? 'disabled' : ''}`}
                >
                    Prev
                </Link>

                <span>Page {moviesRes.page}</span>

                <Link
                    href={`/?${new URLSearchParams({
                        ...(query ? { query } : {}),
                        ...(genre ? { genre } : {}),
                        page: String(page + 1),
                    }).toString()}`}
                    className="page-btn"
                >
                    Next
                </Link>
            </div>
        </main>
    );
}
