/* =====================================================================
 *  RESEARCH AREAS
 *  ---------------------------------------------------------------------
 *  Each area gets a card, a pop-up preview and a full page:
 *  research-area.html?id=<id>
 *
 *  TEMPLATE (only id + title are required):
 *  {
 *    id: "muon-tomography",              // unique, lowercase, no spaces
 *    title:   { en: "Muon Tomography", el: "Τομογραφία Μιονίων" },
 *    categories: ["instrumentation"],    // ids from researchCategories in data/site.js
 *    summary: { en: "Short text for the card", el: "..." },
 *    description: { en: "<p>Full text, HTML allowed</p>", el: "<p>...</p>" },
 *    image:   "images/research/muon-tomography.jpg",
 *    imagePosition: "50% 50%",           // optional crop focus
 *    gallery: [ "images/research/extra-1.jpg" ],
 *    links:   [ { label: "Website", url: "https://..." } ],
 *    order: 1,
 *    hidden: false
 *  },
 *
 *  Participating members appear automatically: every member with
 *  research: ["<this id>"] in data/members.js. Same for projects.
 * ===================================================================== */
window.LAB = window.LAB || {};

LAB.research = [
  {
    id: "atlas-lhc",
    title: {
      en: "Study of particle interactions at the LHC with the ATLAS muon detectors",
      el: "Μελέτη αλληλεπιδράσεων σωματιδίων στον LHC με τους ανιχνευτές μιονίων του ATLAS"
    },
    categories: ["accelerator-physics", "european"],
    image: "images/research/atlas-lhc.jpg",
    summary: {
      en: "Construction and testing of the ATLAS muon spectrometer and analyses of LHC collision data: dibosons, Vector Boson Scattering and Higgs physics.",
      el: "Κατασκευή και έλεγχος του φασματόμετρου μιονίων του ATLAS και αναλύσεις δεδομένων συγκρούσεων του LHC: δι-μποζόνια, σκέδαση διανυσματικών μποζονίων και φυσική Higgs."
    },
    description: {
      en: `<p>The High Energy Physics group of the Aristotle University of Thessaloniki (AUTH), which participates in the
           ATLAS experiment at the Large Hadron Collider (LHC) at CERN, has played an active role in the construction and
           testing of components of the ATLAS muon spectrometer. The group has developed expertise in detector
           construction and testing in laboratory facilities meeting international standards, as well as in the
           experimental infrastructure and software required for detector operation and performance studies using
           cosmic rays. In addition, the group has developed a GRID technology test node for the analysis, distribution
           and storage of experimental data.</p>
           <p>The group is actively involved in the development of data analysis methods and software for the study of
           fundamental particle interactions using data collected by the ATLAS experiment. Current research activities
           cover a broad range of Standard Model and Higgs-boson physics, including <strong>diboson production analyses
           (ZZ and WZ)</strong>, <strong>Vector Boson Scattering (VBS)</strong>, and <strong>Higgs boson studies in the
           H→γγ and H→bb̄ decay channels</strong>. These analyses involve the development and application of advanced
           data-processing, statistical and computational techniques for the reconstruction, selection and
           interpretation of particle collision events, with the aim of probing the properties of the Standard Model and
           searching for possible signs of new physics.</p>`,
      el: `<p>Η ομάδα Φυσικής Υψηλών Ενεργειών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ), η οποία συμμετέχει
           στο πείραμα ATLAS του Μεγάλου Επιταχυντή Αδρονίων (LHC) στο CERN, είχε ενεργό ρόλο στην κατασκευή και τον
           έλεγχο τμημάτων του φασματόμετρου μιονίων του ATLAS. Η ομάδα έχει αναπτύξει τεχνογνωσία στην κατασκευή και τον
           έλεγχο ανιχνευτών σε εργαστηριακές εγκαταστάσεις διεθνών προδιαγραφών, καθώς και στην πειραματική υποδομή και
           το λογισμικό που απαιτούνται για τη λειτουργία των ανιχνευτών και τη μελέτη της απόδοσής τους με κοσμική
           ακτινοβολία. Επιπλέον, η ομάδα έχει αναπτύξει δοκιμαστικό κόμβο τεχνολογίας GRID για την ανάλυση, διανομή
           και αποθήκευση πειραματικών δεδομένων.</p>
           <p>Η ομάδα συμμετέχει ενεργά στην ανάπτυξη μεθόδων και λογισμικού ανάλυσης δεδομένων για τη μελέτη των
           θεμελιωδών αλληλεπιδράσεων των σωματιδίων με δεδομένα του πειράματος ATLAS. Οι τρέχουσες ερευνητικές
           δραστηριότητες καλύπτουν ένα ευρύ φάσμα της φυσικής του Καθιερωμένου Προτύπου και του μποζονίου Higgs,
           όπως <strong>αναλύσεις παραγωγής δι-μποζονίων (ZZ και WZ)</strong>, <strong>σκέδαση διανυσματικών μποζονίων
           (VBS)</strong> και <strong>μελέτες του μποζονίου Higgs στα κανάλια διάσπασης H→γγ και H→bb̄</strong>. Οι
           αναλύσεις αυτές περιλαμβάνουν την ανάπτυξη και εφαρμογή προηγμένων τεχνικών επεξεργασίας δεδομένων,
           στατιστικής και υπολογιστικών μεθόδων για την ανακατασκευή, επιλογή και ερμηνεία γεγονότων συγκρούσεων, με
           στόχο τη μελέτη των ιδιοτήτων του Καθιερωμένου Προτύπου και την αναζήτηση ενδείξεων νέας φυσικής.</p>`
    },
    links: [{ label: "ATLAS Experiment", url: "https://atlas.cern/" }],
    order: 1
  },
  {
    id: "instrumentation",
    title: { en: "Instrumentation", el: "Οργανολογία" },
    categories: ["instrumentation"],
    image: "images/research/instrumentation.jpg",
    summary: {
      en: "Development, construction, testing and operation of particle detectors, electronics, data acquisition and control systems.",
      el: "Ανάπτυξη, κατασκευή, έλεγχος και λειτουργία ανιχνευτών σωματιδίων, ηλεκτρονικών, συστημάτων συλλογής δεδομένων και ελέγχου."
    },
    description: {
      en: `<p>The High Energy Physics group of the Aristotle University of Thessaloniki (AUTH) has extensive experience in
           the development, construction, testing and operation of particle detectors for high-energy physics
           experiments. Within the ATLAS experiment at the Large Hadron Collider (LHC) at CERN, the group has made
           significant contributions to the construction and testing of the Muon Spectrometer, developing dedicated
           laboratory infrastructure and methodologies for the assembly, quality control and performance evaluation of
           gaseous radiation detectors.</p>
           <p>The group's instrumentation activities include the development of experimental setups and detector-control
           systems for detector characterization and performance studies using cosmic rays, as well as the development
           of associated electronics, data acquisition, monitoring and control software. These activities provide the
           necessary infrastructure for detector commissioning, calibration and long-term operation in large-scale
           particle physics experiments.</p>
           <p>The research is focused on advanced detector technologies and instrumentation for future high-energy
           physics experiments, combining detector development with modern readout, trigger, data acquisition and
           monitoring systems. Through its involvement in ATLAS, the group contributes to the development and operation
           of instrumentation capable of performing precise particle detection and measurements in the demanding
           environment of high-luminosity proton–proton collisions at the LHC.</p>`,
      el: `<p>Η ομάδα Φυσικής Υψηλών Ενεργειών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ) διαθέτει μεγάλη εμπειρία
           στην ανάπτυξη, κατασκευή, έλεγχο και λειτουργία ανιχνευτών σωματιδίων για πειράματα φυσικής υψηλών ενεργειών.
           Στο πλαίσιο του πειράματος ATLAS του Μεγάλου Επιταχυντή Αδρονίων (LHC) στο CERN, η ομάδα συνέβαλε σημαντικά
           στην κατασκευή και τον έλεγχο του Φασματόμετρου Μιονίων, αναπτύσσοντας εξειδικευμένη εργαστηριακή υποδομή και
           μεθοδολογίες για τη συναρμολόγηση, τον ποιοτικό έλεγχο και την αξιολόγηση της απόδοσης αέριων ανιχνευτών
           ακτινοβολίας.</p>
           <p>Οι δραστηριότητες οργανολογίας της ομάδας περιλαμβάνουν την ανάπτυξη πειραματικών διατάξεων και συστημάτων
           ελέγχου ανιχνευτών για τον χαρακτηρισμό και τη μελέτη της απόδοσής τους με κοσμική ακτινοβολία, καθώς και την
           ανάπτυξη των σχετικών ηλεκτρονικών, συστημάτων συλλογής δεδομένων και λογισμικού παρακολούθησης και ελέγχου. Οι
           δραστηριότητες αυτές παρέχουν την αναγκαία υποδομή για τη θέση σε λειτουργία, τη βαθμονόμηση και τη μακροχρόνια
           λειτουργία ανιχνευτών σε πειράματα σωματιδιακής φυσικής μεγάλης κλίμακας.</p>
           <p>Η έρευνα εστιάζει σε προηγμένες τεχνολογίες ανιχνευτών και οργανολογίας για μελλοντικά πειράματα φυσικής
           υψηλών ενεργειών, συνδυάζοντας την ανάπτυξη ανιχνευτών με σύγχρονα συστήματα ανάγνωσης, σκανδαλισμού (trigger),
           συλλογής δεδομένων και παρακολούθησης. Μέσω της συμμετοχής της στο ATLAS, η ομάδα συμβάλλει στην ανάπτυξη και
           λειτουργία οργανολογίας ικανής για ακριβή ανίχνευση και μετρήσεις σωματιδίων στο απαιτητικό περιβάλλον των
           συγκρούσεων πρωτονίου–πρωτονίου υψηλής φωτεινότητας στον LHC.</p>`
    },
    order: 2
  },
  {
    id: "accelerator-physics",
    title: { en: "Accelerator Physics", el: "Φυσική Επιταχυντών" },
    categories: ["accelerator-physics", "european", "instrumentation"],
    image: "images/research/accelerator-physics.jpg",
    summary: {
      en: "Particle acceleration and beam transport, neutron beams from proton accelerators, cross-section and radiation measurements.",
      el: "Επιτάχυνση σωματιδίων και μεταφορά δέσμης, δέσμες νετρονίων από επιταχυντές πρωτονίων, μετρήσεις ενεργών διατομών και ακτινοβολίας."
    },
    description: {
      en: `<p>The High Energy and Nuclear Physics groups of the Aristotle University of Thessaloniki (AUTH) have established
           expertise in Accelerator Physics and in the development and application of accelerator-based experimental
           techniques for nuclear and particle physics. The research activity combines the study of particle
           acceleration and beam transport with the development of experimental methodologies and instrumentation for
           measurements at modern accelerator facilities.</p>
           <p>The group is involved in the study and application of particle beams for nuclear and particle physics
           experiments, including the production and characterization of neutron beams using proton accelerators.
           Research activities include measurements of nuclear reaction cross sections, neutron and radiation fields,
           and the development of experimental setups for accelerator-based studies. These activities are carried out in
           collaboration with major international accelerator facilities and research laboratories.</p>
           <p>The research also focuses on the development of accelerator-related technologies and experimental
           methodologies, including beam characterization, radiation measurements, detector systems, and the integration
           of accelerator and detector technologies. This expertise supports the broader research activities of the group
           in nuclear physics, particle physics and radiation applications, while providing a foundation for the
           development of instrumentation for current and future accelerator facilities.</p>`,
      el: `<p>Οι ομάδες Φυσικής Υψηλών Ενεργειών και Πυρηνικής Φυσικής του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ)
           διαθέτουν καθιερωμένη τεχνογνωσία στη Φυσική Επιταχυντών και στην ανάπτυξη και εφαρμογή πειραματικών τεχνικών
           με επιταχυντές για την πυρηνική και σωματιδιακή φυσική. Η ερευνητική δραστηριότητα συνδυάζει τη μελέτη της
           επιτάχυνσης σωματιδίων και της μεταφοράς δέσμης με την ανάπτυξη πειραματικών μεθοδολογιών και οργανολογίας για
           μετρήσεις σε σύγχρονες εγκαταστάσεις επιταχυντών.</p>
           <p>Η ομάδα ασχολείται με τη μελέτη και την εφαρμογή δεσμών σωματιδίων σε πειράματα πυρηνικής και σωματιδιακής
           φυσικής, συμπεριλαμβανομένης της παραγωγής και του χαρακτηρισμού δεσμών νετρονίων με επιταχυντές πρωτονίων. Οι
           ερευνητικές δραστηριότητες περιλαμβάνουν μετρήσεις ενεργών διατομών πυρηνικών αντιδράσεων, πεδίων νετρονίων και
           ακτινοβολίας, καθώς και την ανάπτυξη πειραματικών διατάξεων για μελέτες με επιταχυντές. Οι δραστηριότητες αυτές
           πραγματοποιούνται σε συνεργασία με μεγάλες διεθνείς εγκαταστάσεις επιταχυντών και ερευνητικά εργαστήρια.</p>
           <p>Η έρευνα εστιάζει επίσης στην ανάπτυξη τεχνολογιών και πειραματικών μεθοδολογιών σχετικών με επιταχυντές,
           όπως ο χαρακτηρισμός δέσμης, οι μετρήσεις ακτινοβολίας, τα συστήματα ανιχνευτών και η ενοποίηση τεχνολογιών
           επιταχυντών και ανιχνευτών. Η τεχνογνωσία αυτή υποστηρίζει τις ευρύτερες ερευνητικές δραστηριότητες της ομάδας
           στην πυρηνική φυσική, τη σωματιδιακή φυσική και τις εφαρμογές ακτινοβολιών, αποτελώντας παράλληλα βάση για την
           ανάπτυξη οργανολογίας για τρέχουσες και μελλοντικές εγκαταστάσεις επιταχυντών.</p>`
    },
    order: 3
  },
  {
    id: "muon-tomography",
    title: { en: "Muon Tomography", el: "Τομογραφία Μιονίων" },
    categories: ["instrumentation", "university-internal"],
    image: "images/research/muon-tomography.jpg",
    summary: {
      en: "Non-destructive imaging with cosmic-ray muons, using Micromegas-based detector telescopes.",
      el: "Μη καταστροφική απεικόνιση με μιόνια της κοσμικής ακτινοβολίας, με τηλεσκόπια ανιχνευτών Micromegas."
    },
    description: {
      en: `<p>The High Energy Physics group of the Aristotle University of Thessaloniki (AUTH) is developing detector
           technologies and experimental techniques for <strong>Muon Tomography</strong>, an innovative non-destructive
           imaging method based on the detection of cosmic-ray muons. Muons produced naturally in the atmosphere are
           highly penetrating particles and can be used to investigate the internal structure and composition of large and
           dense objects that are difficult to study using conventional imaging techniques.</p>
           <p>The research activity focuses on the development and optimization of cosmic-ray muon detector telescopes,
           with particular emphasis on gaseous tracking detectors such as <strong>Micromegas</strong>. The group develops
           detector systems capable of reconstructing the trajectories of muons before and after their passage through a
           target, enabling the study of their interactions with matter and the extraction of information about the
           material distribution within the object. Recent work at AUTH includes the optimization of a Micromegas-based
           cosmic-ray detector telescope specifically for Muon Tomography.</p>
           <p>The research combines <strong>particle detector development, detector characterization, cosmic-ray
           measurements, track reconstruction, data analysis and simulation</strong>. These activities aim at developing
           compact and efficient muon imaging systems with potential applications in areas such as the inspection of
           large-scale structures, geological and archaeological imaging, and the non-invasive characterization of dense
           materials. The work builds on the group's expertise in particle detectors, cosmic-ray detection, and the
           development of instrumentation for high-energy physics experiments.</p>`,
      el: `<p>Η ομάδα Φυσικής Υψηλών Ενεργειών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ) αναπτύσσει τεχνολογίες
           ανιχνευτών και πειραματικές τεχνικές για την <strong>Τομογραφία Μιονίων</strong>, μια καινοτόμο μη καταστροφική
           μέθοδο απεικόνισης που βασίζεται στην ανίχνευση μιονίων της κοσμικής ακτινοβολίας. Τα μιόνια που παράγονται
           φυσικά στην ατμόσφαιρα είναι ιδιαίτερα διεισδυτικά σωματίδια και μπορούν να χρησιμοποιηθούν για τη μελέτη της
           εσωτερικής δομής και σύστασης μεγάλων και πυκνών αντικειμένων, που είναι δύσκολο να μελετηθούν με συμβατικές
           τεχνικές απεικόνισης.</p>
           <p>Η ερευνητική δραστηριότητα εστιάζει στην ανάπτυξη και βελτιστοποίηση τηλεσκοπίων ανίχνευσης κοσμικών
           μιονίων, με ιδιαίτερη έμφαση σε αέριους ανιχνευτές τροχιών όπως οι <strong>Micromegas</strong>. Η ομάδα
           αναπτύσσει συστήματα ανιχνευτών ικανά να ανακατασκευάζουν τις τροχιές των μιονίων πριν και μετά τη διέλευσή
           τους από έναν στόχο, επιτρέποντας τη μελέτη της αλληλεπίδρασής τους με την ύλη και την εξαγωγή πληροφορίας για
           την κατανομή του υλικού στο εσωτερικό του αντικειμένου. Πρόσφατη εργασία στο ΑΠΘ περιλαμβάνει τη
           βελτιστοποίηση ενός τηλεσκοπίου κοσμικής ακτινοβολίας με ανιχνευτές Micromegas ειδικά για Τομογραφία Μιονίων.</p>
           <p>Η έρευνα συνδυάζει <strong>ανάπτυξη και χαρακτηρισμό ανιχνευτών, μετρήσεις κοσμικής ακτινοβολίας,
           ανακατασκευή τροχιών, ανάλυση δεδομένων και προσομοιώσεις</strong>. Στόχος είναι η ανάπτυξη συμπαγών και
           αποδοτικών συστημάτων απεικόνισης με μιόνια, με πιθανές εφαρμογές στον έλεγχο κατασκευών μεγάλης κλίμακας, στη
           γεωλογική και αρχαιολογική απεικόνιση και στον μη επεμβατικό χαρακτηρισμό πυκνών υλικών. Η εργασία βασίζεται
           στην τεχνογνωσία της ομάδας στους ανιχνευτές σωματιδίων, την ανίχνευση κοσμικής ακτινοβολίας και την ανάπτυξη
           οργανολογίας για πειράματα φυσικής υψηλών ενεργειών.</p>`
    },
    order: 4
  },
  {
    id: "data-analysis-ml",
    title: { en: "Data Analysis, Software & Machine Learning", el: "Ανάλυση Δεδομένων, Λογισμικό & Μηχανική Μάθηση" },
    categories: ["accelerator-physics", "european"],
    image: "images/research/data-analysis-ml.jpg",
    summary: {
      en: "ATLAS physics analyses, detector-data reconstruction (Micromegas, PICOSEC), machine learning and GRID computing.",
      el: "Αναλύσεις φυσικής στο ATLAS, ανακατασκευή δεδομένων ανιχνευτών (Micromegas, PICOSEC), μηχανική μάθηση και υπολογιστικό GRID."
    },
    description: {
      en: `<p>The High Energy Physics group of the Aristotle University of Thessaloniki (AUTH) develops advanced computational
           methods for the analysis of experimental data from particle and nuclear physics experiments. The research
           activity combines high-energy physics data analysis, scientific software development, machine learning and
           distributed computing, providing the computational tools required to process, reconstruct, analyse and
           interpret large volumes of experimental data.</p>
           <p>A major focus is the analysis of data collected by the <strong>ATLAS experiment at the Large Hadron Collider
           (LHC) at CERN</strong>. The group develops analysis methods and software for a broad range of physics studies,
           including Higgs boson, diboson and Vector Boson Scattering measurements, as well as searches for new physics.
           Computational methods are also applied to data from detector-development and instrumentation projects,
           including <strong>Micromegas and PICOSEC</strong> detector studies, where dedicated analysis and
           reconstruction software is developed for detector characterization and performance evaluation.</p>
           <p>The group has expertise in the development of <strong>scientific software and data-processing
           pipelines</strong>, covering event reconstruction, detector calibration, data selection, statistical analysis,
           simulation and visualization. Software development is closely integrated with experimental activities,
           enabling efficient processing and interpretation of data from both large-scale collider experiments and
           dedicated detector-development projects.</p>
           <p><strong>Machine Learning and Artificial Intelligence</strong> methods are investigated and applied to
           particle-physics data analysis, including classification, regression, pattern recognition, event
           reconstruction and optimization of analysis strategies. These techniques provide powerful tools for extracting
           physics information from complex, high-dimensional datasets and for improving the performance and efficiency
           of experimental analyses. The group's research includes the development and application of machine-learning
           algorithms specifically for the analysis of ATLAS experimental data.</p>
           <p>The computational infrastructure supporting these activities includes <strong>GRID and distributed computing
           technologies</strong>, which enable the large-scale processing, distribution and storage of experimental data.
           The group has developed GRID computing infrastructure for ATLAS data analysis, while the computational
           resources of AUTH, including the <strong>Aristoteles computing cluster</strong>, provide additional
           capabilities for data-intensive analysis, simulation, software development and machine-learning applications.
           The integration of distributed computing with modern data-analysis techniques enables the group to address the
           computational demands of contemporary particle-physics experiments.</p>`,
      el: `<p>Η ομάδα Φυσικής Υψηλών Ενεργειών του Αριστοτελείου Πανεπιστημίου Θεσσαλονίκης (ΑΠΘ) αναπτύσσει προηγμένες
           υπολογιστικές μεθόδους για την ανάλυση πειραματικών δεδομένων από πειράματα σωματιδιακής και πυρηνικής φυσικής.
           Η ερευνητική δραστηριότητα συνδυάζει την ανάλυση δεδομένων φυσικής υψηλών ενεργειών, την ανάπτυξη
           επιστημονικού λογισμικού, τη μηχανική μάθηση και τον κατανεμημένο υπολογισμό, παρέχοντας τα υπολογιστικά
           εργαλεία που απαιτούνται για την επεξεργασία, ανακατασκευή, ανάλυση και ερμηνεία μεγάλου όγκου πειραματικών
           δεδομένων.</p>
           <p>Κύριο πεδίο είναι η ανάλυση δεδομένων του <strong>πειράματος ATLAS στον Μεγάλο Επιταχυντή Αδρονίων (LHC)
           στο CERN</strong>. Η ομάδα αναπτύσσει μεθόδους και λογισμικό ανάλυσης για ένα ευρύ φάσμα μελετών φυσικής,
           όπως μετρήσεις του μποζονίου Higgs, δι-μποζονίων και σκέδασης διανυσματικών μποζονίων, καθώς και αναζητήσεις
           νέας φυσικής. Υπολογιστικές μέθοδοι εφαρμόζονται επίσης σε δεδομένα έργων ανάπτυξης ανιχνευτών και
           οργανολογίας, όπως οι μελέτες ανιχνευτών <strong>Micromegas και PICOSEC</strong>, όπου αναπτύσσεται
           εξειδικευμένο λογισμικό ανάλυσης και ανακατασκευής για τον χαρακτηρισμό και την αξιολόγηση της απόδοσης των
           ανιχνευτών.</p>
           <p>Η ομάδα διαθέτει τεχνογνωσία στην ανάπτυξη <strong>επιστημονικού λογισμικού και ροών επεξεργασίας
           δεδομένων</strong>, που καλύπτουν την ανακατασκευή γεγονότων, τη βαθμονόμηση ανιχνευτών, την επιλογή
           δεδομένων, τη στατιστική ανάλυση, τις προσομοιώσεις και την οπτικοποίηση. Η ανάπτυξη λογισμικού είναι στενά
           ενσωματωμένη στις πειραματικές δραστηριότητες, επιτρέποντας την αποδοτική επεξεργασία και ερμηνεία δεδομένων
           τόσο από πειράματα επιταχυντών μεγάλης κλίμακας όσο και από εξειδικευμένα έργα ανάπτυξης ανιχνευτών.</p>
           <p>Μέθοδοι <strong>Μηχανικής Μάθησης και Τεχνητής Νοημοσύνης</strong> μελετώνται και εφαρμόζονται στην ανάλυση
           δεδομένων σωματιδιακής φυσικής, όπως ταξινόμηση, παλινδρόμηση, αναγνώριση προτύπων, ανακατασκευή γεγονότων και
           βελτιστοποίηση στρατηγικών ανάλυσης. Οι τεχνικές αυτές αποτελούν ισχυρά εργαλεία για την εξαγωγή φυσικής
           πληροφορίας από σύνθετα, πολυδιάστατα σύνολα δεδομένων και για τη βελτίωση της απόδοσης και της
           αποτελεσματικότητας των πειραματικών αναλύσεων. Η έρευνα της ομάδας περιλαμβάνει την ανάπτυξη και εφαρμογή
           αλγορίθμων μηχανικής μάθησης ειδικά για την ανάλυση πειραματικών δεδομένων του ATLAS.</p>
           <p>Η υπολογιστική υποδομή που υποστηρίζει αυτές τις δραστηριότητες περιλαμβάνει <strong>τεχνολογίες GRID και
           κατανεμημένου υπολογισμού</strong>, που επιτρέπουν την επεξεργασία, διανομή και αποθήκευση πειραματικών
           δεδομένων σε μεγάλη κλίμακα. Η ομάδα έχει αναπτύξει υπολογιστική υποδομή GRID για την ανάλυση δεδομένων του
           ATLAS, ενώ οι υπολογιστικοί πόροι του ΑΠΘ, όπως η <strong>υπολογιστική συστοιχία «Αριστοτέλης»</strong>,
           παρέχουν πρόσθετες δυνατότητες για ανάλυση μεγάλου όγκου δεδομένων, προσομοιώσεις, ανάπτυξη λογισμικού και
           εφαρμογές μηχανικής μάθησης. Ο συνδυασμός κατανεμημένου υπολογισμού με σύγχρονες τεχνικές ανάλυσης δεδομένων
           επιτρέπει στην ομάδα να ανταποκρίνεται στις υπολογιστικές απαιτήσεις των σύγχρονων πειραμάτων σωματιδιακής
           φυσικής.</p>`
    },
    order: 5
  },
  {
    id: "cast",
    title: { en: "Astroparticle Physics, CAST experiment", el: "Αστροσωματιδιακή Φυσική, πείραμα CAST" },
    categories: ["accelerator-physics", "university-internal"],
    image: "images/research/cast.jpg",
    summary: {
      en: "The CERN Axion Solar Telescope: searching for solar axions with a 9 T superconducting magnet.",
      el: "Το Ηλιακό Τηλεσκόπιο Αξιονίων του CERN: αναζήτηση ηλιακών αξιονίων με υπεραγώγιμο μαγνήτη 9 T."
    },
    description: {
      en: `<p>The CAST experiment (CERN Axion Solar Telescope) is searching for the existence of solar axions. It uses a
           superconducting magnet, 10 m long, with a 9 Tesla magnetic field. Solar axions passing through the magnetic
           field can be transformed into photons, which could be detected by suitable photon detectors. CAST has improved
           the experimental limits by a factor of 10 and derived a limit better than the one resulting from astrophysical
           considerations.</p>`,
      el: `<p>Το πείραμα CAST (CERN Axion Solar Telescope) αναζητά την ύπαρξη ηλιακών αξιονίων. Χρησιμοποιεί υπεραγώγιμο
           μαγνήτη μήκους 10 m με μαγνητικό πεδίο 9 Tesla. Τα ηλιακά αξιόνια που διέρχονται από το μαγνητικό πεδίο μπορούν
           να μετατραπούν σε φωτόνια, τα οποία μπορούν να ανιχνευθούν από κατάλληλους ανιχνευτές φωτονίων. Το CAST βελτίωσε
           τα πειραματικά όρια κατά έναν παράγοντα 10 και εξήγαγε όριο καλύτερο από αυτό που προκύπτει από αστροφυσικά
           επιχειρήματα.</p>`
    },
    links: [{ label: "CAST at CERN", url: "https://home.cern/science/experiments/cast" }],
    order: 6
  },
  {
    id: "ntof",
    title: { en: "n-TOF Project", el: "Έργο n-TOF" },
    categories: ["european", "instrumentation"],
    summary: {
      en: "Neutron beams from a proton accelerator: (n,γ), (n,α), (n,p) and fission cross sections, neutron and γ dosimetry.",
      el: "Δέσμες νετρονίων από επιταχυντή πρωτονίων: ενεργές διατομές (n,γ), (n,α), (n,p) και σχάσης, δοσιμετρία νετρονίων και γ."
    },
    description: {
      en: `<p>Production of low- and high-energy neutron beams from a proton accelerator. Study of the cross sections of
           (n,γ), (n,α), (n,p) and (n,fission) interactions. Dose measurements of neutrons and γ-radiation.</p>`,
      el: `<p>Παραγωγή δεσμών νετρονίων χαμηλής και υψηλής ενέργειας από επιταχυντή πρωτονίων. Μελέτη των ενεργών διατομών
           των αλληλεπιδράσεων (n,γ), (n,α), (n,p) και (n,σχάση). Μετρήσεις δόσης από νετρόνια και ακτινοβολία γ.</p>`
    },
    links: [{ label: "n_TOF at CERN", url: "https://cern.ch/ntof" }],
    order: 7
  }
];
