import '../styles/genreBadge.css';

export default function GenreBadge({ name }: { name: string }) {
    return <span className="genre-badge">{name}</span>;
}
