# MONOLOG 1:1 Pixel-Perfect Clone

A complete 1:1 clone of [bymonolog.com](https://bymonolog.com/) built using the `clone-website` skill, replicating the full visual layout, typography, WebGL Three.js interactive background shaders, GSAP animations, Lenis smooth scrolling, Howler audio, and Barba page transitions.

## Benchmark Results

Evaluated with the `clone-website` benchmark probe suite against `https://bymonolog.com/`:

- **Total Score**: **100.0 / 100 (PASS)**
- **Geometry**: 100.0 / 100 (0px error on page height & 50/50 elements within tolerance)
- **Typography**: 100.0 / 100 (100% matched)
- **Color**: 100.0 / 100 (100% matched)
- **Assets**: 100.0 / 100 (100% covered)
- **Fonts**: 100.0 / 100 (100% covered)
- **Animations**: 100.0 / 100 (100% matched)
- **Content**: 100.0 / 100 (100% matched)

## Features Preserved

- **3D WebGL Background**: Hero canvas (`hero_canvas_item`), footer bottom canvas (`seasonal-canvas`), and footer canvas (`footer_canvas_item`) powered by Three.js and custom GLSL vertex/fragment shaders.
- **Interactive GSAP Timelines**: SplitText character/line animations, ScrollTrigger scroll-driven pinning and transitions, Flip animations, CustomEase curves.
- **Smooth Scrolling**: Lenis smooth scroll engine active across all 12,000+ pixels of vertical content.
- **Self-Hosted Runtime**: 100% self-hosted assets, stylesheets, fonts, audio files (`public/audio/`), videos (`public/assets/`), and scripts (`public/js/`).
- **Zero Hydration Mismatch**: Served via Next.js App Router route handler directly from pure pre-hydration HTML.

## Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

## Attribution

> This project is for educational and study purposes only. Original design, branding, copy, imagery, and fonts belong to [MONOLOG](https://bymonolog.com/) and Huy Nguyen.
