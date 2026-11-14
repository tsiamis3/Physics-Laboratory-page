/* =====================================================================
 *  PROJECTS
 *  ---------------------------------------------------------------------
 *  TEMPLATE (only id + title are required):
 *
 *  {
 *    id: "ifigeneia",
 *    acronym: "IFIGENEIA",
 *    title:   { en: "Full project title", el: "Πλήρης τίτλος" },
 *    summary: { en: "Short text for the card", el: "..." },
 *    description: { en: "<p>Full text, HTML allowed</p>", el: "<p>...</p>" },
 *    status:  "ongoing",            // "ongoing" | "completed"  (leave out → computed from 'end')
 *    start:   "2024-01",            // YYYY or YYYY-MM
 *    end:     "2027-12",            // leave out if open-ended
 *    funding: { en: "Funding programme", el: "..." },
 *    role:    { en: "Coordinator / Partner", el: "..." },
 *    partners: ["CERN", "Institute X"],
 *    image:   "assets/img/projects/ifigeneia.jpg",
 *    imagePosition: "50% 50%",
 *    gallery: [ "assets/img/projects/a.jpg", { src: "...", caption: { en: "...", el: "..." } } ],
 *    people:   ["example-postdoc"],          // ids from people.js
 *    research: ["accelerators"],             // ids from research.js
 *    links: [ { label: "Website", url: "https://..." } ],
 *    order: 1,
 *    hidden: false
 *  }
 *
 *  NOTE: example content — edit freely.
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.projects = [
  {
    id: "ifigeneia",
    acronym: "IFIGENEIA",
    title: {
      en: "Compact linear accelerator for radioisotope production",
      el: "Συμπαγής γραμμικός επιταχυντής για παραγωγή ραδιοϊσοτόπων"
    },
    summary: {
      en: "Design and simulation of a compact linac for the production of radioisotopes and radiopharmaceuticals.",
      el: "Σχεδιασμός και προσομοίωση συμπαγούς γραμμικού επιταχυντή για την παραγωγή ραδιοϊσοτόπων και ραδιοφαρμάκων."
    },
    description: {
      en: "<p>Example description. The project combines beam-dynamics simulations with machine-learning methods to reconstruct beam source parameters.</p>",
      el: "<p>Ενδεικτική περιγραφή. Το έργο συνδυάζει προσομοιώσεις δυναμικής δέσμης με μεθόδους μηχανικής μάθησης για την ανακατασκευή των παραμέτρων της πηγής δέσμης.</p>"
    },
    start: "2024",
    funding: { en: "National research programme (example)", el: "Εθνικό ερευνητικό πρόγραμμα (παράδειγμα)" },
    role: { en: "Partner", el: "Εταίρος" },
    people: ["example-professor", "example-assistant-professor", "example-emeritus", "example-postdoc"],
    research: ["accelerators", "isotopes", "ml"]
  },
  {
    id: "picosec",
    acronym: "PICOSEC",
    title: {
      en: "PICOSEC Micromegas Collaboration",
      el: "Συνεργασία PICOSEC Micromegas"
    },
    summary: {
      en: "Development of a gaseous detector with picosecond-level timing.",
      el: "Ανάπτυξη αέριου ανιχνευτή με χρονισμό επιπέδου picosecond."
    },
    description: {
      en: "<p>International R&amp;D collaboration developing Micromegas detectors with a Cherenkov radiator and photocathode for precise timing.</p>",
      el: "<p>Διεθνής συνεργασία έρευνας και ανάπτυξης ανιχνευτών Micromegas με ακτινοβολητή Cherenkov και φωτοκάθοδο για ακριβή χρονισμό.</p>"
    },
    start: "2016",
    partners: ["CERN", "CEA Saclay", "…"],
    people: ["example-assistant-professor", "example-postdoc", "example-phd-1"],
    research: ["detectors", "ml"]
  },
  {
    id: "example-completed",
    acronym: "EXAMPLE",
    title: { en: "An example completed project", el: "Ένα ενδεικτικό ολοκληρωμένο έργο" },
    summary: {
      en: "Shows how a finished project appears (status is computed from the end date).",
      el: "Δείχνει πώς εμφανίζεται ένα ολοκληρωμένο έργο (η κατάσταση υπολογίζεται από την ημερομηνία λήξης)."
    },
    start: "2019-01",
    end: "2022-12",
    funding: { en: "Example fund", el: "Ενδεικτικό πρόγραμμα" },
    people: ["example-professor", "example-phd-2"],
    research: ["atlas"]
  }
];
