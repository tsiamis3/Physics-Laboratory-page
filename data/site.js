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
    /* Line under the page title */
    subtitle: {
      en: "Laboratory for Accelerator Physics and Instrumentation (LAPI) · School of Physics | Aristotle University of Thessaloniki (AUTH), Greece",
      el: "Εργαστήριο Φυσικής Επιταχυντών και Οργανολογίας (LAPI) · Τμήμα Φυσικής | Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (ΑΠΘ)"
    },
    sections: [
      {
        title: { en: "Who We Are", el: "Ποιοι είμαστε" },
        text: {
          en: `<p>The Laboratory for Accelerator Physics and Instrumentation (LAPI) was established in 2017 at the School of
               Physics of Aristotle University of Thessaloniki (AUTH). Building on many years of experience in experimental
               particle physics and international collaborations, LAPI focuses on the development and application of particle
               detectors and accelerator technologies.</p>
               <p>The laboratory combines fundamental research with technological development, contributing to major
               international experiments and exploring applications in science, industry, and medicine.</p>`,
          el: `<p>Το Εργαστήριο Φυσικής Επιταχυντών και Οργανολογίας (LAPI) ιδρύθηκε το 2017 στο Τμήμα Φυσικής του
               Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ). Αξιοποιώντας πολυετή εμπειρία στην πειραματική σωματιδιακή
               φυσική και στις διεθνείς συνεργασίες, το LAPI εστιάζει στην ανάπτυξη και την εφαρμογή ανιχνευτών σωματιδίων
               και τεχνολογιών επιταχυντών.</p>
               <p>Το εργαστήριο συνδυάζει τη βασική έρευνα με την τεχνολογική ανάπτυξη, συμβάλλοντας σε μεγάλα διεθνή
               πειράματα και διερευνώντας εφαρμογές στην επιστήμη, τη βιομηχανία και την ιατρική.</p>`
        }
      },
      {
        title: { en: "Our Mission", el: "Η αποστολή μας" },
        text: {
          en: `<p>LAPI's mission is to advance research and education in accelerator physics and particle detection
               technologies, promoting scientific excellence, technological innovation, and international collaboration.</p>
               <p>The laboratory pursues this mission through:</p>
               <ul>
                 <li><strong>Fundamental Research:</strong> Participation in experimental particle physics, particularly through the ATLAS experiment at CERN.</li>
                 <li><strong>Detector Development:</strong> Design, construction, testing, and characterization of advanced particle detectors, including Micromegas and ultra-fast timing technologies.</li>
                 <li><strong>Accelerator Physics:</strong> Research and development of particle accelerator systems, beam dynamics, RF technologies, and associated instrumentation.</li>
                 <li><strong>Scientific Applications:</strong> Development of technologies for materials analysis, cultural heritage studies, radiation detection, imaging, and radioisotope production.</li>
                 <li><strong>Education and Training:</strong> Undergraduate, postgraduate, and doctoral education, together with hands-on training in modern experimental techniques.</li>
                 <li><strong>International Collaboration:</strong> Cooperation with universities, research centres, and scientific infrastructures worldwide, fostering the exchange of knowledge and expertise.</li>
               </ul>
               <p>Through these activities, LAPI aims to bridge fundamental physics, advanced instrumentation, and practical applications.</p>`,
          el: `<p>Αποστολή του LAPI είναι η προώθηση της έρευνας και της εκπαίδευσης στη φυσική επιταχυντών και στις
               τεχνολογίες ανίχνευσης σωματιδίων, με στόχο την επιστημονική αριστεία, την τεχνολογική καινοτομία και τη διεθνή
               συνεργασία.</p>
               <p>Το εργαστήριο υπηρετεί την αποστολή αυτή μέσω:</p>
               <ul>
                 <li><strong>Βασικής έρευνας:</strong> Συμμετοχή στην πειραματική σωματιδιακή φυσική, ιδίως μέσω του πειράματος ATLAS στο CERN.</li>
                 <li><strong>Ανάπτυξης ανιχνευτών:</strong> Σχεδιασμός, κατασκευή, έλεγχος και χαρακτηρισμός προηγμένων ανιχνευτών σωματιδίων, όπως οι Micromegas και οι τεχνολογίες υπερταχέος χρονισμού.</li>
                 <li><strong>Φυσικής επιταχυντών:</strong> Έρευνα και ανάπτυξη συστημάτων επιταχυντών σωματιδίων, δυναμικής δέσμης, τεχνολογιών ραδιοσυχνοτήτων (RF) και της σχετικής οργανολογίας.</li>
                 <li><strong>Επιστημονικών εφαρμογών:</strong> Ανάπτυξη τεχνολογιών για ανάλυση υλικών, μελέτες πολιτιστικής κληρονομιάς, ανίχνευση ακτινοβολίας, απεικόνιση και παραγωγή ραδιοϊσοτόπων.</li>
                 <li><strong>Εκπαίδευσης και κατάρτισης:</strong> Προπτυχιακή, μεταπτυχιακή και διδακτορική εκπαίδευση, μαζί με πρακτική εξάσκηση σε σύγχρονες πειραματικές τεχνικές.</li>
                 <li><strong>Διεθνούς συνεργασίας:</strong> Συνεργασία με πανεπιστήμια, ερευνητικά κέντρα και επιστημονικές υποδομές σε όλο τον κόσμο, προάγοντας την ανταλλαγή γνώσης και τεχνογνωσίας.</li>
               </ul>
               <p>Μέσα από αυτές τις δραστηριότητες, το LAPI επιδιώκει να γεφυρώσει τη βασική φυσική, την προηγμένη οργανολογία και τις πρακτικές εφαρμογές.</p>`
        }
      },
      {
        title: { en: "Our History", el: "Η ιστορία μας" },
        text: {
          en: `<p>Although LAPI was formally established in 2017, its scientific foundations extend back to the long-standing
               involvement of researchers from Aristotle University of Thessaloniki in experimental particle physics at CERN.</p>
               <p>A major part of this history is associated with the ATLAS experiment at the Large Hadron Collider (LHC).</p>
               <p>From 1998 to 2008, the Thessaloniki group contributed to the construction of 112 Monitored Drift Tube (MDT)
               chambers for the ATLAS Muon Spectrometer, developing significant expertise in precision detector assembly,
               quality assurance, and detector instrumentation.</p>
               <p>This experience was further strengthened through participation in the ATLAS Muon Spectrometer upgrade,
               particularly the New Small Wheel (NSW) project. Between 2016 and 2020, the laboratory contributed to the
               construction of 34 large-area Micromegas detector modules, supporting one of the major detector upgrades of the
               ATLAS experiment.</p>
               <p>These activities established a strong foundation in gaseous detector technologies, precision mechanics,
               electronics, detector testing, and quality control.</p>
               <p>Since its formal establishment, LAPI has expanded its research activities into ultra-fast timing detectors,
               accelerator physics, compact linear accelerator development, and interdisciplinary applications of particle
               physics instrumentation.</p>
               <p>Today, the laboratory combines its established expertise in large-scale detector construction with new
               research directions in accelerator technologies and their applications.</p>`,
          el: `<p>Αν και το LAPI ιδρύθηκε επίσημα το 2017, οι επιστημονικές του βάσεις ανάγονται στη μακροχρόνια συμμετοχή
               ερευνητών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης στην πειραματική σωματιδιακή φυσική στο CERN.</p>
               <p>Μεγάλο μέρος αυτής της ιστορίας συνδέεται με το πείραμα ATLAS στον Μεγάλο Επιταχυντή Αδρονίων (LHC).</p>
               <p>Από το 1998 έως το 2008, η ομάδα της Θεσσαλονίκης συνέβαλε στην κατασκευή 112 θαλάμων Monitored Drift Tube
               (MDT) για το Φασματόμετρο Μιονίων του ATLAS, αναπτύσσοντας σημαντική τεχνογνωσία στη συναρμολόγηση ανιχνευτών
               ακριβείας, στη διασφάλιση ποιότητας και στην οργανολογία ανιχνευτών.</p>
               <p>Η εμπειρία αυτή ενισχύθηκε περαιτέρω μέσω της συμμετοχής στην αναβάθμιση του Φασματόμετρου Μιονίων του ATLAS,
               ιδίως στο έργο New Small Wheel (NSW). Μεταξύ 2016 και 2020, το εργαστήριο συνέβαλε στην κατασκευή 34 μονάδων
               ανιχνευτών Micromegas μεγάλης επιφάνειας, υποστηρίζοντας μία από τις σημαντικότερες αναβαθμίσεις ανιχνευτών
               του πειράματος ATLAS.</p>
               <p>Οι δραστηριότητες αυτές δημιούργησαν ισχυρή βάση στις τεχνολογίες αέριων ανιχνευτών, τη μηχανική ακριβείας,
               τα ηλεκτρονικά, τον έλεγχο ανιχνευτών και τον ποιοτικό έλεγχο.</p>
               <p>Από την επίσημη ίδρυσή του, το LAPI έχει επεκτείνει τις ερευνητικές του δραστηριότητες στους ανιχνευτές
               υπερταχέος χρονισμού, στη φυσική επιταχυντών, στην ανάπτυξη συμπαγών γραμμικών επιταχυντών και σε
               διεπιστημονικές εφαρμογές της οργανολογίας σωματιδιακής φυσικής.</p>
               <p>Σήμερα, το εργαστήριο συνδυάζει την καθιερωμένη τεχνογνωσία του στην κατασκευή ανιχνευτών μεγάλης κλίμακας
               με νέες ερευνητικές κατευθύνσεις στις τεχνολογίες επιταχυντών και τις εφαρμογές τους.</p>`
        }
      }
    ],
    /* Optional boxes "Main directions" (empty = not shown) */
    directions: [],
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
