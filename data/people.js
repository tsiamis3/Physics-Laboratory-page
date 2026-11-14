/* =====================================================================
 *  PEOPLE
 *  ---------------------------------------------------------------------
 *  To add a person: copy the TEMPLATE below, paste it into the list,
 *  and fill in what you have. Only  id, name, group  are required —
 *  everything else is optional and simply hidden if missing.
 *
 *  {
 *    id: "jdoe",                       // unique, no spaces (used in links: people.html#people/jdoe)
 *    name:     { en: "Prof. John Doe", el: "Καθ. Ιωάννης Ντόε" },
 *    group:    "faculty",              // one of LAB.config.peopleGroups ids (data/config.js)
 *    position: { en: "Professor", el: "Καθηγητής" },
 *    photo:    "assets/img/people/jdoe.jpg",   // any size/ratio; it is cropped to fit
 *    photoPosition: "50% 30%",         // optional: which part of the photo to keep (x% y%)
 *    email:  "jdoe@physics.auth.gr",
 *    phone:  "+30 2310 99xxxx",
 *    office: { en: "Building ..., Room ...", el: "Κτίριο ..., Γραφείο ..." },
 *    short:  { en: "One line under the name on the card", el: "..." },
 *    bio:    { en: "<p>Longer text, HTML allowed</p>", el: "<p>...</p>" },
 *    research: ["detectors", "accelerators"],    // ids from data/research.js
 *    links: [
 *      { label: "Google Scholar", url: "https://scholar.google.com/..." },
 *      { label: "ORCID",          url: "https://orcid.org/..." },
 *      { label: { en: "Personal page", el: "Προσωπική σελίδα" }, url: "https://..." }
 *    ],
 *    order: 1,          // optional: smaller = shown first inside its group
 *    hidden: false      // optional: true = keep in file but don't show
 *  }
 *
 *  NOTE: the entries below are EXAMPLES / placeholders — replace them.
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.people = [
  {
    id: "example-professor",
    name: { en: "Prof. Maria Papadopoulou", el: "Καθ. Μαρία Παπαδοπούλου" },
    group: "faculty",
    position: { en: "Professor · Lab Director", el: "Καθηγήτρια · Διευθύντρια Εργαστηρίου" },
    email: "mpapad@physics.auth.gr",
    office: { en: "Physics Building, 2nd floor", el: "Κτίριο Φυσικής, 2ος όροφος" },
    short: { en: "Experimental particle physics, ATLAS", el: "Πειραματική σωματιδιακή φυσική, ATLAS" },
    bio: {
      en: "<p>Example biography. Research interests include experimental particle physics at the LHC, muon detectors and detector R&amp;D.</p><p>Replace this text with the real biography.</p>",
      el: "<p>Ενδεικτικό βιογραφικό. Τα ερευνητικά ενδιαφέροντα περιλαμβάνουν την πειραματική σωματιδιακή φυσική στον LHC, ανιχνευτές μιονίων και ανάπτυξη ανιχνευτών.</p><p>Αντικαταστήστε το κείμενο με το πραγματικό βιογραφικό.</p>"
    },
    research: ["atlas", "detectors"],
    links: [
      { label: "Google Scholar", url: "https://scholar.google.com/" },
      { label: "INSPIRE-HEP", url: "https://inspirehep.net/" }
    ],
    order: 1
  },
  {
    id: "example-assistant-professor",
    name: { en: "Dr. Nikos Georgiou", el: "Δρ. Νίκος Γεωργίου" },
    group: "faculty",
    position: { en: "Assistant Professor", el: "Επίκουρος Καθηγητής" },
    email: "ngeorgiou@physics.auth.gr",
    short: { en: "Gaseous detectors, precise timing", el: "Αέριοι ανιχνευτές, ακριβής χρονισμός" },
    bio: {
      en: "<p>Example biography about detector development and accelerator applications.</p>",
      el: "<p>Ενδεικτικό βιογραφικό για ανάπτυξη ανιχνευτών και εφαρμογές επιταχυντών.</p>"
    },
    research: ["detectors", "accelerators"],
    links: [{ label: "ORCID", url: "https://orcid.org/" }],
    order: 2
  },
  {
    id: "example-emeritus",
    name: { en: "Prof. Eleni Dimitriou", el: "Καθ. Ελένη Δημητρίου" },
    group: "emeriti",
    position: { en: "Professor Emerita", el: "Ομότιμη Καθηγήτρια" },
    short: { en: "Nuclear & particle physics", el: "Πυρηνική & σωματιδιακή φυσική" },
    research: ["atlas", "isotopes"]
  },
  {
    id: "example-postdoc",
    name: { en: "Dr. Angelos Tsiamis", el: "Δρ. Άγγελος Τσιάμης" },
    group: "researchers",
    position: { en: "Postdoctoral Researcher", el: "Μεταδιδακτορικός Ερευνητής" },
    short: { en: "Beam dynamics, ML, PICOSEC detectors", el: "Δυναμική δέσμης, ML, ανιχνευτές PICOSEC" },
    bio: {
      en: "<p>Works on accelerator beam dynamics, machine learning for beam parameter reconstruction, and the PICOSEC Micromegas detector.</p>",
      el: "<p>Ασχολείται με τη δυναμική δέσμης επιταχυντών, μηχανική μάθηση για την ανακατασκευή παραμέτρων δέσμης και τον ανιχνευτή PICOSEC Micromegas.</p>"
    },
    research: ["accelerators", "ml", "detectors"],
    links: [{ label: "GitHub", url: "https://github.com/tsiamis3" }]
  },
  {
    id: "example-phd-1",
    name: { en: "Ioanna Konstantinou", el: "Ιωάννα Κωνσταντίνου" },
    group: "phd",
    position: { en: "PhD Candidate", el: "Υποψήφια Διδάκτωρ" },
    short: { en: "Timing studies with Micromegas", el: "Μελέτες χρονισμού με Micromegas" },
    research: ["detectors", "ml"]
  },
  {
    id: "example-phd-2",
    name: { en: "Giorgos Alexiou", el: "Γιώργος Αλεξίου" },
    group: "phd",
    position: { en: "PhD Candidate", el: "Υποψήφιος Διδάκτωρ" },
    short: { en: "Muon spectrometer performance", el: "Απόδοση φασματόμετρου μιονίων" },
    research: ["atlas"]
  },
  {
    id: "example-msc",
    name: { en: "Sofia Nikolaou", el: "Σοφία Νικολάου" },
    group: "msc",
    position: { en: "MSc Student", el: "Μεταπτυχιακή Φοιτήτρια" },
    research: ["isotopes"]
  },
  {
    id: "example-staff",
    name: { en: "Kostas Ioannou", el: "Κώστας Ιωάννου" },
    group: "staff",
    position: { en: "Laboratory Technician", el: "Τεχνικός Εργαστηρίου" },
    short: { en: "Electronics & lab infrastructure", el: "Ηλεκτρονικά & υποδομές εργαστηρίου" }
  }
];
