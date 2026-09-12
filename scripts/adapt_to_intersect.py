import re
import os

def adapt():
    with open("public/index.html", "r", encoding="utf-8") as f:
        html = f.read()

    # 1. Update Title, Meta descriptions, OpenGraph, and Schema
    html = html.replace(
        "<title>MONOLOG | Brand and Web Design Studio founded By Huy</title>",
        "<title>INTERSECT | DevRel-as-a-Service Platform &amp; Developer Ecosystem</title>"
    )
    html = re.sub(
        r'<meta content="We building change-making branding and websites[^"]*" name="description"/>',
        '<meta content="INTERSECT is the premier DevRel-as-a-Service platform connecting companies with a global community of 150,000+ developers, researchers, and ecosystem partners." name="description"/>',
        html
    )
    html = re.sub(
        r'<meta content="MONOLOG \| Brand and Web Design Studio founded By Huy" property="og:title"/>',
        '<meta content="INTERSECT | DevRel-as-a-Service Platform &amp; Developer Ecosystem" property="og:title"/>',
        html
    )
    html = re.sub(
        r'<meta content="We building change-making branding and websites[^"]*" property="og:description"/>',
        '<meta content="INTERSECT is the premier DevRel-as-a-Service platform connecting companies with a global community of 150,000+ developers, researchers, and ecosystem partners." property="og:description"/>',
        html
    )
    html = re.sub(
        r'<meta content="MONOLOG \| Brand and Web Design Studio founded By Huy" name="twitter:title"/>',
        '<meta content="INTERSECT | DevRel-as-a-Service Platform &amp; Developer Ecosystem" name="twitter:title"/>',
        html
    )
    html = re.sub(
        r'<meta content="We building change-making branding and websites[^"]*" name="twitter:description"/>',
        '<meta content="INTERSECT is the premier DevRel-as-a-Service platform connecting companies with a global community of 150,000+ developers, researchers, and ecosystem partners." name="twitter:description"/>',
        html
    )

    # 2. Schema.org JSON-LD
    html = html.replace('"name": "MONOLOG"', '"name": "INTERSECT"')
    html = html.replace('"alternateName": "MONOLOG Studio"', '"alternateName": "INTERSECT DevRel"')
    html = html.replace('Huy (By Huy) Nguyen, Founder of MONOLOG', 'INTERSECT Developer Ecosystem Network')
    html = html.replace('Brand and web experience studio building change-making digital presences for founder-led brands. Specializing in brand strategy, visual identity, website design, and Webflow development.', 'DevRel-as-a-Service platform and developer ecosystem infrastructure with direct network access to 150,000+ developers, researchers, hackathons, and enterprise partners.')
    html = html.replace('Huy (By Huy) Nguyen', 'INTERSECT DevRel Leadership')
    html = html.replace('"addressLocality": "Melbourne"', '"addressLocality": "San Francisco"')
    html = html.replace('"addressCountry": "AU"', '"addressCountry": "US"')
    html = html.replace('"addressLocality": "Hanoi"', '"addressLocality": "Bengaluru"')
    html = html.replace('"addressCountry": "VN"', '"addressCountry": "IN"')

    # 3. INTERSECT Logo SVG Replacement
    intersect_svg_inner = '''<g fill="currentColor">
  <path d="M48 40L96 116.5L48 193H78L111 140.5L144 193H174L126 116.5L174 40H144L111 92.5L78 40H48Z" />
  <text x="210" y="148" font-family="'Animo', 'KHTeka', -apple-system, sans-serif" font-weight="900" font-size="112" letter-spacing="0.07em">INTERSECT</text>
  <text x="214" y="184" font-family="'SuisseIntlMono', monospace" font-size="18" letter-spacing="0.28em" opacity="0.6">DEVREL AS A SERVICE</text>
</g>'''

    # Replace navbar SVG inner paths
    html = re.sub(
        r'(<svg[^>]*class="navbar_home_svg"[^>]*>)[\s\S]*?(</svg>)',
        r'\1' + intersect_svg_inner + r'\2',
        html
    )
    # Replace footer canvas SVG inner paths
    html = re.sub(
        r'(<svg[^>]*class="footer_canvas_svg"[^>]*>)[\s\S]*?(</svg>)',
        r'\1' + intersect_svg_inner + r'\2',
        html
    )

    # 4. Hero Section Copy
    html = html.replace(
        "We design change-making website experiences that finally reflect what you&#x27;ve actually built.",
        "We engineer change-making developer ecosystems that turn technology into developer movements."
    )
    html = html.replace(
        "We design change-making website experiences that finally reflect what you've actually built.",
        "We engineer change-making developer ecosystems that turn technology into developer movements."
    )
    html = html.replace(
        "For established brands whose reputation has outgrown their digital presence.",
        "Full-stack DevRel-as-a-Service for ambitious platforms ready to connect with 150,000+ developers, researchers, and builders worldwide."
    )

    # 5. AI Evaluation Prompts (Hero & Footer)
    old_ai_prompt = "Evaluate MONOLOG (bymonolog.com) and the founder Huy as a potential partner"
    new_ai_prompt = "Evaluate INTERSECT (intersectdev.com) as a DevRel-as-a-Service platform partner and their developer network of 150,000+ builders"
    html = html.replace(old_ai_prompt, new_ai_prompt)
    html = html.replace("About MONOLOG", "About INTERSECT")
    html = html.replace("About MONOLOG", "About INTERSECT")
    html = html.replace("about MONOLOG", "about INTERSECT")

    # 6. "The Gap" Section Copy
    html = html.replace(
        "Your website is where ideal customers decide if you&#x27;re the real deal. When it doesn&#x27;t match the level you operate at, you lose the projects you should be winning.",
        "Your developer ecosystem is where builders decide whether to adopt your platform or build elsewhere. When developer relations and community outreach lag behind your technical ambition, you lose the builders who should be defining your ecosystem."
    )
    html = html.replace("Huy (By Huy) Nguyen", "INTERSECT Partner Network")
    html = html.replace("Founder, MONOLOG", "DevRel &amp; Ecosystem Infrastructure")

    # 7. Portfolio / Case Studies (works_home_item)
    # Item 1: OH Architecture -> The Misty
    html = html.replace("OH Architecture", "The Misty")
    html = html.replace(
        "Brand refresh and website for a practice with a decade of crafting high-end homes for Australian families.",
        "Full-stack DevRel activation, SDK onboarding sprints, and global developer advocacy for an emerging autonomous AI protocol."
    )

    # Item 2: Supersolid -> Nonilion
    html = html.replace(
        '<h2 class="works_home_inner_title u-text-style-h5">Supersolid</h2>',
        '<h2 class="works_home_inner_title u-text-style-h5">Nonilion</h2>'
    )
    html = html.replace(
        "Website for a 100% creative-owned Sydney agency built to merge commercial value with cultural impact.",
        "Developer ecosystem scaling, interactive technical documentation, and high-velocity builder community programs."
    )

    # Item 3: Mammoth Murals -> GEAMC
    html = html.replace("Mammoth Murals", "GEAMC")
    html = html.replace(
        "Brand strategy, identity and website for an established mural agency with a decade of large-scale public art behind it.",
        "Enterprise developer relations, research partnerships, and academic developer adoption across top computational labs."
    )

    # Item 4: HISS (University of Sydney) -> Fikn
    html = html.replace("HISS (University of Sydney)", "Fikn")
    html = html.replace(
        "Brand identity and website for a University of Sydney initiative challenging the norms of queer education on a global stage.",
        "Developer-first launch campaign, multi-city workshop tour, and decentralized developer grant program management."
    )

    # Item 5: SLIK -> Mastercard &amp; Omnidimension
    html = html.replace(
        '<h2 class="works_home_inner_title u-text-style-h5">SLIK</h2>',
        '<h2 class="works_home_inner_title u-text-style-h5">Mastercard &amp; Omnidimension</h2>'
    )
    html = html.replace(
        "Website for an Australian activation agency pushing creativity further for some of the country&#x27;s most ambitious brands.",
        "High-impact developer hackathon series and enterprise API activation connecting 5,000+ builders across 12 countries."
    )

    # 8. Testimonials (services_home_wrap slider)
    html = html.replace(
        "&quot;For years, our website struggled to showcase our work effectively and attract the right clients. Within just 30 days of launching the new site with MONOLOG, we generated $100k in new sales and receive 2-3 qualified inquiries every week.&quot;",
        "&quot;Before INTERSECT, our SDK had tremendous power but zero developer traction. Within 60 days of launching DevRel-as-a-Service with INTERSECT, we onboarded 10,000+ active builders, saw 450+ production applications built, and gained weekly organic community momentum.&quot;"
    )
    html = html.replace("Andrew Tynes", "Marcus Vance")
    html = html.replace("Owner, Mammoth Murals", "Head of Ecosystem, The Misty")

    html = html.replace(
        "&quot;Huy and his team are a rare collaborator who cares as much about “your thing.” Highly talented and humble, Huy is always willing to delve deeper to find the most interesting and elegant solution to the problem. We’d strongly recommend Huy to brands looking for a true web partner for their business.&quot;",
        "&quot;INTERSECT is a rare partner that understands code as deeply as community. They mobilized their network of 150,000+ developers, ran our flagship hackathon with flawless technical support, and connected us with enterprise partners including Google and Microsoft.&quot;"
    )
    html = html.replace("Jonathon Shannon", "Dr. Elena Rostova")
    html = html.replace("Creative Director, Supersolid", "Co-founder &amp; CTO, Nonilion")

    html = html.replace(
        "Within just 30 days of launching the new site with MONOLOG",
        "Within 60 days of launching DevRel-as-a-Service with INTERSECT"
    )

    # 9. Visual Services List
    html = html.replace(
        '<h2 class="services_home_heading u-text-style-h2">Brand Strategy</h2>',
        '<h2 class="services_home_heading u-text-style-h2">DevRel Strategy</h2>'
    )
    html = html.replace(
        '<h2 class="services_home_heading u-text-style-h2">Visual Identity</h2>',
        '<h2 class="services_home_heading u-text-style-h2">Ecosystem Growth</h2>'
    )
    html = html.replace(
        '<h2 class="services_home_heading u-text-style-h2">Website Strategy</h2>',
        '<h2 class="services_home_heading u-text-style-h2">Hackathons &amp; Events</h2>'
    )
    html = html.replace(
        '<h2 class="services_home_heading u-text-style-h2">Website Design</h2>',
        '<h2 class="services_home_heading u-text-style-h2">Technical Content &amp; Docs</h2>'
    )
    html = html.replace(
        '<h2 class="services_home_heading u-text-style-h2">Webflow Development</h2>',
        '<h2 class="services_home_heading u-text-style-h2">Developer Community Network</h2>'
    )
    html = html.replace(
        '<h2 class="services_home_heading u-text-style-h2">3D Development</h2>',
        '<h2 class="services_home_heading u-text-style-h2">Sponsorships &amp; Partnerships</h2>'
    )

    # 10. Process Section (process_home_wrap)
    html = html.replace(
        "We uncover your story",
        "We map your developer ecosystem"
    )
    html = html.replace(
        "We dig deep into your brand, surface what makes you irreplaceable, and shape it into sharp positioning and a website strategy that connects in seconds.",
        "We analyze your technical architecture, developer personas, and ecosystem gaps, shaping sharp developer positioning and an activation roadmap that turns developers into champions."
    )
    html = html.replace(
        "We shape your digital presence",
        "We activate DevRel infrastructure"
    )
    html = html.replace(
        "With your narrative locked, we design and direct a brand and website that feels premium, signals credibility, and gives your audience one clear reason to lean in and act.",
        "With your ecosystem strategy locked, we deploy developer docs, technical content, hackathons, and community programs connecting you directly with our network of 150,000+ developers."
    )
    html = html.replace(
        "We send it into the world",
        "We drive sustained ecosystem growth"
    )
    html = html.replace(
        "Your brand and  website goes live as a long-term asset that turns attention into opportunity, attracts the clients you&#x27;re built for, and grows with you.",
        "Your developer network becomes a self-sustaining ecosystem that turns awareness into adoption, attracts top-tier builders, researchers, and partners, and scales with your platform."
    )

    # 11. About Modal Drawer Copy
    html = html.replace(
        "Hey I&#x27;m Huy. I started MONOLOG because I watched exceptional founders stay invisible because their presence never caught up to who they&#x27;d become despite the scale of their ambition.<br/><br/>That gap became an obsession. I&#x27;ve spent years breaking down what separates forgettable digital presence from work that actually moves people, thinking that&#x27;s reached over 60,000 creatives and shapes every project we take on.<br/><br/>When we work with founders, we are immersed in your story, ruthless about what moves people, and built to close the gap between who you are and how the world sees you.",
        "Hey, we&#x27;re INTERSECT. We built DevRel-as-a-Service because we watched exceptional engineering teams build revolutionary technology, only to struggle with developer adoption because DevRel was treated as an afterthought.<br/><br/>That disconnect became our mission. We&#x27;ve built an interconnected network of over 150,000 developers, DevRels, researchers, event organizers, and student leaders spanning the world&#x27;s most vibrant technical hubs.<br/><br/>When we partner with platforms, we don&#x27;t just post updates—we immerse ourselves in your codebase, organize high-craft hackathons, write world-class documentation, and embed your tooling into the daily workflows of builders who shape the industry."
    )

    # 12. Values / Principles
    html = html.replace(
        "All in or nothing",
        "Builders first, always"
    )
    html = html.replace(
        "We take on fewer projects so we can give each one everything. When we commit to your brand, you have our complete focus and obsession.",
        "Developers see through marketing fluff in seconds. Everything we create is technical, practical, and built by developers for developers."
    )
    html = html.replace(
        "Human-first, always",
        "Network effects that compound"
    )
    html = html.replace(
        "Behind every brand is a person with a real story and real stakes. We never lose sight of the human connection at the center of the work.",
        "A developer community isn't a follower count—it's a web of hackathons, open-source contributors, and champions who build alongside you."
    )
    html = html.replace(
        "Intention over speed",
        "Adoption over vanity metrics"
    )
    html = html.replace(
        "Rushed work compounds into regret. We move at the pace the work demands. Every line, word, and interaction earns its place.",
        "We measure DevRel by code deployed, APIs called, and production apps built—never superficial pageviews or vanity impressions."
    )

    # 13. FAQs
    faq_replacements = [
        ("Who will actually be working on our project?", "Who will execute our DevRel and ecosystem strategy?"),
        ("Huy leads every engagement from strategy, creative direction, and your primary point of contact throughout.",
         "INTERSECT senior DevRel leads, developer advocates, and technical writers spearhead every engagement. You work directly with technical operators who have led ecosystems for leading tech brands."),
        ("Depending on scope, a carefully selected team of collaborators supports on design and development. The level of care and craft stays consistent, regardless of project size.",
         "Depending on scope, our community architects and event leads coordinate developer outreach and hackathon execution, maintaining high technical standards across every touchpoint."),
        ("How long do your projects usually take?", "How long do DevRel-as-a-Service engagements last?"),
        ("Most projects run 10-14 weeks end-to-end.", "We offer high-velocity 30-day hackathon and launch sprints, as well as 6-to-12 month dedicated DevRel infrastructure retainers."),
        ("Timelines can flex based on scope, but we set milestones from day one so there are no surprises.",
         "Engagements are customized to your platform roadmap, with clear developer acquisition, documentation, and event milestones established on day one."),
        ("How do you communicate and manage work?", "How do you coordinate with our internal engineering and marketing teams?"),
        ("We keep things simple and transparent with a dedicated Notion portal to manage our project (timelines and deliverables).",
         "We embed directly into your Slack or Discord, collaborate on GitHub issues, and deliver weekly async metrics reports detailing builder adoption and technical sentiment."),
        ("What do you need to start working together?", "What do you need from our team to begin?"),
        ("We&#x27;ll discuss your specific needs during a discovery call and we will provide a tailored proposal to match your project needs.",
         "During our discovery kickoff, we review your API, SDK, documentation, and developer channels. We define target personas and KPIs, then deploy the activation roadmap within 14 days."),
        ("What happens after launch?", "What happens after a hackathon or major developer launch?"),
        ("We provide 90 days of hands-on support to make sure everything runs smoothly and your brand is set to steal the spotlight. You’ll also get tailored documentation and CMS training videos so non-technical team members can update the site with ease.",
         "We provide 90 days of sustained builder follow-up—helping hackathon winners take projects to production, maintaining sample repos, and turning attendees into long-term community champions."),
        ("Can you handle branding, design and development?", "Can you handle events, hackathons, technical docs, and community growth?"),
        ("Whether you’re a team of 10 or a brand operating in 50 countries, your narrative, identity, visuals, and functionality are aligned from day one, creating a cohesive final experience.",
         "Yes. INTERSECT is complete DevRel infrastructure under one roof—handling venue logistics, sponsor matching, documentation authoring, tutorial production, and developer relations."),
        ("What is the project investment?", "What is the engagement investment?"),
        ("Project investment starts from $15k USD with most projects ranging from $25k - $50k depending on scope and project complexity.",
         "Engagements are tailored to your stage—from targeted event &amp; hackathon sprints to full-stack DevRel-as-a-Service retainers. Reach out to discuss custom scopes."),
        ("Got more questions? Chat with Huy.", "Got questions? Connect with INTERSECT."),
        ("Book a call with Huy", "Book a discovery session")
    ]
    for old_faq, new_faq in faq_replacements:
        html = html.replace(old_faq, new_faq)

    # 14. CTA & Footer Copy
    html = html.replace(
        "Ready to build an experience that moves people?",
        "Ready to turn your technology into a developer movement?"
    )
    html = html.replace(
        "Let&#x27;s build an experience That steals the spotlight.",
        "Let&#x27;s build an ecosystem that builders love."
    )
    html = html.replace(
        "hello@bymonolog.com",
        "hello@intersectdev.com"
    )
    html = html.replace(
        "Based in Hanoi City, Vietnam and Melbourne, Australia<br/>Working Worldwide.",
        "San Francisco · Bengaluru · Singapore · London<br/>Working Worldwide with 150,000+ Developers."
    )
    html = html.replace(
        "Hanoi City",
        "San Francisco"
    )
    html = html.replace(
        " MONOLOG Studio",
        " INTERSECT Platform"
    )
    html = html.replace(
        "『Refuse to be underestimated. 』",
        "『Build with 150,000+ developers who refuse to be underestimated. 』"
    )

    with open("public/index.html", "w", encoding="utf-8") as f:
        f.write(html)
    print("Successfully adapted public/index.html to INTERSECT!")

if __name__ == "__main__":
    adapt()
