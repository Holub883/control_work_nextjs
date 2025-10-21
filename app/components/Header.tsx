import Link from 'next/link';
import UserInfo from './UserInfo';
import '../styles/header.css';

export default function Header({ searchQuery = '' }: { searchQuery?: string }) {
    return (
        <header className="app-header">
            <div className="header-left">
                <Link href="/" className="logo">Movies App</Link>
            </div>

            <form method="get" className="search-form">
                <input name="query" defaultValue={searchQuery} placeholder="Search movies..." className="search-input" />
                <button type="submit" className="search-btn">Search</button>
            </form>

            <UserInfo />
        </header>
    );
}
