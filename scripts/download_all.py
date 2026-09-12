import os
import re
import urllib.request
import urllib.parse

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    "Referer": "https://bymonolog.com/"
}

def download_file(url, dest_path):
    if os.path.exists(dest_path) and os.path.getsize(dest_path) > 0:
        return True
    os.makedirs(os.path.dirname(dest_path), exist_ok=True)
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = resp.read()
            with open(dest_path, "wb") as f:
                f.write(data)
            print(f"Downloaded: {url} -> {dest_path} ({len(data)} bytes)")
            return True
    except Exception as e:
        print(f"Failed {url}: {e}")
        return False

def main():
    os.makedirs("public/js", exist_ok=True)
    os.makedirs("public/css", exist_ok=True)
    os.makedirs("public/fonts", exist_ok=True)
    os.makedirs("public/assets", exist_ok=True)
    os.makedirs("public/audio", exist_ok=True)

    # 1. Audio files
    audio_base = "https://byhuy.b-cdn.net/soundlib-main"
    audio_files = ["tap_01.mp3", "tap_02.mp3", "tap_03.mp3", "tap_04.mp3", "tap_05.mp3", "select.mp3", "bgm.mp3"]
    for a in audio_files:
        download_file(f"{audio_base}/{a}", f"public/audio/{a}")

    # 2. JS files
    js_map = {
        "https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=68b652bbd6c64a44c8fe3e5e": "public/js/jquery-3.5.1.min.js",
        "https://cdn.prod.website-files.com/68b652bbd6c64a44c8fe3e5e/js/webflow.a0aa6ca1.b7683852b8a60d8e.js": "public/js/webflow.js",
        "https://cdn.prod.website-files.com/gsap/3.15.0/gsap.min.js": "public/js/gsap.min.js",
        "https://cdn.prod.website-files.com/gsap/3.15.0/ScrollTrigger.min.js": "public/js/ScrollTrigger.min.js",
        "https://cdn.prod.website-files.com/gsap/3.15.0/SplitText.min.js": "public/js/SplitText.min.js",
        "https://cdn.prod.website-files.com/gsap/3.15.0/CustomEase.min.js": "public/js/CustomEase.min.js",
        "https://cdn.prod.website-files.com/gsap/3.15.0/Flip.min.js": "public/js/Flip.min.js",
        "https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.min.js": "public/js/three.min.js",
        "https://cdn.jsdelivr.net/npm/lenis@1/dist/lenis.min.js": "public/js/lenis.min.js",
        "https://cdn.jsdelivr.net/npm/howler@2.2.4": "public/js/howler.min.js",
        "https://cdn.jsdelivr.net/npm/@barba/core@2/dist/barba.umd.js": "public/js/barba.umd.js",
    }
    for url, dest in js_map.items():
        download_file(url, dest)

    # 3. Odyn bundle.js from reference/js/bundle.js (update sound P to /audio)
    if os.path.exists("reference/js/bundle.js"):
        with open("reference/js/bundle.js", "r", encoding="utf-8", errors="ignore") as f:
            bcontent = f.read()
        bcontent = bcontent.replace("https://byhuy.b-cdn.net/soundlib-main", "/audio")
        with open("public/js/bundle.js", "w", encoding="utf-8") as f:
            f.write(bcontent)
        print("Copied & patched bundle.js to public/js/bundle.js")

    # 4. CSS file
    css_url = "https://cdn.prod.website-files.com/68b652bbd6c64a44c8fe3e5e/css/bym0n0l0g.webflow.shared.1ee2b3b31.min.css"
    css_dest = "public/css/bym0n0l0g.webflow.shared.1ee2b3b31.min.css"
    download_file(css_url, css_dest)

    # 5. Extract and download all fonts and assets from CSS
    if os.path.exists(css_dest):
        with open(css_dest, "r", encoding="utf-8", errors="ignore") as f:
            css_text = f.read()
        css_urls = re.findall(r'url\([\'"]?(https?://[^\'"\)]+)[\'"]?\)', css_text)
        print(f"Found {len(css_urls)} URLs in CSS")
        for cu in set(css_urls):
            fname = os.path.basename(urllib.parse.urlparse(cu).path)
            if any(cu.endswith(ext) or ext in cu for ext in ['.woff2', '.woff', '.ttf', '.otf']):
                dest = f"public/fonts/{fname}"
            else:
                dest = f"public/assets/{fname}"
            download_file(cu, dest)

    # 6. Extract all media URLs from reference/dom/raw-server.html
    with open("reference/dom/raw-server.html", "r", encoding="utf-8") as f:
        html_text = f.read()

    raw_urls = re.findall(r'https://cdn\.prod\.website-files\.com/[^\s"\'<>\)]+', html_text)
    print(f"Found {len(raw_urls)} website-files.com URLs in raw HTML")
    for u in set(raw_urls):
        clean_u = u.split(',')[0].strip()
        path = urllib.parse.urlparse(clean_u).path
        fname = os.path.basename(path)
        if not fname:
            continue
        if any(fname.endswith(ext) for ext in ['.woff2', '.woff', '.ttf', '.otf']):
            dest = f"public/fonts/{fname}"
        elif any(fname.endswith(ext) for ext in ['.png', '.jpg', '.jpeg', '.svg', '.webp', '.avif', '.ico', '.mp4', '.webm']):
            dest = f"public/assets/{fname}"
        elif fname.endswith('.css'):
            dest = f"public/css/{fname}"
        elif fname.endswith('.js'):
            dest = f"public/js/{fname}"
        else:
            dest = f"public/assets/{fname}"
        download_file(clean_u, dest)

    print("All downloads finished!")

if __name__ == "__main__":
    main()
