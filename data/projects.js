/* =====================================================================
 *  PROJECTS
 *  ---------------------------------------------------------------------
 *  Each project gets a card, a pop-up preview and a full page:
 *  project.html?id=<id>
 *
 *  TEMPLATE (only id + title are required):
 *  {
 *    id: "ifigeneia",                     // unique, lowercase, no spaces
 *    acronym: "IFIGENEIA",
 *    title:   { en: "Full title", el: "Πλήρης τίτλος" },
 *    summary: { en: "Short text for the card", el: "..." },
 *    description: { en: "<p>Full text, HTML allowed</p>", el: "<p>...</p>" },
 *    image:   "images/projects/ifigeneia.png",    // logo or photo
 *    imageFit: "contain",                 // "contain" for logos (whole logo visible), omit for photos
 *    status:  "ongoing",                  // "ongoing" | "completed"  (or leave out)
 *    start:   "2025-01",  end: "2028-12", // YYYY or YYYY-MM (optional)
 *    funding: { en: "Horizon Europe", el: "Horizon Europe" },
 *    grant:   "101186921",
 *    role:    { en: "Coordinator", el: "Συντονιστής" },
 *    partners: ["CERN", "..."],
 *    website: "https://...",
 *    people:   ["member-id", ...],         // ids from data/members.js
 *    research: ["research-id", ...],       // ids from data/research.js
 *    gallery: [ "images/projects/photo1.jpg", { src: "...", caption: { en: "...", el: "..." } } ],
 *    links:   [ { label: "...", url: "..." } ],
 *    order: 1,
 *    hidden: false
 *  },
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.projects = [
  {
    id: "ifigeneia",
    acronym: "IFIGENEIA",
    title: {
      en: "Compact LINAC technology for medical radioisotopes",
      el: "Τεχνολογία συμπαγών γραμμικών επιταχυντών για ιατρικά ραδιοϊσότοπα"
    },
    image: "images/projects/ifigeneia.png",
    imageFit: "contain",
    funding: { en: "Horizon Europe", el: "Horizon Europe" },
    grant: "101186921",
    role: { en: "Coordinator (AUTH)", el: "Συντονιστής (ΑΠΘ)" },
    website: "https://ifigeneia.eu/",
    summary: {
      en: "A Horizon Europe project pioneering a new era in nuclear medicine through compact, efficient LINAC technology, coordinated by AUTH.",
      el: "Έργο Horizon Europe που ανοίγει νέους δρόμους στην πυρηνική ιατρική με συμπαγή και αποδοτική τεχνολογία γραμμικών επιταχυντών (LINAC), με συντονιστή το ΑΠΘ."
    },
    description: {
      en: `<p>IFIGENEIA (Grant Agreement No. 101186921) is a Horizon Europe project pioneering a new era in nuclear medicine
           through compact, efficient LINAC (linear accelerator) technology. Coordinated by the Aristotle University of
           Thessaloniki (AUTH), the project unites experts in science, medicine and industry across six countries —
           Greece, Slovenia, Cyprus, Bosnia and Herzegovina, Germany and Switzerland — to design sustainable facilities for
           radionuclide therapy, diagnostics and theranostics.</p>
           <p>A central goal is establishing Centres of Excellence in Greece, Slovenia and Cyprus to operate LINAC
           facilities producing a wide range of medical radioisotopes, drawing on CERN's accelerator expertise to build
           local technical capacity. Beyond healthcare, IFIGENEIA also explores applications of isotope production in
           archaeology, environmental science and cultural heritage preservation, while fostering collaboration between
           academia, industry and society through a quadruple-helix innovation model.</p>`,
      el: `<p>Το IFIGENEIA (Συμφωνία Επιχορήγησης αρ. 101186921) είναι έργο του προγράμματος Horizon Europe που ανοίγει
           μια νέα εποχή στην πυρηνική ιατρική μέσω συμπαγούς και αποδοτικής τεχνολογίας γραμμικών επιταχυντών (LINAC).
           Με συντονιστή το Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης (ΑΠΘ), το έργο ενώνει ειδικούς από την επιστήμη, την
           ιατρική και τη βιομηχανία σε έξι χώρες — Ελλάδα, Σλοβενία, Κύπρο, Βοσνία-Ερζεγοβίνη, Γερμανία και Ελβετία — για
           τον σχεδιασμό βιώσιμων εγκαταστάσεων για θεραπεία με ραδιονουκλίδια, διάγνωση και θεραγνωστική.</p>
           <p>Κεντρικός στόχος είναι η δημιουργία Κέντρων Αριστείας σε Ελλάδα, Σλοβενία και Κύπρο, που θα λειτουργούν
           εγκαταστάσεις LINAC για την παραγωγή ευρέος φάσματος ιατρικών ραδιοϊσοτόπων, αξιοποιώντας την τεχνογνωσία του
           CERN στους επιταχυντές για την ανάπτυξη τοπικής τεχνικής επάρκειας. Πέρα από την υγεία, το IFIGENEIA εξετάζει
           επίσης εφαρμογές της παραγωγής ισοτόπων στην αρχαιολογία, τις περιβαλλοντικές επιστήμες και τη διατήρηση της
           πολιτιστικής κληρονομιάς, ενισχύοντας τη συνεργασία ακαδημαϊκού χώρου, βιομηχανίας και κοινωνίας μέσω ενός
           μοντέλου καινοτομίας τετραπλής έλικας.</p>`
    },
    research: ["accelerator-physics"],
    order: 1
  },
  {
    id: "ekaty",
    acronym: "EKATY",
    title: {
      en: "Muon imaging for non-invasive archaeological exploration",
      el: "Απεικόνιση με μιόνια για μη επεμβατική αρχαιολογική έρευνα"
    },
    image: "images/projects/ekaty.png",
    imageFit: "contain",
    website: "https://yfos.gr/research-hub/#ekaty",
    summary: {
      en: "Micromegas-based muon imaging telescopes that reveal hidden structures in archaeological sites without excavation.",
      el: "Τηλεσκόπια απεικόνισης μιονίων με ανιχνευτές Micromegas, που αποκαλύπτουν κρυμμένες δομές σε αρχαιολογικούς χώρους χωρίς ανασκαφή."
    },
    description: {
      en: `<p>EKATY leverages advanced muon imaging technology to transform archaeological exploration through non-invasive
           subsurface investigation. The project employs Micromegas-based muon imaging telescopes, which detect naturally
           occurring cosmic-ray muons capable of penetrating soil and stone. By analysing the attenuation and trajectories
           of these particles, the system can produce detailed images of hidden structures and internal features within
           archaeological sites and historical monuments.</p>
           <p>This innovative technique enables the detection and mapping of concealed cavities, structural elements and
           buried archaeological features without the need for excavation or invasive intervention. As a result, it
           provides researchers with valuable insights into ancient construction methods and previously inaccessible
           architectural features, while preserving the integrity of cultural heritage sites.</p>
           <p>The industrial partner YFOS manufactured the high-precision mechanical components of the Micromegas muon
           telescope system. The work focused on the fabrication of the detector panels, where advanced CNC machining was
           used to achieve the demanding dimensional tolerances required for accurate muon tracking and high spatial
           resolution. Particular attention was given to the precise drilling patterns and geometrical alignment of the
           detector components, which are essential for accurate X–Y positioning within the Micromegas system.</p>`,
      el: `<p>Το EKATY αξιοποιεί προηγμένη τεχνολογία απεικόνισης με μιόνια για να μετασχηματίσει την αρχαιολογική έρευνα
           μέσω μη επεμβατικής διερεύνησης του υπεδάφους. Το έργο χρησιμοποιεί τηλεσκόπια απεικόνισης μιονίων με
           ανιχνευτές Micromegas, τα οποία ανιχνεύουν τα φυσικά μιόνια της κοσμικής ακτινοβολίας που διαπερνούν το έδαφος
           και την πέτρα. Αναλύοντας την εξασθένηση και τις τροχιές αυτών των σωματιδίων, το σύστημα μπορεί να παράγει
           λεπτομερείς εικόνες κρυμμένων δομών και εσωτερικών χαρακτηριστικών σε αρχαιολογικούς χώρους και ιστορικά
           μνημεία.</p>
           <p>Η καινοτόμος αυτή τεχνική επιτρέπει τον εντοπισμό και τη χαρτογράφηση κρυμμένων κοιλοτήτων, δομικών
           στοιχείων και θαμμένων αρχαιολογικών ευρημάτων χωρίς ανασκαφή ή επεμβατικές εργασίες. Έτσι, παρέχει στους
           ερευνητές πολύτιμη γνώση για τις αρχαίες κατασκευαστικές μεθόδους και για αρχιτεκτονικά στοιχεία που ήταν
           μέχρι σήμερα απρόσιτα, διατηρώντας ταυτόχρονα την ακεραιότητα των χώρων πολιτιστικής κληρονομιάς.</p>
           <p>Ο βιομηχανικός εταίρος ΥΦΟΣ κατασκεύασε τα μηχανικά εξαρτήματα υψηλής ακρίβειας του τηλεσκοπίου μιονίων
           Micromegas. Η εργασία επικεντρώθηκε στην κατασκευή των πάνελ των ανιχνευτών, όπου χρησιμοποιήθηκε προηγμένη
           κατεργασία CNC για την επίτευξη των αυστηρών διαστασιακών ανοχών που απαιτούνται για ακριβή ανίχνευση τροχιών
           μιονίων και υψηλή χωρική διακριτική ικανότητα. Ιδιαίτερη προσοχή δόθηκε στα μοτίβα διάτρησης και στη
           γεωμετρική ευθυγράμμιση των εξαρτημάτων, που είναι κρίσιμα για την ακριβή θέση X–Y στο σύστημα Micromegas.</p>`
    },
    partners: ["YFOS"],
    research: ["muon-tomography", "instrumentation"],
    order: 2
  },
  {
    id: "detanet",
    acronym: "DeTANeT",
    title: {
      en: "Detector Development and Technologies for High Energy Physics",
      el: "Ανάπτυξη Ανιχνευτών και Τεχνολογίες για τη Φυσική Υψηλών Ενεργειών"
    },
    image: "images/projects/detanet.png",
    imageFit: "contain",
    website: "https://www.demokritos.gr/national-research-infrastructures/",
    summary: {
      en: "National research infrastructure for detector development and advanced electronics for High Energy Physics in Greece.",
      el: "Εθνική ερευνητική υποδομή για την ανάπτυξη ανιχνευτών και προηγμένων ηλεκτρονικών για τη Φυσική Υψηλών Ενεργειών στην Ελλάδα."
    },
    description: {
      en: `<p>DeTANeT (Detector Development and Technologies for High Energy Physics) was established to strengthen and
           modernize the infrastructure supporting detector development and advanced electronics for High Energy Physics
           (HEP) research in Greece. The project focused on consolidating and upgrading specialized technological
           capabilities, providing research teams with the infrastructure required for the design, development,
           construction, characterization and testing of advanced particle detectors and associated electronic
           systems.</p>
           <p>A major objective of DeTANeT was to support the development of detector technologies for large-scale
           international experiments, particularly those associated with CERN and the LHC, while promoting the transfer
           of expertise and innovative technologies from fundamental research to the Greek high-tech industry. The
           infrastructure therefore served both as a scientific platform for detector R&amp;D and as a bridge between
           academic research, international collaborations and industrial applications.</p>
           <p>Within the framework of the project, advanced capabilities were developed for the construction and testing
           of particle detectors, including technologies relevant to the ATLAS muon spectrometer and Micromegas detector
           systems. The High Energy Physics group of the Aristotle University of Thessaloniki has extensive expertise in
           the construction and testing of radiation detectors and has contributed to the development and qualification
           of detector components for the ATLAS experiment at CERN.</p>
           <p>DeTANeT consequently provided an important technological foundation for strengthening Greek expertise in
           detector instrumentation, precision electronics and experimental particle physics, while facilitating
           participation in demanding international research and detector-construction programmes.</p>`,
      el: `<p>Το DeTANeT (Detector Development and Technologies for High Energy Physics) δημιουργήθηκε για να ενισχύσει και
           να εκσυγχρονίσει την υποδομή που υποστηρίζει την ανάπτυξη ανιχνευτών και προηγμένων ηλεκτρονικών για την έρευνα
           στη Φυσική Υψηλών Ενεργειών (ΦΥΕ) στην Ελλάδα. Το έργο εστίασε στην ενοποίηση και αναβάθμιση εξειδικευμένων
           τεχνολογικών δυνατοτήτων, παρέχοντας στις ερευνητικές ομάδες την υποδομή που απαιτείται για τον σχεδιασμό, την
           ανάπτυξη, την κατασκευή, τον χαρακτηρισμό και τον έλεγχο προηγμένων ανιχνευτών σωματιδίων και των σχετικών
           ηλεκτρονικών συστημάτων.</p>
           <p>Βασικός στόχος του DeTANeT ήταν η υποστήριξη της ανάπτυξης τεχνολογιών ανιχνευτών για διεθνή πειράματα
           μεγάλης κλίμακας, ιδίως αυτά που συνδέονται με το CERN και τον LHC, προωθώντας παράλληλα τη μεταφορά
           τεχνογνωσίας και καινοτόμων τεχνολογιών από τη βασική έρευνα στην ελληνική βιομηχανία υψηλής τεχνολογίας. Η
           υποδομή λειτούργησε έτσι τόσο ως επιστημονική πλατφόρμα για Ε&amp;Α ανιχνευτών όσο και ως γέφυρα μεταξύ
           ακαδημαϊκής έρευνας, διεθνών συνεργασιών και βιομηχανικών εφαρμογών.</p>
           <p>Στο πλαίσιο του έργου αναπτύχθηκαν προηγμένες δυνατότητες για την κατασκευή και τον έλεγχο ανιχνευτών
           σωματιδίων, συμπεριλαμβανομένων τεχνολογιών σχετικών με το φασματόμετρο μιονίων του ATLAS και τα συστήματα
           ανιχνευτών Micromegas. Η ομάδα Φυσικής Υψηλών Ενεργειών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης διαθέτει
           μεγάλη εμπειρία στην κατασκευή και τον έλεγχο ανιχνευτών ακτινοβολίας και έχει συμβάλει στην ανάπτυξη και
           πιστοποίηση τμημάτων ανιχνευτών για το πείραμα ATLAS στο CERN.</p>
           <p>Κατά συνέπεια, το DeTANeT αποτέλεσε σημαντική τεχνολογική βάση για την ενίσχυση της ελληνικής τεχνογνωσίας
           στην οργανολογία ανιχνευτών, τα ηλεκτρονικά ακριβείας και την πειραματική σωματιδιακή φυσική, διευκολύνοντας
           τη συμμετοχή σε απαιτητικά διεθνή ερευνητικά προγράμματα και προγράμματα κατασκευής ανιχνευτών.</p>`
    },
    research: ["instrumentation", "atlas-lhc"],
    order: 3
  },
  {
    id: "atlas-data-analysis",
    acronym: "ATLAS",
    title: {
      en: "ATLAS Data Analysis – Aristotle University of Thessaloniki",
      el: "Ανάλυση Δεδομένων ATLAS – Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης"
    },
    image: "images/projects/atlas-data-analysis.jpg",
    website: "https://atlas.cern/",
    summary: {
      en: "The AUTH group in ATLAS: analysis of LHC proton–proton collision data, computing infrastructure and GRID.",
      el: "Η ομάδα του ΑΠΘ στο ATLAS: ανάλυση δεδομένων συγκρούσεων πρωτονίου–πρωτονίου του LHC, υπολογιστική υποδομή και GRID."
    },
    description: {
      en: `<p>The High Energy Physics group at the Aristotle University of Thessaloniki (AUTH) is an active member of the ATLAS
           experiment at CERN's Large Hadron Collider (LHC), contributing to the study of fundamental particle interactions
           through the analysis of proton–proton collision data. The group combines expertise in experimental particle
           physics, detector technologies, computing and advanced data analysis techniques to extract physics results from
           the large datasets produced by the ATLAS detector.</p>
           <p>Alongside its long-standing involvement in the development and testing of the ATLAS muon spectrometer, the
           AUTH group has established computational infrastructure and developed software tools for the processing,
           distribution and analysis of experimental data. The group has also contributed to the development of GRID-based
           computing infrastructure, supporting the storage and distributed analysis of large-scale ATLAS datasets.</p>
           <p>The data-analysis activities focus on developing robust analysis methodologies and computational tools for
           studying elementary-particle interactions recorded by ATLAS. These activities require sophisticated
           data-processing techniques, detector-performance knowledge, statistical methods and high-performance computing,
           enabling the extraction of precise measurements and searches for new phenomena from the LHC collision data. The
           group's research activity is therefore positioned at the intersection of detector instrumentation, scientific
           computing and precision particle-physics analysis.</p>`,
      el: `<p>Η ομάδα Φυσικής Υψηλών Ενεργειών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ) είναι ενεργό μέλος του
           πειράματος ATLAS στον Μεγάλο Επιταχυντή Αδρονίων (LHC) του CERN και συμβάλλει στη μελέτη των θεμελιωδών
           αλληλεπιδράσεων των σωματιδίων μέσω της ανάλυσης δεδομένων συγκρούσεων πρωτονίου–πρωτονίου. Η ομάδα συνδυάζει
           τεχνογνωσία στην πειραματική σωματιδιακή φυσική, τις τεχνολογίες ανιχνευτών, τους υπολογιστές και τις
           προηγμένες τεχνικές ανάλυσης δεδομένων, για την εξαγωγή αποτελεσμάτων φυσικής από τα μεγάλα σύνολα δεδομένων
           του ανιχνευτή ATLAS.</p>
           <p>Παράλληλα με τη μακροχρόνια συμμετοχή της στην ανάπτυξη και τον έλεγχο του φασματόμετρου μιονίων του ATLAS,
           η ομάδα του ΑΠΘ έχει δημιουργήσει υπολογιστική υποδομή και έχει αναπτύξει εργαλεία λογισμικού για την
           επεξεργασία, διανομή και ανάλυση πειραματικών δεδομένων. Έχει επίσης συμβάλει στην ανάπτυξη υπολογιστικής
           υποδομής GRID, που υποστηρίζει την αποθήκευση και την κατανεμημένη ανάλυση μεγάλων συνόλων δεδομένων του
           ATLAS.</p>
           <p>Οι δραστηριότητες ανάλυσης δεδομένων εστιάζουν στην ανάπτυξη αξιόπιστων μεθοδολογιών ανάλυσης και
           υπολογιστικών εργαλείων για τη μελέτη των αλληλεπιδράσεων στοιχειωδών σωματιδίων που καταγράφει το ATLAS. Οι
           δραστηριότητες αυτές απαιτούν εξελιγμένες τεχνικές επεξεργασίας δεδομένων, γνώση της απόδοσης των ανιχνευτών,
           στατιστικές μεθόδους και υπολογισμούς υψηλών επιδόσεων, επιτρέποντας ακριβείς μετρήσεις και αναζητήσεις νέων
           φαινομένων στα δεδομένα συγκρούσεων του LHC. Η ερευνητική δραστηριότητα της ομάδας βρίσκεται έτσι στην τομή της
           οργανολογίας ανιχνευτών, του επιστημονικού υπολογισμού και της ανάλυσης ακριβείας στη σωματιδιακή φυσική.</p>`
    },
    people: ["charikleia-petridou", "dimitrios-sampsonidis", "konstantinos-kordas"],
    research: ["atlas-lhc", "data-analysis-ml"],
    order: 4
  },
  {
    id: "ess-neutron-detectors",
    acronym: "ESS",
    title: {
      en: "Advanced Neutron Beam Detection Systems for the European Spallation Source (ESS)",
      el: "Προηγμένα Συστήματα Ανίχνευσης Δεσμών Νετρονίων για την Ευρωπαϊκή Πηγή Θρυμματισμού (ESS)"
    },
    image: "images/projects/ess.webp",
    website: "https://ess.eu/",
    summary: {
      en: "Development and optimization of neutron detectors for ESS: Geant4, Garfield++ and LTspice simulations, and analysis of ESS data.",
      el: "Ανάπτυξη και βελτιστοποίηση ανιχνευτών νετρονίων για το ESS: προσομοιώσεις Geant4, Garfield++ και LTspice, και ανάλυση δεδομένων του ESS."
    },
    description: {
      en: `<p>Simulation of neutron detectors and study of the generated signals, using <strong>Geant4</strong> for particle
           interaction and detector response modelling, <strong>Garfield++</strong> for detailed simulation of charge
           transport and gas/detector physics, and <strong>LTspice</strong> for modelling and optimizing the front-end
           readout electronics.</p>
           <p>This is complemented by the analysis of experimental data acquired at the European Spallation Source (ESS),
           including signal processing and evaluation of detector performance parameters such as efficiency, timing and
           spatial resolution.</p>`,
      el: `<p>Προσομοίωση ανιχνευτών νετρονίων και μελέτη των παραγόμενων σημάτων, με το <strong>Geant4</strong> για τη
           μοντελοποίηση των αλληλεπιδράσεων των σωματιδίων και της απόκρισης του ανιχνευτή, το <strong>Garfield++</strong>
           για λεπτομερή προσομοίωση της μεταφοράς φορτίων και της φυσικής του αερίου και του ανιχνευτή, και το
           <strong>LTspice</strong> για τη μοντελοποίηση και βελτιστοποίηση των ηλεκτρονικών ανάγνωσης.</p>
           <p>Συμπληρωματικά, γίνεται ανάλυση πειραματικών δεδομένων από την Ευρωπαϊκή Πηγή Θρυμματισμού (ESS), που
           περιλαμβάνει επεξεργασία σήματος και αξιολόγηση παραμέτρων απόδοσης του ανιχνευτή, όπως η αποδοτικότητα, ο
           χρονισμός και η χωρική διακριτική ικανότητα.</p>`
    },
    research: ["instrumentation", "data-analysis-ml"],
    order: 5
  }
];
