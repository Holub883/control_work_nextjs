import '../styles/poster.css';
export default function PosterPreview({ src, alt }: { src?: string; alt?: string }) {
    return (
        <div className="poster-wrap">
            {src ? <img src={src} alt={alt ?? 'poster'} /> : <div className="poster-placeholder">No Image</div>}
        </div>
    );
}
