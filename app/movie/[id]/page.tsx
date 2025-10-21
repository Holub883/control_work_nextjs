import { notFound } from 'next/navigation';
import PosterPreview from '../../components/PosterPreview';
import { getMovieDetails} from '../../api/api';
import {IMovieDetails} from "@/app/models/Movietype";
import '../../styles/movieDetails.css';
import {Metadata} from "next";

type Props = {
    params: { id: string };
};
export const generateMetadata = async ({ params }:{params:{id:string}}):Promise<Metadata> => {
    const {id} = params;
    return {
        title: `User page title `+id,
    };
};
export default async function MoviePage({ params }: Props) {
    const movieId = Number(params.id);

    let movie: IMovieDetails | null = null;
    try {
        movie = await getMovieDetails(movieId);
    } catch (err) {
        console.error(err);
        notFound();
    }

    if (!movie) return notFound();

    const posterUrl = movie.poster_path
        ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        : '/placeholder.jpg';

    return (
        <main className="movie-details-page">
            <h1>{movie.title}</h1>
            <PosterPreview src={posterUrl} alt={movie.title} />
            <p>{movie.overview}</p>
            <p>Release: {movie.release_date}</p>
            <p>Rating: {movie.vote_average}</p>

            <div className="genres">
                {movie.genres.map((g) => (
                    <span key={g.id} className="genre-badge">
            {g.name}
          </span>
                ))}
            </div>
        </main>
    );
}
