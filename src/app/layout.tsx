import type { Metadata } from "next";
import { Space_Grotesk, Public_Sans } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "INTERSECT — We Know Who To Call",
  description:
    "When the initiative is critical and open channels fail, we make the introduction. Rooted in Geek Room's 50,000+ member developer community.",
  keywords: [
    "INTERSECT",
    "developer relations",
    "Geek Room",
    "rare builders",
    "founders",
    "engineering",
  ],
  openGraph: {
    title: "INTERSECT — We Know Who To Call",
    description:
      "When the initiative is critical and open channels fail, we make the introduction. Rooted in Geek Room's 50,000+ member developer community.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth bg-[#0A0A0C] ${spaceGrotesk.variable} ${publicSans.variable}`}
    >
      <body className="bg-obsidian text-bone font-body antialiased selection:bg-vermilion selection:text-obsidian overflow-x-hidden">
        <div className="film-grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}