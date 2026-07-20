/**
 * home-content.js
 * ----------------
 * All editable TEXT CONTENT for index.html lives in this file.
 * To update copy on the homepage, edit the values below — you should not
 * need to touch index.html or style.css for routine content changes.
 *
 * Anything wrapped in [square brackets] is a placeholder still waiting on
 * real information from the Venus Traders family — replace the whole
 * bracketed string once confirmed.
 */

const homeContent = {

  hero: {
    tag: "Family-run in Pune since 1974",
    heading: `Where Pune <em>writes,</em><br/>draws & <span class="squiggle">creates</span> — for three generations.`,
    lede: "From a single Pune stationery counter to six stores across the city — Venus Traders has spent over five decades helping students, artists, and offices find exactly what they need.",
    primaryCta: { label: "Browse what we stock →", href: "#categories" },
    secondaryCta: { label: "Read our story", href: "#heritage" },
    quote: {
      label: "— A note from the family",
      text: "[Space held for a short, personal quote from the family — how the shop started, or what keeps it going three generations on.]",
      signature: "[Owner name], [Generation]rd Generation"
    },
    stamps: [
      { value: "50+", label: "years of trust" },
      { value: "40K+", label: "products across our stores" },
      { value: "6", label: "stores across Pune" },
      { value: "3", label: "generations, one family" }
    ],
    photo: {
      src: "https://picsum.photos/seed/venus-hero/1200/500",
      alt: "Placeholder photo of a stationery store interior",
      caption: "[Dummy stock photo — replace with a real photo of a Venus Traders storefront or shelf.]"
    }
  },

  heritage: {
    label: "Our story",
    title: `A counter, a city, and a quiet <em>promise</em> kept since 1974.`,
    lede: "Three generations. One philosophy: stock what people actually need, and remember every customer's name.",
    timeline: [
      {
        year: "1974",
        head: "The First Shop",
        text: "[Placeholder — needs family input: where was the very first Venus Traders shop, and what did it first stock?]"
      },
      {
        year: "[Year]",
        head: "[Milestone title]",
        text: "[Placeholder — a second-generation milestone: an expansion, a new category, a hard year overcome. Owners to supply.]"
      },
      {
        year: "[Year]",
        head: "[Milestone title]",
        text: "[Placeholder — when did the store network grow beyond one location? Which was the second store, and why there?]"
      },
      {
        year: "Today",
        head: "Six Stores, One Family",
        text: "Six Venus Traders stores across Pune — at Appa Balwant Chowk, FC Road, Kothrud, Wanowrie, Magarpatta, and Baner — still run by the same family, five decades on."
      }
    ],
    photo: {
      src: "https://picsum.photos/seed/venus-heritage/1200/500",
      alt: "Placeholder photo evoking the store's history",
      caption: "[Dummy stock photo — replace with an archival photo, old shop signage, or a family photo from over the years.]"
    }
  },

  categories: {
    label: "What we stock",
    title: `Every shelf, lovingly <em>curated.</em>`,
    intro: "Seven departments. Forty thousand-plus products. One pleasantly overwhelming superstore.",
    list: [
      { icon: "✎", tint: "t1", name: "School & Office Stationery", count: "[Item count — owners to confirm]" },
      { icon: "✱", tint: "t3", name: "Fine Arts", count: "[Item count — owners to confirm]" },
      { icon: "✦", tint: "t2", name: "Hobbies & Crafts", count: "[Item count — owners to confirm]" },
      { icon: "▢", tint: "t5", name: "Storage Materials", count: "[Item count — owners to confirm]" },
      { icon: "◐", tint: "t6", name: "Computer & Desk Accessories", count: "[Item count — owners to confirm]" },
      { icon: "✉", tint: "t4", name: "Visual Displays", count: "[Item count — owners to confirm]" },
      { icon: "✦", tint: "t3", name: "Festive Decorations & Gifting", count: "[Item count — owners to confirm]" }
    ]
  },

  brands: {
    label: "Beyond the shelf",
    title: "More than a stationery counter.",
    lede: "[Placeholder — do we run any specialised services or sister brands (printing, custom gifting, an institutional/wholesale arm) worth their own space here? If yes, owners to confirm names and details below. If not, this section can be dropped.]",
    items: [
      { tag: "[Confirm]", name: "[Service or brand name]", text: "[Placeholder — e.g. printing, framing, or custom gifting services, if offered.]" },
      { tag: "[Confirm]", name: "[Service or brand name]", text: "[Placeholder — e.g. art classes, workshops, or a loyalty programme, if offered.]" },
      { tag: "[Confirm]", name: "[Service or brand name]", text: "[Placeholder — e.g. bulk/institutional supply for schools, if run as a distinct offering.]" }
    ]
  },

  corpTeaser: {
    label: "For corporates",
    title: `A procurement partner that <em>shows up.</em>`,
    text: "We also supply offices and institutions across Pune — bulk orders, recurring supply, and billing that keeps your accounts team happy.",
    cta: { label: "Explore corporate supply →", href: "corporate.html" }
  },

  stores: {
    visualHeading: `Six stores, <em>one city.</em>`,
    visualSub: "Walk into any Venus Traders across Pune — same stock philosophy, same family, five decades running.",
    photoNote: "[Dummy stock photos throughout this section — replace each with a real photo of that store's frontage or interior.]",
    list: [
      { name: "FC Road — Deccan Gymkhana", meta: "Venus Point Lane, Fergusson College Rd, opp. OBC Tower, Deccan Gymkhana, Pune 411004 · 020 4100 6423", days: "All days", hours: "10:00 AM – 9:30 PM", photo: "https://picsum.photos/seed/venus-store-fcroad/600/400" },
      { name: "Appa Balwant Chowk", meta: "Appa Balwant Chowk, Pune · 020 4100 6432", days: "All days", hours: "[Hours — owners to confirm]", photo: "https://picsum.photos/seed/venus-store-abc/600/400" },
      { name: "Kothrud", meta: "Silver Fern Building, Karve Road, opp. Kothrud Bus Stand, Pune 411038 · 020 2545 5868", days: "All days", hours: "10:00 AM – 9:00 PM", photo: "https://picsum.photos/seed/venus-store-kothrud/600/400" },
      { name: "Wanowrie", meta: "Wanowrie, Pune · 020 4125 7000", days: "All days", hours: "[Hours — owners to confirm]", photo: "https://picsum.photos/seed/venus-store-wanowrie/600/400" },
      { name: "Magarpatta", meta: "Magarpatta, Pune · 020 6723 6724", days: "All days", hours: "[Hours — owners to confirm]", photo: "https://picsum.photos/seed/venus-store-magarpatta/600/400" },
      { name: "Baner", meta: "Baner, Pune · 077440 04433", days: "All days", hours: "[Hours — owners to confirm]", photo: "https://picsum.photos/seed/venus-store-baner/600/400" }
    ]
  },

  testimonials: {
    label: "Kind words",
    title: `Trusted by Pune's <em>schools, studios</em> & boardrooms.`,
    note: "Note: real customer testimonials and photo/name permission need to be collected before launch — see content requirements doc.",
    list: [
      { quote: "[Placeholder — needs a real testimonial and written permission to publish, from a long-time customer, e.g. a parent or student.]", name: "[Customer name]", role: "[Role · area]" },
      { quote: "[Placeholder — a testimonial from a corporate/office client, if one is willing to be quoted and named.]", name: "[Customer name]", role: "[Role · company]" },
      { quote: "[Placeholder — a testimonial from an artist or hobbyist customer, if one is willing to be quoted and named.]", name: "[Customer name]", role: "[Role]" }
    ]
  },

  cta: {
    heading: `Come say <em>hello.</em>`,
    text: "Three generations of stationers, ready to help you find exactly what you need — or something you didn't know you wanted.",
    button: { label: "Find your nearest store →", href: "#stores" }
  },

  footer: {
    blurb: "Pune's stationery superstore since 1974. Family-run, three generations strong, six stores across the city.",
    shopLinks: ["School & Office Stationery", "Fine Arts", "Hobbies & Crafts", "Festive Decorations & Gifting"],
    companyLinks: [
      { label: "Our Story", href: "#heritage" },
      { label: "Beyond the Shelf", href: "#brands" },
      { label: "Corporate", href: "corporate.html" },
      { label: "Careers", href: "#" }
    ],
    visitLinks: ["FC Road", "Kothrud", "Appa Balwant Chowk", "Baner"],
    copyright: "© 1974–2026 Venus Traders · Pune. [Confirm legal entity name, e.g. sole proprietorship/partnership/Pvt. Ltd.]",
    tagline: "Made with ink, paper & five decades of practice."
  }
};

