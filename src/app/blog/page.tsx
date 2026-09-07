export default function BlogPage() {
  return (
    <main className="flex-1 p-8 md:p-12 max-w-5xl mx-auto bg-black text-bone">
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-bone-900 mb-8">
        Blog
      </h1>

      <div className="space-y-8">
        <article>
          <header className="mb-4">
            <time className="text-sm text-bone-500">January 15, 2024</time>
            <h2 className="mt-2 text-2xl font-medium text-bone-800">
              Building Developer Communities That Scale
            </h2>
          </header>
          <p className="text-bone-600 leading-relaxed mb-4">
            Lessons learned from growing INTERSECT from 0 to 50,000 active developers
            in 18 months.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-vermilion-600 hover:text-vermilion-500 transition-smooth"
          >
            Read more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </article>

        <article>
          <header className="mb-4">
            <time className="text-sm text-bone-500">January 8, 2024</time>
            <h2 className="mt-2 text-2xl font-medium text-bone-800">
              The Art of Developer Experience
            </h2>
          </header>
          <p className="text-bone-600 leading-relaxed mb-4">
            Why DX is the new competitive advantage and how to measure it effectively.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-vermilion-600 hover:text-vermilion-500 transition-smooth"
          >
            Read more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </article>

        <article>
          <header className="mb-4">
            <time className="text-sm text-bone-500">December 20, 2023</time>
            <h2 className="mt-2 text-2xl font-medium text-bone-800">
              Open Source Sustainability in 2024
            </h2>
          </header>
          <p className="text-bone-600 leading-relaxed mb-4">
            New models for funding, governance, and community health in open source.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-vermilion-600 hover:text-vermilion-500 transition-smooth"
          >
            Read more
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </article>
      </div>

      <div className="mt-8 pt-8 border-t border-bone-200">
        <nav className="flex gap-6 text-sm text-bone-500">
          <a href="/" className="hover:text-bone-700 transition-smooth">Home</a>
          <a href="/docs" className="hover:text-bone-700 transition-smooth">Docs</a>
          <a href="/community" className="hover:text-bone-700 transition-smooth">Community</a>
        </nav>
      </div>
    </main>
  );
}