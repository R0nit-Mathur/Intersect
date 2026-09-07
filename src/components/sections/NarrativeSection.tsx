export function NarrativeSection() {
  const imageUrl =
    "https://lh3.googleusercontent.com/aida/AEtjO1VDHAji5dqOeA3Xkc6lTf8yNTM3uCM1RLPl86Q79vkynWWPsnwdMEe_rgJ-iEr_jlIWx6hWF1Mb20DkElXk6BPVmwV5SFgDp_YM5ATvTBxbkWJSn1e57Su_7-ubkSk9E1_kwDiHd_nN1DIu8TC11tzBCmDS_91dsooPyo6FotMFliLKe3b8i79ukGvulXo7hUyp-oghgW8Sk_ZIe_ws1J_WPMWjO6OfCetxYBy4qwkCs-nqIf2hR9j8R0x6";

  return (
    <>
      {/* Mobile Manifesto (< lg) */}
      <section
        className="px-5 py-10 border-b border-line space-y-8 lg:hidden"
        id="ethos-mobile"
      >
        {/* PORTRAIT IMAGE */}
        <div className="w-full aspect-[4/5] overflow-hidden bg-surface border border-line">
          <img
            alt="Technologist portrait"
            className="w-full h-full object-cover grayscale contrast-125 brightness-95"
            src={imageUrl}
          />
        </div>

        {/* STATEMENT */}
        <div className="space-y-5">
          <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight leading-[1.0] text-bone">
            WE DON’T SCRAPE LINKEDIN.
            <br />
            WE DON’T SELL DATABASES.
            <br />
            <span className="text-vermilion">WE KNOW WHO TO CALL.</span>
          </h2>
          <div className="space-y-2.5 text-sm sm:text-base text-graphite font-light leading-relaxed">
            <p className="text-bone/90">
              The people building foundational systems don’t answer automated
              outreach.
            </p>
            <p>
              When world-class teams need the impossible counterpart, we pick up
              the phone.
            </p>
          </div>
        </div>
      </section>

      {/* Desktop Manifesto (lg+) */}
      <section
        className="hidden lg:block relative py-24 lg:py-40 border-t border-bone/10"
        id="ethos"
      >
        <div className="px-12 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            {/* Portrait Left */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-surface border border-line">
                <img
                  alt="High-fashion monochrome portrait of visionary technologist"
                  className="w-full h-full object-cover object-center grayscale contrast-125 brightness-95"
                  src={imageUrl}
                />
              </div>
            </div>

            {/* Statement Right */}
            <div className="lg:col-span-7 order-1 lg:order-2 space-y-8 lg:pl-8">
              <h2 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tight text-bone leading-[0.95]">
                WE DON’T SCRAPE LINKEDIN.
                <br />
                WE DON’T SELL DATABASES.
                <br />
                <span className="text-vermilion">WE KNOW WHO TO CALL.</span>
              </h2>
              <div className="space-y-6 text-graphite text-lg sm:text-xl font-light leading-relaxed max-w-xl">
                <p className="text-bone font-normal">
                  The people who build foundational systems do not spend their
                  days curating social resumes or replying to automated outreach
                  bots.
                </p>
                <p>
                  They operate in deep research labs, quiet repositories, and
                  trusted channels. When they take an introduction, it is from
                  someone whose judgment they respect.
                </p>
                <p>
                  We pick up the phone, explain the initiative with clarity, and
                  connect two people who should know each other.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}