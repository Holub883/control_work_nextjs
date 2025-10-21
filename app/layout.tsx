import "./globals.css";
import Header from "./components/Header";


export const metadata = {
    title: "Movies App",
    description: "Control work migrated to Next.js",
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="uk">
        <body>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}