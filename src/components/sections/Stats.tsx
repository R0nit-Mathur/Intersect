const stats = [
  { value: "50K+", label: "Active Developers" },
  { value: "200+", label: "Open Source Projects" },
  { value: "120", label: "Contributors" },
  { value: "98%", label: "Satisfaction Rate" },
];

export function Stats() {
  return (
    <section className="py-24 bg-bone-50" aria-labelledby="stats-title">
      <div className="max-w-5xl mx-auto px-6">
        <h2 id="stats-title" className="sr-only">
          Impact Stats
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center transition-opacity duration-500 hover:opacity-80"
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-bone-900">
                {stat.value}
              </div>
              <div className="mt-2 text-sm font-medium text-bone-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}