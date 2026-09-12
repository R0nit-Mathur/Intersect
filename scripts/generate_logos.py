import os

assets_dir = "public/assets"
os.makedirs(assets_dir, exist_ok=True)

# 1. Google (351x351)
google_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<text x="50%" y="56%" text-anchor="middle" dominant-baseline="middle" font-family="'KHTeka', 'Animo', sans-serif" font-weight="700" font-size="64" letter-spacing="-0.02em" fill="currentColor">Google</text>
<path d="M175.5 80C140 80 112 108 112 143.5C112 179 140 207 175.5 207C198 207 217 194 227 175H175.5V148H256C257 153 257.5 158 257.5 163.5C257.5 209 220 241 175.5 241C122 241 78 197 78 143.5C78 90 122 46 175.5 46C200 46 222 55 238 70L218 90C207 79 193 74 175.5 74V80Z" fill="currentColor" fill-opacity="0.0"/>
</svg>"""

# 2. Microsoft (351x351)
microsoft_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="currentColor">
  <rect x="125" y="100" width="46" height="46" rx="2" />
  <rect x="180" y="100" width="46" height="46" rx="2" />
  <rect x="125" y="155" width="46" height="46" rx="2" />
  <rect x="180" y="155" width="46" height="46" rx="2" />
  <text x="50%" y="235" text-anchor="middle" font-family="'KHTeka', 'Animo', sans-serif" font-weight="600" font-size="30" letter-spacing="0.04em">Microsoft</text>
</g>
</svg>"""

# 3. Mastercard (351x351)
mastercard_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="currentColor">
  <circle cx="145" cy="140" r="50" fill-opacity="0.85" />
  <circle cx="206" cy="140" r="50" fill-opacity="0.55" />
  <text x="50%" y="228" text-anchor="middle" font-family="'KHTeka', 'Animo', sans-serif" font-weight="600" font-size="28" letter-spacing="0.06em">mastercard</text>
</g>
</svg>"""

# 4. Groq (351x351)
groq_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="currentColor">
  <text x="50%" y="54%" text-anchor="middle" dominant-baseline="middle" font-family="'Animo', 'KHTeka', sans-serif" font-weight="800" font-size="76" letter-spacing="-0.04em">groq</text>
  <rect x="120" y="215" width="111" height="4" rx="2" fill="currentColor" opacity="0.4" />
</g>
</svg>"""

# 5. Vultr (351x351)
vultr_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="currentColor">
  <path d="M110 105L175.5 200L241 105H205L175.5 155L146 105H110Z" />
  <text x="50%" y="245" text-anchor="middle" font-family="'KHTeka', 'Animo', sans-serif" font-weight="700" font-size="34" letter-spacing="0.08em">VULTR</text>
</g>
</svg>"""

# 6. Vapi (351x351)
vapi_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="currentColor">
  <text x="50%" y="52%" text-anchor="middle" dominant-baseline="middle" font-family="'Animo', 'KHTeka', sans-serif" font-weight="800" font-size="78" letter-spacing="-0.02em">vapi</text>
  <text x="50%" y="225" text-anchor="middle" font-family="'SuisseIntlMono', monospace" font-size="15" letter-spacing="0.25em" opacity="0.6">VOICE AI</text>
</g>
</svg>"""

# 7. Qdrant (351x351)
qdrant_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="currentColor">
  <polygon points="175.5,95 225,123.5 225,180.5 175.5,209 126,180.5 126,123.5" fill-opacity="0.2" stroke="currentColor" stroke-width="6" />
  <circle cx="175.5" cy="152" r="14" fill="currentColor" />
  <text x="50%" y="248" text-anchor="middle" font-family="'KHTeka', 'Animo', sans-serif" font-weight="700" font-size="32" letter-spacing="0.05em">QDRANT</text>
</g>
</svg>"""

# 8. Paytm (351x351)
paytm_svg = """<svg width="351" height="351" viewBox="0 0 351 351" fill="none" xmlns="http://www.w3.org/2000/svg">
<g fill="currentColor">
  <text x="50%" y="53%" text-anchor="middle" dominant-baseline="middle" font-family="'Animo', 'KHTeka', sans-serif" font-weight="800" font-size="72" letter-spacing="-0.02em">Paytm</text>
</g>
</svg>"""

files = {
    "69e9f491acef69f9818ce334_Client-1.svg": google_svg,
    "69e9f4a05d31ea04c8f9f86a_Client-2.svg": microsoft_svg,
    "69e9f4d0e415495ae306feb2_Client-3.svg": mastercard_svg,
    "69e9f4c62222c4e2399adb2d_Client-4.svg": groq_svg,
    "69e9f4ae5b2f1cfeee4e5276_Client-5.svg": vultr_svg,
    "69e9f4f4c88302e5028f9618_Client-6.svg": vapi_svg,
    "69e9f4ba9599b080b301b9f2_Client-7.svg": qdrant_svg,
    "69e9f4dc7cb660c42ce224bd_Client.svg": paytm_svg,
}

for name, content in files.items():
    p = os.path.join(assets_dir, name)
    with open(p, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Wrote {name} ({len(content)} bytes)")

print("All partner SVGs generated!")
