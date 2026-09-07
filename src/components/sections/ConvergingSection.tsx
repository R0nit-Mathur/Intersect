"use client";

const desktopCases = [
  {
    needTag: "The Unsolved Challenge",
    needTitle: "The founder building frontier AI models.",
    needDesc:
      "Blocked at memory bottlenecks. The solution requires someone who has compiled custom low-level kernels from scratch.",
    personTag: "The Rare Builder",
    personTitle:
      "The researcher who wrote the distributed attention kernel.",
    personDesc:
      "No public resume. Known only by the few engineers running their code in production. Connected in one conversation.",
  },
  {
    needTag: "The Unsolved Challenge",
    needTitle: "The infrastructure team rewriting compiler runtimes.",
    needDesc:
      "The intermediate representation needs a complete overhaul before mainnet release. Standard agency outreach surfaced zero viable candidates.",
    personTag: "The Rare Builder",
    personTitle:
      "The systems author maintaining a private low-level fork.",
    personDesc:
      "Building independently, insulated from recruiting noise. They took our call because of mutual respect and shared open-source history.",
  },
  {
    needTag: "The Unsolved Challenge",
    needTitle:
      "The community scaling 2,000 builders without hardware sponsors.",
    needDesc:
      "Enormous grassroots developer momentum trapped by corporate bureaucracy and unanswered sponsorship forms.",
    personTag: "The Rare Builder",
    personTitle: "The ecosystem director holding unallocated compute.",
    personDesc:
      "Seeking genuine engineering energy rather than empty PR. One trusted recommendation unlocked the entire cluster.",
  },
];

export function ConvergingSection() {
  return (
    <>
      {/* Mobile Intersections (< lg) */}
      <section
        className="px-5 py-10 border-b border-line bg-surface/40 lg:hidden"
        id="intersections-mobile"
      >
        <div className="flex items-baseline justify-between mb-7">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-vermilion">
            CONVERGING PLANES
          </span>
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-graphite">
            02 CASES
          </span>
        </div>
        <div className="space-y-6">
          {/* CASE 01 */}
          <article className="p-5 border border-line bg-obsidian space-y-5">
            <div className="space-y-1.5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-graphite block font-semibold">
                NEED
              </span>
              <h3 className="font-display font-bold text-lg text-bone leading-tight">
                Founder building frontier models, blocked at memory bottlenecks.
              </h3>
            </div>
            <div className="pt-4 border-t border-line/60 space-y-1.5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-vermilion block font-semibold">
                THE CALL
              </span>
              <p className="font-display font-bold text-lg text-vermilion leading-tight">
                The researcher who wrote the distributed attention kernel.
              </p>
            </div>
          </article>

          {/* CASE 02 */}
          <article className="p-5 border border-line bg-obsidian space-y-5">
            <div className="space-y-1.5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-graphite block font-semibold">
                NEED
              </span>
              <h3 className="font-display font-bold text-lg text-bone leading-tight">
                Infrastructure team rewriting compiler runtimes.
              </h3>
            </div>
            <div className="pt-4 border-t border-line/60 space-y-1.5">
              <span className="text-[9px] uppercase tracking-[0.2em] text-vermilion block font-semibold">
                THE CALL
              </span>
              <p className="font-display font-bold text-lg text-vermilion leading-tight">
                The author maintaining a quiet, private low-level fork.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Desktop Intersections (lg+) */}
      <section
        className="hidden lg:block relative py-32 lg:py-48 border-t border-bone/10"
        id="intersections"
      >
        <div className="px-12 xl:px-24 mb-24 lg:mb-36">
          <p className="text-xs uppercase tracking-[0.25em] text-vermilion mb-4">
            Converging Planes
          </p>
          <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tight text-bone max-w-3xl leading-[1.0]">
            THE UNSOLVED INITIATIVE MEETS THE RARE BUILDER.
          </h2>
        </div>

        <div className="px-12 xl:px-24 space-y-28 lg:space-y-40">
          {desktopCases.map((item, index) => (
            <div
              key={index}
              className="converge-row grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-baseline group border-b border-bone/10 pb-24"
            >
              <div className="lg:col-span-6 plane-need space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-graphite block">
                  {item.needTag}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-bone uppercase tracking-tight leading-[0.98]">
                  {item.needTitle}
                </h3>
                <p className="text-graphite text-base sm:text-lg font-light leading-relaxed max-w-lg pt-2">
                  {item.needDesc}
                </p>
              </div>

              <div className="lg:col-span-6 plane-person space-y-4 lg:pl-8">
                <span className="text-xs uppercase tracking-[0.2em] text-vermilion block">
                  {item.personTag}
                </span>
                <h3 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-vermilion uppercase tracking-tight leading-[0.98]">
                  {item.personTitle}
                </h3>
                <p className="text-bone/70 text-base sm:text-lg font-light leading-relaxed max-w-lg pt-2">
                  {item.personDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}