/**
 * corporate-content.js
 * --------------------
 * All editable TEXT CONTENT for corporate.html lives in this file.
 * Bracketed [placeholders] are still waiting on real details from the
 * Venus Traders family/team — replace the whole bracketed string once
 * confirmed. Do not edit corporate.html or style.css for routine copy
 * changes — edit the values below instead.
 */

const corporateContent = {

  hero: {
    breadcrumb: `<a href="index.html">Home</a> / Corporate`,
    label: "For corporates",
    heading: `A procurement partner that <em>shows up.</em>`,
    lede: "From start-ups to established Pune businesses — we handle the stationery so you can handle the work. [Placeholder — confirm this is the right framing, and whether there's a minimum order size or client type we focus on.]",
    stats: [
      { value: "[?]", label: "years supplying Pune offices" },
      { value: "[?]", label: "companies currently supplied" },
      { value: "[?]", label: "stores able to fulfil bulk orders" }
    ],
    photo: {
      src: "https://picsum.photos/seed/venus-corporate/1200/500",
      alt: "Placeholder photo of bulk office stationery supplies",
      caption: "[Dummy stock photo — replace with a real photo of a bulk order, delivery, or an office set up with Venus Traders supplies.]"
    }
  },

  features: {
    label: "What you get",
    title: "Procurement, without the chasing.",
    lede: "[Placeholder — confirm which of these are genuinely offered today; remove or edit any that aren't.]",
    list: [
      { icon: "①", name: "A single point of contact", text: "[Placeholder — confirm: dedicated account manager or contact person per client, so orders don't get lost between calls.]" },
      { icon: "②", name: "GST-compliant billing", text: "[Placeholder — confirm: proper invoicing, monthly statements, and credit terms for regular clients.]" },
      { icon: "③", name: "Reliable delivery", text: "[Placeholder — confirm delivery service, coverage area across Pune, and order cut-off time, if offered.]" },
      { icon: "④", name: "Custom & branded stationery", text: "[Placeholder — confirm: custom catalogues, logo-branded stationery, and onboarding kits for new hires.]" },
      { icon: "⑤", name: "Subscription supply", text: "[Placeholder — confirm: recurring/scheduled deliveries so offices don't have to re-order every time.]" },
      { icon: "⑥", name: "Bulk pricing", text: "[Placeholder — confirm whether bulk/volume pricing is offered, and any minimum order value.]" }
    ]
  },

  process: {
    label: "How it works",
    title: "Four steps, start to finish.",
    steps: [
      { num: "01", title: "Tell us what you need", text: "[Placeholder — confirm: via form, call, or WhatsApp?]" },
      { num: "02", title: "We quote & confirm", text: "[Placeholder — confirm typical turnaround time for a quote.]" },
      { num: "03", title: "We deliver", text: "[Placeholder — confirm delivery timelines and areas covered.]" },
      { num: "04", title: "We bill", text: "[Placeholder — confirm billing cycle: per-order, monthly, or credit terms.]" }
    ]
  },

  whoWeServe: {
    label: "Who we serve",
    title: "Built for Pune's offices, schools & institutions.",
    list: [
      { icon: "🏢", name: "[Confirm — e.g. Corporate offices]" },
      { icon: "🏫", name: "[Confirm — e.g. Schools & colleges]" },
      { icon: "🚀", name: "[Confirm — e.g. Start-ups]" },
      { icon: "🏭", name: "[Confirm — e.g. Manufacturing units]" }
    ]
  },

  faq: {
    label: "Questions",
    title: "Before you reach out.",
    list: [
      { q: "Is there a minimum order size?", a: "[Placeholder — confirm minimum order value/quantity for corporate orders, if any.]" },
      { q: "Which areas of Pune do you deliver to?", a: "[Placeholder — confirm delivery coverage area and any delivery charges.]" },
      { q: "Can you supply branded/custom stationery?", a: "[Placeholder — confirm lead time and minimum quantities for custom/branded items.]" },
      { q: "How does billing work?", a: "[Placeholder — confirm invoicing process, payment terms, and credit period for regular clients.]" }
    ]
  },

  form: {
    heading: "Talk to our team",
    sub: "[Placeholder — confirm expected response time, e.g. 'We'll get back within one business day.']",
    fields: {
      company: "Company name",
      name: "Your name",
      email: "Work email",
      phone: "Phone number",
      need: "What do you need?"
    },
    submitLabel: "Request a quote →"
  },

  footer: {
    blurb: "Pune's stationery superstore since 1974. Family-run, three generations strong, six stores across the city.",
    shopLinks: ["School & Office Stationery", "Fine Arts", "Hobbies & Crafts", "Festive Decorations & Gifting"],
    companyLinks: [
      { label: "Our Story", href: "index.html#heritage" },
      { label: "Beyond the Shelf", href: "index.html#brands" },
      { label: "Corporate", href: "corporate.html" },
      { label: "Careers", href: "#" }
    ],
    visitLinks: ["FC Road", "Kothrud", "Appa Balwant Chowk", "Baner"],
    copyright: "© 1974–2026 Venus Traders · Pune. [Confirm legal entity name, e.g. sole proprietorship/partnership/Pvt. Ltd.]",
    tagline: "Made with ink, paper & five decades of practice."
  }
};

