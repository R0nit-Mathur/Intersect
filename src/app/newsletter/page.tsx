export default function NewsletterPage() {
  return (
    <main className="flex-1 p-8 md:p-12 max-w-5xl mx-auto bg-black text-bone">
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-bone-900 mb-8">
        Newsletter
      </h1>

      <section className="mb-12 max-w-2xl">
        <h2 className="font-medium text-2xl text-bone-800 mb-4">
          The Intersection
        </h2>
        <p className="text-bone-600 leading-relaxed mb-6">
          Weekly insights on developer tools, community building, and engineering
          leadership. Curated by the INTERSECT team.
        </p>
        <form className="flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg bg-bone-50 px-4 py-3 text-bone-900 placeholder-bone-500 focus:outline-none focus:ring-2 focus:ring-vermilion-500 transition-smooth"
          />
          <button
            type="submit"
            className="rounded-lg bg-vermilion-600 px-6 py-3 font-medium text-white hover:bg-vermilion-500 transition-smooth"
          >
            Subscribe
          </button>
        </form>
      </section>

      <section className="mb-12">
        <h2 className="font-medium text-2xl text-bone-800 mb-4">
          Recent Issues
        </h2>
        <div className="space-y-4">
          <article className="border border-bone-200 rounded-lg p-6 hover:border-bone-300 transition-smooth">
            <header className="mb-2">
              <time className="text-sm text-bone-500">January 12, 2024</time>
              <h3 className="mt-1 text-xl font-medium text-bone-800">
                Issue #42: The State of DevRel in 2024
              </h3>
            </header>
            <p className="text-bone-600 leading-relaxed">
              Survey results, hiring trends, and what top teams are prioritizing this year.
            </p>
          </article>

          <article className="border border-bone-200 rounded-lg p-6 hover:border-bone-300 transition-smooth">
            <header className="mb-2">
              <time className="text-sm text-bone-500">January 5, 2024</time>
              <h3 className="mt-1 text-xl font-medium text-bone-800">
                Issue #41: Building Documentation That Developers Actually Read
              </h3>
            </header>
            <p className="text-bone-600 leading-relaxed">
              Patterns from Stripe, Vercel, and Linear on creating developer-first docs.
            </p>
          </article>

          <article className="border border-bone-200 rounded-lg p-6 hover:border-bone-300 transition-smooth">
            <header className="mb-2">
              <time className="text-sm text-bone-500">December 29, 2023</time>
              <h3 className="mt-1 text-xl font-medium text-bone-800">
                Issue #40: Year in Review — Top 10 DevTools of 2023
              </h3>
            </header>
            <p className="text-bone-600 leading-relaxed">
              The tools that defined the year, chosen by 5,000+ developers.
            </p>
          </article>
        </div>
      </section>

      <div className="mt-8 pt-8 border-t border-bone-200">
        <nav className="flex gap-6 text-sm text-bone-500">
          <a href="/" className="hover:text-bone-700 transition-smooth">Home</a>
          <a href="/docs" className="hover:text-bone-700 transition-smooth">Docs</a>
          <a href="/blog" className="hover:text-bone-700 transition-smooth">Blog</a>
          <a href="/community" className="hover:text-bone-700 transition-smooth">Community</a>
        </nav>
      </div>
    </main>
  );
}