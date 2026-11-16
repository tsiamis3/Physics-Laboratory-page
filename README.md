# LAPI website — Laboratory for Accelerator Physics and Instrumentation

Static, bilingual (EN / EL) site. No database, no build step: edit a text file, commit, done.
Live: https://tsiamis3.github.io/Physics-Laboratory-page/

---

## 1. Where is everything?

| I want to change… | File |
|---|---|
| **Members** | `data/members.js` |
| **Research areas** | `data/research.js` |
| **Projects** | `data/projects.js` |
| **News & announcements** | `data/news.js` |
| Home / About / Contact texts, numbers, partner logos, footer links, menu, categories | `data/site.js` |
| Words on buttons and headings | `data/ui-strings.js` |
| Photos | `images/members/`, `images/research/`, `images/projects/`, `images/news/`, `images/gallery/` |
| CVs (PDF) | `files/cv/` |
| Colours / fonts | `assets/css/themes/scientific.css` |

You never need to create a new `.html` page. Every member, research area, project and news item
automatically gets:

* a **card** on its list page,
* a **pop-up preview** when the card is clicked,
* its **own full page**:

| Type | Full page address |
|---|---|
| Member | `member.html?id=<id>` |
| Research area | `research-area.html?id=<id>` |
| Project | `project.html?id=<id>` |
| News | `post.html?id=<id>` |

---

## 2. Add a member (same idea for everything else)

1. Open `data/members.js` (on GitHub: open the file → pencil ✏ icon).
2. Copy an existing entry — everything from `{` to `},` — and paste it into the list.
3. Change the `id` (lowercase, no spaces, e.g. `maria-papadopoulou`) and fill in the fields.
   Delete any field you don't need. Only `id`, `name`, `group` are required.
4. **Commit changes**. The site updates in 1–2 minutes (press **Ctrl+F5** to skip the browser cache).

```js
{
  id: "maria-papadopoulou",
  name:     { en: "Maria Papadopoulou", el: "Μαρία Παπαδοπούλου" },
  group:    "phd",                                   // director | faculty | emeriti | researchers | phd | msc | staff | former
  position: { en: "PhD Student", el: "Υποψήφια Διδάκτωρ" },
  photo:    "images/members/maria-papadopoulou.jpg",
  email:    "mpapad@physics.auth.gr",
  cv:       "files/cv/maria-papadopoulou.pdf",       // or a full https:// link
  bio:      { en: "<p>Short biography.</p>", el: "<p>Σύντομο βιογραφικό.</p>" },
  research: ["muon-tomography"],                     // ids from data/research.js
  links:    [ { label: "ORCID", url: "https://orcid.org/..." } ]
},
```

**Photo / CV:** open the folder on GitHub (e.g. `images/members`) → **Add file → Upload files**, then
write the same path in `photo:` / `cv:`. Any photo size works; it is cropped to fit.
If a face is cut off, add e.g. `photoPosition: "50% 20%"`.

### Connections are automatic
* `research: ["muon-tomography"]` in a member → the member appears on that research area, and the area on the member's page.
* `people: ["maria-papadopoulou"]` in a project → she appears in the project's team, and the project on her page.

### Bilingual text
`{ en: "English", el: "Ελληνικά" }` — if `el` is missing, the English text is shown.
Long texts accept simple HTML: `<p>`, `<strong>`, `<em>`, `<ul><li>`, `<a href="...">`.

---

## 3. If something goes wrong

* **A red bar appears at the top** → a data file has a typing mistake (usually a missing `,` or `}`).
  The bar names the file and the line. Fix it and commit again.
* **Check all data:** open any page with `?check` at the end, e.g. `index.html?check` →
  a bar lists problems such as an `id` that does not exist or is used twice.

---

## 4. Other things

* **Theme:** `theme: "scientific"` in `data/site.js`. Preview another theme with `?theme=dark-lab`.
  New theme = copy a file in `assets/css/themes/`, change the colours, put its name in `site.js`.
* **Language:** the EL/EN button in the header (remembered per browser). Direct link: `?lang=el`.
* **Hide without deleting:** add `hidden: true` to any entry.
* **Order:** add `order: 1, 2, …` to any entry (smaller first).
* **Engine:** `assets/js/app.js` — normally no need to touch it.
* **Cache:** after changing `assets/` files, raise the `?v=...` number in the `.html` files.

## Publish (GitHub Pages)
Settings → Pages → *Deploy from a branch* → `main` / `(root)`.
