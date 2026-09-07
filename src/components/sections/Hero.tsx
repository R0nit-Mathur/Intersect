"use client";

import { useEffect, useRef } from "react";

export function Hero() {
  const interRef = useRef<HTMLDivElement>(null);
  const sectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0;
    let targetX = 0;
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth } = window;
      const norm = (e.clientX - innerWidth / 2) / (innerWidth / 2);
      targetX = norm * 28;
    };

    const renderCollision = () => {
      mouseX += (targetX - mouseX) * 0.08;
      if (interRef.current && sectRef.current && window.innerWidth >= 1024) {
        interRef.current.style.transform = `translateX(${mouseX * 0.7}px)`;
        sectRef.current.style.transform = `translateX(${-mouseX * 0.7}px)`;
      }
      animId = requestAnimationFrame(renderCollision);
    };

    window.addEventListener("mousemove", handleMouseMove);
    animId = requestAnimationFrame(renderCollision);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <>
      {/* Mobile Hero (< lg) */}
      <section
        className="px-5 pt-8 pb-10 border-b border-line flex lg:hidden flex-col justify-start"
        id="hero-mobile"
      >
        {/* MASSIVE MONOLITHIC SPLIT WORDMARK */}
        <div className="select-none tracking-tightest leading-[0.82] font-black font-display uppercase text-[clamp(4.8rem,24vw,7.5rem)] mb-8">
          <div className="text-bone">INTER</div>
          <div className="text-vermilion">SECT.</div>
        </div>

        {/* EDITORIAL COPY CORE */}
        <div className="space-y-4 max-w-sm">
          <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-bone leading-snug">
            When the initiative is critical and open channels fail, we make the
            introduction.
          </p>
          <p className="text-graphite text-sm font-light leading-relaxed">
            No databases. No algorithms. Just the right phone call.
          </p>
        </div>

        {/* ANCHOR BADGE */}
        <div className="mt-8 pt-4 border-t border-line flex items-center gap-2 text-xs text-graphite/90 font-light tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-vermilion flex-shrink-0"></span>
          <span>Rooted in Geek Room’s 50,000+ builder ecosystem.</span>
        </div>
      </section>

      {/* Desktop Hero (lg+) */}
      <section
        className="hidden lg:flex relative min-h-[85vh] flex-col justify-between px-12 xl:px-24 pt-16 lg:pt-20 pb-20 overflow-hidden"
        id="hero"
      >
        <div></div>

        {/* MONOLITHIC SPLIT TYPOGRAPHY */}
        <div className="my-auto py-8 relative select-none" id="hero-stage">
          <div className="flex flex-col lg:flex-row items-baseline justify-between gap-0 lg:gap-8">
            <div
              ref={interRef}
              className="word-inter font-display font-black text-[clamp(4.5rem,19vw,22rem)] uppercase tracking-tightest leading-[0.8] text-bone"
              id="hero-inter"
            >
              INTER
            </div>
            <div
              ref={sectRef}
              className="word-sect font-display font-black text-[clamp(4.5rem,19vw,22rem)] uppercase tracking-tightest leading-[0.8] text-vermilion text-right lg:text-left"
              id="hero-sect"
            >
              SECT.
            </div>
          </div>

          {/* CONFIDENT QUIET PROMISE */}
          <div className="mt-12 lg:mt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8 max-w-7xl">
            <p className="font-display text-2xl sm:text-3xl lg:text-4xl text-bone max-w-2xl leading-snug tracking-tight font-medium">
              When the initiative is critical and open channels fail, we make the
              introduction.
            </p>
            <p className="text-graphite text-sm sm:text-base max-w-md leading-relaxed font-light">
              No databases. No recruiting algorithms. Just the right phone call.
            </p>
          </div>
        </div>

        {/* ROOT CREDIBILITY STRIP */}
        <div className="pt-12 border-t border-bone/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-graphite font-light">
          <span className="text-bone/80 font-normal">
            Rooted in Geek Room’s 50,000+ member developer community.
          </span>
          <span>Grassroots relationships across foundational systems.</span>
        </div>
      </section>
    </>
  );
}