export default function CommunityPage() {
  return (
    <main className="flex-1 p-8 md:p-12 max-w-5xl mx-auto bg-black text-bone">
      <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-bone-900 mb-8">
        Community
      </h1>

      <section className="mb-12">
        <h2 className="font-medium text-2xl text-bone-800 mb-4">
          Developer Community
        </h2>
        <p className="text-bone-600 leading-relaxed mb-6">
          Join thousands of developers sharing knowledge, asking questions, and
          collaborating on open source projects.
        </p>
        <div className="flex flex-wrap gap-4 mb-6">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-bone-600 bg-bone-50 hover:bg-bone-100 transition-smooth"
          >
            Discord
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-bone-600 bg-bone-50 hover:bg-bone-100 transition-smooth"
          >
            GitHub
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-bone-600 bg-bone-50 hover:bg-bone-100 transition-smooth"
          >
            Twitter
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-medium text-2xl text-bone-800 mb-4">
          Events & Meetups
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-bone-200 rounded-lg p-4 hover:border-bone-300 transition-smooth">
            <h3 className="font-medium text-bone-800 mb-2">Monthly Developer AMA</h3>
            <p className="text-sm text-bone-600">Second Thursday of every month</p>
          </div>
          <div className="border border-bone-200 rounded-lg p-4 hover:border-bone-300 transition-smooth">
            <h3 className="font-medium text-bone-800 mb-2">Open Source Contributor Day</h3>
            <p className="text-sm text-bone-600">March 15, 2024</p>
          </div>
          <div className="border border-bone-200 rounded-lg p-4 hover:border-bone-300 transition-smooth">
            <h3 className="font-medium text-bone-800 mb-2">DX Workshop Series</h3>
            <p className="text-sm text-bone-600">Weekly starting February 1</p>
          </div>
          <div className="border border-bone-200 rounded-lg p-4 hover:border-bone-300 transition-smooth">
            <h3 className="font-medium text-bone-800 mb-2">Hackathon: Build the Future</h3>
            <p className="text-sm text-bone-600">April 20-22, 2024</p>
          </div>
        </div>
      </section>

      <div className="mt-8 pt-8 border-t border-bone-200">
        <nav className="flex gap-6 text-sm text-bone-500">
          <a href="/" className="hover:text-bone-700 transition-smooth">Home</a>
          <a href="/docs" className="hover:text-bone-700 transition-smooth">Docs</a>
          <a href="/blog" className="hover:text-bone-700 transition-smooth">Blog</a>
        </nav>
      </div>
    </main>
  );
}