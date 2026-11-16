/* =====================================================================
 *  SITE — general information and the texts of Home / About / Contact
 *  ---------------------------------------------------------------------
 *  Bilingual text:  { en: "English", el: "Ελληνικά" }
 *  (if "el" is missing, the English text is shown in Greek mode too)
 *  Long texts may contain simple HTML: <p>, <strong>, <em>, <ul><li>, <a href="...">
 *
 *  Members, research areas, projects and news are NOT here:
 *  they have their own files in this folder (members.js, research.js, ...).
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.site = {
  /* ---------- Look ---------- */
  /* Theme = a file in assets/css/themes/ (without .css): "scientific" or "dark-lab".
   * Preview another theme without editing: add ?theme=dark-lab to the address. */
  theme: "scientific",

  /* ---------- Languages ---------- */
  defaultLang: "en",
  languages: ["en", "el"],

  /* ---------- Identity ---------- */
  shortName: "LAPI",
  name: {
    en: "Laboratory for Accelerator Physics and Instrumentation",
    el: "Εργαστήριο Φυσικής Επιταχυντών και Οργανολογίας"
  },
  institution: {
    en: "School of Physics · Aristotle University of Thessaloniki",
    el: "Τμήμα Φυσικής · Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης"
  },
  logo: "images/site/logo.svg",          // the old logo is also available: images/site/lapi-logo.jpg

  /* ================= HOME ================= */
  home: {
    heroImage: "images/site/hero.jpg",     // null = no photo, only the animated tracks
    tagline: {
      en: "Training and research in particle detection, signal analysis and accelerator physics.",
      el: "Εκπαίδευση και έρευνα στην ανίχνευση σωματιδίων, την ανάλυση σήματος και τη φυσική επιταχυντών."
    },
    /* Two highlight boxes under the header */
    focus: [
      {
        title: { en: "Accelerator Physics", el: "Φυσική Επιταχυντών" },
        text: {
          en: "Applications in state-of-the-art accelerator installations and other scientific fields.",
          el: "Εφαρμογές σε σύγχρονες εγκαταστάσεις επιταχυντών και σε άλλα επιστημονικά πεδία."
        },
        link: "research-area.html?id=accelerator-physics"
      },
      {
        title: { en: "Instrumentation", el: "Οργανολογία" },
        text: {
          en: "Emphasis on the innovative instrumentation and detection principles developed over the last decade.",
          el: "Έμφαση στην καινοτόμο οργανολογία και στις αρχές ανίχνευσης που αναπτύχθηκαν την τελευταία δεκαετία."
        },
        link: "research-area.html?id=instrumentation"
      }
    ],
    intro: {
      en: `<p>Welcome to the website of LAPI, the Laboratory for Accelerator Physics and Instrumentation of the
           Aristotle University of Thessaloniki.</p>
           <p>The Laboratory provides undergraduate and postgraduate laboratory training in <strong>particle detection
           and signal analysis</strong>, with an emphasis on the innovative instrumentation and detection principles
           developed over the last decade, as well as their applications in <strong>state-of-the-art accelerator
           installations</strong> and other scientific and technical fields.</p>
           <p>In addition, the Laboratory supports the research of its members, as well as of postgraduate and doctoral
           students, for the development of new detection principles and devices.</p>`,
      el: `<p>Καλώς ήρθατε στην ιστοσελίδα του LAPI, του Εργαστηρίου Φυσικής Επιταχυντών και Οργανολογίας του
           Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης.</p>
           <p>Το Εργαστήριο παρέχει προπτυχιακή και μεταπτυχιακή εργαστηριακή εκπαίδευση στην <strong>ανίχνευση
           σωματιδίων και την ανάλυση σήματος</strong>, με έμφαση στην καινοτόμο οργανολογία και τις αρχές ανίχνευσης
           που αναπτύχθηκαν την τελευταία δεκαετία, καθώς και στις εφαρμογές τους σε <strong>σύγχρονες εγκαταστάσεις
           επιταχυντών</strong> και σε άλλα επιστημονικά και τεχνικά πεδία.</p>
           <p>Επιπλέον, το Εργαστήριο υποστηρίζει την έρευνα των μελών του, καθώς και μεταπτυχιακών και υποψήφιων
           διδακτόρων, για την ανάπτυξη νέων αρχών και διατάξεων ανίχνευσης.</p>`
    },
    /* "Quick info for students" box */
    quickInfo: [
      {
        label: { en: "Established by", el: "Ίδρυση" },
        value: {
          en: "Decision No. 24006, Government Gazette Issue B' 2070/04.06.2019",
          el: "Απόφαση αρ. 24006, ΦΕΚ Β' 2070/04.06.2019"
        }
      },
      {
        label: { en: "Who is it for", el: "Σε ποιους απευθύνεται" },
        value: {
          en: "Undergraduate and postgraduate students of the School of Physics, Aristotle University of Thessaloniki",
          el: "Σε προπτυχιακούς και μεταπτυχιακούς φοιτητές του Τμήματος Φυσικής του ΑΠΘ"
        }
      },
      {
        label: { en: "Location", el: "Χώρος" },
        value: {
          en: "Aristotle University of Thessaloniki (AUTH) and KEDEK laboratory facilities",
          el: "Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (ΑΠΘ) και εγκαταστάσεις του ΚΕΔΕΚ"
        }
      },
      {
        label: { en: "Is it an obligatory course?", el: "Είναι υποχρεωτικό μάθημα;" },
        value: { en: "No, it is an elective course", el: "Όχι, είναι μάθημα επιλογής" }
      }
    ],
    /* "The lab in numbers" — the numbers count up when they scroll into view */
    numbers: [
      { value: 24, suffix: "+", label: { en: "Years of research", el: "Χρόνια έρευνας" } },
      { value: 8,  suffix: "",  label: { en: "Research projects", el: "Ερευνητικά έργα" } },
      { value: 24, suffix: "",  label: { en: "Years of cooperation with CERN", el: "Χρόνια συνεργασίας με το CERN" } },
      { value: 10, suffix: "+", label: { en: "Research staff", el: "Ερευνητικό προσωπικό" } }
    ],
    newsCount: 3            // how many news items on the home page
  },

  /* ================= ABOUT ================= */
  about: {
    sections: [
      {
        title: { en: "The Laboratory", el: "Το Εργαστήριο" },
        text: {
          en: `<p>The subject of the Laboratory for Accelerator Physics and Instrumentation is the laboratory support of
               undergraduate and postgraduate training in Particle Accelerator and Detector Physics, as well as the
               support of research methods for particle technology development.</p>
               <p>The Laboratory provides undergraduate and postgraduate laboratory training in particle detection and
               signal analysis, with an emphasis on the innovative instrumentation and detection principles developed
               over the last decade, as well as their applications in state-of-the-art accelerator installations and
               other scientific and technical fields.</p>`,
          el: `<p>Αντικείμενο του Εργαστηρίου Φυσικής Επιταχυντών και Οργανολογίας είναι η εργαστηριακή υποστήριξη της
               προπτυχιακής και μεταπτυχιακής εκπαίδευσης στη Φυσική Επιταχυντών και Ανιχνευτών Σωματιδίων, καθώς και η
               υποστήριξη ερευνητικών μεθόδων για την ανάπτυξη τεχνολογιών σωματιδίων.</p>
               <p>Το Εργαστήριο παρέχει προπτυχιακή και μεταπτυχιακή εργαστηριακή εκπαίδευση στην ανίχνευση σωματιδίων
               και την ανάλυση σήματος, με έμφαση στην καινοτόμο οργανολογία και στις αρχές ανίχνευσης που αναπτύχθηκαν
               την τελευταία δεκαετία, καθώς και στις εφαρμογές τους σε σύγχρονες εγκαταστάσεις επιταχυντών και σε άλλα
               επιστημονικά και τεχνικά πεδία.</p>`
        }
      },
      {
        title: { en: "Research and doctoral training", el: "Έρευνα και διδακτορική εκπαίδευση" },
        text: {
          en: `<p>In addition, the Laboratory supports the research of its members, as well as of postgraduate and
               doctoral students, for the development of new detection principles and devices.</p>`,
          el: `<p>Επιπλέον, το Εργαστήριο υποστηρίζει την έρευνα των μελών του, καθώς και μεταπτυχιακών φοιτητών και
               υποψήφιων διδακτόρων, για την ανάπτυξη νέων αρχών και διατάξεων ανίχνευσης.</p>`
        }
      }
    ],
    /* Main directions (shown as three boxes) */
    directions: [
      { en: "Particle detection and signal analysis", el: "Ανίχνευση σωματιδίων και ανάλυση σήματος" },
      { en: "Innovative instrumentation and detection principles", el: "Καινοτόμος οργανολογία και αρχές ανίχνευσης" },
      { en: "State-of-the-art accelerator installations", el: "Σύγχρονες εγκαταστάσεις επιταχυντών" }
    ],
    /* Photo gallery: any image size; click opens full screen.
     * { src: "...", caption: { en: "...", el: "..." } }  (caption is optional) */
    gallery: [
      { src: "images/gallery/IMG_20181114_104950_1050_660.jpg" },
      { src: "images/gallery/IMG_20181114_110507_1050_660.jpg" },
      { src: "images/gallery/IMG_20181116_134354_1050_660.jpg" },
      { src: "images/gallery/IMG_20181119_122620_1050_660.jpg" },
      { src: "images/gallery/IMG_20200723_100330_1_1050_660.jpg" },
      { src: "images/gallery/IMG_20200714_121041_939_545.jpg" },
      { src: "images/gallery/20180116_135658_570_400.jpg" },
      { src: "images/gallery/IMG_20191121_163202_290_525.jpg" },
      { src: "images/gallery/IMG_20181018_160636_290_245.jpg" },
      { src: "images/gallery/IMG_20190214_144815_385_220.jpg" },
      { src: "images/gallery/kosmiki_aktinobolia_2_384_205.jpg" }
    ]
  },

  /* ================= COLLABORATING CENTERS (logos on Home and About) ================= */
  partners: [
    { name: "Brookhaven National Laboratory", logo: "images/partners/brookhaven.png", url: "https://www.bnl.gov/" },
    { name: "CEA Paris-Saclay",                logo: "images/partners/cea-saclay.png", url: "https://www.cea.fr/" },
    { name: "JINR Dubna",                      logo: "images/partners/dubna.png",      url: "https://www.jinr.ru/" },
    { name: "INFN",                            logo: "images/partners/infn.png",       url: "https://home.infn.it/" },
    { name: "Max Planck Society",              logo: "images/partners/max-planck.png", url: "https://www.mpg.de/" }
  ],

  /* ================= CONTACT ================= */
  contact: {
    office: { en: "Administration Office", el: "Γραμματεία" },
    address: {
      en: "1st floor, Faculty of Sciences Secretariat building (School of Biology building), A.U.Th. Campus, 54124 Thessaloniki, Greece",
      el: "1ος όροφος, κτίριο Γραμματείας Σχολής Θετικών Επιστημών (κτίριο Τμήματος Βιολογίας), Πανεπιστημιούπολη ΑΠΘ, 54124 Θεσσαλονίκη"
    },
    phone: "+30 2310 998120",
    phoneHours: { en: "Workdays 10:30–12:00", el: "Εργάσιμες 10:30–12:00" },
    email: "info@physics.auth.gr",
    mapUrl: "https://www.openstreetmap.org/search?query=Aristotle%20University%20of%20Thessaloniki%20School%20of%20Biology"
  },

  social: [
    { label: "Facebook", url: "https://www.facebook.com/PhysicsAUTH" },
    { label: "YouTube",  url: "https://www.youtube.com/channel/UCt-pDIEeBuUO_Hxoa1g9a2w" }
  ],

  /* Footer: "Useful links" */
  usefulLinks: [
    { label: { en: "Aristotle University of Thessaloniki", el: "Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης" }, url: "https://www.auth.gr/en/" },
    { label: { en: "School of Physics", el: "Τμήμα Φυσικής" }, url: "https://www.physics.auth.gr/" },
    { label: { en: "AUTH in the world", el: "Το ΑΠΘ στον κόσμο" }, url: "https://www.auth.gr/en/international-en/" },
    { label: { en: "AUTH Library", el: "Βιβλιοθήκη ΑΠΘ" }, url: "https://www.lib.auth.gr/en" },
    { label: { en: "\"Phenomenon\" Magazine", el: "Περιοδικό «Φαινόμενον»" }, url: "http://phenomenon.physics.auth.gr/" },
    { label: { en: "AAM Department Seminar Archive", el: "Αρχείο σεμιναρίων Τομέα ΑΑΜ" }, url: "https://www.astro.auth.gr/n/?p=previous_seminars" },
    { label: { en: "Alumni", el: "Απόφοιτοι" }, url: "https://www.physics.auth.gr/en/alumni" },
    { label: { en: "Hellenic Physicists Union", el: "Ένωση Ελλήνων Φυσικών" }, url: "https://eef.gr/" },
    { label: { en: "AUTH Quality Policies", el: "Πολιτική Ποιότητας ΑΠΘ" }, url: "https://www.physics.auth.gr/en/quality_policies" }
  ],

  /* ================= LISTS / CATEGORIES ================= */
  /* Groups on the Members page, in this order. Each member has  group: "<id>"  */
  memberGroups: [
    { id: "director",    label: { en: "Director",               el: "Διευθυντής" } },
    { id: "faculty",     label: { en: "Faculty",                el: "Μέλη ΔΕΠ" } },
    { id: "emeriti",     label: { en: "Emeriti",                el: "Ομότιμοι Καθηγητές" } },
    { id: "researchers", label: { en: "Researchers & Postdocs", el: "Ερευνητές & Μεταδιδάκτορες" } },
    { id: "phd",         label: { en: "PhD Students",           el: "Υποψήφιοι Διδάκτορες" } },
    { id: "msc",         label: { en: "MSc Students",           el: "Μεταπτυχιακοί Φοιτητές" } },
    { id: "staff",       label: { en: "Staff",                  el: "Προσωπικό" } },
    { id: "former",      label: { en: "Former Members",         el: "Πρώην Μέλη" } }
  ],

  /* Categories of research areas (research.js →  categories: ["..."]) */
  researchCategories: [
    { id: "accelerator-physics", label: { en: "Accelerator Physics", el: "Φυσική Επιταχυντών" } },
    { id: "instrumentation",     label: { en: "Instrumentation",     el: "Οργανολογία" } },
    { id: "european",            label: { en: "European",            el: "Ευρωπαϊκά" } },
    { id: "university-internal", label: { en: "University Internal", el: "Εσωτερικά ΑΠΘ" } }
  ],

  /* Categories of news (news.js →  type: "...") */
  newsTypes: [
    { id: "news",          label: { en: "News",          el: "Νέα" } },
    { id: "announcements", label: { en: "Announcements", el: "Ανακοινώσεις" } },
    { id: "conferences",   label: { en: "Conferences",   el: "Συνέδρια" } },
    { id: "events",        label: { en: "Events",        el: "Εκδηλώσεις" } }
  ],

  /* Main menu. "id" = the data-page of each .html file */
  nav: [
    { id: "home",     href: "index.html",    label: { en: "Home",           el: "Αρχική" } },
    { id: "about",    href: "about.html",    label: { en: "About",          el: "Το Εργαστήριο" } },
    { id: "members",  href: "members.html",  label: { en: "Members",        el: "Μέλη" } },
    { id: "research", href: "research.html", label: { en: "Research Areas", el: "Ερευνητικά Πεδία" } },
    { id: "projects", href: "projects.html", label: { en: "Projects",       el: "Έργα" } },
    { id: "news",     href: "news.html",     label: { en: "News",           el: "Νέα" } },
    { id: "contact",  href: "contact.html",  label: { en: "Contact",        el: "Επικοινωνία" } }
  ]
};
