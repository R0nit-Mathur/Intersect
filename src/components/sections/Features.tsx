const features = [
  {
    name: "Discover",
    description:
      "Find tools, libraries, and resources curated by the community. No noise, just signal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8"></circle><path d="M21 21l-4.35-4.35"></path>
      </svg>
    ),
  },
  {
    name: "Connect",
    description:
      "Build meaningful relationships with engineers across disciplines and timezones.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    name: "Ship",
    description:
      "Turn ideas into reality with infrastructure designed for developer velocity.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
  },
  {
    name: "Grow",
    description:
      "Level up with workshops, AMAs, and contributor programs that accelerate your career.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
      </svg>
    ),
  },
];

export function Features() {
  return (
    <section className="py-24 bg-black" aria-labelledby="features-title">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-16 text-center">
          <h2
            id="features-title"
            className="font-display text-3xl md:text-4xl font-bold tracking-tight text-bone-900 mb-4"
          >
            Everything you need to
            <span className="text-vermilion-600"> intersect</span>
          </h2>
          <p className="text-bone-600 max-w-lg mx-auto">
            Four pillars that make INTERSECT the foundation for modern developer
            relations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.name}
              className="group relative rounded-xl border border-bone-200 bg-bone-50 p-6 hover:border-vermilion-300 hover:shadow-[0_0_40px_rgba(255,155,95,0.08)] transition-smooth"
            >
              <div className="mb-4 text-vermilion-500 transition-transform group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="font-medium text-lg text-bone-900 mb-2">
                {feature.name}
              </h3>
              <p className="text-sm text-bone-600 leading-relaxed">
                {feature.description}
              </p>
              <div className="absolute inset-0 rounded-xl border-2 border-vermilion-500 opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}