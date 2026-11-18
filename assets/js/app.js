/* =====================================================================
 *  LAPI SITE ENGINE
 *  ---------------------------------------------------------------------
 *  You normally do NOT need to edit this file:
 *    content → /data/*.js      looks → /assets/css/themes/*.css
 *
 *  Structure
 *    I18n          language state, bilingual fields, dates
 *    Ui            shared HTML helpers (images, buttons, facts, chips…)
 *    Art           placeholder graphics when an image is missing
 *    Modal         animated pop-up (preview of an item)
 *    Lightbox      full-screen photo viewer
 *    TrackCanvas   animated particle tracks in the home header
 *    Reveal        fade-in on scroll + counting numbers
 *    Collection    one per content type: Members, Research, Projects, News
 *                  → card(), preview() for the pop-up, full() for its own page
 *    Pages         Home, About, Contact, List (members.html…), Detail (member.html?id=…)
 *    Checker       finds mistakes in /data (shown in a banner)
 *    LabSite       boots everything for <body data-page="…">
 * ===================================================================== */
(function () {
  "use strict";

  const LAB = window.LAB || {};
  const SITE = LAB.site || {};

  /* ---------- small helpers ---------- */
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const visible = (list) => (Array.isArray(list) ? list : [])
    .filter((x) => x && !x.hidden)
    .map((x, i) => ({ x, i }))
    .sort((a, b) => (a.x.order ?? 1e9) - (b.x.order ?? 1e9) || a.i - b.i)
    .map((o) => o.x);
  const hashString = (s) => { let h = 2166136261; for (const ch of String(s)) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return h >>> 0; };
  const reducedMotion = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const plain = (html) => { const d = document.createElement("div"); d.innerHTML = html || ""; return (d.textContent || "").replace(/\s+/g, " ").trim(); };
  const clip = (text, n) => (text.length > n ? text.slice(0, n).replace(/\s+\S*$/, "") + "…" : text);
  const isExternal = (url) => /^(https?:)?\/\//i.test(url || "");

  /* =================================================================
   *  I18n
   * ================================================================= */
  class I18n {
    constructor(site, strings) {
      this.site = site; this.strings = strings || {};
      this.languages = site.languages || ["en"];
      this.listeners = [];
      this.lang = this.initial();
      document.documentElement.lang = this.lang;
    }
    initial() {
      const q = new URLSearchParams(location.search).get("lang");
      if (q && this.languages.includes(q)) return q;
      try { const s = localStorage.getItem("lab-lang"); if (s && this.languages.includes(s)) return s; } catch (e) { /* no storage */ }
      return this.site.defaultLang || this.languages[0];
    }
    set(lang) {
      if (!this.languages.includes(lang) || lang === this.lang) return;
      this.lang = lang;
      try { localStorage.setItem("lab-lang", lang); } catch (e) { /* ignore */ }
      document.documentElement.lang = lang;
      this.listeners.forEach((fn) => fn(lang));
    }
    toggle() { const i = this.languages.indexOf(this.lang); this.set(this.languages[(i + 1) % this.languages.length]); }
    onChange(fn) { this.listeners.push(fn); }
    /** { en, el } → text in current language (falls back to default language) */
    pick(v) {
      if (v == null) return "";
      if (typeof v === "object" && !Array.isArray(v)) return v[this.lang] || v[this.site.defaultLang] || Object.values(v).find(Boolean) || "";
      return v;
    }
    t(key) { const e = this.strings[key]; return e ? this.pick(e) : key; }
    locale() { return this.lang === "el" ? "el-GR" : "en-GB"; }
    /** "2026-11-14" → 14 November 2026,  "2024-03" → Mar 2024,  "2024" → 2024 */
    date(iso, style) {
      if (!iso) return "";
      const p = String(iso).split("-");
      if (p.length === 1) return p[0];
      const d = new Date(+p[0], +p[1] - 1, p[2] ? +p[2] : 1, 12);
      const o = p.length === 2 ? { month: "short", year: "numeric" }
        : style === "short" ? { day: "numeric", month: "short", year: "numeric" } : { day: "numeric", month: "long", year: "numeric" };
      return d.toLocaleDateString(this.locale(), o);
    }
  }

  /* =================================================================
   *  Art – placeholder graphics
   * ================================================================= */
  class Art {
    static initials(name) {
      const n = String(name).replace(/^(Prof\.|Dr\.|Καθ\.|Δρ\.)\s*/i, "");
      return n.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join("")
        .normalize("NFD").replace(/[̀-ͯ]/g, "").toUpperCase();
    }
    static avatar(name, seed) {
      return `<div class="placeholder placeholder--avatar" style="--ph-hue:${hashString(seed || name) % 360}" aria-hidden="true"><span>${esc(Art.initials(name))}</span></div>`;
    }
    static pattern(seed) {
      const h = hashString(seed);
      let s = h || 1; const rnd = () => ((s = Math.imul(s ^ (s >>> 15), 2246822519) >>> 0) / 4294967296);
      const cx = 140 + rnd() * 120, cy = 60 + rnd() * 60;
      let rings = "", tracks = "";
      for (let k = 0; k < 7; k++) rings += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${(20 + k * 22 + rnd() * 10).toFixed(1)}"/>`;
      for (let k = 0; k < 5; k++) {
        const a = rnd() * Math.PI * 2, len = 120 + rnd() * 160, bend = (rnd() - 0.5) * 160;
        const x2 = cx + Math.cos(a) * len, y2 = cy + Math.sin(a) * len;
        const mx = (cx + x2) / 2 - Math.sin(a) * bend, my = (cy + y2) / 2 + Math.cos(a) * bend;
        tracks += `<path d="M${cx.toFixed(1)} ${cy.toFixed(1)} Q${mx.toFixed(1)} ${my.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}"/>`;
      }
      return `<div class="placeholder placeholder--pattern" style="--ph-hue:${h % 360}" aria-hidden="true">
        <svg viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice"><g class="ph-rings">${rings}</g><g class="ph-tracks">${tracks}</g>
        <circle class="ph-vertex" cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="3.5"/></svg></div>`;
    }
  }

  /* =================================================================
   *  Ui – shared HTML building blocks
   * ================================================================= */
  class Ui {
    constructor(i18n) { this.i = i18n; }
    /** Image box that keeps its ratio on every screen; photo is cropped (or contained for logos) */
    media(src, alt, { ratio = "16/9", position, fit, fallback = "", cls = "" } = {}) {
      const style = `--ratio:${ratio};${position ? `--pos:${position};` : ""}`;
      const img = src ? `<img src="${esc(src)}" alt="${esc(alt)}" loading="lazy" decoding="async"${fit === "contain" ? ' class="is-contain"' : ""} onerror="this.remove()">` : "";
      return `<div class="media ${fit === "contain" ? "media--contain " : ""}${cls}" style="${style}">${img}${fallback}</div>`;
    }
    btn(href, label, { primary = false, icon = "", external } = {}) {
      const ext = external ?? isExternal(href);
      return `<a class="btn ${primary ? "btn--primary" : "btn--ghost"}" href="${esc(href)}"${ext ? ' target="_blank" rel="noopener"' : ""}>${icon ? `<span class="btn__icon" aria-hidden="true">${icon}</span>` : ""}${esc(label)}${ext ? '<span aria-hidden="true" class="btn__ext">↗</span>' : ""}</a>`;
    }
    links(list) {
      if (!list || !list.length) return "";
      return `<div class="btn-row">${list.map((l) => this.btn(l.url, this.i.pick(l.label) || l.url)).join("")}</div>`;
    }
    facts(rows) {
      const html = rows.filter(Boolean).map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join("");
      return html ? `<dl class="facts">${html}</dl>` : "";
    }
    tags(list) {
      if (!list || !list.length) return "";
      return `<ul class="tags">${list.map((t) => `<li>${esc(this.i.pick(t))}</li>`).join("")}</ul>`;
    }
    chips(items) {
      if (!items.length) return "";
      return `<div class="chips">${items.map(([href, text]) => `<a class="chip chip--link" href="${esc(href)}">${esc(text)}</a>`).join("")}</div>`;
    }
    h(text) { return `<h3 class="detail__h">${esc(text)}</h3>`; }
    gallery(list, group) {
      if (!list || !list.length) return "";
      const items = list.map((g) => (typeof g === "string" ? { src: g } : g));
      return `<div class="gallery">${items.map((g) => {
        const cap = this.i.pick(g.caption);
        return `<a href="${esc(g.src)}" data-lightbox="${esc(group)}" data-caption="${esc(cap)}">${this.media(g.src, cap, { ratio: "4/3" })}</a>`;
      }).join("")}</div>`;
    }
    filterBar(options, current) {
      if (options.length < 2) return "";
      return `<div class="filters" role="toolbar">${[{ id: "all", label: this.i.t("all") }, ...options].map((o) =>
        `<button type="button" class="chip${o.id === current ? " is-active" : ""}" data-filter="${esc(o.id)}" aria-pressed="${o.id === current}">${esc(o.label)}${o.count != null ? ` <span class="chip__count">${o.count}</span>` : ""}</button>`).join("")}</div>`;
    }
    empty(key = "noItems") { return `<p class="muted empty">${esc(this.i.t(key))}</p>`; }
    pageHead(title, lead, crumbs) {
      return `<header class="page-head"><div class="container">
        ${crumbs ? `<nav class="crumbs" aria-label="breadcrumb">${crumbs}</nav>` : ""}
        <h1 class="page-head__title reveal">${esc(title)}</h1>
        ${lead ? `<p class="page-head__lead reveal">${esc(lead)}</p>` : ""}</div></header>`;
    }
  }

  /* =================================================================
   *  Modal – animated pop-up, deep link #<collection>/<id>
   * ================================================================= */
  class Modal {
    constructor(i18n) {
      this.i18n = i18n;
      this.el = document.createElement("div");
      this.el.className = "modal"; this.el.hidden = true;
      this.el.innerHTML = `<div class="modal__backdrop" data-close></div>
        <div class="modal__panel" role="dialog" aria-modal="true" tabindex="-1">
          <button class="modal__close" type="button" data-close>&times;</button><div class="modal__body"></div></div>`;
      document.body.appendChild(this.el);
      this.body = this.el.querySelector(".modal__body");
      this.panel = this.el.querySelector(".modal__panel");
      this.el.addEventListener("click", (e) => { if (e.target.closest("[data-close]")) this.close(); });
      document.addEventListener("keydown", (e) => { if (e.key === "Escape" && this.isOpen) this.close(); });
      this.isOpen = false;
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
      setTimeout(() => { if (!this.isOpen) this.el.hidden = true; }, reducedMotion() ? 0 : 300);
      if (this.lastFocus && this.lastFocus.focus) this.lastFocus.focus({ preventScroll: true });
    }
  }

  /* =================================================================
   *  Lightbox – full-screen photos (any element with data-lightbox)
   * ================================================================= */
  class Lightbox {
    constructor() {
      this.el = document.createElement("div");
      this.el.className = "lightbox"; this.el.hidden = true;
      this.el.innerHTML = `<button class="lightbox__nav lightbox__prev" type="button" aria-label="Previous">&#8249;</button>
        <figure><img alt=""><figcaption></figcaption></figure>
        <button class="lightbox__nav lightbox__next" type="button" aria-label="Next">&#8250;</button>
        <button class="lightbox__close" type="button" aria-label="Close">&times;</button>`;
      document.body.appendChild(this.el);
      this.img = this.el.querySelector("img"); this.cap = this.el.querySelector("figcaption");
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
        if (!a || e.ctrlKey || e.metaKey) return;
        e.preventDefault();
        const group = [...document.querySelectorAll(`[data-lightbox="${CSS.escape(a.dataset.lightbox)}"]`)];
        this.items = group.map((g) => ({ src: g.getAttribute("href"), caption: g.dataset.caption || "" }));
        this.open(group.indexOf(a));
      });
    }
    open(i) { this.index = i; this.show(); this.el.hidden = false; requestAnimationFrame(() => this.el.classList.add("is-open")); }
    step(d) { this.index = (this.index + d + this.items.length) % this.items.length; this.show(); }
    show() { const it = this.items[this.index]; this.img.src = it.src; this.cap.textContent = it.caption; this.el.classList.toggle("is-single", this.items.length < 2); }
    close() { this.el.classList.remove("is-open"); setTimeout(() => (this.el.hidden = true), 200); }
  }

  /* =================================================================
   *  TrackCanvas – charged particles curling in a magnetic field
   * ================================================================= */
  class TrackCanvas {
    constructor(canvas) {
      this.canvas = canvas; this.ctx = canvas.getContext("2d"); this.tracks = []; this.running = false;
      const cs = getComputedStyle(canvas);
      this.c1 = cs.getPropertyValue("--track-color").trim() || "rgba(140,190,255,.7)";
      this.c2 = cs.getPropertyValue("--track-color-2").trim() || this.c1;
      this.resize(); addEventListener("resize", () => this.resize());
      if (reducedMotion()) { for (let i = 0; i < 4; i++) this.spawn(); for (let i = 0; i < 400; i++) this.step(); return; }
      new IntersectionObserver(([e]) => (e.isIntersecting ? this.start() : this.stop())).observe(canvas);
      document.addEventListener("visibilitychange", () => (document.hidden ? this.stop() : this.start()));
    }
    resize() {
      const r = this.canvas.getBoundingClientRect(); this.dpr = Math.min(devicePixelRatio || 1, 2);
      this.w = r.width; this.h = r.height; this.canvas.width = r.width * this.dpr; this.canvas.height = r.height * this.dpr;
      this.ctx.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
    }
    spawn() {
      const x = this.w * (0.35 + Math.random() * 0.6), y = this.h * (0.15 + Math.random() * 0.7);
      const n = 2 + Math.floor(Math.random() * 4);
      for (let k = 0; k < n; k++) {
        const a = Math.random() * Math.PI * 2, v = 1.6 + Math.random() * 2.2;
        this.tracks.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v,
          omega: (Math.random() < 0.5 ? -1 : 1) * (0.004 + Math.random() * 0.03),
          loss: 0.993 + Math.random() * 0.006, life: 260 + Math.random() * 240, c: Math.random() < 0.7 ? this.c1 : this.c2 });
      }
    }
    step() {
      const ctx = this.ctx;
      ctx.globalCompositeOperation = "destination-out"; ctx.fillStyle = "rgba(0,0,0,0.018)"; ctx.fillRect(0, 0, this.w, this.h);
      ctx.globalCompositeOperation = "source-over"; ctx.lineWidth = 1.1; ctx.lineCap = "round";
      if (Math.random() < 0.018 || !this.tracks.length) this.spawn();
      for (const t of this.tracks) for (let s = 0; s < 2; s++) {
        const c = Math.cos(t.omega), sn = Math.sin(t.omega), vx = t.vx * c - t.vy * sn, vy = t.vx * sn + t.vy * c;
        t.vx = vx * t.loss; t.vy = vy * t.loss; t.omega /= t.loss;
        ctx.strokeStyle = t.c; ctx.beginPath(); ctx.moveTo(t.x, t.y); t.x += t.vx; t.y += t.vy; ctx.lineTo(t.x, t.y); ctx.stroke(); t.life--;
      }
      this.tracks = this.tracks.filter((t) => t.life > 0 && Math.hypot(t.vx, t.vy) > 0.15 && t.x > -50 && t.x < this.w + 50 && t.y > -50 && t.y < this.h + 50);
    }
    loop() { if (!this.running) return; this.step(); requestAnimationFrame(() => this.loop()); }
    start() { if (!this.running) { this.running = true; this.loop(); } }
    stop() { this.running = false; }
  }

  /* =================================================================
   *  Reveal – fade in on scroll, and count numbers up
   * ================================================================= */
  class Reveal {
    constructor() {
      this.io = "IntersectionObserver" in window && !reducedMotion()
        ? new IntersectionObserver((entries) => entries.forEach((e) => {
            if (!e.isIntersecting) return;
            e.target.classList.add("is-visible");
            if (e.target.matches("[data-count]")) Reveal.count(e.target);
            this.io.unobserve(e.target);
          }), { rootMargin: "0px 0px -6% 0px", threshold: 0.05 })
        : null;
    }
    static count(el) {
      const to = +el.dataset.count || 0, t0 = performance.now(), dur = 1400;
      const tick = (t) => { const p = Math.min(1, (t - t0) / dur); el.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
      requestAnimationFrame(tick);
    }
    scan(root) {
      root.querySelectorAll(".reveal:not(.is-visible), [data-count]:not(.is-visible)").forEach((el) => {
        if (this.io) this.io.observe(el);
        else { el.classList.add("is-visible"); if (el.dataset.count) el.textContent = el.dataset.count; }
      });
    }
  }

  /* =================================================================
   *  COLLECTIONS — one class per content type
   *  Every collection provides: items(), get(id), url(id), card(), preview(), full()
   * ================================================================= */
  class Collection {
    constructor(site) { this.site = site; this.i = site.i18n; this.ui = site.ui; }
    /* to set in subclasses */
    static key = "";        // name of the array in /data  (LAB.<key>)
    get key() { return this.constructor.key; }
    get detailPage() { return ""; }
    get listPage() { return ""; }
    get listTitleKey() { return ""; }
    items() { return visible(LAB[this.key]); }
    get(id) { return (LAB[this.key] || []).find((x) => x && x.id === id && !x.hidden); }
    url(id) { return `${this.detailPage}?id=${encodeURIComponent(id)}`; }
    title(x) { return this.i.pick(x.title); }
    /** <a> card: a normal link to the full page; a plain click opens the pop-up preview instead */
    cardLink(x, k, inner, cls = "card") {
      return `<a class="${cls} reveal" style="--d:${(k % 8) * 50}ms" href="${esc(this.url(x.id))}" data-preview="${esc(this.key)}:${esc(x.id)}">${inner}</a>`;
    }
    previewFooter(x, labelKey = "openFull") {
      return `<div class="preview__foot">${this.ui.btn(this.url(x.id), this.i.t(labelKey) + " →", { primary: true })}</div>`;
    }
    backLink() { return `<a href="${esc(this.listPage)}">${esc(this.i.t(this.listTitleKey))}</a>`; }
    /* relations shared by several types */
    membersOf(ids) { return (ids || []).map((id) => this.site.col.members.get(id)).filter(Boolean); }
    researchOf(ids) { return (ids || []).map((id) => this.site.col.research.get(id)).filter(Boolean); }
    researchChips(list) { return this.ui.chips(list.map((r) => [this.site.col.research.url(r.id), this.i.pick(r.title)])); }
    projectChips(list) { return this.ui.chips(list.map((p) => [this.site.col.projects.url(p.id), p.acronym || this.i.pick(p.title)])); }
    peopleMini(list) {
      if (!list.length) return "";
      const m = this.site.col.members;
      return `<div class="people-mini">${list.map((p) => {
        const name = this.i.pick(p.name);
        return `<a class="person-mini" href="${esc(m.url(p.id))}">
          ${this.ui.media(p.photo, name, { ratio: "1/1", position: p.photoPosition, fallback: Art.avatar(name, p.id), cls: "media--round" })}
          <span><strong>${esc(name)}</strong><span class="muted">${esc(this.i.pick(p.position))}</span></span></a>`;
      }).join("")}</div>`;
    }
  }

  /* ---------------- MEMBERS ---------------- */
  class Members extends Collection {
    static key = "members";
    get detailPage() { return "member.html"; }
    get listPage() { return "members.html"; }
    get listTitleKey() { return "members.title"; }
    title(x) { return this.i.pick(x.name); }
    groups() {
      const all = this.items();
      const gs = (SITE.memberGroups || []).map((g) => ({ ...g, members: all.filter((p) => p.group === g.id) }));
      const known = new Set(gs.map((g) => g.id));
      const other = all.filter((p) => !known.has(p.group));
      if (other.length) gs.push({ id: "other", label: LAB.strings["other"], members: other });
      return gs.filter((g) => g.members.length);
    }
    groupOf(p) { return (SITE.memberGroups || []).find((g) => g.id === p.group); }
    photo(p, ratio = "4/5", cls = "") { const n = this.title(p); return this.ui.media(p.photo, n, { ratio, position: p.photoPosition, fallback: Art.avatar(n, p.id), cls }); }
    projectsOf(p) { return this.site.col.projects.items().filter((pr) => (pr.people || []).includes(p.id)); }
    cvHref(p) { return p.cv || ""; }
    contactButtons(p) {
      const b = [];
      if (p.email) b.push(this.ui.btn(`mailto:${p.email}`, p.email, { icon: "✉", external: false }));
      if (p.cv) b.push(this.ui.btn(this.cvHref(p), this.i.t("members.downloadCv"), { icon: "📄", external: true }));
      return b.length ? `<div class="btn-row">${b.join("")}</div>` : "";
    }
    card(p, k) {
      const n = this.title(p);
      return this.cardLink(p, k, `${this.photo(p)}
        <div class="card__body"><h3 class="card__title">${esc(n)}</h3>
          ${p.position ? `<p class="card__meta">${esc(this.i.pick(p.position))}</p>` : ""}
          ${p.short ? `<p class="card__text">${esc(this.i.pick(p.short))}</p>` : ""}</div>`, "card card--person");
    }
    preview(p) {
      const i = this.i, g = this.groupOf(p), research = this.researchOf(p.research);
      const bio = plain(i.pick(p.bio));
      return `<div class="preview preview--person">
        <div class="preview__side">${this.photo(p)}</div>
        <div class="preview__main">
          ${g ? `<p class="detail__kicker">${esc(i.pick(g.label))}</p>` : ""}
          <h2 class="detail__title">${esc(this.title(p))}</h2>
          ${p.position ? `<p class="detail__sub">${esc(i.pick(p.position))}</p>` : ""}
          ${this.contactButtons(p)}
          ${bio ? `<p class="preview__text">${esc(clip(bio, 260))}</p>` : p.short ? `<p class="preview__text">${esc(i.pick(p.short))}</p>` : ""}
          ${research.length ? this.ui.h(i.t("members.research")) + this.researchChips(research) : ""}
          ${this.previewFooter(p, "openProfile")}
        </div></div>`;
    }
    full(p) {
      const i = this.i, ui = this.ui, g = this.groupOf(p);
      const research = this.researchOf(p.research), projects = this.projectsOf(p);
      return `<div class="container profile">
        <aside class="profile__side reveal">
          ${this.photo(p, "4/5", "profile__photo")}
          <div class="profile__card">
            ${ui.facts([
              p.email && [i.t("members.email"), `<a href="mailto:${esc(p.email)}">${esc(p.email)}</a>`],
              p.phone && [i.t("members.phone"), esc(p.phone)],
              p.office && [i.t("members.office"), esc(i.pick(p.office))],
              p.cv && [i.t("members.cv"), `<a href="${esc(p.cv)}" target="_blank" rel="noopener">${esc(i.t("members.downloadCv"))} ↗</a>`]
            ])}
            ${p.cv ? ui.btn(p.cv, i.t("members.downloadCv"), { primary: true, icon: "📄", external: true }) : ""}
          </div>
        </aside>
        <div class="profile__main">
          ${g ? `<p class="detail__kicker reveal">${esc(i.pick(g.label))}</p>` : ""}
          <h1 class="profile__name reveal">${esc(this.title(p))}</h1>
          ${p.position ? `<p class="detail__sub reveal">${esc(i.pick(p.position))}</p>` : ""}
          ${p.short ? `<p class="lead reveal">${esc(i.pick(p.short))}</p>` : ""}
          ${p.bio && i.pick(p.bio) ? `<section class="reveal">${ui.h(i.t("members.about"))}<div class="prose">${i.pick(p.bio)}</div></section>` : ""}
          ${research.length ? `<section class="reveal">${ui.h(i.t("members.research"))}${this.researchChips(research)}</section>` : ""}
          ${projects.length ? `<section class="reveal">${ui.h(i.t("members.projects"))}${this.projectChips(projects)}</section>` : ""}
          ${p.links && p.links.length ? `<section class="reveal">${ui.h(i.t("links"))}${ui.links(p.links)}</section>` : ""}
        </div></div>`;
    }
  }

  /* ---------------- RESEARCH AREAS ---------------- */
  class Research extends Collection {
    static key = "research";
    get detailPage() { return "research-area.html"; }
    get listPage() { return "research.html"; }
    get listTitleKey() { return "research.title"; }
    banner(r, ratio = "16/9", cls = "") { return this.ui.media(r.image, this.title(r), { ratio, position: r.imagePosition, fit: r.imageFit, fallback: Art.pattern(r.id), cls }); }
    categoryLabels(r) { return (r.categories || []).map((c) => (SITE.researchCategories || []).find((x) => x.id === c)).filter(Boolean).map((c) => c.label); }
    membersIn(r) { return this.site.col.members.items().filter((p) => (p.research || []).includes(r.id)); }
    projectsIn(r) { return this.site.col.projects.items().filter((p) => (p.research || []).includes(r.id)); }
    related(r) {
      const cats = new Set(r.categories || []);
      return this.items().filter((x) => x.id !== r.id && (x.categories || []).some((c) => cats.has(c))).slice(0, 4);
    }
    card(r, k) {
      return this.cardLink(r, k, `${this.banner(r)}
        <div class="card__body">${this.ui.tags(this.categoryLabels(r))}
          <h3 class="card__title">${esc(this.title(r))}</h3>
          ${r.summary ? `<p class="card__text">${esc(this.i.pick(r.summary))}</p>` : ""}
          <span class="card__more">${esc(this.i.t("readMore"))} →</span></div>`);
    }
    preview(r) {
      const i = this.i, people = this.membersIn(r);
      return `<div class="preview">${this.banner(r, "21/9", "preview__banner")}
        <div class="preview__main">${this.ui.tags(this.categoryLabels(r))}
          <h2 class="detail__title">${esc(this.title(r))}</h2>
          <p class="preview__text">${esc(i.pick(r.summary) || clip(plain(i.pick(r.description)), 300))}</p>
          ${people.length ? this.ui.h(i.t("research.members")) + this.peopleMini(people) : ""}
          ${this.previewFooter(r)}
        </div></div>`;
    }
    full(r) {
      const i = this.i, ui = this.ui, people = this.membersIn(r), projects = this.projectsIn(r), rel = this.related(r);
      return `<div class="container detail-page">
        ${this.banner(r, "21/9", "detail-page__banner reveal")}
        <div class="detail-page__grid">
          <article class="detail-page__main">
            <div class="prose reveal">${i.pick(r.description) || `<p>${esc(i.pick(r.summary))}</p>`}</div>
            ${r.gallery && r.gallery.length ? `<section class="reveal">${ui.h(i.t("gallery"))}${ui.gallery(r.gallery, "r-" + r.id)}</section>` : ""}
            ${r.links && r.links.length ? `<section class="reveal">${ui.h(i.t("links"))}${ui.links(r.links)}</section>` : ""}
          </article>
          <aside class="detail-page__side">
            ${people.length ? `<section class="side-box reveal">${ui.h(i.t("research.members"))}${this.peopleMini(people)}</section>` : ""}
            ${projects.length ? `<section class="side-box reveal">${ui.h(i.t("research.projects"))}${this.projectChips(projects)}</section>` : ""}
            ${rel.length ? `<section class="side-box reveal">${ui.h(i.t("research.related"))}${this.researchChips(rel)}</section>` : ""}
          </aside>
        </div></div>`;
    }
  }

  /* ---------------- PROJECTS ---------------- */
  class Projects extends Collection {
    static key = "projects";
    get detailPage() { return "project.html"; }
    get listPage() { return "projects.html"; }
    get listTitleKey() { return "projects.title"; }
    status(p) {
      if (p.status) return p.status;
      if (!p.end) return "";
      const [y, m] = String(p.end).split("-").map(Number);
      return new Date(y, m || 12, 0) < new Date() ? "completed" : "ongoing";
    }
    badge(p) { const s = this.status(p); return s ? `<span class="badge badge--${s}">${esc(this.i.t("projects." + s))}</span>` : ""; }
    period(p) { return p.start || p.end ? `${this.i.date(p.start)} – ${p.end ? this.i.date(p.end) : this.i.t("projects.present")}` : ""; }
    banner(p, ratio = "16/9", cls = "") { return this.ui.media(p.image, p.acronym || this.title(p), { ratio, position: p.imagePosition, fit: p.imageFit, fallback: Art.pattern(p.id), cls }); }
    head(p) { return `<div class="card__row">${p.acronym ? `<span class="acronym">${esc(p.acronym)}</span>` : ""}${this.badge(p)}</div>`; }
    factsOf(p) {
      const i = this.i;
      return this.ui.facts([
        this.period(p) && [i.t("projects.period"), esc(this.period(p))],
        p.funding && [i.t("projects.funding"), esc(i.pick(p.funding))],
        p.grant && [i.t("projects.grant"), esc(p.grant)],
        p.role && [i.t("projects.role"), esc(i.pick(p.role))],
        p.partners && p.partners.length && [i.t("projects.partners"), p.partners.map((x) => esc(i.pick(x))).join(", ")],
        p.website && [i.t("website"), `<a href="${esc(p.website)}" target="_blank" rel="noopener">${esc(p.website.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, ""))} ↗</a>`]
      ]);
    }
    card(p, k) {
      return this.cardLink(p, k, `${this.banner(p)}
        <div class="card__body">${this.head(p)}
          <h3 class="card__title">${esc(this.title(p))}</h3>
          ${this.period(p) ? `<p class="card__meta">${esc(this.period(p))}</p>` : ""}
          ${p.summary ? `<p class="card__text">${esc(this.i.pick(p.summary))}</p>` : ""}
          <span class="card__more">${esc(this.i.t("readMore"))} →</span></div>`);
    }
    preview(p) {
      const i = this.i;
      return `<div class="preview">${this.banner(p, "21/9", "preview__banner")}
        <div class="preview__main">${this.head(p)}
          <h2 class="detail__title">${esc(this.title(p))}</h2>
          ${this.factsOf(p)}
          <p class="preview__text">${esc(i.pick(p.summary) || clip(plain(i.pick(p.description)), 300))}</p>
          ${this.previewFooter(p)}
        </div></div>`;
    }
    full(p) {
      const i = this.i, ui = this.ui, team = this.membersOf(p.people), research = this.researchOf(p.research);
      return `<div class="container detail-page">
        <div class="detail-page__grid">
          <article class="detail-page__main">
            <div class="prose reveal">${i.pick(p.description) || `<p>${esc(i.pick(p.summary))}</p>`}</div>
            ${p.gallery && p.gallery.length ? `<section class="reveal">${ui.h(i.t("gallery"))}${ui.gallery(p.gallery, "p-" + p.id)}</section>` : ""}
            ${p.links && p.links.length ? `<section class="reveal">${ui.h(i.t("links"))}${ui.links(p.links)}</section>` : ""}
          </article>
          <aside class="detail-page__side detail-page__side--first">
            <section class="side-box reveal">${this.banner(p, "16/9", "side-box__media")}${this.factsOf(p)}
              ${p.website ? ui.btn(p.website, i.t("website"), { primary: true }) : ""}</section>
            ${team.length ? `<section class="side-box reveal">${ui.h(i.t("projects.team"))}${this.peopleMini(team)}</section>` : ""}
            ${research.length ? `<section class="side-box reveal">${ui.h(i.t("projects.research"))}${this.researchChips(research)}</section>` : ""}
          </aside>
        </div></div>`;
    }
  }

  /* ---------------- NEWS ---------------- */
  class News extends Collection {
    static key = "news";
    get detailPage() { return "post.html"; }
    get listPage() { return "news.html"; }
    get listTitleKey() { return "news.title"; }
    items() {
      return visible(LAB.news).slice().sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0) || String(b.date).localeCompare(String(a.date)));
    }
    typeOf(n) { return (SITE.newsTypes || []).find((t) => t.id === n.type); }
    badges(n) {
      const t = this.typeOf(n);
      return `${t ? `<span class="badge badge--${esc(n.type)}">${esc(this.i.pick(t.label))}</span>` : ""}${n.pinned ? `<span class="badge badge--pinned">📌 ${esc(this.i.t("news.pinned"))}</span>` : ""}`;
    }
    card(n, k) {
      const [y, m, d] = String(n.date).split("-");
      return this.cardLink(n, k, `
        <time class="news-item__date" datetime="${esc(n.date)}"><span class="news-item__day">${esc(d || "")}</span>
          <span class="news-item__month">${esc(this.i.date(`${y}-${m}`))}</span></time>
        <div class="news-item__body"><div class="card__row">${this.badges(n)}</div>
          <h3 class="news-item__title">${esc(this.title(n))}</h3>
          ${n.summary ? `<p class="card__text">${esc(this.i.pick(n.summary))}</p>` : ""}</div>
        ${n.image ? this.ui.media(n.image, this.title(n), { ratio: "4/3", position: n.imagePosition, cls: "news-item__thumb" }) : ""}`,
        `news-item${n.image ? " has-image" : ""}`);
    }
    preview(n) {
      const i = this.i;
      return `<div class="preview">${n.image ? this.ui.media(n.image, this.title(n), { ratio: "21/9", position: n.imagePosition, cls: "preview__banner" }) : ""}
        <div class="preview__main"><div class="card__row">${this.badges(n)}<time class="muted" datetime="${esc(n.date)}">${esc(i.date(n.date))}</time></div>
          <h2 class="detail__title">${esc(this.title(n))}</h2>
          <p class="preview__text">${esc(clip(plain(i.pick(n.body)) || i.pick(n.summary), 320))}</p>
          ${this.previewFooter(n)}
        </div></div>`;
    }
    full(n) {
      const i = this.i, ui = this.ui, more = this.items().filter((x) => x.id !== n.id).slice(0, 4);
      return `<div class="container detail-page">
        <div class="detail-page__grid">
          <article class="detail-page__main">
            <div class="card__row reveal">${this.badges(n)}<time class="muted" datetime="${esc(n.date)}">${esc(i.date(n.date))}</time></div>
            ${n.image ? ui.media(n.image, this.title(n), { ratio: "16/9", position: n.imagePosition, cls: "detail-page__banner reveal" }) : ""}
            <div class="prose reveal">${i.pick(n.body) || `<p>${esc(i.pick(n.summary))}</p>`}</div>
            ${n.gallery && n.gallery.length ? `<section class="reveal">${ui.h(i.t("gallery"))}${ui.gallery(n.gallery, "n-" + n.id)}</section>` : ""}
            ${n.links && n.links.length ? `<section class="reveal">${ui.h(i.t("links"))}${ui.links(n.links)}</section>` : ""}
          </article>
          <aside class="detail-page__side">
            ${more.length ? `<section class="side-box reveal">${ui.h(i.t("news.more"))}
              <ul class="side-list">${more.map((x) => `<li><a href="${esc(this.url(x.id))}">${esc(this.title(x))}</a><span class="muted">${esc(i.date(x.date, "short"))}</span></li>`).join("")}</ul></section>` : ""}
          </aside>
        </div></div>`;
    }
  }

  /* =================================================================
   *  PAGES
   * ================================================================= */
  class Page {
    constructor(site) { this.site = site; this.i = site.i18n; this.ui = site.ui; this.main = document.getElementById("main"); }
    render() {}
    setTitle(t) { document.title = t ? `${t} · ${SITE.shortName || ""}` : `${SITE.shortName} · ${this.i.pick(SITE.name)}`; }
  }

  /* ---------- HOME ---------- */
  class HomePage extends Page {
    render() {
      const i = this.i, ui = this.ui, H = SITE.home || {}, C = this.site.col;
      this.setTitle("");
      const research = C.research.items(), projects = C.projects.items(), news = C.news.items().slice(0, H.newsCount ?? 3);
      this.main.innerHTML = `
        <section class="hero${H.heroImage ? " hero--image" : ""}"${H.heroImage ? ` style="--hero-img:url('${esc(new URL(H.heroImage, location.href).href)}')"` : ""}>
          <canvas class="hero__canvas" aria-hidden="true"></canvas>
          <div class="container hero__inner">
            <p class="hero__kicker reveal">${esc(i.pick(SITE.institution))}</p>
            <h1 class="hero__title reveal" style="--d:80ms"><span class="hero__short">${esc(SITE.shortName || "")}</span>${esc(i.pick(SITE.name))}</h1>
            ${H.tagline ? `<p class="hero__tagline reveal" style="--d:160ms">${esc(i.pick(H.tagline))}</p>` : ""}
            <div class="btn-row reveal" style="--d:240ms">
              ${ui.btn("research.html", i.t("research.title"), { primary: true })}${ui.btn("members.html", i.t("members.title"))}
            </div>
          </div>
        </section>

        ${(H.focus || []).length ? `<section class="focus"><div class="container focus__grid">${H.focus.map((f, k) => `
          <a class="focus__item reveal" style="--d:${k * 80}ms" href="${esc(f.link || "research.html")}">
            <span class="focus__title">${esc(i.pick(f.title))}</span><span class="focus__text">${esc(i.pick(f.text))}</span>
            <span class="focus__arrow" aria-hidden="true">→</span></a>`).join("")}</div></section>` : ""}

        <section class="section"><div class="container split">
          <div><h2 class="section__title reveal">${esc(i.t("home.intro"))}</h2><div class="prose reveal">${i.pick(H.intro)}</div>
            <p class="reveal">${ui.btn("members.html", i.t("home.members") + " →")}</p></div>
          ${(H.quickInfo || []).length ? `<aside class="info-box reveal"><h2 class="info-box__title">${esc(i.t("home.students"))}</h2>
            <dl>${H.quickInfo.map((q) => `<div><dt>${esc(i.pick(q.label))}</dt><dd>${esc(i.pick(q.value))}</dd></div>`).join("")}</dl></aside>` : ""}
        </div></section>

        ${(H.numbers || []).length ? `<section class="numbers"><div class="container">
          <h2 class="numbers__title reveal">${esc(i.t("home.numbers"))}</h2>
          <div class="numbers__grid">${H.numbers.map((n) => `<div class="number reveal">
            <span class="number__value"><span data-count="${+n.value || 0}">0</span>${esc(n.suffix || "")}</span>
            <span class="number__label">${esc(i.pick(n.label))}</span></div>`).join("")}</div></div></section>` : ""}

        ${research.length ? `<section class="section section--alt"><div class="container">
          <div class="section__headrow"><h2 class="section__title reveal">${esc(i.t("home.research"))}</h2>
            <a class="more-link reveal" href="research.html">${esc(i.t("viewAll"))} →</a></div>
          <div class="grid grid--cards">${research.slice(0, 6).map((r, k) => C.research.card(r, k)).join("")}</div></div></section>` : ""}

        ${projects.length ? `<section class="section"><div class="container">
          <div class="section__headrow"><h2 class="section__title reveal">${esc(i.t("home.projects"))}</h2>
            <a class="more-link reveal" href="projects.html">${esc(i.t("viewAll"))} →</a></div>
          <div class="grid grid--cards">${projects.slice(0, 6).map((p, k) => C.projects.card(p, k)).join("")}</div></div></section>` : ""}

        ${partnersSection(i)}

        ${news.length ? `<section class="section"><div class="container container--narrow">
          <div class="section__headrow"><h2 class="section__title reveal">${esc(i.t("home.news"))}</h2>
            <a class="more-link reveal" href="news.html">${esc(i.t("viewAll"))} →</a></div>
          <div class="news-list">${news.map((n, k) => C.news.card(n, k)).join("")}</div></div></section>` : ""}`;
      const cv = this.main.querySelector(".hero__canvas");
      if (cv) new TrackCanvas(cv);
    }
  }

  function partnersSection(i) {
    const ps = SITE.partners || [];
    if (!ps.length) return "";
    return `<section class="section section--alt partners"><div class="container">
      <h2 class="section__title reveal">${esc(i.t("home.partners"))}</h2>
      <div class="partners__row">${ps.map((p, k) => `<a class="partner reveal" style="--d:${k * 60}ms" href="${esc(p.url)}" target="_blank" rel="noopener" title="${esc(p.name)}">
        <img src="${esc(p.logo)}" alt="${esc(p.name)}" loading="lazy"></a>`).join("")}</div></div></section>`;
  }

  /* ---------- ABOUT ---------- */
  class AboutPage extends Page {
    render() {
      const i = this.i, ui = this.ui, A = SITE.about || {}, H = SITE.home || {};
      this.setTitle(i.t("about.title"));
      this.main.innerHTML = ui.pageHead(i.t("about.title"), i.pick(A.subtitle) || i.pick(SITE.name)) + `
        <section class="section section--tight"><div class="container about">
          ${(A.sections || []).map((s) => `<div class="about__block reveal"><h2 class="section__title">${esc(i.pick(s.title))}</h2><div class="prose">${i.pick(s.text)}</div></div>`).join("")}
        </div></section>
        ${(A.directions || []).length ? `<section class="section section--alt"><div class="container">
          <h2 class="section__title reveal">${esc(i.t("about.directions"))}</h2>
          <div class="directions">${A.directions.map((d, k) => `<div class="direction reveal" style="--d:${k * 80}ms"><span class="direction__n">0${k + 1}</span>${esc(i.pick(d))}</div>`).join("")}</div>
        </div></section>` : ""}
        ${(H.numbers || []).length ? `<section class="numbers"><div class="container"><div class="numbers__grid">${H.numbers.map((n) => `<div class="number reveal">
          <span class="number__value"><span data-count="${+n.value || 0}">0</span>${esc(n.suffix || "")}</span><span class="number__label">${esc(i.pick(n.label))}</span></div>`).join("")}</div></div></section>` : ""}
        ${(A.gallery || []).length ? `<section class="section"><div class="container">
          <h2 class="section__title reveal">${esc(i.t("gallery"))}</h2><div class="reveal">${ui.gallery(A.gallery, "about")}</div></div></section>` : ""}
        ${partnersSection(i)}`;
    }
  }

  /* ---------- CONTACT ---------- */
  class ContactPage extends Page {
    render() {
      const i = this.i, ui = this.ui, c = SITE.contact || {};
      this.setTitle(i.t("contact.title"));
      this.main.innerHTML = ui.pageHead(i.t("contact.title"), i.t("contact.lead")) + `
        <section class="section section--tight"><div class="container contact">
          <div class="contact__card reveal">
            ${c.office ? `<h2 class="section__title">${esc(i.pick(c.office))}</h2>` : ""}
            ${ui.facts([
              c.address && [i.t("contact.address"), esc(i.pick(c.address))],
              c.phone && [i.t("contact.phone"), `<a href="tel:${esc(c.phone.replace(/\s+/g, ""))}">${esc(c.phone)}</a>${c.phoneHours ? ` <span class="muted">(${esc(i.pick(c.phoneHours))})</span>` : ""}`],
              c.email && [i.t("contact.email"), `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>`]
            ])}
            <div class="btn-row">
              ${c.mapUrl ? ui.btn(c.mapUrl, i.t("contact.map"), { primary: true }) : ""}
              ${c.email ? ui.btn(`mailto:${c.email}`, c.email, { icon: "✉", external: false }) : ""}
            </div>
          </div>
          ${(SITE.social || []).length ? `<div class="contact__card reveal"><h2 class="section__title">${esc(i.t("contact.social"))}</h2>${ui.links(SITE.social)}</div>` : ""}
        </div></section>`;
    }
  }

  /* ---------- LIST page (members.html, research.html, projects.html, news.html) ---------- */
  class ListPage extends Page {
    constructor(site, col) { super(site); this.col = col; this.filter = "all"; }
    filters() {
      const i = this.i, items = this.col.items();
      if (this.col instanceof Research) return (SITE.researchCategories || []).map((c) => ({ id: c.id, label: i.pick(c.label), count: items.filter((r) => (r.categories || []).includes(c.id)).length })).filter((o) => o.count);
      if (this.col instanceof Projects) return ["ongoing", "completed"].map((s) => ({ id: s, label: i.t("projects." + s), count: items.filter((p) => this.col.status(p) === s).length })).filter((o) => o.count);
      if (this.col instanceof News) return (SITE.newsTypes || []).map((t) => ({ id: t.id, label: i.pick(t.label), count: items.filter((n) => n.type === t.id).length })).filter((o) => o.count);
      if (this.col instanceof Members) return this.col.groups().map((g) => ({ id: g.id, label: i.pick(g.label), count: g.members.length }));
      return [];
    }
    match(x) {
      const f = this.filter;
      if (f === "all") return true;
      if (this.col instanceof Research) return (x.categories || []).includes(f);
      if (this.col instanceof Projects) return this.col.status(x) === f;
      if (this.col instanceof News) return x.type === f;
      return true;
    }
    render() {
      const i = this.i, ui = this.ui, key = this.col.listTitleKey, lead = key.replace(".title", ".lead");
      this.setTitle(i.t(key));
      let body;
      if (this.col instanceof Members) {
        const groups = this.col.groups().filter((g) => this.filter === "all" || g.id === this.filter);
        body = groups.length ? groups.map((g) => `<div class="group"><h2 class="group__title reveal">${esc(i.pick(g.label))}</h2>
          <div class="grid grid--people">${g.members.map((p, k) => this.col.card(p, k)).join("")}</div></div>`).join("") : ui.empty();
      } else {
        const items = this.col.items().filter((x) => this.match(x));
        const wrap = this.col instanceof News ? "news-list" : "grid grid--cards";
        body = items.length ? `<div class="${wrap}">${items.map((x, k) => this.col.card(x, k)).join("")}</div>` : ui.empty();
      }
      this.main.innerHTML = ui.pageHead(i.t(key), i.t(lead)) +
        `<section class="section section--tight"><div class="container${this.col instanceof News ? " container--narrow" : ""}">${ui.filterBar(this.filters(), this.filter)}${body}</div></section>`;
      this.main.querySelectorAll("[data-filter]").forEach((b) => b.addEventListener("click", () => { this.filter = b.dataset.filter; this.render(); this.site.reveal.scan(this.main); }));
    }
  }

  /* ---------- DETAIL page (member.html?id=…, research-area.html?id=…, …) ---------- */
  class DetailPage extends Page {
    constructor(site, col) { super(site); this.col = col; this.id = new URLSearchParams(location.search).get("id"); }
    render() {
      const i = this.i, ui = this.ui, x = this.id && this.col.get(this.id);
      const crumbs = `<a href="index.html">${esc(SITE.shortName || "Home")}</a><span aria-hidden="true">/</span>${this.col.backLink()}`;
      if (!x) {
        this.setTitle(i.t("notFound"));
        this.main.innerHTML = ui.pageHead(i.t("notFound"), "", crumbs) +
          `<section class="section"><div class="container">${ui.btn(this.col.listPage, "← " + i.t(this.col.listTitleKey))}</div></section>`;
        return;
      }
      const title = this.col.title(x);
      this.setTitle(title);
      const isMember = this.col instanceof Members;
      const sub = this.col instanceof Projects && x.acronym ? x.acronym : "";
      this.main.innerHTML = (isMember ? `<header class="page-head page-head--slim"><div class="container"><nav class="crumbs" aria-label="breadcrumb">${crumbs}<span aria-hidden="true">/</span><span>${esc(title)}</span></nav></div></header>`
        : ui.pageHead(title, sub, crumbs)) +
        `<section class="section section--tight">${this.col.full(x)}</section>
         <div class="container back-row">${ui.btn(this.col.listPage, "← " + i.t(this.col.listTitleKey))}</div>`;
    }
  }

  /* =================================================================
   *  Layout – header, menu, language switch, footer
   * ================================================================= */
  class Layout {
    constructor(site) { this.site = site; this.i = site.i18n; }
    render() {
      const i = this.i, page = this.site.pageId;
      const activeId = { member: "members", "research-area": "research", project: "projects", post: "news" }[page] || page;
      const header = document.getElementById("site-header");
      header.className = "site-header";
      header.innerHTML = `<div class="container site-header__inner">
          <a class="brand" href="index.html">${SITE.logo ? `<img class="brand__logo" src="${esc(SITE.logo)}" alt="">` : ""}
            <span class="brand__text"><span class="brand__short">${esc(SITE.shortName || "")}</span><span class="brand__name">${esc(i.pick(SITE.name))}</span></span></a>
          <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="main-nav"><span class="nav-toggle__bar"></span><span class="visually-hidden">${esc(i.t("menu"))}</span></button>
          <nav class="nav" id="main-nav">
            ${(SITE.nav || []).map((n) => `<a href="${esc(n.href)}" class="nav__link${n.id === activeId ? " is-active" : ""}"${n.id === activeId ? ' aria-current="page"' : ""}>${esc(i.pick(n.label))}</a>`).join("")}
            <button class="lang-switch" type="button" title="${esc(i.t("lang.switch"))}"><span class="lang-switch__icon" aria-hidden="true"></span>${esc(i.t("lang.switchShort"))}</button>
          </nav></div>`;
      header.querySelector(".lang-switch").addEventListener("click", () => i.toggle());
      const toggle = header.querySelector(".nav-toggle");
      toggle.addEventListener("click", () => toggle.setAttribute("aria-expanded", header.classList.toggle("nav-open")));
      if (!this.bound) {
        this.bound = true;
        const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 8);
        addEventListener("scroll", onScroll, { passive: true }); onScroll();
      }
      const c = SITE.contact || {};
      const footer = document.getElementById("site-footer");
      footer.className = "site-footer";
      footer.innerHTML = `<div class="container site-footer__grid">
          <div><div class="site-footer__name">${esc(SITE.shortName || "")}</div><div>${esc(i.pick(SITE.name))}</div><div class="muted">${esc(i.pick(SITE.institution))}</div>
            <div class="site-footer__social">${(SITE.social || []).map((s) => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(i.pick(s.label))}</a>`).join("")}</div></div>
          <div><h3>${esc(i.t("footer.contact"))}</h3><div class="site-footer__list">
            ${c.office ? `<span>${esc(i.pick(c.office))}</span>` : ""}${c.address ? `<span>${esc(i.pick(c.address))}</span>` : ""}
            ${c.phone ? `<a href="tel:${esc(c.phone.replace(/\s+/g, ""))}">${esc(c.phone)}</a>` : ""}${c.email ? `<a href="mailto:${esc(c.email)}">${esc(c.email)}</a>` : ""}</div></div>
          <div><h3>${esc(i.t("footer.menu"))}</h3><div class="site-footer__list">${(SITE.nav || []).map((n) => `<a href="${esc(n.href)}">${esc(i.pick(n.label))}</a>`).join("")}</div></div>
          <div><h3>${esc(i.t("footer.links"))}</h3><div class="site-footer__list">${(SITE.usefulLinks || []).map((l) => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(i.pick(l.label))}</a>`).join("")}</div></div>
        </div>
        <div class="container site-footer__bottom">© ${new Date().getFullYear()} ${esc(i.pick(SITE.name))} (${esc(SITE.shortName || "")}). ${esc(i.t("footer.rights"))}</div>`;
    }
  }

  /* =================================================================
   *  Checker – mistakes in /data shown as a banner
   *    red    : a data file has a syntax error or did not load (always shown)
   *    yellow : wrong ids etc. (shown when the address has ?check)
   * ================================================================= */
  class Checker {
    static run() {
      const errors = (window.LAB_ERRORS || []).slice(), warn = [];
      const need = { site: "data/site.js", strings: "data/ui-strings.js", members: "data/members.js", research: "data/research.js", projects: "data/projects.js", news: "data/news.js" };
      for (const [k, f] of Object.entries(need)) if (!LAB[k]) errors.push(`${f}: not loaded (missing file or an error in it).`);
      const ids = (k) => new Set((LAB[k] || []).map((x) => x && x.id));
      for (const k of ["members", "research", "projects", "news"]) {
        const seen = new Set();
        (LAB[k] || []).forEach((x, n) => {
          if (!x || !x.id) return warn.push(`data/${k}.js: entry #${n + 1} has no id.`);
          if (!/^[a-z0-9-]+$/.test(x.id)) warn.push(`data/${k}.js: id "${x.id}" should use only lowercase letters, numbers and "-".`);
          if (seen.has(x.id)) warn.push(`data/${k}.js: id "${x.id}" is used twice.`);
          seen.add(x.id);
        });
      }
      const R = ids("research"), M = ids("members"), groups = new Set((SITE.memberGroups || []).map((g) => g.id));
      (LAB.members || []).forEach((p) => {
        if (!p) return;
        if (p.group && !groups.has(p.group)) warn.push(`data/members.js: "${p.id}" has unknown group "${p.group}".`);
        if (!p.group) warn.push(`data/members.js: "${p.id}" has no group yet (shown under "Other members").`);
        (p.research || []).forEach((r) => R.has(r) || warn.push(`data/members.js: "${p.id}" → research "${r}" does not exist.`));
      });
      (LAB.projects || []).forEach((p) => {
        if (!p) return;
        (p.people || []).forEach((m) => M.has(m) || warn.push(`data/projects.js: "${p.id}" → member "${m}" does not exist.`));
        (p.research || []).forEach((r) => R.has(r) || warn.push(`data/projects.js: "${p.id}" → research "${r}" does not exist.`));
      });
      const types = new Set((SITE.newsTypes || []).map((t) => t.id));
      (LAB.news || []).forEach((n) => n && n.type && !types.has(n.type) && warn.push(`data/news.js: "${n.id}" has unknown type "${n.type}".`));
      warn.forEach((w) => console.warn("[LAPI data] " + w));
      const show = new URLSearchParams(location.search).has("check");
      if (errors.length) Checker.banner("error", "⚠ Error in the site data — the page may be incomplete:", errors);
      else if (show) Checker.banner(warn.length ? "warn" : "ok", warn.length ? `Data check: ${warn.length} note(s)` : "✓ Data check: no problems found.", warn);
      return errors.length === 0;
    }
    static banner(kind, title, lines) {
      const b = document.createElement("div");
      b.className = `data-banner data-banner--${kind}`;
      b.innerHTML = `<strong>${esc(title)}</strong>${lines.length ? `<ul>${lines.map((l) => `<li>${esc(l)}</li>`).join("")}</ul>` : ""}<button type="button" aria-label="Close">&times;</button>`;
      b.querySelector("button").addEventListener("click", () => b.remove());
      document.body.prepend(b);
    }
  }

  /* =================================================================
   *  LabSite – boot
   * ================================================================= */
  class LabSite {
    constructor() {
      this.pageId = document.body.dataset.page || "home";
      this.applyTheme();
      this.i18n = new I18n(SITE, LAB.strings);
      this.ui = new Ui(this.i18n);
      this.modal = new Modal(this.i18n);
      this.lightbox = new Lightbox();
      this.reveal = new Reveal();
      this.layout = new Layout(this);
      this.col = { members: new Members(this), research: new Research(this), projects: new Projects(this), news: new News(this) };
      const C = this.col;
      const pages = {
        home: () => new HomePage(this), about: () => new AboutPage(this), contact: () => new ContactPage(this),
        members: () => new ListPage(this, C.members), research: () => new ListPage(this, C.research),
        projects: () => new ListPage(this, C.projects), news: () => new ListPage(this, C.news),
        member: () => new DetailPage(this, C.members), "research-area": () => new DetailPage(this, C.research),
        project: () => new DetailPage(this, C.projects), post: () => new DetailPage(this, C.news)
      };
      this.page = (pages[this.pageId] || pages.home)();
    }
    applyTheme() {
      const q = new URLSearchParams(location.search).get("theme");
      const theme = (q && /^[\w-]+$/.test(q) ? q : null) || SITE.theme || "scientific";
      const link = document.getElementById("theme-css");
      if (link) {
        const ver = link.getAttribute("href").split("?")[1] || "";
        if (!link.getAttribute("href").includes(`/${theme}.css`)) link.href = `assets/css/themes/${theme}.css${ver ? "?" + ver : ""}`;
      }
      document.documentElement.dataset.theme = theme;
    }
    /** Pop-up preview for "<collection>:<id>" */
    openPreview(key, id) {
      const col = this.col[key], x = col && col.get(id);
      if (!x) return false;
      this.modal.open(col.preview(x), `${key}/${id}`);
      this.reveal.scan(this.modal.body);
      return true;
    }
    openFromHash() {
      const m = location.hash.match(/^#(members|research|projects|news)\/(.+)$/);
      if (m) this.openPreview(m[1], decodeURIComponent(m[2]));
    }
    renderAll() {
      this.layout.render();
      this.page.render();
      this.reveal.scan(document);
      if (this.modal.isOpen) this.openFromHash();   // re-render an open pop-up in the new language
    }
    start() {
      Checker.run();
      this.renderAll();
      this.openFromHash();
      this.i18n.onChange(() => this.renderAll());
      addEventListener("hashchange", () => this.openFromHash());
      // cards: plain click → pop-up; ctrl/cmd/middle click → full page in a new tab (normal link)
      document.addEventListener("click", (e) => {
        const a = e.target.closest("a[data-preview]");
        if (!a || e.defaultPrevented || e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        const [key, id] = a.dataset.preview.split(":");
        if (this.openPreview(key, id)) e.preventDefault();
      });
      document.documentElement.classList.add("is-ready");
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    try { window.labSite = new LabSite(); window.labSite.start(); }
    catch (err) {
      console.error(err);
      (window.LAB_ERRORS = window.LAB_ERRORS || []).push("Site engine: " + err.message);
      Checker.banner("error", "⚠ The page could not be built:", window.LAB_ERRORS);
    }
  });
})();
