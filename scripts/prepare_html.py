import re
import os
import urllib.parse

def prepare_html():
    with open("reference/dom/raw-server.html", "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Remove SRI integrity and crossorigin attributes
    html = re.sub(r'\s+integrity="[^"]*"', '', html)
    html = re.sub(r'\s+crossorigin(?:="[^"]*")?', '', html)

    # 2. Extract and replace scripts individually
    def script_replacer(match):
        s = match.group(0)
        # Drop analytics / telemetry
        if "googletagmanager.com" in s or "google_tags_first_party" in s or "window.dataLayer" in s:
            return ""
        if "/v2645sy3q" in s:
            return ""
        # Rewrite libraries
        if "jquery-3.5.1" in s:
            return '<script src="/js/jquery-3.5.1.min.js" type="text/javascript"></script>'
        if "webflow." in s and "/js/webflow" in s:
            return '<script src="/js/webflow.js" type="text/javascript"></script>'
        if "gsap.min.js" in s:
            return '<script src="/js/gsap.min.js" type="text/javascript"></script>'
        if "ScrollTrigger.min.js" in s:
            return '<script src="/js/ScrollTrigger.min.js" type="text/javascript"></script>'
        if "SplitText.min.js" in s:
            return '<script src="/js/SplitText.min.js" type="text/javascript"></script>'
        if "CustomEase.min.js" in s:
            return '<script src="/js/CustomEase.min.js" type="text/javascript"></script>'
        if "Flip.min.js" in s:
            return '<script src="/js/Flip.min.js" type="text/javascript"></script>'
        if "three@0.160.1" in s or "three.min.js" in s:
            return '<script src="/js/three.min.js"></script>'
        if "lenis" in s:
            return '<script src="/js/lenis.min.js"></script>'
        if "howler" in s:
            return '<script src="/js/howler.min.js"></script>'
        if "barba" in s:
            return '<script src="/js/barba.umd.js"></script>'
        if "cdn.odyn.dev" in s or "bundle.js" in s:
            return '<script src="/js/bundle.js" defer></script>'
        return s

    html = re.sub(r'<script[\s\S]*?</script>', script_replacer, html)

    # 3. Replace stylesheets
    html = re.sub(
        r'https://cdn\.prod\.website-files\.com/[^"\']+/css/bym0n0l0g\.webflow\.shared\.[^"\']+\.css',
        '/css/bym0n0l0g.webflow.shared.1ee2b3b31.min.css',
        html
    )

    # 4. Rewrite all assets from cdn.prod.website-files.com to /assets/<basename> or /fonts/<basename>
    def asset_replacer(match):
        full_url = match.group(0)
        parsed = urllib.parse.urlparse(full_url)
        fname = os.path.basename(parsed.path)
        if any(fname.endswith(ext) for ext in ['.woff2', '.woff', '.ttf', '.otf']):
            return f'/fonts/{fname}'
        return f'/assets/{fname}'

    html = re.sub(r'https://cdn\.prod\.website-files\.com/[^\s"\'<>,]+', asset_replacer, html)

    # 5. Rewrite videos to local paths
    videos = [
        "https://byhuy.b-cdn.net/WebM/Mammoth%20Murals%20Compressed.webm",
        "https://byhuy.b-cdn.net/WebM/HISS%20Reel%20Compressed.mp4",
        "https://byhuy.b-cdn.net/WebM/Looping%20About%20photo.webm",
        "https://byhuy.b-cdn.net/WebM/OH%20Arch%20Compressed.webm",
        "https://byhuy.b-cdn.net/WebM/SLIK-web.webm",
        "https://byhuy.b-cdn.net/WebM/Strategy%20Compressed.webm",
        "https://byhuy.b-cdn.net/WebM/Supersolid%20Thumbnail%20Compressed.mp4",
        "https://byhuy.b-cdn.net/WebM/Design%20FINAL%20compressed.webm",
        "https://byhuy.b-cdn.net/WebM/Development%20Final%20Compressed.webm"
    ]
    for v in videos:
        fname = os.path.basename(urllib.parse.urlparse(v).path)
        html = html.replace(v, f"/assets/{fname}")

    # Write to public/index.html
    with open("public/index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print(f"Generated public/index.html ({len(html)} bytes)")

if __name__ == "__main__":
    prepare_html()