/* ---------------------------------------------------------------------- */
/* Renderer — injects the content above into the containers in index.html */
/* ---------------------------------------------------------------------- */

function renderHome(content) {

  // Hero
  document.getElementById("hero-tag").textContent = content.hero.tag;
  document.getElementById("hero-heading").innerHTML = content.hero.heading;
  document.getElementById("hero-lede").textContent = content.hero.lede;
  document.getElementById("hero-primary-cta").textContent = content.hero.primaryCta.label;
  document.getElementById("hero-primary-cta").href = content.hero.primaryCta.href;
  document.getElementById("hero-secondary-cta").textContent = content.hero.secondaryCta.label;
  document.getElementById("hero-secondary-cta").href = content.hero.secondaryCta.href;
  document.getElementById("hero-quote-label").textContent = content.hero.quote.label;
  document.getElementById("hero-quote-text").textContent = `"${content.hero.quote.text}"`;
  document.getElementById("hero-quote-sig").textContent = content.hero.quote.signature;
  document.getElementById("hero-stamps").innerHTML = content.hero.stamps.map(s => `
    <div class="stamp"><strong>${s.value}</strong> ${s.label}</div>
  `).join("");
  document.getElementById("hero-photo").src = content.hero.photo.src;
  document.getElementById("hero-photo").alt = content.hero.photo.alt;
  document.getElementById("hero-photo-caption").textContent = content.hero.photo.caption;

  // Heritage
  document.getElementById("heritage-label").textContent = content.heritage.label;
  document.getElementById("heritage-title").innerHTML = content.heritage.title;
  document.getElementById("heritage-lede").textContent = content.heritage.lede;
  document.getElementById("timeline").innerHTML = content.heritage.timeline.map(t => `
    <div class="tl-card">
      <div class="tl-year">${t.year}</div>
      <div class="tl-head">${t.head}</div>
      <p class="tl-text">${t.text}</p>
    </div>
  `).join("");
  document.getElementById("heritage-photo").src = content.heritage.photo.src;
  document.getElementById("heritage-photo").alt = content.heritage.photo.alt;
  document.getElementById("heritage-photo-caption").textContent = content.heritage.photo.caption;

  // Categories
  document.getElementById("categories-label").textContent = content.categories.label;
  document.getElementById("categories-title").innerHTML = content.categories.title;
  document.getElementById("categories-intro").textContent = content.categories.intro;
  document.getElementById("cat-grid").innerHTML = content.categories.list.map(c => `
    <a class="cat-card ${c.tint}">
      <div class="cat-icon">${c.icon}</div>
      <div>
        <div class="cat-name">${c.name}</div>
        <div class="cat-count">${c.count}</div>
      </div>
      <div class="cat-arrow">→</div>
    </a>
  `).join("");

  // Brands / Beyond the Shelf
  document.getElementById("brands-label").textContent = content.brands.label;
  document.getElementById("brands-title").textContent = content.brands.title;
  document.getElementById("brands-lede").textContent = content.brands.lede;
  document.getElementById("brand-grid").innerHTML = content.brands.items.map(b => `
    <div class="brand-card">
      <div class="brand-mark"><span class="dot"></span>${b.tag}</div>
      <h3>${b.name}</h3>
      <p>${b.text}</p>
      <a class="brand-link">Learn more →</a>
    </div>
  `).join("");

  // Corporate teaser
  document.getElementById("corp-teaser-label").textContent = content.corpTeaser.label;
  document.getElementById("corp-teaser-title").innerHTML = content.corpTeaser.title;
  document.getElementById("corp-teaser-text").textContent = content.corpTeaser.text;
  const corpBtn = document.getElementById("corp-teaser-btn");
  corpBtn.textContent = content.corpTeaser.cta.label;
  corpBtn.href = content.corpTeaser.cta.href;

  // Stores
  document.getElementById("stores-visual-heading").innerHTML = content.stores.visualHeading;
  document.getElementById("stores-visual-sub").textContent = content.stores.visualSub;
  document.getElementById("store-list").innerHTML = content.stores.list.map(s => `
    <div class="store-item">
      <img class="store-photo" src="${s.photo}" alt="Placeholder photo of ${s.name} store" />
      <h5>${s.name}</h5>
      <div class="meta">${s.meta}</div>
      <div class="hrs"><span>${s.days}</span><strong>${s.hours}</strong></div>
    </div>
  `).join("");
  document.getElementById("stores-photo-note").textContent = content.stores.photoNote;

  // Testimonials
  document.getElementById("testi-label").textContent = content.testimonials.label;
  document.getElementById("testi-title").innerHTML = content.testimonials.title;
  document.getElementById("testi-grid").innerHTML = content.testimonials.list.map(t => `
    <div class="testi-card">
      <div class="stars">★★★★★</div>
      <blockquote>"${t.quote}"</blockquote>
      <div class="testi-foot">
        <div class="testi-avatar">?</div>
        <div>
          <div class="testi-name">${t.name}</div>
          <div class="testi-role">${t.role}</div>
        </div>
      </div>
    </div>
  `).join("");
  document.getElementById("testi-note").textContent = content.testimonials.note;

  // CTA
  document.getElementById("cta-heading").innerHTML = content.cta.heading;
  document.getElementById("cta-text").textContent = content.cta.text;
  const ctaBtn = document.getElementById("cta-btn");
  ctaBtn.textContent = content.cta.button.label;
  ctaBtn.href = content.cta.button.href;

  // Footer
  document.getElementById("footer-blurb").textContent = content.footer.blurb;
  document.getElementById("footer-shop-links").innerHTML = content.footer.shopLinks.map(l => `<li><a>${l}</a></li>`).join("");
  document.getElementById("footer-company-links").innerHTML = content.footer.companyLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
  document.getElementById("footer-visit-links").innerHTML = content.footer.visitLinks.map(l => `<li><a>${l}</a></li>`).join("");
  document.getElementById("footer-copyright").textContent = content.footer.copyright;
  document.getElementById("footer-tagline").textContent = content.footer.tagline;
}

document.addEventListener("DOMContentLoaded", () => renderHome(homeContent));
