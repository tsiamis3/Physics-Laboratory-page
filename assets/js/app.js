/* =====================================================================
 *  LAB SITE ENGINE
 *  ---------------------------------------------------------------------
 *  You normally do NOT need to edit this file. Content lives in /data,
 *  looks live in /assets/css. Structure:
 *
 *    I18n         – language state, bilingual field picking, dates
 *    Art          – placeholder graphics (initials avatars, patterns)
 *    Modal        – animated pop-up window + deep links (#people/id)
 *    Lightbox     – full-screen image viewer for galleries
 *    TrackCanvas  – animated particle tracks in the home header
 *    Layout       – header / menu / language switch / footer
 *    Page         – base class shared by all pages (cards, links, ...)
 *      HomePage, PeoplePage, ResearchPage, ProjectsPage, NewsPage
 *    LabSite      – boots everything for the current <body data-page>
 * ===================================================================== */
(function () {
  "use strict";

  const LAB = window.LAB || {};
  const CFG = LAB.config || {};

  /* ---------- small helpers ---------- */
  const esc = (s) =>
    String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])
    );
  const visible = (list) =>
    (list || [])
      .filter((x) => x && !x.hidden)
      .map((x, i) => ({ x, i }))
      .sort((a, b) => (a.x.order ?? 1e9) - (b.x.order ?? 1e9) || a.i - b.i)
      .map((o) => o.x);
  const byId = (list, id) => (list || []).find((x) => x.id === id);
  const hashString = (s) => {
    let h = 2166136261;
    for (const ch of String(s)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619);
    return h >>> 0;
  };
  const reducedMotion = () =>
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* =================================================================
   *  I18n
   * ================================================================= */
  class I18n {
    constructor(config, strings) {
      this.config = config;
      this.strings = strings || {};
      this.languages = config.languages || ["en"];
      this.listeners = [];
      this.lang = this.initialLang();
      document.documentElement.lang = this.lang;
    }
    initialLang() {
      const fromUrl = new URLSearchParams(location.search).get("lang");
      if (fromUrl && this.languages.includes(fromUrl)) return fromUrl;
      try {
        const saved = localStorage.getItem("lab-lang");
        if (saved && this.languages.includes(saved)) return saved;
      } catch (e) { /* storage unavailable */ }
      return this.config.defaultLang || this.languages[0];
    }
    set(lang) {
      if (!this.languages.includes(lang) || lang === this.lang) return;
      this.lang = lang;
      try { localStorage.setItem("lab-lang", lang); } catch (e) { /* ignore */ }
      document.documentElement.lang = lang;
      this.listeners.forEach((fn) => fn(lang));
    }
    toggle() {
      const i = this.languages.indexOf(this.lang);
      this.set(this.languages[(i + 1) % this.languages.length]);
    }
    onChange(fn) { this.listeners.push(fn); }
    /** Bilingual value → text in current language (falls back to default language). */
    pick(v) {
      if (v == null) return "";
      if (typeof v === "object" && !Array.isArray(v)) {
        return v[this.lang] ?? v[this.config.defaultLang] ?? Object.values(v)[0] ?? "";
      }
      return v;
    }
    /** Interface string from data/ui-strings.js */
    t(key) {
      const e = this.strings[key];
      return e ? this.pick(e) : key;
    }
    locale() { return this.lang === "el" ? "el-GR" : "en-GB"; }
    /** "2026-11-14" → "14 November 2026";  "2024-03" → "March 2024";  "2024" → "2024" */
    date(iso, style) {
      if (!iso) return "";
      const parts = String(iso).split("-");
      const d = new Date(+parts[0], parts[1] ? +parts[1] - 1 : 0, parts[2] ? +parts[2] : 1, 12);
      if (parts.length === 1) return parts[0];
      const opts = parts.length === 2
        ? { month: "short", year: "numeric" }
        : style === "short" ? { day: "numeric", month: "short", year: "numeric" }
                            : { day: "numeric", month: "long", year: "numeric" };
      return d.toLocaleDateString(this.locale(), opts);
    }
  }

  /* =================================================================
   *  Art – placeholder graphics when no image is given
   * ================================================================= */
  class Art {
    static initials(name) {
      const clean = String(name).replace(/^(Prof\.|Dr\.|Καθ\.|Δρ\.)\s*/i, "");
      return clean.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("")
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase();
    }
    static avatar(name, seed) {
      const hue = hashString(seed || name) % 360;
      return `<div class="placeholder placeholder--avatar" style="--ph-hue:${hue}" aria-hidden="true">
                <span>${esc(Art.initials(name))}</span></div>`;
    }
    /** Abstract "detector / orbit" pattern, deterministic per seed. */
    static pattern(seed) {
      const h = hashString(seed);
      const rnd = (() => { let s = h || 1; return () => ((s = Math.imul(s ^ (s >>> 15), 2246822519) >>> 0) / 4294967296); })();
      const cx = 140 + rnd() * 120, cy = 60 + rnd() * 60;
      let paths = "";
      for (let k = 0; k < 7; k++) {
        const r = 20 + k * 22 + rnd() * 10;
        paths += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" />`;
      }
      let tracks = "";
      for (let k = 0; k < 5; k++) {
        const a = rnd() * Math.PI * 2, len = 120 + rnd() * 160, bend = (rnd() - 0.5) * 160;
        const x2 = cx + Math.cos(a) * len, y2 = cy + Math.sin(a) * len;
        const mx = (cx + x2) / 2 - Math.sin(a) * bend, my = (cy + y2) / 2 + Math.cos(a) * bend;
        tracks += `<path d="M${cx.toFixed(1)} ${cy.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}" />`;
      }
      return `<div class="placeholder placeholder--pattern" style="--ph-hue:${h % 360}" aria-hidden="true">
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice">
          <g class="ph-rings">${paths}</g><g class="ph-tracks">${tracks}</g>
          <circle class="ph-vertex" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.5"/>
        </svg></div>`;
    }
  }

  /* =================================================================
   *  Modal – animated pop-up, deep-linkable with #<kind>/<id>
   * ================================================================= */
  class Modal {
    constructor(i18n) {
      this.i18n = i18n;
      this.el = document.createElement("div");
      this.el.className = "modal";
      this.el.hidden = true;
      this.el.innerHTML = `
        <div class="modal__backdrop" data-close></div>
        <div class="modal__panel" role="dialog" aria-modal="true" tabindex="-1">
          <button class="modal__close" type="button" data-close>&times;</button>
          <div class="modal__body"></div>
        </div>`;
      document.body.appendChild(this.el);
      this.body = this.el.querySelector(".modal__body");
      this.panel = this.el.querySelector(".modal__panel");
      this.el.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) this.close(); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && this.isOpen) this.close(); });
      this.isOpen = false;
      this.lastFocus = null;
    }
    open(html, hash) {
      this.el.querySelector(".modal__close").setAttribute("aria-label", this.i18n.t("close"));
      this.body.innerHTML = html;
      this.panel.scrollTop = 0;
      if (!this.isOpen) {
        this.lastFocus = document.activeElement;
        this.el.hidden = false;
        document.documentElement.classList.add("no-scroll");
        requestAnimationFrame(() => requestAnimationFrame(() => this.el.classList.add("is-open")));
      }
      this.isOpen = true;
      if (hash) history.replaceState(null, "", "#" + hash);
      this.panel.focus({ preventScroll: true });
    }
    close() {
      if (!this.isOpen) return;
      this.isOpen = false;
      this.el.classList.remove("is-open");
      document.documentElement.classList.remove("no-scroll");
      history.replaceState(null, "", location.pathname + location.search);
      const done = () => { if (!this.isOpen) this.el.hidden = true; };
      reducedMotion() ? done() : setTimeout(done, 280);
      if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus({ preventScroll: true });
    }
  }

  /* =================================================================
   *  Lightbox – click a gallery image to see it full-screen
   * ================================================================= */
  class Lightbox {
    constructor() {
      this.el = document.createElement("div");
      this.el.className = "lightbox";
      this.el.hidden = true;
      this.el.innerHTML = `<button class="lightbox__nav lightbox__prev" type="button" aria-label="Previous">&#8249;</button>
        <figure><img alt=""><figcaption></figcaption></figure>
        <button class="lightbox__nav lightbox__next" type="button" aria-label="Next">&#8250;</button>`;
      document.body.appendChild(this.el);
      this.img = this.el.querySelector("img");
      this.cap = this.el.querySelector("figcaption");
      this.items = []; this.index = 0;
      this.el.addEventListener("click", (e) => {
        if (e.target.closest(".lightbox__prev")) return this.step(-1);
        if (e.target.closest(".lightbox__next")) return this.step(1);
        this.close();
      });
      document.addEventListener("keydown", (e) => {
        if (this.el.hidden) return;
        if (e.key === "Escape") { e.stopImmediatePropagation(); this.close(); }
        if (e.key === "ArrowLeft") this.step(-1);
        if (e.key === "ArrowRight") this.step(1);
      }, true);
      document.addEventListener("click", (e) => {
        const a = e.target.closest("[data-lightbox]");
        if (!a) return;
        e.preventDefault();
        const group = [...document.querySelectorAll(`[data-lightbox="${a.dataset.lightbox}"]`)];
        this.items = group.map((g) => ({ src: g.getAttribute("href"), caption: g.dataset.caption || "" }));
        this.open(group.indexOf(a));
      });
    }
    open(i) { this.index = i; this.show(); this.el.hidden = false; requestAnimationFrame(() => this.el.classList.add("is-open")); }
    step(d) { this.index = (this.index + d + this.items.length) % this.items.length; this.show(); }
    show() {
      const it = this.items[this.index];
      this.img.src = it.src; this.cap.textContent = it.caption;
      this.el.classList.toggle("is-single", this.items.length < 2);
    }
    close() { this.el.classList.remove("is-open"); setTimeout(() => (this.el.hidden = true), 200); }
  }

  /* =================================================================
   *  TrackCanvas – charged particles curling in a magnetic field
   * ================================================================= */
  class TrackCanvas {
    constructor(canvas) {
      this.canvas = canvas;
      this.ctx = canvas.getContext("2d");
      this.tracks = [];
      this.running = false;
      this.color = getComputedStyle(canvas).getPropertyValue("--track-color").trim() || "rgba(140,190,255,.8)";
      this.color2 = getComputedStyle(canvas).getPropertyValue("--track-color-2").trim() || this.color;
      this.resize();
      window.addEventListener("resize", () => this.resize());
      if (reducedMotion()) { this.drawStatic(); return; }
      new IntersectionObserver(([e]) => (e.isIntersecting ? this.start() : this.stop())).observe(canvas);
      document.addEventListener("visibilitychange", () => (document.hidden ? this.stop() : this.start()));
    }
    resize() {
      const r = this.canvas.getBoundingClientRect();
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);
      this.w = r.width; this.h = r.height;
      this.canvas.width = r.width * this.dpr; this.canvas.height = r.height * this.dpr;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
    spawnEvent() {
      const x = this.w * (0.35 + Math.random() * 0.6), y = this.h * (0.15 + Math.random() * 0.7);
      const n = 2 + Math.floor(Math.random() * 4);
      for (let k = 0; k < n; k++) {
        const a = Math.random() * Math.PI * 2;
        const v = 1.6 + Math.random() * 2.2;
        this.tracks.push({
          x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          omega: (Math.random() < 0.5 ? -1 : 1) * (0.004 + Math.random() * 0.03),
          loss: 0.993 + Math.random() * 0.006, life: 260 + Math.random() * 240,
          c: Math.random() < 0.7 ? this.color : this.color2
        });
      }
    }
    step() {
      const ctx = this.ctx;
      // fade previous frame to transparent → old tracks slowly disappear
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.018)";
      ctx.fillRect(0, 0, this.w, this.h);
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 1.1; ctx.lineCap = "round";
      if (Math.random() < 0.018 || this.tracks.length === 0) this.spawnEvent();
      for (const t of this.tracks) {
        for (let s = 0; s < 2; s++) {
          const c = Math.cos(t.omega), sn = Math.sin(t.omega);
          const vx = t.vx * c - t.vy * sn, vy = t.vx * sn + t.vy * c;
          t.vx = vx * t.loss; t.vy = vy * t.loss; t.omega /= t.loss; // slower → tighter spiral
          ctx.strokeStyle = t.c;
          ctx.beginPath(); ctx.moveTo(t.x, t.y);
          t.x += t.vx; t.y += t.vy; ctx.lineTo(t.x, t.y); ctx.stroke();
          t.life--;
        }
      }
      this.tracks = this.tracks.filter((t) => t.life > 0 && Math.hypot(t.vx, t.vy) > 0.15 &&
        t.x > -50 && t.x < this.w + 50 && t.y > -50 && t.y < this.h + 50);
    }
    loop() { if (!this.running) return; this.step(); requestAnimationFrame(() => this.loop()); }
    start() { if (this.running) return; this.running = true; this.loop(); }
    stop() { this.running = false; }
    drawStatic() { for (let i = 0; i < 4; i++) this.spawnEvent(); for (let i = 0; i < 400; i++) this.step(); }
  }

  /* =================================================================
   *  Layout – header, nav, language switch, footer
   * ================================================================= */
  class Layout {
    constructor(site) { this.site = site; this.i = site.i18n; }
    render() {
      const i = this.i, page = this.site.pageId;
      const nav = (CFG.nav || []).map((n) =>
        `<a href="${esc(n.href)}" class="nav__link${n.id === page ? " is-active" : ""}"${n.id === page ? ' aria-current="page"' : ""}>${esc(i.pick(n.label))}</a>`
      ).join("");
      const header = document.getElementById("site-header");
      header.className = "site-header";
      header.innerHTML = `
        <div class="container site-header__inner">
          <a class="brand" href="index.html">
            ${CFG.logo ? `<img class="brand__logo" src="${esc(CFG.logo)}" alt="">` : ""}
            <span class="brand__text">
              <span class="brand__name">${esc(i.pick(CFG.name))}</span>
              <span class="brand__inst">${esc(i.pick(CFG.institution))}</span>
            </span>
          </a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav">
            <span class="nav-toggle__bar"></span><span class="visually-hidden">${esc(i.t("menu"))}</span>
          </button>
          <nav class="nav" id="main-nav">
            ${nav}
            <button class="lang-switch" type="button" title="${esc(i.t("lang.switch"))}">
              <span class="lang-switch__icon" aria-hidden="true"></span>${esc(i.t("lang.switchShort"))}
            </button>
          </nav>
        </div>`;
      header.querySelector(".lang-switch").addEventListener("click", () => i.toggle());
      const toggle = header.querySelector(".nav-toggle");
      toggle.addEventListener("click", () => {
        const open = header.classList.toggle("nav-open");
        toggle.setAttribute("aria-expanded", open);
      });
      if (!this.scrollBound) {
        this.scrollBound = true;
        const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
        window.addEventListener("scroll", onScroll, { passive: true }); onScroll();
      }

      const c = CFG.contact || {};
      const footer = document.getElementById("site-footer");
      footer.className = "site-footer";
      footer.innerHTML = `
        <div class="container site-footer__grid">
          <div>
            <div class="site-footer__name">${esc(i.pick(CFG.name))}</div>
            <div class="muted">${esc(i.pick(CFG.institution))}</div>
          </div>
          <div class="site-footer__contact">
            ${c.address ? `<div>${esc(i.pick(c.address))}</div>` : ""}
            ${c.email ? `<div><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></div>` : ""}
            ${c.phone ? `<div>${esc(c.phone)}</div>` : ""}
          </div>
          <div class="site-footer__links">
            ${(CFG.footerLinks || []).map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(i.pick(l.label))}</a>`).join("")}
          </div>
        </div>
        <div class="container site-footer__bottom muted">© ${new Date().getFullYear()} ${esc(i.pick(CFG.name))}. ${esc(i.t("footer.rights"))}</div>`;
    }
  }

  /* =================================================================
   *  Page – shared building blocks for all pages
   * ================================================================= */
  class Page {
    constructor(site) {
      this.site = site;
      this.i = site.i18n;
      this.modal = site.modal;
      this.main = document.getElementById("main");
      this.filter = "all";
      /** kind used in deep links (#kind/id); subclasses set it */
      this.kind = null;
    }
    /* --- to be implemented by subclasses --- */
    render() {}
    detail(id) { return null; } // → html string for the modal, or null

    /* --- deep links --- */
    openFromHash() {
      const m = location.hash.match(/^#([\w-]+)\/(.+)$/);
      if (m && m[1] === this.kind) this.openDetail(decodeURIComponent(m[2]));
    }
    openDetail(id) {
      const html = this.detail(id);
      if (html) { this.modal.open(html, `${this.kind}/${id}`); this.site.reveal.scan(this.modal.body); }
    }
    bindCards(root) {
      root.querySelectorAll("[data-open]").forEach((card) => {
        const go = (e) => {
          if (e.target.closest("a[href]") && !e.target.closest("a[href^='#']")) return; // real links work normally
          e.preventDefault();
          this.openDetail(card.dataset.open);
        };
        card.addEventListener("click", go);
        card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") go(e); });
      });
    }

    /* --- markup helpers --- */
    pageHead(titleKey, leadKey) {
      document.title = `${this.i.t(titleKey)} · ${this.i.pick(CFG.name)}`;
      return `<header class="page-head"><div class="container">
        <h1 class="page-head__title reveal">${esc(this.i.t(titleKey))}</h1>
        <p class="page-head__lead reveal">${esc(this.i.t(leadKey))}</p></div></header>`;
    }
    /** Responsive image box. ratio = CSS aspect-ratio ("16/9", "1/1", "4/5") */
    media(src, alt, { ratio = "16/9", position, fallback = "", cls = "" } = {}) {
      const style = `--ratio:${ratio};${position ? `--pos:${position};` : ""}`;
      const inner = src
        ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"
             onerror="this.remove()">${fallback}`
        : fallback;
      return `<div class="media ${cls}" style="${style}">${inner}</div>`;
    }
    links(list) {
      if (!list || !list.length) return "";
      return `<div class="link-list">${list.map((l) =>
        `<a class="btn btn--ghost" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(this.i.pick(l.label) || l.url)}<span aria-hidden="true"> ↗</span></a>`
      ).join("")}</div>`;
    }
    tags(list) {
      const arr = Array.isArray(list) ? list : this.i.pick(list);
      if (!arr || !arr.length) return "";
      return `<ul class="tags">${arr.map((k) => `<li>${esc(this.i.pick(k))}</li>`).join("")}</ul>`;
    }
    gallery(list, group) {
      if (!list || !list.length) return "";
      const items = list.map((g) => (typeof g === "string" ? { src: g } : g));
      return `<h3 class="detail__h">${esc(this.i.t("gallery"))}</h3><div class="gallery">${items.map((g) => {
        const cap = this.i.pick(g.caption);
        return `<a href="${esc(g.src)}" data-lightbox="${esc(group)}" data-caption="${esc(cap)}">
          ${this.media(g.src, cap, { ratio: "4/3" })}</a>`;
      }).join("")}</div>`;
    }
    filterBar(options, current) {
      if (options.length < 2) return "";
      return `<div class="filters reveal" role="toolbar">${[{ id: "all", label: this.i.t("all") }, ...options].map((o) =>
        `<button type="button" class="chip${o.id === current ? " is-active" : ""}" data-filter="${esc(o.id)}">${esc(o.label)}${o.count != null ? ` <span class="chip__count">${o.count}</span>` : ""}</button>`
      ).join("")}</div>`;
    }
    bindFilters(root) {
      root.querySelectorAll("[data-filter]").forEach((b) =>
        b.addEventListener("click", () => { this.filter = b.dataset.filter; this.render(); }));
    }
    /** <dl> of label/value rows; returns "" when every row is empty */
    facts(rows) {
      const html = rows.filter(Boolean).join("");
      return html ? `<dl class="facts">${html}</dl>` : "";
    }
    empty() { return `<p class="muted empty">${esc(this.i.t("noItems"))}</p>`; }

    /* --- shared card types used across pages --- */
    personMini(p) {
      const name = this.i.pick(p.name);
      return `<a class="person-mini" href="people.html#people/${encodeURIComponent(p.id)}">
        ${this.media(p.photo, name, { ratio: "1/1", position: p.photoPosition, fallback: Art.avatar(name, p.id), cls: "media--round" })}
        <span><strong>${esc(name)}</strong><span class="muted">${esc(this.i.pick(p.position))}</span></span></a>`;
    }
    chipLink(href, text) { return `<a class="chip chip--link" href="${esc(href)}">${esc(text)}</a>`; }
    projectStatus(p) {
      if (p.status) return p.status;
      if (!p.end) return "ongoing";
      const [y, m] = String(p.end).split("-").map(Number);
      return new Date(y, (m || 12), 0) < new Date() ? "completed" : "ongoing";
    }
    projectPeriod(p) {
      if (!p.start && !p.end) return "";
      return `${this.i.date(p.start)} – ${p.end ? this.i.date(p.end) : this.i.t("projects.present")}`;
    }
  }

  /* =================================================================
   *  HOME
   * ================================================================= */
  class HomePage extends Page {
    render() {
      const i = this.i;
      document.title = i.pick(CFG.name);
      const counts = {
        people: visible(LAB.people).length, research: visible(LAB.research).length,
        projects: visible(LAB.projects).length, news: visible(LAB.news).length
      };
      const tiles = (CFG.nav || []).filter((n) => n.id !== "home").map((n, k) => `
        <a class="tile reveal" style="--d:${k * 70}ms" href="${esc(n.href)}">
          <span class="tile__icon tile__icon--${esc(n.id)}" aria-hidden="true"></span>
          <span class="tile__title">${esc(i.pick(n.label))}${counts[n.id] ? `<span class="tile__count">${counts[n.id]}</span>` : ""}</span>
          <span class="tile__desc">${esc(i.t(`home.${n.id}.desc`))}</span>
          <span class="tile__arrow" aria-hidden="true">→</span>
        </a>`).join("");
      const news = NewsPage.sorted().slice(0, CFG.newsOnHome ?? 3);
      const c = CFG.contact || {};
      this.main.innerHTML = `
        <section class="hero${CFG.heroImage ? " hero--image" : ""}"${CFG.heroImage ? ` style="--hero-img:url('${esc(CFG.heroImage)}')"` : ""}>
          ${CFG.heroImage ? "" : '<canvas class="hero__canvas" aria-hidden="true"></canvas>'}
          <div class="container hero__inner">
            <p class="hero__kicker reveal">${esc(i.pick(CFG.institution))}</p>
            <h1 class="hero__title reveal" style="--d:80ms">${esc(i.pick(CFG.name))}</h1>
            <p class="hero__tagline reveal" style="--d:160ms">${esc(i.pick(CFG.tagline))}</p>
          </div>
        </section>

        <section class="section"><div class="container about">
          <h2 class="section__title reveal">${esc(i.t("home.about"))}</h2>
          <div class="prose reveal">${i.pick(CFG.intro)}</div>
        </div></section>

        <section class="section section--alt"><div class="container">
          <h2 class="section__title reveal">${esc(i.t("home.explore"))}</h2>
          <div class="tiles">${tiles}</div>
        </div></section>

        ${news.length ? `<section class="section"><div class="container">
          <div class="section__headrow">
            <h2 class="section__title reveal">${esc(i.t("home.latestNews"))}</h2>
            <a class="more-link reveal" href="news.html">${esc(i.t("viewAll"))} →</a>
          </div>
          <div class="news-list">${news.map((n, k) => NewsPage.card(this, n, k, true)).join("")}</div>
        </div></section>` : ""}

        <section class="section section--alt"><div class="container contact reveal">
          <h2 class="section__title">${esc(i.t("home.contact"))}</h2>
          <div class="contact__grid">
            ${c.address ? `<div><span class="label">📍</span>${c.mapUrl ? `<a href="${esc(c.mapUrl)}" target="_blank" rel="noopener">${esc(i.pick(c.address))}</a>` : esc(i.pick(c.address))}</div>` : ""}
            ${c.email ? `<div><span class="label">✉</span><a href="mailto:${esc(c.email)}">${esc(c.email)}</a></div>` : ""}
            ${c.phone ? `<div><span class="label">☎</span>${esc(c.phone)}</div>` : ""}
          </div>
        </div></section>`;
      const cv = this.main.querySelector(".hero__canvas");
      if (cv) new TrackCanvas(cv);
      // news cards on the home page open in a pop-up too
      this.kind = "news";
      this.detail = (id) => NewsPage.detailHtml(this, id);
      this.bindCards(this.main);
    }
  }

  /* =================================================================
   *  PEOPLE
   * ================================================================= */
  class PeoplePage extends Page {
    constructor(site) { super(site); this.kind = "people"; }
    render() {
      const i = this.i;
      const people = visible(LAB.people);
      const groups = (CFG.peopleGroups || []).map((g) => ({
        ...g, members: people.filter((p) => p.group === g.id)
      }));
      // people whose group is not listed in config still appear, at the end
      const known = new Set(groups.map((g) => g.id));
      const other = people.filter((p) => !known.has(p.group));
      if (other.length) groups.push({ id: "other", label: { en: "Other", el: "Λοιπά" }, members: other });
      const present = groups.filter((g) => g.members.length);
      const shown = present.filter((g) => this.filter === "all" || g.id === this.filter);

      this.main.innerHTML = this.pageHead("people.title", "people.lead") + `
        <section class="section section--tight"><div class="container">
          ${this.filterBar(present.map((g) => ({ id: g.id, label: i.pick(g.label), count: g.members.length })), this.filter)}
          ${shown.length ? shown.map((g) => `
            <div class="group">
              <h2 class="group__title reveal">${esc(i.pick(g.label))}</h2>
              <div class="grid grid--people">${g.members.map((p, k) => this.card(p, k)).join("")}</div>
            </div>`).join("") : this.empty()}
        </div></section>`;
      this.bindFilters(this.main);
      this.bindCards(this.main);
    }
    card(p, k) {
      const name = this.i.pick(p.name);
      return `<article class="card card--person reveal" style="--d:${(k % 8) * 50}ms" tabindex="0" role="button" data-open="${esc(p.id)}">
        ${this.media(p.photo, name, { ratio: "4/5", position: p.photoPosition, fallback: Art.avatar(name, p.id) })}
        <div class="card__body">
          <h3 class="card__title">${esc(name)}</h3>
          ${p.position ? `<p class="card__meta">${esc(this.i.pick(p.position))}</p>` : ""}
          ${p.short ? `<p class="card__text">${esc(this.i.pick(p.short))}</p>` : ""}
        </div></article>`;
    }
    detail(id) {
      const p = byId(LAB.people, id); if (!p) return null;
      const i = this.i, name = i.pick(p.name);
      const research = (p.research || []).map((r) => byId(LAB.research, r)).filter(Boolean);
      const projects = visible(LAB.projects).filter((pr) => (pr.people || []).includes(p.id));
      const group = byId(CFG.peopleGroups, p.group);
      return `<div class="detail detail--person">
        <div class="detail__side">
          ${this.media(p.photo, name, { ratio: "4/5", position: p.photoPosition, fallback: Art.avatar(name, p.id) })}
        </div>
        <div class="detail__main">
          ${group ? `<p class="detail__kicker">${esc(i.pick(group.label))}</p>` : ""}
          <h2 class="detail__title">${esc(name)}</h2>
          ${p.position ? `<p class="detail__sub">${esc(i.pick(p.position))}</p>` : ""}
          ${this.facts([
            p.email ? `<div><dt>${esc(i.t("people.email"))}</dt><dd><a href="mailto:${esc(p.email)}">${esc(p.email)}</a></dd></div>` : "",
            p.phone ? `<div><dt>${esc(i.t("people.phone"))}</dt><dd>${esc(p.phone)}</dd></div>` : "",
            p.office ? `<div><dt>${esc(i.t("people.office"))}</dt><dd>${esc(i.pick(p.office))}</dd></div>` : ""
          ])}
          ${p.bio ? `<div class="prose">${i.pick(p.bio)}</div>` : (p.short ? `<p>${esc(i.pick(p.short))}</p>` : "")}
          ${research.length ? `<h3 class="detail__h">${esc(i.t("people.research"))}</h3>
            <div class="chips">${research.map((r) => this.chipLink(`research.html#research/${encodeURIComponent(r.id)}`, i.pick(r.title))).join("")}</div>` : ""}
          ${projects.length ? `<h3 class="detail__h">${esc(i.t("people.projects"))}</h3>
            <div class="chips">${projects.map((pr) => this.chipLink(`projects.html#projects/${encodeURIComponent(pr.id)}`, pr.acronym || i.pick(pr.title))).join("")}</div>` : ""}
          ${p.links && p.links.length ? `<h3 class="detail__h">${esc(i.t("people.links"))}</h3>${this.links(p.links)}` : ""}
        </div></div>`;
    }
  }

  /* =================================================================
   *  RESEARCH
   * ================================================================= */
  class ResearchPage extends Page {
    constructor(site) { super(site); this.kind = "research"; }
    render() {
      const items = visible(LAB.research);
      this.main.innerHTML = this.pageHead("research.title", "research.lead") + `
        <section class="section section--tight"><div class="container">
          ${items.length ? `<div class="grid grid--cards">${items.map((r, k) => this.card(r, k)).join("")}</div>` : this.empty()}
        </div></section>`;
      this.bindCards(this.main);
    }
    card(r, k) {
      const title = this.i.pick(r.title);
      return `<article class="card reveal" style="--d:${(k % 6) * 60}ms" tabindex="0" role="button" data-open="${esc(r.id)}">
        ${this.media(r.image, title, { position: r.imagePosition, fallback: Art.pattern(r.id) })}
        <div class="card__body">
          <h3 class="card__title">${esc(title)}</h3>
          ${r.summary ? `<p class="card__text">${esc(this.i.pick(r.summary))}</p>` : ""}
          <span class="card__more">${esc(this.i.t("readMore"))} →</span>
        </div></article>`;
    }
    detail(id) {
      const r = byId(LAB.research, id); if (!r) return null;
      const i = this.i, title = i.pick(r.title);
      const people = visible(LAB.people).filter((p) => (p.research || []).includes(r.id));
      const projects = visible(LAB.projects).filter((p) => (p.research || []).includes(r.id));
      return `<div class="detail">
        ${this.media(r.image, title, { ratio: "21/9", position: r.imagePosition, fallback: Art.pattern(r.id), cls: "detail__banner" })}
        <div class="detail__main">
          <h2 class="detail__title">${esc(title)}</h2>
          ${r.description ? `<div class="prose">${i.pick(r.description)}</div>` : r.summary ? `<p>${esc(i.pick(r.summary))}</p>` : ""}
          ${r.keywords ? `<h3 class="detail__h">${esc(i.t("research.keywords"))}</h3>${this.tags(r.keywords)}` : ""}
          ${projects.length ? `<h3 class="detail__h">${esc(i.t("research.projects"))}</h3>
            <div class="chips">${projects.map((p) => this.chipLink(`projects.html#projects/${encodeURIComponent(p.id)}`, p.acronym || i.pick(p.title))).join("")}</div>` : ""}
          ${people.length ? `<h3 class="detail__h">${esc(i.t("research.people"))}</h3>
            <div class="people-mini">${people.map((p) => this.personMini(p)).join("")}</div>` : ""}
          ${this.gallery(r.gallery, "r-" + r.id)}
          ${this.links(r.links)}
        </div></div>`;
    }
  }

  /* =================================================================
   *  PROJECTS
   * ================================================================= */
  class ProjectsPage extends Page {
    constructor(site) { super(site); this.kind = "projects"; }
    render() {
      const i = this.i;
      const all = visible(LAB.projects);
      const st = ["ongoing", "completed"].map((s) => ({
        id: s, label: i.t(`projects.${s}`), count: all.filter((p) => this.projectStatus(p) === s).length
      })).filter((s) => s.count);
      const items = all.filter((p) => this.filter === "all" || this.projectStatus(p) === this.filter);
      this.main.innerHTML = this.pageHead("projects.title", "projects.lead") + `
        <section class="section section--tight"><div class="container">
          ${this.filterBar(st, this.filter)}
          ${items.length ? `<div class="grid grid--cards">${items.map((p, k) => this.card(p, k)).join("")}</div>` : this.empty()}
        </div></section>`;
      this.bindFilters(this.main);
      this.bindCards(this.main);
    }
    badge(p) {
      const s = this.projectStatus(p);
      return `<span class="badge badge--${s}">${esc(this.i.t(`projects.${s}`))}</span>`;
    }
    card(p, k) {
      const title = this.i.pick(p.title);
      return `<article class="card reveal" style="--d:${(k % 6) * 60}ms" tabindex="0" role="button" data-open="${esc(p.id)}">
        ${this.media(p.image, title, { position: p.imagePosition, fallback: Art.pattern(p.id) })}
        <div class="card__body">
          <div class="card__row">${p.acronym ? `<span class="card__acronym">${esc(p.acronym)}</span>` : ""}${this.badge(p)}</div>
          <h3 class="card__title">${esc(title)}</h3>
          ${this.projectPeriod(p) ? `<p class="card__meta">${esc(this.projectPeriod(p))}</p>` : ""}
          ${p.summary ? `<p class="card__text">${esc(this.i.pick(p.summary))}</p>` : ""}
          <span class="card__more">${esc(this.i.t("readMore"))} →</span>
        </div></article>`;
    }
    detail(id) {
      const p = byId(LAB.projects, id); if (!p) return null;
      const i = this.i, title = i.pick(p.title);
      const team = (p.people || []).map((x) => byId(LAB.people, x)).filter((x) => x && !x.hidden);
      const research = (p.research || []).map((x) => byId(LAB.research, x)).filter(Boolean);
      const period = this.projectPeriod(p);
      return `<div class="detail">
        ${this.media(p.image, title, { ratio: "21/9", position: p.imagePosition, fallback: Art.pattern(p.id), cls: "detail__banner" })}
        <div class="detail__main">
          <div class="card__row">${p.acronym ? `<span class="card__acronym">${esc(p.acronym)}</span>` : ""}${this.badge(p)}</div>
          <h2 class="detail__title">${esc(title)}</h2>
          ${this.facts([
            period ? `<div><dt>${esc(i.t("projects.period"))}</dt><dd>${esc(period)}</dd></div>` : "",
            p.funding ? `<div><dt>${esc(i.t("projects.funding"))}</dt><dd>${esc(i.pick(p.funding))}</dd></div>` : "",
            p.role ? `<div><dt>${esc(i.t("projects.role"))}</dt><dd>${esc(i.pick(p.role))}</dd></div>` : "",
            p.partners && p.partners.length ? `<div><dt>${esc(i.t("projects.partners"))}</dt><dd>${p.partners.map((x) => esc(i.pick(x))).join(", ")}</dd></div>` : ""
          ])}
          ${p.description ? `<div class="prose">${i.pick(p.description)}</div>` : p.summary ? `<p>${esc(i.pick(p.summary))}</p>` : ""}
          ${research.length ? `<h3 class="detail__h">${esc(i.t("people.research"))}</h3>
            <div class="chips">${research.map((r) => this.chipLink(`research.html#research/${encodeURIComponent(r.id)}`, i.pick(r.title))).join("")}</div>` : ""}
          ${team.length ? `<h3 class="detail__h">${esc(i.t("projects.team"))}</h3>
            <div class="people-mini">${team.map((x) => this.personMini(x)).join("")}</div>` : ""}
          ${this.gallery(p.gallery, "p-" + p.id)}
          ${this.links(p.links)}
        </div></div>`;
    }
  }

  /* =================================================================
   *  NEWS
   * ================================================================= */
  class NewsPage extends Page {
    constructor(site) { super(site); this.kind = "news"; }
    static sorted() {
      return visible(LAB.news).slice().sort((a, b) =>
        (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || String(b.date).localeCompare(String(a.date)));
    }
    static typeLabel(page, n) {
      const t = byId(CFG.newsTypes, n.type);
      return t ? page.i.pick(t.label) : "";
    }
    /** Static so the home page can reuse the same card + pop-up. */
    static card(page, n, k, compact) {
      const i = page.i, title = i.pick(n.title), type = NewsPage.typeLabel(page, n);
      return `<article class="news-item reveal${n.image ? " has-image" : ""}${compact ? " news-item--compact" : ""}" style="--d:${(k % 6) * 60}ms" tabindex="0" role="button" data-open="${esc(n.id)}">
        <time class="news-item__date" datetime="${esc(n.date)}">
          <span class="news-item__day">${esc(String(n.date).split("-")[2] || "")}</span>
          <span class="news-item__month">${esc(i.date(String(n.date).slice(0, 7)))}</span>
        </time>
        <div class="news-item__body">
          <div class="card__row">
            ${type ? `<span class="badge badge--${esc(n.type)}">${esc(type)}</span>` : ""}
            ${n.pinned ? `<span class="badge badge--pinned">📌 ${esc(i.t("news.pinned"))}</span>` : ""}
          </div>
          <h3 class="news-item__title">${esc(title)}</h3>
          ${n.summary ? `<p class="card__text">${esc(i.pick(n.summary))}</p>` : ""}
        </div>
        ${n.image ? page.media(n.image, title, { ratio: "4/3", position: n.imagePosition, cls: "news-item__thumb" }) : ""}
      </article>`;
    }
    static detailHtml(page, id) {
      const n = byId(LAB.news, id); if (!n) return null;
      const i = page.i, title = i.pick(n.title), type = NewsPage.typeLabel(page, n);
      return `<div class="detail">
        ${n.image ? page.media(n.image, title, { ratio: "16/9", position: n.imagePosition, cls: "detail__banner" }) : ""}
        <div class="detail__main">
          <div class="card__row">
            ${type ? `<span class="badge badge--${esc(n.type)}">${esc(type)}</span>` : ""}
            <time class="muted" datetime="${esc(n.date)}">${esc(i.date(n.date))}</time>
          </div>
          <h2 class="detail__title">${esc(title)}</h2>
          ${n.body ? `<div class="prose">${i.pick(n.body)}</div>` : n.summary ? `<p>${esc(i.pick(n.summary))}</p>` : ""}
          ${page.gallery(n.gallery, "n-" + n.id)}
          ${page.links(n.links)}
        </div></div>`;
    }
    render() {
      const i = this.i;
      const all = NewsPage.sorted();
      const types = (CFG.newsTypes || []).map((t) => ({
        id: t.id, label: i.pick(t.label), count: all.filter((n) => n.type === t.id).length
      })).filter((t) => t.count);
      const items = all.filter((n) => this.filter === "all" || n.type === this.filter);
      this.main.innerHTML = this.pageHead("news.title", "news.lead") + `
        <section class="section section--tight"><div class="container container--narrow">
          ${this.filterBar(types, this.filter)}
          ${items.length ? `<div class="news-list">${items.map((n, k) => NewsPage.card(this, n, k)).join("")}</div>` : this.empty()}
        </div></section>`;
      this.bindFilters(this.main);
      this.bindCards(this.main);
    }
    detail(id) { return NewsPage.detailHtml(this, id); }
  }

  /* =================================================================
   *  Reveal – fade/slide elements in as they scroll into view
   * ================================================================= */
  class Reveal {
    constructor() {
      this.io = "IntersectionObserver" in window && !reducedMotion()
        ? new IntersectionObserver((entries) => entries.forEach((e) => {
            if (e.isIntersecting) { e.target.classList.add("is-visible"); this.io.unobserve(e.target); }
          }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 })
        : null;
    }
    scan(root) {
      root.querySelectorAll(".reveal:not(.is-visible)").forEach((el) =>
        this.io ? this.io.observe(el) : el.classList.add("is-visible"));
    }
  }

  /* =================================================================
   *  LabSite – boot
   * ================================================================= */
  class LabSite {
    static PAGES = { home: HomePage, people: PeoplePage, research: ResearchPage, projects: ProjectsPage, news: NewsPage };

    constructor() {
      this.pageId = document.body.dataset.page || "home";
      this.applyTheme();
      this.i18n = new I18n(CFG, LAB.strings);
      this.modal = new Modal(this.i18n);
      this.lightbox = new Lightbox();
      this.reveal = new Reveal();
      this.layout = new Layout(this);
      const PageClass = LabSite.PAGES[this.pageId] || HomePage;
      this.page = new PageClass(this);
    }
    applyTheme() {
      const fromUrl = new URLSearchParams(location.search).get("theme");
      const theme = (fromUrl && /^[\w-]+$/.test(fromUrl) ? fromUrl : null) || CFG.theme || "scientific";
      const link = document.getElementById("theme-css");
      // keep the same ?v=... version as the page uses (cache-busting)
      const ver = (link && link.getAttribute("href").split("?")[1]) || "";
      if (link && !link.getAttribute("href").includes(`/${theme}.css`)) {
        link.href = `assets/css/themes/${theme}.css${ver ? "?" + ver : ""}`;
      }
      document.documentElement.dataset.theme = theme;
    }
    renderAll() {
      this.layout.render();
      this.page.render();
      this.reveal.scan(document);
      if (this.modal.isOpen) this.page.openFromHash(); // re-render open pop-up in new language
    }
    start() {
      this.renderAll();
      this.page.openFromHash();
      this.i18n.onChange(() => this.renderAll());
      window.addEventListener("hashchange", () => this.page.openFromHash());
      document.documentElement.classList.add("is-ready");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    window.labSite = new LabSite();
    window.labSite.start();
  });
})();
