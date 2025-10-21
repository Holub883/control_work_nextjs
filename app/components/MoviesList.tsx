import MoviesListCard from './MoviesListCard';
import type { IMovie, IGenre } from '@/app/models/Movietype';
import '../styles/moviesList.css';

export default function MoviesList({ movies, genres }: { movies: IMovie[]; genres: IGenre[] }) {
    return (
        <div className="movies-grid">
            {movies.map(m => (
                <MoviesListCard key={m.id} movie={m} genres={genres} />
            ))}
        </div>
    );
}
