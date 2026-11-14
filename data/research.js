/* =====================================================================
 *  RESEARCH AREAS
 *  ---------------------------------------------------------------------
 *  TEMPLATE (only id + title are required):
 *
 *  {
 *    id: "detectors",                 // unique, no spaces
 *    title:   { en: "Detector Development", el: "Ανάπτυξη Ανιχνευτών" },
 *    summary: { en: "Short text for the card", el: "..." },
 *    description: { en: "<p>Full text, HTML allowed</p>", el: "<p>...</p>" },
 *    image: "assets/img/research/detectors.jpg",   // optional; a pattern is drawn if missing
 *    imagePosition: "50% 50%",        // optional crop focus
 *    keywords: ["Micromegas", "timing"],           // or { en: [...], el: [...] }
 *    links: [ { label: "...", url: "..." } ],
 *    order: 1,
 *    hidden: false
 *  }
 *
 *  People and projects are linked automatically: anyone with
 *  research: ["detectors"] in people.js / projects.js appears here.
 *
 *  NOTE: example content — edit freely.
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.research = [
  {
    id: "detectors",
    title: { en: "Detector Development", el: "Ανάπτυξη Ανιχνευτών" },
    summary: {
      en: "Fast-timing gaseous detectors such as PICOSEC Micromegas, with time resolution in the tens of picoseconds.",
      el: "Ταχείς αέριοι ανιχνευτές χρονισμού όπως οι PICOSEC Micromegas, με χρονική διακριτική ικανότητα δεκάδων picoseconds."
    },
    description: {
      en: "<p>We design, build and characterise micro-pattern gaseous detectors for precise timing. Activities include test-beam campaigns, laser studies, signal processing and simulation.</p>",
      el: "<p>Σχεδιάζουμε, κατασκευάζουμε και χαρακτηρίζουμε αέριους ανιχνευτές μικρο-δομών για ακριβή χρονισμό. Οι δραστηριότητες περιλαμβάνουν πειράματα σε δέσμες, μελέτες με laser, επεξεργασία σήματος και προσομοιώσεις.</p>"
    },
    keywords: ["PICOSEC", "Micromegas", "Timing", "Test beam"],
    order: 1
  },
  {
    id: "atlas",
    title: { en: "Particle Physics at the LHC", el: "Σωματιδιακή Φυσική στον LHC" },
    summary: {
      en: "Participation in the ATLAS experiment at CERN: muon detectors, data analysis and upgrades.",
      el: "Συμμετοχή στο πείραμα ATLAS στο CERN: ανιχνευτές μιονίων, ανάλυση δεδομένων και αναβαθμίσεις."
    },
    description: {
      en: "<p>Members of the lab contribute to the ATLAS collaboration in detector operation, performance studies and physics analyses.</p>",
      el: "<p>Μέλη του εργαστηρίου συμμετέχουν στη συνεργασία ATLAS στη λειτουργία ανιχνευτών, μελέτες απόδοσης και αναλύσεις φυσικής.</p>"
    },
    keywords: ["ATLAS", "CERN", "Muons", "LHC"],
    links: [{ label: "ATLAS Experiment", url: "https://atlas.cern/" }],
    order: 2
  },
  {
    id: "accelerators",
    title: { en: "Accelerator Physics", el: "Φυσική Επιταχυντών" },
    summary: {
      en: "Beam dynamics simulation and design of compact linear accelerators.",
      el: "Προσομοίωση δυναμικής δέσμης και σχεδιασμός συμπαγών γραμμικών επιταχυντών."
    },
    description: {
      en: "<p>Beam transport and dynamics simulations, optimisation of compact linacs, and reconstruction of beam parameters from measurements.</p>",
      el: "<p>Προσομοιώσεις μεταφοράς και δυναμικής δέσμης, βελτιστοποίηση συμπαγών γραμμικών επιταχυντών και ανακατασκευή παραμέτρων δέσμης από μετρήσεις.</p>"
    },
    keywords: ["Linac", "Beam dynamics", "Simulation"],
    order: 3
  },
  {
    id: "isotopes",
    title: { en: "Radioisotopes & Medical Applications", el: "Ραδιοϊσότοπα & Ιατρικές Εφαρμογές" },
    summary: {
      en: "Production of radioisotopes and radiopharmaceuticals with accelerators.",
      el: "Παραγωγή ραδιοϊσοτόπων και ραδιοφαρμάκων με επιταχυντές."
    },
    description: {
      en: "<p>Studies of nuclear reactions and target design for the production of medical radioisotopes.</p>",
      el: "<p>Μελέτες πυρηνικών αντιδράσεων και σχεδιασμός στόχων για την παραγωγή ιατρικών ραδιοϊσοτόπων.</p>"
    },
    keywords: ["Radioisotopes", "Nuclear medicine", "Targets"],
    order: 4
  },
  {
    id: "ml",
    title: { en: "Machine Learning for Physics", el: "Μηχανική Μάθηση στη Φυσική" },
    summary: {
      en: "Neural networks and graph neural networks for reconstruction, timing and inverse problems.",
      el: "Νευρωνικά δίκτυα και γραφο-νευρωνικά δίκτυα για ανακατασκευή, χρονισμό και αντίστροφα προβλήματα."
    },
    description: {
      en: "<p>We apply modern machine-learning methods to detector signals and accelerator simulations, including graph neural networks and surrogate models.</p>",
      el: "<p>Εφαρμόζουμε σύγχρονες μεθόδους μηχανικής μάθησης σε σήματα ανιχνευτών και προσομοιώσεις επιταχυντών, όπως γραφο-νευρωνικά δίκτυα και μοντέλα-υποκατάστατα.</p>"
    },
    keywords: ["GNN", "Deep learning", "Inverse problems"],
    order: 5
  }
];
