export default function JobsPage() {
  return (
    <main className="flex-1 p-8 md:p-12 max-w-5xl mx-auto bg-black text-bone">
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-bone-900 mb-8">
        Jobs
      </h1>

      <p className="text-bone-600 leading-relaxed mb-8 max-w-2xl">
        Join the INTERSECT team and help shape the future of developer
        relations.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border border-bone-200 rounded-lg p-6 hover:border-bone-300 transition-smooth">
          <h3 className="font-medium text-lg text-bone-800 mb-2">
            Developer Relations Engineer
          </h3>
          <p className="text-bone-600 text-sm mb-4">
            Full-time, remote. 4-6 years of experience building developer
            tools and communities.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Remote
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Full-time
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Engineering
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-vermilion-600 hover:text-vermilion-500 transition-smooth"
          >
            Apply now
            <svg
              width="14"
              height="14"
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
        </div>

        <div className="border border-bone-200 rounded-lg p-6 hover:border-bone-300 transition-smooth">
          <h3 className="font-medium text-lg text-bone-800 mb-2">
            Community Manager
          </h3>
          <p className="text-bone-600 text-sm mb-4">
            Full-time, hybrid. 3-5 years fostering developer communities and
            event programming.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Hybrid
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Full-time
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Community
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-vermilion-600 hover:text-vermilion-500 transition-smooth"
          >
            Apply now
            <svg
              width="14"
              height="14"
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
        </div>

        <div className="border border-bone-200 rounded-lg p-6 hover:border-bone-300 transition-smooth">
          <h3 className="font-medium text-lg text-bone-800 mb-2">
            Content Strategist
          </h3>
          <p className="text-bone-600 text-sm mb-4">
            Full-time, remote. 4+ years creating technical content for
            developer audiences.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Remote
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Full-time
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Content
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-vermilion-600 hover:text-vermilion-500 transition-smooth"
          >
            Apply now
            <svg
              width="14"
              height="14"
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
        </div>

        <div className="border border-bone-200 rounded-lg p-6 hover:border-bone-300 transition-smooth">
          <h3 className="font-medium text-lg text-bone-800 mb-2">
            Platform Engineer
          </h3>
          <p className="text-bone-600 text-sm mb-4">
            Full-time, remote. Build the tools that power the INTERSECT platform.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Remote
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Full-time
            </span>
            <span className="px-2 py-1 text-xs font-medium bg-bone-100 text-bone-700 rounded">
              Engineering
            </span>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1 text-sm font-medium text-vermilion-600 hover:text-vermilion-500 transition-smooth"
          >
            Apply now
            <svg
              width="14"
              height="14"
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
        </div>
      </div>

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