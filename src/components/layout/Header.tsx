"use client";

import Link from "next/link";

export function Header() {
  return (
    <>
      {/* Mobile Header (< lg) */}
      <header className="sticky top-0 z-50 w-full px-5 py-4 flex lg:hidden items-center justify-between bg-obsidian/90 backdrop-blur-md border-b border-line">
        <Link
          className="font-display font-black text-lg tracking-tight uppercase text-bone flex items-center gap-2.5"
          href="#"
        >
          <span className="w-2.5 h-2.5 bg-vermilion inline-block flex-shrink-0" />
          INTERSECT
        </Link>
        <Link
          className="font-display font-bold text-[11px] uppercase tracking-widest text-vermilion hover:text-bone transition-colors duration-200"
          href="#conversation"
        >
          START A CONVERSATION →
        </Link>
      </header>

      {/* Desktop Header (lg+) */}
      <header className="hidden lg:flex relative z-50 w-full px-12 xl:px-24 py-8 items-baseline justify-between bg-transparent">
        <Link
          className="font-display font-black text-2xl tracking-tighter uppercase text-bone flex items-center gap-2 group"
          href="#"
        >
          <span className="w-2 h-2 bg-vermilion inline-block" />
          INTERSECT
        </Link>
        <div className="flex items-center gap-8 xl:gap-12 text-xs uppercase tracking-[0.2em]">
          <Link
            className="text-graphite hover:text-bone transition-colors"
            href="#intersections"
          >
            Intersections
          </Link>
          <Link
            className="text-graphite hover:text-bone transition-colors"
            href="#ethos"
          >
            Ethos
          </Link>
          <Link
            className="text-vermilion hover:text-bone transition-colors font-medium"
            href="#conversation"
          >
            Start a Conversation →
          </Link>
        </div>
      </header>
    </>
  );
}