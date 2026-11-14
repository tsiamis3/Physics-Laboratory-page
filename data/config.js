/* =====================================================================
 *  SITE CONFIGURATION
 *  ---------------------------------------------------------------------
 *  Everything general about the lab lives here: name, intro text,
 *  contact details, theme, people groups, menu.
 *
 *  Bilingual text:  { en: "English text", el: "Ελληνικό κείμενο" }
 *  If a Greek version is missing, the English one is shown.
 *  Plain strings (not objects) are shown as-is in both languages.
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.config = {
  /* Theme = file name in assets/css/themes/ (without .css).
   * Available: "scientific" (default), "dark-lab".
   * For a quick preview without editing: add ?theme=dark-lab to the URL. */
  theme: "scientific",

  /* Languages */
  defaultLang: "en",
  languages: ["en", "el"],

  /* Identity */
  name: {
    en: "Nuclear Physics Laboratory",
    el: "Εργαστήριο Πυρηνικής Φυσικής"
  },
  shortName: { en: "NPL", el: "ΕΠΦ" },
  institution: {
    en: "School of Physics · Aristotle University of Thessaloniki",
    el: "Τμήμα Φυσικής · Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης"
  },
  logo: "assets/img/logo.svg",

  /* Home page */
  tagline: {
    en: "Experimental and applied nuclear & particle physics — from detectors and accelerators to medical isotopes.",
    el: "Πειραματική και εφαρμοσμένη πυρηνική & σωματιδιακή φυσική — από ανιχνευτές και επιταχυντές έως ιατρικά ραδιοϊσότοπα."
  },
  /* Intro: may contain simple HTML (<p>, <strong>, <a>, ...) */
  intro: {
    en: `<p>The Nuclear Physics Laboratory of the School of Physics carries out research and teaching in
         experimental nuclear and particle physics. Our activities range from the development of
         <strong>fast-timing gaseous detectors</strong> and participation in the <strong>ATLAS</strong>
         experiment at CERN, to <strong>accelerator physics</strong>, radioisotope production and
         machine-learning methods for physics data.</p>
         <p>The laboratory also supports undergraduate and graduate teaching through laboratory courses,
         diploma and master's theses, and doctoral research.</p>`,
    el: `<p>Το Εργαστήριο Πυρηνικής Φυσικής του Τμήματος Φυσικής πραγματοποιεί έρευνα και διδασκαλία στην
         πειραματική πυρηνική και σωματιδιακή φυσική. Οι δραστηριότητές μας εκτείνονται από την ανάπτυξη
         <strong>ταχέων αέριων ανιχνευτών χρονισμού</strong> και τη συμμετοχή στο πείραμα <strong>ATLAS</strong>
         στο CERN, έως τη <strong>φυσική επιταχυντών</strong>, την παραγωγή ραδιοϊσοτόπων και μεθόδους
         μηχανικής μάθησης για δεδομένα φυσικής.</p>
         <p>Το εργαστήριο υποστηρίζει επίσης την προπτυχιακή και μεταπτυχιακή διδασκαλία μέσω εργαστηριακών
         μαθημάτων, διπλωματικών εργασιών και διδακτορικής έρευνας.</p>`
  },
  /* Optional big image behind the home header. null = animated particle tracks. */
  heroImage: null,
  /* How many news items to show on the home page */
  newsOnHome: 3,

  /* Contact (shown in footer and home page) */
  contact: {
    address: {
      en: "School of Physics, Aristotle University of Thessaloniki, 541 24 Thessaloniki, Greece",
      el: "Τμήμα Φυσικής, Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, 541 24 Θεσσαλονίκη"
    },
    email: "nuclear-lab@physics.auth.gr",
    phone: "+30 2310 99xxxx",
    mapUrl: "https://www.openstreetmap.org/search?query=School%20of%20Physics%20Aristotle%20University%20Thessaloniki"
  },

  /* Groups on the People page, in display order.
   * Each person in data/people.js has  group: "<one of these ids>" */
  peopleGroups: [
    { id: "faculty",     label: { en: "Faculty",              el: "Μέλη ΔΕΠ" } },
    { id: "emeriti",     label: { en: "Emeriti",              el: "Ομότιμοι Καθηγητές" } },
    { id: "researchers", label: { en: "Researchers & Postdocs", el: "Ερευνητές & Μεταδιδάκτορες" } },
    { id: "phd",         label: { en: "PhD Students",         el: "Υποψήφιοι Διδάκτορες" } },
    { id: "msc",         label: { en: "MSc Students",         el: "Μεταπτυχιακοί Φοιτητές" } },
    { id: "undergrad",   label: { en: "Undergraduate Students", el: "Προπτυχιακοί Φοιτητές" } },
    { id: "staff",       label: { en: "Technical Staff",      el: "Τεχνικό Προσωπικό" } },
    { id: "alumni",      label: { en: "Alumni",               el: "Απόφοιτοι" } }
  ],

  /* News categories (data/news.js →  type: "<id>") */
  newsTypes: [
    { id: "news",         label: { en: "News",         el: "Νέα" } },
    { id: "announcement", label: { en: "Announcement", el: "Ανακοίνωση" } },
    { id: "event",        label: { en: "Event",        el: "Εκδήλωση" } },
    { id: "position",     label: { en: "Open position", el: "Θέση εργασίας" } }
  ],

  /* Main menu. "id" must match <body data-page="..."> of each html page. */
  nav: [
    { id: "home",     href: "index.html",    label: { en: "Home",           el: "Αρχική" } },
    { id: "people",   href: "people.html",   label: { en: "People",         el: "Άτομα" } },
    { id: "research", href: "research.html", label: { en: "Research",       el: "Έρευνα" } },
    { id: "projects", href: "projects.html", label: { en: "Projects",       el: "Έργα" } },
    { id: "news",     href: "news.html",     label: { en: "News",           el: "Νέα" } }
  ],

  /* Extra links in the footer */
  footerLinks: [
    { label: { en: "School of Physics", el: "Τμήμα Φυσικής" }, url: "https://www.physics.auth.gr/" },
    { label: { en: "Aristotle University", el: "ΑΠΘ" }, url: "https://www.auth.gr/" },
    { label: "CERN", url: "https://home.cern/" }
  ]
};
