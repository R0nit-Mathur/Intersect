export function StudioSection() {
  return (
    <section className="relative py-10 lg:py-36 px-5 sm:px-12 lg:px-24 space-y-8 lg:space-y-16 border-b lg:border-b-0 border-line lg:border-t lg:border-bone/10">
      <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden bg-surface border border-line">
        <img
          alt="Technologists collaborating in sunlit studio"
          className="w-full h-full object-cover object-center grayscale contrast-125 brightness-95"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYFmcgm5KhMBe7OyeR5Ogz-hIyIxhygDJZSGWZs90wce-Jf2detv8R03c5n8lbXnk0Ry0xSXl7By2O4Xg04bXz4r7V3EYn9H9EwCmM9oBf09XFl0fHivTbwwDwMxnwj0PKqUE1lXpozaLAnqWG2fsLFeyb_yLcR73VB13F5L6HdkZovzn4fY4ReSO8KS9BgBp5238hW_wKJl8LSNk1WQhFBoV7YiiCxYNSXqQxrCdeoPuj4NBuyOSbg"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-24 text-sm sm:text-base lg:text-lg font-light leading-relaxed max-w-6xl">
        <div>
          <p className="text-bone">
            Born out of Geek Room, an authentic network of over fifty thousand
            developers and researchers, we have spent years alongside builders in
            the thick of execution. We know who actually delivers when
            high-stakes initiatives hit reality.
          </p>
        </div>
        <div>
          <p className="text-graphite">
            When world-class founders need an irreplaceable counterpart,
            recruiters only add noise. What closes the distance is trust,
            technical precision, and the dignity of a direct phone call.
          </p>
        </div>
      </div>
    </section>
  );
}