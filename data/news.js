/* =====================================================================
 *  NEWS & ANNOUNCEMENTS
 *  ---------------------------------------------------------------------
 *  Newest first is automatic (sorted by date). Pinned items stay on top.
 *
 *  TEMPLATE (only id, date, title are required):
 *
 *  {
 *    id: "2026-11-seminar",
 *    date: "2026-11-20",               // YYYY-MM-DD
 *    type: "event",                    // one of LAB.config.newsTypes ids
 *    title:   { en: "Title", el: "Τίτλος" },
 *    summary: { en: "Short text for the list", el: "..." },
 *    body:    { en: "<p>Full text, HTML allowed</p>", el: "<p>...</p>" },
 *    image:   "assets/img/news/seminar.jpg",
 *    imagePosition: "50% 50%",
 *    gallery: [ "assets/img/news/1.jpg", { src: "...", caption: "..." } ],
 *    links:   [ { label: { en: "Poster (PDF)", el: "Αφίσα (PDF)" }, url: "files/poster.pdf" } ],
 *    pinned: false,
 *    hidden: false
 *  }
 *
 *  NOTE: example content — edit freely.
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.news = [
  {
    id: "website-launch",
    date: "2026-11-14",
    type: "news",
    title: { en: "New laboratory website", el: "Νέα ιστοσελίδα του εργαστηρίου" },
    summary: {
      en: "The new website of the laboratory is online, in English and Greek.",
      el: "Η νέα ιστοσελίδα του εργαστηρίου είναι online, στα αγγλικά και στα ελληνικά."
    },
    body: {
      en: "<p>Welcome to the new website. Here you will find information about our people, research areas, projects and the latest announcements.</p>",
      el: "<p>Καλώς ήρθατε στη νέα ιστοσελίδα. Εδώ θα βρείτε πληροφορίες για τα μέλη, τα ερευνητικά πεδία, τα έργα και τις τελευταίες ανακοινώσεις μας.</p>"
    },
    pinned: true
  },
  {
    id: "thesis-topics",
    date: "2026-11-05",
    type: "announcement",
    title: { en: "Diploma thesis topics 2026–27", el: "Θέματα διπλωματικών εργασιών 2026–27" },
    summary: {
      en: "Topics for undergraduate theses are now available. Contact the supervisors for details.",
      el: "Τα θέματα προπτυχιακών διπλωματικών είναι διαθέσιμα. Επικοινωνήστε με τους επιβλέποντες για λεπτομέρειες."
    },
    body: {
      en: "<p>Example announcement. List the topics here, or link a PDF.</p><ul><li>Timing studies with gaseous detectors</li><li>Machine learning for beam diagnostics</li><li>Monte Carlo simulations of radioisotope production</li></ul>",
      el: "<p>Ενδεικτική ανακοίνωση. Παραθέστε εδώ τα θέματα ή συνδέστε ένα PDF.</p><ul><li>Μελέτες χρονισμού με αέριους ανιχνευτές</li><li>Μηχανική μάθηση για διαγνωστικά δέσμης</li><li>Προσομοιώσεις Monte Carlo παραγωγής ραδιοϊσοτόπων</li></ul>"
    }
  },
  {
    id: "seminar-example",
    date: "2026-10-22",
    type: "event",
    title: { en: "Seminar: Picosecond timing detectors", el: "Σεμινάριο: Ανιχνευτές χρονισμού picosecond" },
    summary: {
      en: "Invited talk on the state of the art in fast-timing detectors.",
      el: "Προσκεκλημένη ομιλία για την τρέχουσα στάθμη των ταχέων ανιχνευτών χρονισμού."
    }
  },
  {
    id: "position-example",
    date: "2026-09-30",
    type: "position",
    title: { en: "Open PhD position", el: "Ανοιχτή θέση υποψήφιου διδάκτορα" },
    summary: {
      en: "Example: a PhD position in detector physics and machine learning.",
      el: "Παράδειγμα: θέση υποψήφιου διδάκτορα σε φυσική ανιχνευτών και μηχανική μάθηση."
    }
  },
  {
    id: "testbeam-example",
    date: "2026-07-15",
    type: "news",
    title: { en: "Test-beam campaign at CERN", el: "Πειράματα σε δέσμη στο CERN" },
    summary: {
      en: "Members of the lab took part in a test-beam campaign at the CERN SPS.",
      el: "Μέλη του εργαστηρίου συμμετείχαν σε πειράματα δέσμης στο SPS του CERN."
    }
  }
];
