# Physics Laboratory page

Static, bilingual (EN / EL) website for the Nuclear Physics Laboratory.
No build step, no server code — open `index.html` or publish with GitHub Pages.

## Where things are

| What you want to change | File |
|---|---|
| Lab name, intro text, contact, menu, people groups, theme | `data/config.js` |
| People | `data/people.js` |
| Research areas | `data/research.js` |
| Projects | `data/projects.js` |
| News & announcements | `data/news.js` |
| Interface wording (buttons, headings) | `data/ui-strings.js` |
| Colours / fonts (look) | `assets/css/themes/*.css` |
| Photos | `assets/img/people/`, `research/`, `projects/`, `news/` |

Each data file starts with a **TEMPLATE** comment: copy it, paste it into the list, fill in.
Only `id` and the name/title are required; any missing field is simply not shown.

### Bilingual text
```js
title: { en: "Detector Development", el: "Ανάπτυξη Ανιχνευτών" }
```
If `el` is missing, English is shown. A plain string is used for both languages.
Long texts (`bio`, `description`, `body`) accept simple HTML (`<p>`, `<strong>`, `<ul>`, `<a>`).

### Linking things together
- A person with `research: ["detectors"]` appears automatically on that research area.
- A project with `people: ["jdoe"]` and `research: ["accelerators"]` shows the team and areas,
  and appears on each person's profile.

### Photos
Any size or aspect ratio works: images are cropped to fit the card on desktop and mobile.
If a face gets cut, set e.g. `photoPosition: "50% 20%"` (keep the top part).
With no photo, initials (people) or an abstract detector pattern (research/projects) are drawn.

### Direct links to a pop-up
`people.html#people/<id>`, `research.html#research/<id>`, `projects.html#projects/<id>`, `news.html#news/<id>`

### Themes
Set `theme: "scientific"` in `data/config.js`. A second theme, `dark-lab`, is included.
Preview any theme without editing: `index.html?theme=dark-lab`.
New theme = copy a file in `assets/css/themes/`, change the variables, set its name in config.

### Language
The EL/EN button in the header switches language (remembered per browser).
Link to a specific language with `?lang=el`.

## Publish (GitHub Pages)
Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)`.

## Cache
GitHub Pages lets browsers keep files for ~10 minutes. After a change, refresh with **Ctrl+F5**.
Engine/CSS changes get a new `?v=...` number in the `.html` files so browsers always fetch them.
