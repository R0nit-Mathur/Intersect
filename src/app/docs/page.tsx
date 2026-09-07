export default function DocsPage() {
  return (
    <main className="flex-1 p-8 md:p-12 max-w-5xl mx-auto bg-black text-bone">
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-bone-900 mb-8">
        Documentation
      </h1>

      <div className="space-y-6">
        <section>
          <h2 className="font-medium text-2xl text-bone-800 mb-4">
            Getting Started
          </h2>
          <p className="text-bone-600 leading-relaxed">
            Welcome to INTERSECT documentation. Here you'll find guides, API references,
            and best practices for building with our platform.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-2xl text-bone-800 mb-4">
            API Reference
          </h2>
          <p className="text-bone-600 leading-relaxed">
            Complete reference for all INTERSECT APIs including authentication,
            analytics, and community features.
          </p>
        </section>

        <section>
          <h2 className="font-medium text-2xl text-bone-800 mb-4">
            Guides
          </h2>
          <p className="text-bone-600 leading-relaxed">
            Step-by-step guides for common developer scenarios and use cases.
          </p>
        </section>
      </div>

      <div className="mt-8 pt-8 border-t border-bone-200">
        <nav className="flex gap-6 text-sm text-bone-500">
          <a href="/" className="hover:text-bone-700 transition-smooth">Home</a>
          <a href="/blog" className="hover:text-bone-700 transition-smooth">Blog</a>
          <a href="/community" className="hover:text-bone-700 transition-smooth">Community</a>
        </nav>
      </div>
    </main>
  );
}