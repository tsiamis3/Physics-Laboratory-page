/* =====================================================================
 *  NEWS & ANNOUNCEMENTS
 *  ---------------------------------------------------------------------
 *  Newest first automatically (sorted by date). Pinned items stay on top.
 *  Each item gets a card, a pop-up and a full page: post.html?id=<id>
 *
 *  TEMPLATE (only id, date, title are required):
 *  {
 *    id: "2026-11-seminar",               // unique, lowercase, no spaces
 *    date: "2026-11-20",                  // YYYY-MM-DD
 *    type: "events",                      // news | announcements | conferences | events  (newsTypes in data/site.js)
 *    title:   { en: "Title", el: "Τίτλος" },
 *    summary: { en: "Short text for the list", el: "..." },
 *    body:    { en: "<p>Full text, HTML allowed</p>", el: "<p>...</p>" },
 *    image:   "images/news/seminar.jpg",
 *    gallery: [ "images/news/1.jpg", { src: "images/news/2.jpg", caption: { en: "...", el: "..." } } ],
 *    links:   [ { label: { en: "Poster (PDF)", el: "Αφίσα (PDF)" }, url: "files/poster.pdf" } ],
 *    pinned: false,
 *    hidden: false
 *  },
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.news = [
  {
    id: "week-of-physics-2026",
    date: "2026-01-17",
    type: "events",
    title: { en: "Week of Physics 2026", el: "Εβδομάδα Φυσικής 2026" },
    summary: {
      en: "Week of Physics 2026 event.",
      el: "Εκδήλωση «Εβδομάδα Φυσικής 2026»."
    },
    body: {
      en: `<p>The subject of the Laboratory for Accelerator Physics and Instrumentation concerns the laboratory support of
           undergraduate and postgraduate training in Particle Accelerator and Detector Physics, as well as the support
           of research methods for particle technology development.</p>`,
      el: `<p>Αντικείμενο του Εργαστηρίου Φυσικής Επιταχυντών και Οργανολογίας είναι η εργαστηριακή υποστήριξη της
           προπτυχιακής και μεταπτυχιακής εκπαίδευσης στη Φυσική Επιταχυντών και Ανιχνευτών Σωματιδίων, καθώς και η
           υποστήριξη ερευνητικών μεθόδων για την ανάπτυξη τεχνολογιών σωματιδίων.</p>`
    }
  }
];
