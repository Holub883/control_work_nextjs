import {Metadata} from "next";
import "./globals.css";
import Header from "./components/Header";
import './styles/moviesPage.css';


export const metadata:Metadata = {
    title: "Movies App",
    description: "Control work",
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