/* ---------------------------------------------------------------------- */
/* Renderer — injects the content above into the containers in corporate.html */
/* ---------------------------------------------------------------------- */

function renderCorporate(content) {

  // Hero
  document.getElementById("corp-breadcrumb").innerHTML = content.hero.breadcrumb;
  document.getElementById("corp-hero-label").textContent = content.hero.label;
  document.getElementById("corp-hero-heading").innerHTML = content.hero.heading;
  document.getElementById("corp-hero-lede").textContent = content.hero.lede;
  document.getElementById("corp-stats").innerHTML = content.hero.stats.map(s => `
    <div class="stamp"><strong>${s.value}</strong> ${s.label}</div>
  `).join("");
  document.getElementById("corp-photo").src = content.hero.photo.src;
  document.getElementById("corp-photo").alt = content.hero.photo.alt;
  document.getElementById("corp-photo-caption").textContent = content.hero.photo.caption;

  // Features
  document.getElementById("features-label").textContent = content.features.label;
  document.getElementById("features-title").textContent = content.features.title;
  document.getElementById("features-lede").textContent = content.features.lede;
  document.getElementById("feature-grid").innerHTML = content.features.list.map(f => `
    <div class="feature-card">
      <div class="f-icon">${f.icon}</div>
      <h4>${f.name}</h4>
      <p>${f.text}</p>
    </div>
  `).join("");

  // Process
  document.getElementById("process-label").textContent = content.process.label;
  document.getElementById("process-title").textContent = content.process.title;
  document.getElementById("process-grid").innerHTML = content.process.steps.map(s => `
    <div class="process-step">
      <div class="process-num">${s.num}</div>
      <h5>${s.title}</h5>
      <p>${s.text}</p>
    </div>
  `).join("");

  // Who we serve
  document.getElementById("who-label").textContent = content.whoWeServe.label;
  document.getElementById("who-title").textContent = content.whoWeServe.title;
  document.getElementById("who-grid").innerHTML = content.whoWeServe.list.map(w => `
    <div class="who-card">
      <div class="w-icon">${w.icon}</div>
      <h6>${w.name}</h6>
    </div>
  `).join("");

  // FAQ
  document.getElementById("faq-label").textContent = content.faq.label;
  document.getElementById("faq-title").textContent = content.faq.title;
  document.getElementById("faq-list").innerHTML = content.faq.list.map(f => `
    <div class="faq-item">
      <h6>${f.q}</h6>
      <p>${f.a}</p>
    </div>
  `).join("");

  // Form
  document.getElementById("form-heading").textContent = content.form.heading;
  document.getElementById("form-sub").textContent = content.form.sub;
  document.getElementById("field-company").placeholder = content.form.fields.company;
  document.getElementById("field-name").placeholder = content.form.fields.name;
  document.getElementById("field-email").placeholder = content.form.fields.email;
  document.getElementById("field-phone").placeholder = content.form.fields.phone;
  document.getElementById("field-need").placeholder = content.form.fields.need;
  document.getElementById("form-submit").textContent = content.form.submitLabel;

  // Footer
  document.getElementById("footer-blurb").textContent = content.footer.blurb;
  document.getElementById("footer-shop-links").innerHTML = content.footer.shopLinks.map(l => `<li><a>${l}</a></li>`).join("");
  document.getElementById("footer-company-links").innerHTML = content.footer.companyLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`).join("");
  document.getElementById("footer-visit-links").innerHTML = content.footer.visitLinks.map(l => `<li><a>${l}</a></li>`).join("");
  document.getElementById("footer-copyright").textContent = content.footer.copyright;
  document.getElementById("footer-tagline").textContent = content.footer.tagline;
}

document.addEventListener("DOMContentLoaded", () => renderCorporate(corporateContent));
