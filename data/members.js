/* =====================================================================
 *  MEMBERS
 *  ---------------------------------------------------------------------
 *  Each member gets automatically:
 *    • a card on the Members page,
 *    • a pop-up preview when the card is clicked,
 *    • a full profile page:  member.html?id=<id>
 *  You do NOT create any new .html file — only add an entry here.
 *
 *  TO ADD A MEMBER: copy the template, paste it in the list below, fill in.
 *  Only  id, name, group  are required. Empty / missing fields are hidden.
 *
 *  {
 *    id: "name-surname",              // unique, lowercase, no spaces → member.html?id=name-surname
 *    name:     { en: "Name Surname", el: "Όνομα Επώνυμο" },
 *    group:    "phd",                 // director | faculty | emeriti | researchers | phd | msc | staff | former
 *                                     // (list & order: memberGroups in data/site.js)
 *    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
 *    photo:    "images/members/name-surname.jpg",  // any size; cropped automatically
 *    photoPosition: "50% 20%",        // optional: which part of the photo to keep (x% y%)
 *    email:    "name@physics.auth.gr",
 *    cv:       "files/cv/name-surname.pdf",        // PDF uploaded in files/cv/, or a full https:// link
 *    phone:    "+30 2310 99xxxx",
 *    office:   { en: "Physics building, room ...", el: "Κτίριο Φυσικής, γραφείο ..." },
 *    short:    { en: "One line under the name", el: "..." },
 *    bio:      { en: "<p>Biography, HTML allowed</p>", el: "<p>...</p>" },
 *    research: ["muon-tomography"],   // ids from data/research.js  (links both ways automatically)
 *    links: [
 *      { label: "Google Scholar", url: "https://scholar.google.com/..." },
 *      { label: "ORCID", url: "https://orcid.org/..." }
 *    ],
 *    order: 1,                        // optional: smaller = earlier inside its group
 *    hidden: false                    // optional: true = keep here but don't show
 *  },
 *
 *  Members of a project are set in data/projects.js  (people: ["id", ...]).
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.members = [
  /* ---------------- Faculty ---------------- */
  {
    id: "dimitrios-sampsonidis",
    name: { en: "Dimitrios Sampsonidis", el: "Δημήτριος Σαμψωνίδης" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγητής" },
    photo: "images/members/dimitrios-sampsonidis.jpg",
    email: "",
    cv: "",
    research: ["atlas-lhc"]
  },
  {
    id: "christos-eleftheriadis",
    name: { en: "Christos Eleftheriadis", el: "Χρήστος Ελευθεριάδης" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγητής" },
    photo: "images/members/christos-eleftheriadis.jpg",
    email: "",
    cv: "",
    research: ["instrumentation", "cast", "ntof"]
  },
  {
    id: "ilias-savvidis",
    name: { en: "Ilias Savvidis", el: "Ηλίας Σαββίδης" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγητής" },
    photo: "images/members/ilias-savvidis.jpg",
    email: "",
    cv: "",
    research: ["cast", "ntof"]
  },
  {
    id: "alexandra-ioannidou",
    name: { en: "Alexandra Ioannidou", el: "Αλεξάνδρα Ιωαννίδου" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγήτρια" },
    photo: "images/members/alexandra-ioannidou.jpg",
    email: "",
    cv: "",
    research: ["data-analysis-ml"]
  },
  {
    id: "stylianos-stoulos",
    name: { en: "Stylianos Stoulos", el: "Στυλιανός Στούλος" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγητής" },
    photo: "images/members/stylianos-stoulos.jpg",
    email: "",
    cv: "",
    research: ["muon-tomography", "data-analysis-ml"]
  },
  {
    id: "konstantinos-kordas",
    name: { en: "Konstantinos Kordas", el: "Κωνσταντίνος Κορδάς" },
    group: "faculty",
    position: { en: "Associate Professor", el: "Αναπληρωτής Καθηγητής" },
    photo: "images/members/konstantinos-kordas.jpg",
    email: "",
    cv: "",
    research: ["atlas-lhc"]
  },
  {
    id: "christos-lampoudis",
    name: { en: "Christos Lampoudis", el: "Χρήστος Λαμπούδης" },
    group: "faculty",
    position: { en: "Assistant Professor", el: "Επίκουρος Καθηγητής" },
    email: "",
    cv: ""
  },

  /* ---------------- Emeriti ---------------- */
  {
    id: "charikleia-petridou",
    name: { en: "Charikleia Petridou", el: "Χαρίκλεια Πετρίδου" },
    group: "emeriti",
    position: { en: "Professor Emerita", el: "Ομότιμη Καθηγήτρια" },
    photo: "images/members/charikleia-petridou.jpg",
    email: "",
    cv: "",
    research: ["atlas-lhc"]
  },

  /* ---------------- Researchers & Postdocs ---------------- */
  {
    id: "angelos-tsiamis",
    name: { en: "Dr. Angelos Tsiamis", el: "Δρ. Άγγελος Τσιάμης" },
    group: "researchers",
    position: { en: "Postdoctoral Researcher", el: "Μεταδιδακτορικός Ερευνητής" },
    photo: "images/members/angelos-tsiamis.jpg",
    email: "",
    cv: ""
  },
  {
    id: "eirini-kasimi",
    name: { en: "Dr. Eirini Kasimi", el: "Δρ. Ειρήνη Κασίμη" },
    group: "researchers",
    position: { en: "Researcher", el: "Ερευνήτρια" },
    photo: "images/members/eirini-kasimi.jpg",
    email: "",
    cv: ""
  },

  /* ---------------- PhD students ---------------- */
  {
    id: "ioannis-karakoulias",
    name: { en: "Ioannis Karakoulias", el: "Ιωάννης Καρακούλιας" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
    photo: "images/members/ioannis-karakoulias.jpg",
    email: "",
    cv: ""
  },
  {
    id: "eliana-kapsali",
    name: { en: "Eliana Kapsali", el: "Ελιάνα Καψάλη" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφια Διδάκτωρ" },
    email: "",
    cv: ""
  },
  {
    id: "iakovos-tsouros",
    name: { en: "Iakovos Tsouros", el: "Ιάκωβος Τσούρος" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
    email: "",
    cv: ""
  },
  {
    id: "evangelos-samouilides",
    name: { en: "Evangelos Samouilides", el: "Ευάγγελος Σαμουηλίδης" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
    email: "",
    cv: ""
  },

  /* ---------------- MSc students ---------------- */
  {
    id: "alexandros-gardikiotis",
    name: { en: "Alexandros Gardikiotis", el: "Αλέξανδρος Γαρδικιώτης" },
    group: "msc",
    position: { en: "MSc Student", el: "Μεταπτυχιακός Φοιτητής" },
    email: "",
    cv: ""
  },

  /* ---------------- Group not yet set (the old site showed no role) ---------------- */
  {
    id: "spyros-argyropoulos",
    name: { en: "Spyros Argyropoulos", el: "Σπύρος Αργυρόπουλος" },
    group: "",
    photo: "images/members/spyros-argyropoulos.jpg",
    email: "",
    cv: ""
  },
  {
    id: "eleni-papadimitriou",
    name: { en: "Eleni Papadimitriou", el: "Ελένη Παπαδημητρίου" },
    group: "",
    email: "",
    cv: ""
  },

  /* ---------------- Former members ---------------- */
  {
    id: "anastasios-liolios",
    name: { en: "Anastasios Liolios", el: "Αναστάσιος Λιόλιος" },
    group: "former",
    position: { en: "Former Member", el: "Πρώην Μέλος" },
    photo: "images/members/anastasios-liolios.jpg",
    email: "",
    cv: "",
    research: ["accelerator-physics", "instrumentation", "cast"]
  }
];
