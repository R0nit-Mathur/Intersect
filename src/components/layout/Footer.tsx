export function Footer() {
  return (
    <>
      {/* Mobile Footer (< lg) */}
      <footer className="px-5 py-10 bg-obsidian text-graphite space-y-8 lg:hidden border-t border-line">
        <div className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tightest text-bone leading-[0.9]">
          WE KNOW WHO
          <br />
          TO CALL.
        </div>
        <div className="pt-5 border-t border-line flex flex-col gap-4 text-xs font-light">
          <div className="flex items-center justify-between">
            <span className="text-bone font-medium tracking-wide uppercase">
              INTERSECT
            </span>
            <a className="text-vermilion font-medium" href="mailto:call@intersect.tech">
              call@intersect.tech
            </a>
          </div>
          <div className="text-[10px] text-graphite/60 uppercase tracking-widest flex items-center justify-between">
            <span>© INTERSECT</span>
            <span>NO ALGORITHMS. HUMAN ONLY.</span>
          </div>
        </div>
      </footer>

      {/* Desktop Footer (lg+) */}
      <footer className="hidden lg:block relative z-10 border-t border-bone/10 px-12 xl:px-24 py-20 bg-obsidian text-graphite text-xs">
        <div className="space-y-20">
          {/* Monumental Signature */}
          <div>
            <span className="font-display font-black text-[clamp(2.5rem,8vw,8.5rem)] uppercase tracking-tightest text-bone block leading-[0.88]">
              WE KNOW WHO TO CALL.
            </span>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8 border-t border-bone/10 font-light">
            <div className="space-y-2">
              <span className="text-bone font-medium uppercase tracking-wider block">
                INTERSECT
              </span>
              <p className="text-graphite max-w-xs leading-relaxed">
                Quiet introductions for category-defining initiatives. Rooted in
                Geek Room's 50,000+ member developer community.
              </p>
            </div>
            <div className="space-y-2">
              <span className="text-bone font-medium uppercase tracking-wider block">
                Contact
              </span>
              <a
                className="text-vermilion hover:underline block"
                href="mailto:call@intersect.tech"
              >
                call@intersect.tech
              </a>
            </div>
            <div className="space-y-2 md:text-right">
              <span className="text-graphite block">
                © INTERSECT. ALL RIGHTS RESERVED.
              </span>
              <span className="text-graphite/60 block">
                NO ALGORITHMS. DIRECT HUMAN ACCESS.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}