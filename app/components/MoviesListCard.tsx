import Link from 'next/link';
import PosterPreview from './PosterPreview';
import StarsRating from './StarsRating';
import type { IMovie, IGenre } from '@/app/models/Movietype';
import '../styles/moviesListCard.css';

interface Props {
    movie: IMovie;
    genres: IGenre[];
}

export default function MoviesListCard({ movie, genres }: Props) {
    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/placeholder.jpg';

    return (
        <div className="movie-card">
            <Link href={`/movie/${movie.id}`}>
                <PosterPreview src={posterUrl} alt={movie.title} />
            </Link>
            <div className="card-info">
                <h3>{movie.title}</h3>
                <StarsRating rating={movie.vote_average / 2} />
                <div className="genres">
                    {movie.genre_ids?.map((id) => {
                        const genre = genres.find((g) => g.id === id);
                        return genre ? (
                            <span key={id} className="genre-badge">
                {genre.name}
              </span>
                        ) : null;
                    })}
                </div>
            </div>
        </div>
    );
}

