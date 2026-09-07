export function CTA() {
  return (
    <section className="py-24 bg-black" aria-labelledby="cta-title">
      <div className="relative overflow-hidden rounded-2xl bg-bone-50 px-8 py-16 md:px-16 md:py-24">
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-vermilion-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2
            id="cta-title"
            className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone-900 mb-6"
          >
            Ready to intersect?
          </h2>
          <p className="text-lg text-bone-600 mb-10">
            Join thousands of developers building the future of developer relations.
            Your next chapter starts here.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/docs"
              className="group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium text-white bg-vermilion-600 hover:bg-vermilion-500 hover:shadow-[0_0_30px_rgba(255,155,95,0.3)] transition-smooth focus-ring"
            >
              Get Started
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform group-hover:translate-x-1"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <a
              href="/community"
              className="group inline-flex items-center gap-2 rounded-lg px-8 py-4 text-base font-medium text-bone-900 bg-bone-100 hover:bg-bone-200 transition-smooth focus-ring"
            >
              View Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}