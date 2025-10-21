// app/components/StarsRating.tsx
import '../styles/stars.css';

export default function StarsRating({ rating }: { rating: number }) {
    const full = Math.round(rating);
    return (
        <div className="stars">
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={`star ${i < full ? 'on' : ''}`}>★</span>
            ))}
        </div>
    );
}
