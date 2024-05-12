import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "A small app",
  description: "This is for learning purposes",
  keywords: "apps, display ideas, next.js"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <Link href="/"className="btn btn-ghost normal-case text-xl">Small Apps</Link>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about/contact">Contact</Link></li>
              <li><Link href="/githubusers">Githubusers</Link></li>
              <li>
             
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
