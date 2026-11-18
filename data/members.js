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
    email: "sampson@physics.auth.gr",
    cv: "https://www.physics.auth.gr/uploads/person/translation/cv/217/CV-Sampsonidis.pdf",
    research: ["atlas-lhc","ifigeneia"]
  },

  {
    id: "ilias-savvidis",
    name: { en: "Ilias Savvidis", el: "Ηλίας Σαββίδης" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγητής" },
    photo: "images/members/ilias-savvidis.jpg",
    email: "savvidis@physics.auth.gr",
    cv: "https://www.physics.auth.gr/uploads/person/translation/cv/213/CV_Savvidis.pdf",
    research: ["cast", "ntof"]
  },
  {
    id: "alexandra-ioannidou",
    name: { en: "Alexandra Ioannidou", el: "Αλεξάνδρα Ιωαννίδου" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγήτρια" },
    photo: "images/members/alexandra-ioannidou.jpg",
    email: "anta@physics.auth.gr",
    cv: "https://www.linkedin.com/in/alexandra-ioannidou-6ba36b44",
    research: ["data-analysis-ml"]
  },
  {
    id: "stylianos-stoulos",
    name: { en: "Stylianos Stoulos", el: "Στυλιανός Στούλος" },
    group: "faculty",
    position: { en: "Professor", el: "Καθηγητής" },
    photo: "images/members/stylianos-stoulos.jpg",
    email: "stoulos@auth.gr",
    cv: "https://www.physics.auth.gr/uploads/person/translation/cv/218/6ac91825-42f5-47b9-9656-cb3f59564a84.pdf",
    research: ["muon-tomography", "data-analysis-ml"]
  },
  {
    id: "konstantinos-kordas",
    name: { en: "Konstantinos Kordas", el: "Κωνσταντίνος Κορδάς" },
    group: "faculty",
    position: { en: "Associate Professor", el: "Αναπληρωτής Καθηγητής" },
    photo: "images/members/konstantinos-kordas.jpg",
    email: "kostas.kordas@cern.ch",
    cv: "https://www.physics.auth.gr/wp-content/uploads/2026/05/Kordas_shortCV_2026_gr.pdf",
    research: ["atlas-lhc"]
  },
  {
    id: "christos-lampoudis",
    name: { en: "Christos Lampoudis", el: "Χρήστος Λαμπούδης" },
    group: "faculty",
    position: { en: "Assistant Professor", el: "Επίκουρος Καθηγητής" },
    email: "clampoud@auth.ch",
    cv: "https://www.physics.auth.gr/uploads/person/translation/cv/552/66dc90c4-ee17-4530-b702-fee14d71ad6b.pdf"
  },

    {
    id: "spyros-argyropoulos",
    name: { en: "Spyros Argyropoulos", el: "Σπύρος Αργυρόπουλος" },
    group: "faculty",
    position: { en: "Associate Professor", el: "Αναπληρωτής Καθηγητής" }, 
    photo: "images/members/spyros-argyropoulos.jpg",
    email: "spyros.argyropoulos@cern.ch",
    cv: "https://sargyrop.web.cern.ch/"
  },

  /* ---------------- Emeriti ---------------- */
  {
    id: "charikleia-petridou",
    name: { en: "Charikleia Petridou", el: "Χαρίκλεια Πετρίδου" },
    group: "emeriti",
    position: { en: "Professor Emerita", el: "Ομότιμη Καθηγήτρια" },
    photo: "images/members/charikleia-petridou.jpg",
    email: "petridou@physics.auth.gr",
    cv: "https://www.physics.auth.gr/wp-content/uploads/2025/02/Petridou-chariclia-cv.pdf",
    research: ["atlas-lhc"]
  },
  
  {
    id: "anastasios-liolios",
    name: { en: "Anastasios Liolios", el: "Αναστάσιος Λιόλιος" },
    group: "emeriti",
    position: { en: "Professor Emeritus", el: "Ομότιμος Καθηγητής" },
    photo: "images/members/anastasios-liolios.jpg",
    email: "anastasios.liolios@cern.ch",
    cv: "https://www.physics.auth.gr/wp-content/uploads/2025/02/liolios-cv.pdf", 

    research: ["accelerator-physics", "instrumentation", "cast"]
  },

    {
    id: "giorgos-kitis",
    name: { en: "Georgios Kitis", el: "Γεώργιος Κίτης" },
    group: "emeriti",
    position: { en: "Professor Emeritus", el: "Ομότιμος Καθηγητής" },
    photo: "images/members/giorgos-kitis.jpg",
    email: "gkitis@physics.auth.gr",
    cv: "https://www.physics.auth.gr/wp-content/uploads/2025/02/georgios-kitis-cv.pdf", 
    },
  
   {
    id: "christos-eleftheriadis",
    name: { en: "Christos Eleftheriadis", el: "Χρήστος Ελευθεριάδης" },
    group: "emeriti",
    position: { en: "Professor Emeritus", el: "Ομότιμος Καθηγητής" },
    photo: "images/members/christos-eleftheriadis.jpg",
    email: "xrh@auth.gr",
    cv: "https://www.physics.auth.gr/uploads/person/translation/cv/209/e395ea71-c3b4-4b52-9727-c36030e3552d.pdf",

  },

  /* ---------------- Researchers & Postdocs ---------------- */
  {
    id: "angelos-tsiamis",
    name: { en: "Dr. Angelos Tsiamis", el: "Δρ. Άγγελος Τσιάμης" },
    group: "researchers",
    position: { en: "Postdoctoral Researcher", el: "Μεταδιδακτορικός Ερευνητής" },
    photo: "images/members/angelos-tsiamis.jpg",
    email: "atsiamis@cern.ch",
    cv: ""
  },
  {
    id: "eirini-kasimi",
    name: { en: "Dr. Eirini Kasimi", el: "Δρ. Ειρήνη Κασίμη" },
    group: "researchers",
    position: { en: "Researcher", el: "Ερευνήτρια" },
    photo: "images/members/eirini-kasimi.jpg",
    email: "eirini.kasimi@cern.ch",
    cv: ""
  },

  /* ---------------- PhD students ---------------- */
  {
    id: "ioannis-karakoulias",
    name: { en: "Ioannis Karakoulias", el: "Ιωάννης Καρακούλιας" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
    photo: "images/members/ioannis-karakoulias.jpg",
    email: "ioannis.karakoulias@cern.ch",
    cv: ""
  },
  {
    id: "eliana-kapsali",
    name: { en: "Eliana Kapsali", el: "Ελιάνα Καψάλη" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφια Διδάκτωρ" },
    email: "eliana.kapsali@cern.ch",
    cv: ""
  },
  
  {
    id: "eleni-papadimitriou",
    name: { en: "Eleni Papadimitriou", el: "Ελένη Παπαδημητρίου" },
    group: "phd",
    email: "eleni.papadimitriou@cern.ch",
    cv: ""
  },
  
  {
    id: "iakovos-tsouros",
    name: { en: "Iakovos Tsouros", el: "Ιάκωβος Τσούρος" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
    email: "iakovos.tsouros@gmail.com",
    cv: ""
  },
  {
    id: "evangelos-samouilides",
    name: { en: "Evangelos Samouilides", el: "Ευάγγελος Σαμουηλίδης" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
    email: "esamouil@physics.auth.gr",
    cv: ""
  },
  {
    id: "giorgos-dianos",
    name: { en: "Giorgos Dianos", el: "Γιώργος Δίανος" },
    group: "phd",
    position: { en: "PhD Student", el: "Υποψήφιος Διδάκτωρ" },
    email: "georgios.dianos@cern.ch",
    cv: ""
  },

  /* ---------------- MSc students ---------------- */
  {
    id: "alexandros-gardikiotis",
    name: { en: "Alexandros Gardikiotis", el: "Αλέξανδρος Γαρδικιώτης" },
    group: "msc",
    position: { en: "MSc Student", el: "Μεταπτυχιακός Φοιτητής" },
    email: "agardik@auth.gr",
    cv: ""
  },

  /* ---------------- Group not yet set (the old site showed no role) ---------------- */



  /* ---------------- Former members ---------------- */

];
