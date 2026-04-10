'use client';
import { useState } from "react";

const t = {
  ro: {
    nav: { about: "Despre", research: "Cercetare", teaching: "Didactic", projects: "Proiecte", blog: "Blog", contact: "Contact" },
    hero: {
      title: "Cosmin-Gabriel Popa",
      subtitle: "\u0218ef de Lucr\u0103ri \u00b7 Anatomie \u0219i Embriologie",
      affiliation: "Universitatea de Medicin\u0103 \u0219i Farmacie \u201EGr. T. Popa\u201D Ia\u0219i",
      description: "Sunt cadru didactic la Disciplina de Anatomie \u0219i Embriologie a UMF \u201EGr. T. Popa\u201D Ia\u0219i din 2014 \u0219i cercet\u0103tor \u00een anatomie aplicat\u0103 \u0219i educa\u021bie medical\u0103 digital\u0103. Cred c\u0103 educa\u021bia medical\u0103 de calitate schimb\u0103 vie\u021bi \u2014 \u0219i construiesc instrumente digitale care s\u0103 o fac\u0103 accesibil\u0103 tuturor.",
    },
    about: {
      title: "Despre",
      bio: [
        "Sunt \u0218ef de Lucr\u0103ri la Disciplina de Anatomie \u0219i Embriologie din cadrul UMF \u201EGr. T. Popa\u201D Ia\u0219i, unde predau din 2014. Am absolvit Facultatea de Medicin\u0103 Dentar\u0103 \u0219i Facultatea de Istorie la Universitatea \u201EAl. I. Cuza\u201D Ia\u0219i, iar formarea mea dual\u0103 modeleaz\u0103 modul \u00een care abordez cercetarea \u0219i predarea.",
        "Cercetarea mea se concentreaz\u0103 pe anatomia aplicat\u0103 cu relevan\u021b\u0103 clinic\u0103 \u0219i pe dezvoltarea instrumentelor digitale pentru educa\u021bia medical\u0103. Sunt convins c\u0103 tehnologia poate transforma fundamental accesul la informa\u021bie medical\u0103 de calitate.",
        "Am o experien\u021b\u0103 ampl\u0103 \u00een organiza\u021bii studen\u021be\u0219ti interna\u021bionale (IADS \u2014 International Association of Dental Students), unde am fost distins cu premiul \u201EPeter Swiss\u201D Excellence Award. Sunt membru al Societ\u0103\u021bii Rom\u00e2ne de Anatomie.",
      ],
      mission: {
        title: "De ce contez\u0103 educa\u021bia",
        text: "Fiecare genera\u021bie de studen\u021bi vine cu \u00eentreb\u0103ri mai bune dec\u00e2t cea anterioar\u0103. Rolul meu nu e doar s\u0103 le predau anatomie \u2014 ci s\u0103 le dau instrumentele cu care s\u0103 g\u00e2ndeasc\u0103 singuri, s\u0103 pun\u0103 sub semnul \u00eentreb\u0103rii ce li se pare evident \u0219i s\u0103 nu se opreasc\u0103 la primul r\u0103spuns. Educa\u021bia nu e despre ce \u0219tii \u2014 e despre cum g\u00e2nde\u0219ti. \u0218i cea mai mare responsabilitate pe care o am ca profesor e s\u0103 formez oameni care g\u00e2ndesc critic, nu care repet\u0103 mecanic. Dac\u0103 un student pleac\u0103 din sala mea cu o \u00eentrebare \u00een plus fa\u021b\u0103 de c\u00e2te avea c\u00e2nd a intrat, am f\u0103cut ceva bine.",
      },
      experience: {
        titleAcademic: "Experien\u021b\u0103 academic\u0103",
        titleProfessional: "Experien\u021b\u0103 profesional\u0103",
        academic: [
          { role: "\u0218ef de Lucr\u0103ri \u2014 Anatomie \u0219i Embriologie", place: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2024 \u2013 prezent" },
          { role: "Asistent Universitar \u2014 Anatomie \u0219i Embriologie", place: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2015 \u2013 2024" },
        ],
        professional: [
          { role: "Medic Dentist \u0219i Administrator", place: "CopouDent SRL, Ia\u0219i", year: "2013 \u2013 2025" },
        ],
      },
      education: {
        title: "Educa\u021bie",
        items: [
          { degree: "Doctorat \u2014 Medicin\u0103 Dentar\u0103", school: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2019" },
          { degree: "Masterat \u2014 Medicin\u0103 Dentar\u0103", school: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2017" },
          { degree: "Licen\u021b\u0103 \u2014 Medicin\u0103 Dentar\u0103", school: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2013" },
          { degree: "Licen\u021b\u0103 \u2014 Istorie", school: "Universitatea \u201EAl. I. Cuza\u201D Ia\u0219i", year: "2013" },
          { degree: "Formare Psihopedagogic\u0103 Nivel I & II", school: "USAMV \u201EIon Ionescu de la Brad\u201D Ia\u0219i", year: "2018 / 2020" },
        ],
      },
      affiliations: {
        title: "Afilieri",
        items: ["Societatea Rom\u00e2n\u0103 de Anatomie", "International Association of Dental Students (IADS)", "Societatea Rom\u00e2n\u0103 de Reabilitare Oral\u0103", "Societatea Rom\u00e2n\u0103 de Parodontologie"],
      },
      cv: { label: "Curriculum Vitae", linkText: "Deschide CV (PDF)" },
      ids: {
        title: "Identificatori",
        items: [{ label: "ORCID", value: "0000-0002-7124-3179", url: "https://orcid.org/0000-0002-7124-3179" }],
      },
    },
    research: {
      title: "Cercetare",
      intro: "Direc\u021biile mele de cercetare se concentreaz\u0103 pe anatomia uman\u0103 aplicat\u0103 \u0219i pe educa\u021bia medical\u0103 digital\u0103.",
      areas: [
        { name: "Anatomie aplicat\u0103", desc: "Studii de anatomie clinic\u0103 cu relevan\u021b\u0103 \u00een practica stomatologic\u0103, chirurgical\u0103 \u0219i \u00een imagistic\u0103 medical\u0103." },
        { name: "Educa\u021bie medical\u0103 digital\u0103", desc: "Dezvoltarea \u0219i evaluarea instrumentelor digitale pentru predarea anatomiei \u2014 platforme interactive, quiz-uri, resurse vizuale pentru studen\u021bi." },
      ],
      publications: { title: "Publica\u021bii", note: "Lista complet\u0103 de publica\u021bii va fi actualizat\u0103. Pentru publica\u021biile indexate, consulta\u021bi profilul ORCID." },
    },
    teaching: {
      title: "Didactic",
      intro: "Predau anatomie uman\u0103 \u0219i embriologie studen\u021bilor din anul I \u0219i II la Facult\u0103\u021bile de Medicin\u0103, Medicin\u0103 Dentar\u0103 \u0219i Farmacie. Abordarea mea didactic\u0103 pune accent pe vizualizare, interactivitate \u0219i relevan\u021ba clinic\u0103 a structurilor anatomice.",
      courses: {
        title: "Cursuri",
        items: [
          { name: "Anatomia omului", target: "Anul I & II \u2014 Medicin\u0103, Medicin\u0103 Dentar\u0103", desc: "Anatomie sistematic\u0103 \u0219i topografic\u0103, cu disec\u021bii \u0219i corela\u021bii clinice." },
          { name: "Embriologie", target: "Anul I \u2014 Medicin\u0103, Medicin\u0103 Dentar\u0103", desc: "Dezvoltarea embrionar\u0103, organogenez\u0103, teratologie." },
        ],
      },
      resources: {
        title: "Resurse pentru studen\u021bi",
        items: [
          { name: "Medical Research Toolkit", desc: "C\u0103utare rapid\u0103 \u00een PubMed, Google Scholar, Semantic Scholar \u0219i Consensus. Ghid pas cu pas pentru cercetarea medical\u0103.", url: "/toolkit", tag: "Tool" },
        ],
      },
      philosophy: {
        title: "Filosofie didactic\u0103",
        text: "Cred c\u0103 anatomia se \u00eenva\u021b\u0103 cel mai bine atunci c\u00e2nd studentul \u00een\u021belege de ce conteaz\u0103 fiecare structur\u0103, nu doar cum se nume\u0219te. Folosesc materiale vizuale, scheme interactive \u0219i prezent\u0103ri adaptate genera\u021biei actuale de studen\u021bi \u2014 cu limbaj accesibil, referin\u021be clinice reale \u0219i instrumente digitale.",
      },
    },
    projects: {
      title: "Proiecte digitale",
      intro: "Construiesc instrumente digitale care fac educa\u021bia medical\u0103 \u0219i informa\u021bia \u0219tiin\u021bific\u0103 mai accesibile.",
      items: [
        {
          name: "NASCORA", url: "https://nascora.health", tagline: "Platform\u0103 de preven\u021bie \u00een teratologie",
          desc: "Platform\u0103 bilingv\u0103 (RO/EN) dedicat\u0103 prevenirii malforma\u021biilor congenitale. Include un verificator de risc teratogen cu o baz\u0103 de date de 500+ substan\u021be, bibliotec\u0103 de articole bazate pe eviden\u021be, calculator de sarcin\u0103 \u0219i checklist pre-concep\u021bie.",
          tech: "Next.js 14 \u00b7 Vercel \u00b7 GDPR compliant",
        },
        {
          name: "Medical Research Toolkit", url: "/toolkit", tagline: "Motor de c\u0103utare \u0219tiin\u021bific\u0103 unificat",
          desc: "Instrument creat pentru studen\u021bii mei care unific\u0103 c\u0103utarea \u00een PubMed, Google Scholar, Semantic Scholar \u0219i Consensus. Include ghid pas cu pas pentru cercetarea medical\u0103 \u0219i acces rapid la baze de date interna\u021bionale.",
          tech: "HTML \u00b7 JavaScript \u00b7 Open Access",
        },
      ],
    },
    blog: {
      title: "Blog",
      intro: "Noti\u021be despre anatomie, educa\u021bie medical\u0103 \u0219i tehnologie \u00een s\u0103n\u0103tate.",
      categories: ["Educa\u021bie", "Anatomy Notes", "EdTech"],
      posts: [
        {
          title: "De ce educa\u021bia medical\u0103 trebuie s\u0103 evolueze \u2014 \u0219i cum o facem",
          date: "8 aprilie 2026",
          summary: "Lumea medical\u0103 se schimb\u0103 mai repede dec\u00e2t curriculumul. Despre cum putem adapta predarea anatomiei la genera\u021bia care \u00eenva\u021b\u0103 altfel.",
          content: [
            "Sunt profesor de anatomie din 2014. \u00cen 11 ani, am v\u0103zut cum se schimb\u0103 studen\u021bii: sunt mai vizuali, mai conecta\u021bi, mai r\u0103bda\u021bi cu informa\u021bia \u2014 dar paradoxal, mult mai deschi\u0219i s\u0103 \u00een\u021beleag\u0103 \u201Ede ce\u201D dec\u00e2t genera\u021biile anterioare. \u0218i asta e o oportunitate, nu o problem\u0103.",
            "Educa\u021bia medical\u0103 clasic\u0103 a fost construit\u0103 pe un model simplu: memoreaz\u0103, repet\u0103, treci examenul. Func\u021bioneaz\u0103? Da, tehnic. Dar produce medici care g\u00e2ndesc critic? Nu \u00eentotdeauna. Anatomia nu e o list\u0103 de structuri de \u00eenv\u0103\u021bat pe de rost \u2014 e o hart\u0103 a corpului uman care trebuie \u00een\u021beleas\u0103, nu memorat\u0103.",
            "De aceea am \u00eenceput s\u0103 construiesc instrumente digitale. NASCORA a ap\u0103rut din nevoia de a face informa\u021bia despre teratogeni accesibil\u0103 oricui. Medical Research Toolkit s-a n\u0103scut \u00een sala de curs, c\u00e2nd am realizat c\u0103 studen\u021bii mei nu \u0219tiau cum s\u0103 caute un articol \u0219tiin\u021bific.",
            "Nu cred c\u0103 tehnologia \u00eenlocuie\u0219te profesorul. Cred c\u0103 \u00eel amplific\u0103. Un profesor bun cu instrumente bune poate forma o genera\u021bie \u00eentreag\u0103 de medici care g\u00e2ndesc, nu doar care \u0219tiu.",
            "Misiunea mea e simpl\u0103: s\u0103 fac anatomia relevant\u0103, accesibil\u0103 \u0219i imposibil de ignorat. Dac\u0103 e\u0219ti student \u0219i cite\u0219ti asta \u2014 bine ai venit. Ai ajuns \u00een locul potrivit.",
          ],
          tag: "Educa\u021bie",
        },
        {
          title: "Medicina ca voca\u021bie \u2014 de ce nu e doar o profesie",
          date: "9 aprilie 2026", tag: "Educa\u021bie",
          summary: "Exist\u0103 o diferen\u021b\u0103 enorm\u0103 \u00eentre a alege medicina ca meserie \u0219i a o sim\u021bi ca pe o chemare. Despre ce \u00eenseamn\u0103 s\u0103 fii medic dincolo de diplom\u0103.",
          content: [
            "William Osler spunea c\u0103 medicina este \u201Eo voca\u021bie, nu o afacere; o chemare \u00een care inima ta va fi pus\u0103 la \u00eencercare \u00een egal\u0103 m\u0103sur\u0103 cu mintea\u201D. Dup\u0103 11 ani de predat anatomie, am \u00een\u021beles c\u0103 nu exagera.",
            "V\u0103d \u00een fiecare an sute de studen\u021bi. Unii au ales medicina pentru prestigiu, al\u021bii pentru p\u0103rin\u021bi, al\u021bii pentru c\u0103 nu \u0219tiau ce altceva s\u0103 fac\u0103. \u0218i e ok \u2014 nu trebuie s\u0103 ai totul clar la 18 ani. Dar \u00een anul doi sau trei, ceva se schimb\u0103.",
            "Voca\u021bia nu \u00eenseamn\u0103 c\u0103 nu te obose\u0219ti, c\u0103 nu te frustrezi, c\u0103 nu vrei s\u0103 renun\u021bi uneori. \u00censeamn\u0103 c\u0103, dup\u0103 toate astea, te \u00eentorci. \u00censeamn\u0103 c\u0103 nu po\u021bi s\u0103 nu te \u00eentorci.",
            "Am v\u0103zut studen\u021bi care au picat \u00een prima sesiune \u0219i au devenit medici extraordinari. Am v\u0103zut studen\u021bi cu note perfecte care au abandonat dup\u0103 reziden\u021biat. Diferen\u021ba nu a fost inteligen\u021ba. A fost motivul pentru care au ales s\u0103 fie acolo.",
            "Dac\u0103 cite\u0219ti asta \u0219i te \u00eentrebi dac\u0103 medicina e pentru tine \u2014 \u00eentrebarea \u00een sine e un semn bun. Medicina nu e u\u0219oar\u0103. Dar pentru cine o simte ca pe o chemare, e imposibil de renun\u021bat.",
          ],
        },
        {
          title: "Anatomia nu e doar pentru sala de disec\u021bie \u2014 oportunit\u0103\u021bi interdisciplinare",
          date: "9 aprilie 2026", tag: "Anatomy Notes",
          summary: "Anatomia se intersecteaz\u0103 cu imagistica, inteligen\u021ba artificial\u0103, arheologia \u0219i educa\u021bia digital\u0103. Despre cum o disciplin\u0103 veche de secole deschide u\u0219i noi.",
          content: [
            "C\u00e2nd spui \u201Eanatomie\u201D, majoritatea oamenilor se g\u00e2ndesc la sala de disec\u021bie. \u0218i da, acolo \u00eencepe totul. Dar acolo nu se termin\u0103.",
            "Anatomia modern\u0103 se intersecteaz\u0103 cu domenii pe care genera\u021bia anterioar\u0103 de profesori nici nu le-ar fi imaginat. Imagistica medical\u0103 (CT, MRI, CBCT) a transformat anatomia descriptiv\u0103 \u00eentr-o anatomie func\u021bional\u0103 \u0219i clinic\u0103, unde variantele anatomice nu sunt curiozit\u0103\u021bi \u2014 sunt informa\u021bii critice pentru chirurg.",
            "Inteligen\u021ba artificial\u0103 \u0219i vizualizarea 3D au deschis o alt\u0103 frontier\u0103: atlase interactive, simul\u0103ri de disec\u021bie virtual\u0103, modele printate 3D ale structurilor anatomice.",
            "Personal, am o a doua forma\u021bie \u00een istorie \u0219i arheologie. Asta m-a dus spre bioarheologie \u2014 studiul resturilor osteologice umane din contexte arheologice folosind metode anatomice moderne. E un domeniu fascinant unde medicina se \u00eent\u00e2lne\u0219te cu istoria.",
            "Iar educa\u021bia digital\u0103 e poate cea mai urgent\u0103 intersec\u021bie. Am construit NASCORA pentru c\u0103 informa\u021bia despre teratogeni trebuia s\u0103 ajung\u0103 la oricine. Am construit Medical Research Toolkit pentru c\u0103 studen\u021bii mei aveau nevoie de un punct de plecare pentru cercetare.",
            "Dac\u0103 e\u0219ti student \u0219i crezi c\u0103 anatomia e o materie de trecut \u00een anul I \u2014 g\u00e2nde\u0219te-te din nou. E o platform\u0103 de lansare. Depinde doar de tine c\u00e2t de departe vrei s\u0103 ajungi cu ea.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact", email: "cosmin.g.popa@gmail.com", emailLabel: "Email", linkedinLabel: "LinkedIn",
      affiliationLabel: "Afiliere", affiliation: "Disciplina de Anatomie \u0219i Embriologie, UMF \u201EGr. T. Popa\u201D Ia\u0219i, Rom\u00e2nia",
    },
    footer: { copy: "\u00a9 2026 Cosmin-Gabriel Popa", builtWith: "Construit cu Next.js \u00b7 G\u0103zduit pe Vercel" },
  },
  en: {
    nav: { about: "About", research: "Research", teaching: "Teaching", projects: "Projects", blog: "Blog", contact: "Contact" },
    hero: {
      title: "Cosmin-Gabriel Popa",
      subtitle: "Senior Lecturer \u00b7 Anatomy & Embryology",
      affiliation: "University of Medicine and Pharmacy \u201EGr. T. Popa\u201D Ia\u0219i, Romania",
      description: "I have been a faculty member at the Department of Anatomy and Embryology, UMF \u201EGr. T. Popa\u201D Ia\u0219i since 2014, researching applied anatomy and digital medical education. I believe quality medical education changes lives \u2014 and I build digital tools to make it accessible to everyone.",
    },
    about: {
      title: "About",
      bio: [
        "I am a Senior Lecturer at the Department of Anatomy and Embryology, University of Medicine and Pharmacy \u201EGr. T. Popa\u201D Ia\u0219i, where I have been teaching since 2014. I hold degrees in both Dental Medicine and History from \u201EAl. I. Cuza\u201D University, and this dual formation shapes my approach to research and teaching.",
        "My research focuses on applied anatomy with clinical relevance and on developing digital tools for medical education. I am convinced that technology can fundamentally transform access to quality medical information.",
        "I have extensive experience in international student organizations (IADS \u2014 International Association of Dental Students), where I received the \u201EPeter Swiss\u201D Excellence Award. I am a member of the Romanian Society of Anatomy.",
      ],
      mission: {
        title: "Why education matters",
        text: "Every generation of students comes with better questions than the last. My role is not just to teach them anatomy \u2014 it is to give them the tools to think for themselves, to question what seems obvious, and to never stop at the first answer. Education is not about what you know \u2014 it is about how you think. And my greatest responsibility as a teacher is to shape people who think critically, not who repeat mechanically. If a student leaves my classroom with one more question than they had when they walked in, I have done something right.",
      },
      experience: {
        titleAcademic: "Academic Experience",
        titleProfessional: "Professional Experience",
        academic: [
          { role: "Senior Lecturer \u2014 Anatomy & Embryology", place: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2024 \u2013 present" },
          { role: "Teaching Assistant \u2014 Anatomy & Embryology", place: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2015 \u2013 2024" },
        ],
        professional: [
          { role: "Dental Practitioner & Administrator", place: "CopouDent SRL, Ia\u0219i", year: "2013 \u2013 2025" },
        ],
      },
      education: {
        title: "Education",
        items: [
          { degree: "PhD \u2014 Dental Medicine", school: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2019" },
          { degree: "MSc \u2014 Dental Medicine", school: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2017" },
          { degree: "DMD \u2014 Dental Medicine", school: "UMF \u201EGr. T. Popa\u201D Ia\u0219i", year: "2013" },
          { degree: "BA \u2014 History", school: "\u201EAl. I. Cuza\u201D University Ia\u0219i", year: "2013" },
          { degree: "Pedagogical Training Level I & II", school: "USAMV \u201EIon Ionescu de la Brad\u201D Ia\u0219i", year: "2018 / 2020" },
        ],
      },
      affiliations: {
        title: "Affiliations",
        items: ["Romanian Society of Anatomy", "International Association of Dental Students (IADS)", "Romanian Society of Oral Rehabilitation", "Romanian Society of Periodontology"],
      },
      cv: { label: "Curriculum Vitae", linkText: "Open CV (PDF)" },
      ids: {
        title: "Identifiers",
        items: [{ label: "ORCID", value: "0000-0002-7124-3179", url: "https://orcid.org/0000-0002-7124-3179" }],
      },
    },
    research: {
      title: "Research",
      intro: "My research focuses on applied human anatomy and digital medical education.",
      areas: [
        { name: "Applied Anatomy", desc: "Clinical anatomy studies relevant to dental, surgical, and imaging practice." },
        { name: "Digital Medical Education", desc: "Development and evaluation of digital tools for teaching anatomy \u2014 interactive platforms, quizzes, visual resources for students." },
      ],
      publications: { title: "Publications", note: "Full publication list to be updated. For indexed publications, see ORCID profile." },
    },
    teaching: {
      title: "Teaching",
      intro: "I teach human anatomy and embryology to 1st and 2nd year students in the Faculties of Medicine, Dental Medicine, and Pharmacy. My teaching approach emphasizes visualization, interactivity, and the clinical relevance of anatomical structures.",
      courses: {
        title: "Courses",
        items: [
          { name: "Human Anatomy", target: "Year I & II \u2014 Medicine, Dental Medicine", desc: "Systematic and topographic anatomy with dissections and clinical correlations." },
          { name: "Embryology", target: "Year I \u2014 Medicine, Dental Medicine", desc: "Embryonic development, organogenesis, teratology." },
        ],
      },
      resources: {
        title: "Student Resources",
        items: [
          { name: "Medical Research Toolkit", desc: "Unified search across PubMed, Google Scholar, Semantic Scholar and Consensus. Step-by-step guide for medical research.", url: "/toolkit", tag: "Tool" },
        ],
      },
      philosophy: {
        title: "Teaching Philosophy",
        text: "I believe anatomy is best learned when the student understands why each structure matters, not just what it is called. I use visual materials, interactive diagrams, and presentations adapted to the current generation of students \u2014 with accessible language, real clinical references, and digital tools.",
      },
    },
    projects: {
      title: "Digital Projects",
      intro: "I build digital tools that make medical education and scientific information more accessible.",
      items: [
        {
          name: "NASCORA", url: "https://nascora.health", tagline: "Teratology prevention platform",
          desc: "Bilingual platform (RO/EN) dedicated to preventing congenital malformations. Features a teratogen risk checker with a database of 500+ substances, evidence-based article library, pregnancy calculator, and pre-conception checklist.",
          tech: "Next.js 14 \u00b7 Vercel \u00b7 GDPR compliant",
        },
        {
          name: "Medical Research Toolkit", url: "/toolkit", tagline: "Unified scientific search engine",
          desc: "A tool built for my students that unifies search across PubMed, Google Scholar, Semantic Scholar and Consensus. Includes step-by-step guide for medical research and quick access to international databases.",
          tech: "HTML \u00b7 JavaScript \u00b7 Open Access",
        },
      ],
    },
    blog: {
      title: "Blog",
      intro: "Notes on anatomy, medical education, and health technology.",
      categories: ["Education", "Anatomy Notes", "EdTech"],
      posts: [
        {
          title: "Why medical education must evolve \u2014 and how we do it",
          date: "April 8, 2026",
          summary: "The medical world changes faster than the curriculum. On adapting anatomy teaching for the generation that learns differently.",
          content: [
            "I have been an anatomy professor since 2014. In 11 years, I have watched students change: they are more visual, more connected, less patient with information \u2014 but paradoxically, much more willing to understand \u201Cwhy\u201D than previous generations. And that is an opportunity, not a problem.",
            "Traditional medical education was built on a simple model: memorize, repeat, pass the exam. Does it work? Technically, yes. But does it produce doctors who think critically? Not always. Anatomy is not a list of structures to memorize \u2014 it is a map of the human body that needs to be understood, not recited.",
            "That is why I started building digital tools. NASCORA emerged from the need to make teratogen information accessible to everyone. Medical Research Toolkit was born in the classroom, when I realized my students did not know how to search for a scientific article.",
            "I do not believe technology replaces the teacher. I believe it amplifies them. A good teacher with good tools can shape an entire generation of doctors who think, not just who know.",
            "My mission is simple: make anatomy relevant, accessible, and impossible to ignore. If you are a student reading this \u2014 welcome. You are in the right place.",
          ],
          tag: "Education",
        },
        {
          title: "Medicine as a vocation \u2014 why it is more than a profession",
          date: "April 9, 2026", tag: "Education",
          summary: "There is an enormous difference between choosing medicine as a career and feeling it as a calling. On what it means to be a doctor beyond the diploma.",
          content: [
            "William Osler said that medicine is \u201Ca calling, not a business; a calling in which your heart will be exercised equally with your head.\u201D After 11 years of teaching anatomy, I understand he was not exaggerating.",
            "Every year I see hundreds of students. Some chose medicine for prestige, others for their parents, others because they did not know what else to do. And that is fine \u2014 you do not need to have everything figured out at 18. But in year two or three, something changes.",
            "Vocation does not mean you never get tired, never get frustrated, never want to quit. It means that after all of that, you come back. It means you cannot not come back.",
            "I have seen students who failed their first exam session and became extraordinary doctors. I have seen students with perfect grades who dropped out after residency. The difference was not intelligence. It was the reason they chose to be there.",
            "If you are reading this and wondering whether medicine is for you \u2014 the question itself is a good sign. Medicine is not easy. But for those who feel it as a calling, it is impossible to give up.",
          ],
        },
        {
          title: "Anatomy is not just for the dissection room \u2014 interdisciplinary opportunities",
          date: "April 9, 2026", tag: "Anatomy Notes",
          summary: "Anatomy intersects with imaging, artificial intelligence, archaeology, and digital education. On how a centuries-old discipline opens new doors.",
          content: [
            "When you say \u201Canatomy,\u201D most people think of the dissection room. And yes, that is where it all begins. But that is not where it ends.",
            "Modern anatomy intersects with fields that the previous generation of professors could not have imagined. Medical imaging (CT, MRI, CBCT) has transformed descriptive anatomy into functional and clinical anatomy, where anatomical variants are not curiosities \u2014 they are critical information for the surgeon.",
            "Artificial intelligence and 3D visualization have opened another frontier: interactive atlases, virtual dissection simulations, 3D-printed models of anatomical structures.",
            "Personally, I have a second academic formation in history and archaeology. This led me to bioarchaeology \u2014 the study of human osteological remains from archaeological contexts using modern anatomical methods. It is a fascinating field where medicine meets history.",
            "And digital education is perhaps the most urgent intersection. I built NASCORA because teratogen information needed to reach everyone. I built Medical Research Toolkit because my students needed a starting point for research.",
            "If you are a student and you think anatomy is just a subject to pass in year one \u2014 think again. It is a launchpad. How far you go with it depends entirely on you.",
          ],
        },
      ],
    },
    contact: {
      title: "Contact", email: "cosmin.g.popa@gmail.com", emailLabel: "Email", linkedinLabel: "LinkedIn",
      affiliationLabel: "Affiliation", affiliation: "Department of Anatomy and Embryology, UMF \u201EGr. T. Popa\u201D Ia\u0219i, Romania",
    },
    footer: { copy: "\u00a9 2026 Cosmin-Gabriel Popa", builtWith: "Built with Next.js \u00b7 Hosted on Vercel" },
  },
};

function NavLink({ href, children, onClick }) {
  return (
    <a href={href} onClick={onClick} style={{ color: "var(--fg-sec)", textDecoration: "none", fontSize: "0.75rem", letterSpacing: "0.02em", textTransform: "uppercase", fontFamily: "var(--fm)", transition: "color 0.2s" }}
      onMouseEnter={(e) => (e.target.style.color = "var(--acc)")} onMouseLeave={(e) => (e.target.style.color = "var(--fg-sec)")}>
      {children}
    </a>
  );
}

function ST({ children }) {
  return <h2 style={{ fontFamily: "var(--fh)", fontSize: "1.6rem", fontWeight: 600, color: "var(--fg)", marginBottom: "1.5rem", paddingBottom: "0.5rem", borderBottom: "2px solid var(--acc)", display: "inline-block" }}>{children}</h2>;
}

function Sec({ children, id, style = {} }) {
  return <section id={id} style={{ maxWidth: 720, margin: "0 auto", padding: "3rem 1.5rem", ...style }}>{children}</section>;
}

function Div() {
  return <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 1.5rem" }}><hr style={{ border: "none", borderTop: "1px solid var(--bdr)", margin: 0 }} /></div>;
}

export function AcademicSite() {
  const [lang, setLang] = useState("ro");
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedPost, setExpandedPost] = useState(null);
  const c = t[lang];
  const toggle = () => setLang(lang === "ro" ? "en" : "ro");
  const go = (id) => { setMenuOpen(false); document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); };

  const S = {
    mono: { fontFamily: "var(--fm)" },
    head: { fontFamily: "var(--fh)" },
    subh: { fontFamily: "var(--fh)", fontSize: "1.15rem", fontWeight: 600, color: "var(--fg)", marginTop: "2rem", marginBottom: "0.75rem" },
    tag: { fontSize: "0.85rem", padding: "0.25rem 0.65rem", backgroundColor: "var(--tagbg)", color: "var(--tagfg)", borderRadius: 3, fontFamily: "var(--fm)" },
    link: { color: "var(--acc)", textDecoration: "none", fontSize: "1rem", borderBottom: "1px dashed var(--acc)" },
    lbl: { fontFamily: "var(--fm)", fontSize: "0.8rem", color: "var(--fg-ter)", textTransform: "uppercase", letterSpacing: "0.05em" },
    area: { marginBottom: "1.5rem", paddingLeft: "1rem", borderLeft: "3px solid var(--accl)" },
  };

  return (
    <div style={{ fontFamily: "var(--fb)", color: "var(--fg)", backgroundColor: "var(--bg)", minHeight: "100vh", lineHeight: 1.7 }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@400;500;600;700&family=Source+Sans+3:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
        :root{--bg:#FAFAF8;--fg:#1a1a2e;--fg-sec:#555566;--fg-ter:#888899;--acc:#2d4a7a;--accl:#e8eef6;--bdr:#e0e0dd;--fh:'Crimson Pro',Georgia,serif;--fb:'Source Sans 3','Source Sans Pro',-apple-system,sans-serif;--fm:'JetBrains Mono','Fira Code',monospace;--tagbg:#f0eeeb;--tagfg:#555566}
        *{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}::selection{background:var(--accl);color:var(--acc)}
        @media(max-width:640px){.dsk{display:none!important}.mbtn{display:flex!important}.hero-title{font-size:1.8rem!important}.section-pad{padding:2rem 1rem!important}}
        @media(min-width:641px){.mbtn{display:none!important}.mpnl{display:none!important}}
      `}</style>

      {/* Navbar */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, backgroundColor: "var(--bg)", borderBottom: "1px solid var(--bdr)", padding: "0.75rem 1.5rem" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{ ...S.head, fontWeight: 700, fontSize: "1.1rem", color: "var(--fg)", textDecoration: "none" }}>C-G Popa</a>
          <div className="dsk" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            {Object.entries(c.nav).map(([k, v]) => <NavLink key={k} href={"#" + k} onClick={(e) => { e.preventDefault(); go(k); }}>{v}</NavLink>)}
            <button onClick={toggle} style={{ ...S.mono, fontSize: "0.8rem", padding: "0.2rem 0.6rem", border: "1px solid var(--bdr)", borderRadius: 3, background: "transparent", color: "var(--fg-sec)", cursor: "pointer" }}>
              {lang === "ro" ? "EN" : "RO"}
            </button>
          </div>
          <button className="mbtn" onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", flexDirection: "column", gap: 4, padding: 4 }}>
            <span style={{ width: 20, height: 2, backgroundColor: "var(--fg)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translateY(6px)" : "none" }} />
            <span style={{ width: 20, height: 2, backgroundColor: "var(--fg)", display: "block", transition: "all 0.3s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ width: 20, height: 2, backgroundColor: "var(--fg)", display: "block", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translateY(-6px)" : "none" }} />
          </button>
        </div>
        {menuOpen && (
          <div className="mpnl" style={{ maxWidth: 720, margin: "0.5rem auto 0", display: "flex", flexDirection: "column", gap: "0.75rem", padding: "0.75rem 0", borderTop: "1px solid var(--bdr)" }}>
            {Object.entries(c.nav).map(([k, v]) => <NavLink key={k} href={"#" + k} onClick={(e) => { e.preventDefault(); go(k); }}>{v}</NavLink>)}
            <button onClick={() => { toggle(); setMenuOpen(false); }} style={{ ...S.mono, fontSize: "0.8rem", padding: "0.2rem 0.6rem", border: "1px solid var(--bdr)", borderRadius: 3, background: "transparent", color: "var(--fg-sec)", cursor: "pointer", alignSelf: "flex-start" }}>
              {lang === "ro" ? "EN" : "RO"}
            </button>
          </div>
        )}
      </nav>

      {/* Hero */}
      <Sec style={{ paddingTop: "4rem", paddingBottom: "2rem" }}>
        <h1 style={{ ...S.head, fontSize: "2.4rem", fontWeight: 700, color: "var(--fg)", marginBottom: "0.4rem", letterSpacing: "-0.02em", lineHeight: 1.2 }}>{c.hero.title}</h1>
        <p style={{ ...S.mono, fontSize: "0.9rem", color: "var(--acc)", marginBottom: "0.25rem" }}>{c.hero.subtitle}</p>
        <p style={{ fontSize: "0.9rem", color: "var(--fg-ter)", marginBottom: "1.5rem" }}>{c.hero.affiliation}</p>
        <p style={{ fontSize: "1.05rem", color: "var(--fg-sec)", maxWidth: 600, lineHeight: 1.75 }}>{c.hero.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "2rem" }}>
          {Object.entries(c.nav).map(([k, v]) => (
            <button key={k} onClick={() => go(k)}
              style={{ ...S.mono, fontSize: "0.8rem", padding: "0.4rem 0.9rem", border: "1px solid var(--bdr)", borderRadius: 3, background: "transparent", color: "var(--fg-sec)", cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={(e) => { e.target.style.backgroundColor = "var(--acc)"; e.target.style.color = "#fff"; e.target.style.borderColor = "var(--acc)"; }}
              onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "var(--fg-sec)"; e.target.style.borderColor = "var(--bdr)"; }}>
              {v}
            </button>
          ))}
        </div>
      </Sec>

      <Div />

      {/* About */}
      <Sec id="about">
        <ST>{c.about.title}</ST>
        {c.about.bio.map((p, i) => <p key={i} style={{ fontSize: "1rem", color: "var(--fg-sec)", marginBottom: "1rem", lineHeight: 1.75 }}>{p}</p>)}

        {/* Mission / Education empowerment */}
        <div style={{ margin: "2rem 0", padding: "1.25rem 1.25rem", backgroundColor: "var(--accl)", borderRadius: 6, borderLeft: "4px solid var(--acc)" }}>
          <h3 style={{ ...S.head, fontSize: "1.1rem", fontWeight: 700, color: "var(--acc)", marginBottom: "0.5rem" }}>{c.about.mission.title}</h3>
          <p style={{ fontSize: "0.95rem", color: "var(--fg-sec)", lineHeight: 1.8, fontStyle: "italic" }}>{c.about.mission.text}</p>
        </div>

        <h3 style={S.subh}>{c.about.experience.titleAcademic}</h3>
        {c.about.experience.academic.map((exp, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.4rem 0", borderBottom: i < c.about.experience.academic.length - 1 ? "1px solid var(--bdr)" : "none", flexWrap: "wrap", gap: "0.25rem" }}>
            <div>
              <span style={{ fontWeight: 500, color: "var(--fg)", fontSize: "0.95rem" }}>{exp.role}</span>
              <span style={{ color: "var(--fg-ter)", fontSize: "0.9rem" }}>{" \u2014 "}{exp.place}</span>
            </div>
            <span style={{ ...S.mono, fontSize: "0.8rem", color: "var(--fg-ter)", whiteSpace: "nowrap" }}>{exp.year}</span>
          </div>
        ))}

        <h3 style={S.subh}>{c.about.experience.titleProfessional}</h3>
        {c.about.experience.professional.map((exp, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.4rem 0", flexWrap: "wrap", gap: "0.25rem" }}>
            <div>
              <span style={{ fontWeight: 500, color: "var(--fg)", fontSize: "0.95rem" }}>{exp.role}</span>
              <span style={{ color: "var(--fg-ter)", fontSize: "0.9rem" }}>{" \u2014 "}{exp.place}</span>
            </div>
            <span style={{ ...S.mono, fontSize: "0.8rem", color: "var(--fg-ter)", whiteSpace: "nowrap" }}>{exp.year}</span>
          </div>
        ))}

        <h3 style={S.subh}>{c.about.education.title}</h3>
        {c.about.education.items.map((ed, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0.4rem 0", borderBottom: i < c.about.education.items.length - 1 ? "1px solid var(--bdr)" : "none", flexWrap: "wrap", gap: "0.25rem" }}>
            <div>
              <span style={{ fontWeight: 500, color: "var(--fg)", fontSize: "0.95rem" }}>{ed.degree}</span>
              <span style={{ color: "var(--fg-ter)", fontSize: "0.9rem" }}>{" \u2014 "}{ed.school}</span>
            </div>
            <span style={{ ...S.mono, fontSize: "0.8rem", color: "var(--fg-ter)", whiteSpace: "nowrap" }}>{ed.year}</span>
          </div>
        ))}

        {/* CV PDF link */}
        <div style={{ marginTop: "1.25rem" }}>
          <a href="/cv.pdf" target="_blank" rel="noopener noreferrer"
            style={{ ...S.mono, fontSize: "0.85rem", color: "var(--acc)", textDecoration: "none", padding: "0.5rem 1rem", border: "1px solid var(--acc)", borderRadius: 3, display: "inline-block", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.target.style.backgroundColor = "var(--acc)"; e.target.style.color = "#fff"; }}
            onMouseLeave={(e) => { e.target.style.backgroundColor = "transparent"; e.target.style.color = "var(--acc)"; }}>
            {c.about.cv.linkText} {"\u2197"}
          </a>
        </div>

        <h3 style={S.subh}>{c.about.affiliations.title}</h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
          {c.about.affiliations.items.map((a, i) => <span key={i} style={S.tag}>{a}</span>)}
        </div>

        <h3 style={S.subh}>{c.about.ids.title}</h3>
        {c.about.ids.items.map((id, i) => (
          <a key={i} href={id.url} target="_blank" rel="noopener noreferrer" style={{ ...S.mono, fontSize: "0.85rem", color: "var(--acc)", textDecoration: "none", borderBottom: "1px dashed var(--acc)" }}>
            {id.label}: {id.value} {"\u2197"}
          </a>
        ))}
      </Sec>

      <Div />

      {/* Research */}
      <Sec id="research">
        <ST>{c.research.title}</ST>
        <p style={{ fontSize: "1rem", color: "var(--fg-sec)", marginBottom: "2rem", lineHeight: 1.75 }}>{c.research.intro}</p>
        {c.research.areas.map((a, i) => (
          <div key={i} style={S.area}>
            <h3 style={{ ...S.head, fontSize: "1.1rem", fontWeight: 600, color: "var(--fg)", marginBottom: "0.3rem" }}>{a.name}</h3>
            <p style={{ fontSize: "0.95rem", color: "var(--fg-sec)", lineHeight: 1.7 }}>{a.desc}</p>
          </div>
        ))}
        <h3 style={{ ...S.subh, marginTop: "2.5rem" }}>{c.research.publications.title}</h3>
        <p style={{ fontSize: "0.95rem", color: "var(--fg-ter)", fontStyle: "italic", lineHeight: 1.7 }}>{c.research.publications.note}</p>
      </Sec>

      <Div />

      {/* Teaching */}
      <Sec id="teaching">
        <ST>{c.teaching.title}</ST>
        <p style={{ fontSize: "1rem", color: "var(--fg-sec)", marginBottom: "2rem", lineHeight: 1.75 }}>{c.teaching.intro}</p>

        <h3 style={{ ...S.subh, marginTop: 0 }}>{c.teaching.courses.title}</h3>
        {c.teaching.courses.items.map((cr, i) => (
          <div key={i} style={S.area}>
            <h4 style={{ fontWeight: 600, color: "var(--fg)", fontSize: "1rem", marginBottom: "0.15rem" }}>{cr.name}</h4>
            <p style={{ ...S.mono, fontSize: "0.8rem", color: "var(--fg-ter)", marginBottom: "0.25rem" }}>{cr.target}</p>
            <p style={{ fontSize: "0.9rem", color: "var(--fg-sec)" }}>{cr.desc}</p>
          </div>
        ))}

        <h3 style={S.subh}>{c.teaching.resources.title}</h3>
        {c.teaching.resources.items.map((r, i) => (
          <a key={i} href={r.url} style={{ display: "block", padding: "0.75rem 1rem", marginBottom: "0.5rem", border: "1px solid var(--bdr)", borderRadius: 4, textDecoration: "none", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.backgroundColor = "var(--accl)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontWeight: 500, color: "var(--fg)", fontSize: "0.95rem" }}>{r.name}</span>
              <span style={{ ...S.mono, fontSize: "0.7rem", padding: "0.15rem 0.5rem", backgroundColor: "var(--tagbg)", color: "var(--tagfg)", borderRadius: 3 }}>{r.tag}</span>
            </div>
            <p style={{ fontSize: "0.85rem", color: "var(--fg-sec)", marginTop: "0.2rem" }}>{r.desc}</p>
          </a>
        ))}

        <h3 style={S.subh}>{c.teaching.philosophy.title}</h3>
        <p style={{ fontSize: "0.95rem", color: "var(--fg-sec)", lineHeight: 1.75, paddingLeft: "1rem", borderLeft: "3px solid var(--accl)" }}>{c.teaching.philosophy.text}</p>
      </Sec>

      <Div />

      {/* Projects */}
      <Sec id="projects">
        <ST>{c.projects.title}</ST>
        <p style={{ fontSize: "1rem", color: "var(--fg-sec)", marginBottom: "2rem", lineHeight: 1.75 }}>{c.projects.intro}</p>
        {c.projects.items.map((p, i) => (
          <a key={i} href={p.url} target={p.url.startsWith("http") ? "_blank" : "_self"} rel="noopener noreferrer"
            style={{ display: "block", padding: "1.25rem", border: "1px solid var(--bdr)", borderRadius: 4, textDecoration: "none", marginBottom: "1rem", transition: "all 0.2s" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--acc)"; e.currentTarget.style.backgroundColor = "var(--accl)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--bdr)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
            <h3 style={{ ...S.head, fontSize: "1.2rem", fontWeight: 700, color: "var(--acc)", marginBottom: "0.3rem" }}>{p.name} {"\u2197"}</h3>
            <p style={{ ...S.mono, fontSize: "0.8rem", color: "var(--fg-ter)", marginBottom: "0.5rem" }}>{p.tagline}</p>
            <p style={{ fontSize: "0.9rem", color: "var(--fg-sec)", lineHeight: 1.7 }}>{p.desc}</p>
            <p style={{ ...S.mono, fontSize: "0.75rem", color: "var(--fg-ter)", marginTop: "0.75rem" }}>{p.tech}</p>
          </a>
        ))}
      </Sec>

      <Div />

      {/* Blog */}
      <Sec id="blog">
        <ST>{c.blog.title}</ST>
        <p style={{ fontSize: "1rem", color: "var(--fg-sec)", marginBottom: "1.5rem", lineHeight: 1.75 }}>{c.blog.intro}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "2rem" }}>
          {c.blog.categories.map((cat, i) => <span key={i} style={{ ...S.tag, fontSize: "0.8rem", padding: "0.2rem 0.6rem" }}>{cat}</span>)}
        </div>

        {c.blog.posts.map((post, i) => (
          <article key={i} style={{ border: "1px solid var(--bdr)", borderRadius: 4, padding: "1.25rem", marginBottom: "1rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.3rem", flexWrap: "wrap", gap: "0.5rem" }}>
              <h3 style={{ ...S.head, fontSize: "1.15rem", fontWeight: 700, color: "var(--fg)", lineHeight: 1.3, flex: 1 }}>{post.title}</h3>
              <span style={{ ...S.mono, fontSize: "0.7rem", padding: "0.15rem 0.5rem", backgroundColor: "var(--tagbg)", color: "var(--tagfg)", borderRadius: 3, whiteSpace: "nowrap" }}>{post.tag}</span>
            </div>
            <p style={{ ...S.mono, fontSize: "0.8rem", color: "var(--fg-ter)", marginBottom: "0.75rem" }}>{post.date}</p>
            <p style={{ fontSize: "0.95rem", color: "var(--fg-sec)", lineHeight: 1.7 }}>{post.summary}</p>

            {expandedPost === i ? (
              <div style={{ marginTop: "1.25rem", paddingTop: "1rem", borderTop: "1px solid var(--bdr)" }}>
                {post.content.map((par, j) => (
                  <p key={j} style={{ fontSize: "0.95rem", color: "var(--fg-sec)", lineHeight: 1.8, marginBottom: "1rem" }}>{par}</p>
                ))}
                <button onClick={() => setExpandedPost(null)}
                  style={{ ...S.mono, fontSize: "0.8rem", color: "var(--acc)", background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                  {lang === "ro" ? "\u2191 \u00cenchide" : "\u2191 Collapse"}
                </button>
              </div>
            ) : (
              <button onClick={() => setExpandedPost(i)}
                style={{ ...S.mono, fontSize: "0.8rem", color: "var(--acc)", background: "none", border: "none", cursor: "pointer", padding: 0, marginTop: "0.75rem", display: "block" }}>
                {lang === "ro" ? "Cite\u0219te \u2192" : "Read more \u2192"}
              </button>
            )}
          </article>
        ))}
      </Sec>

      <Div />

      {/* Contact */}
      <Sec id="contact">
        <ST>{c.contact.title}</ST>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          <div>
            <span style={S.lbl}>{c.contact.emailLabel}</span><br />
            <a href={"mailto:" + c.contact.email} style={S.link}>{c.contact.email}</a>
          </div>
          <div>
            <span style={S.lbl}>{c.contact.linkedinLabel}</span><br />
            <a href="https://linkedin.com/in/cosmin-gabriel-popa" target="_blank" rel="noopener noreferrer" style={S.link}>linkedin.com/in/cosmin-gabriel-popa {"\u2197"}</a>
          </div>
          <div>
            <span style={S.lbl}>{c.contact.affiliationLabel}</span><br />
            <span style={{ fontSize: "0.95rem", color: "var(--fg-sec)" }}>{c.contact.affiliation}</span>
          </div>
        </div>
      </Sec>

      <footer style={{ maxWidth: 720, margin: "0 auto", padding: "2rem 1.5rem", borderTop: "1px solid var(--bdr)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ ...S.mono, fontSize: "0.75rem", color: "var(--fg-ter)" }}>{c.footer.copy}</span>
        <span style={{ ...S.mono, fontSize: "0.75rem", color: "var(--fg-ter)" }}>{c.footer.builtWith}</span>
        <a href="/privacy" style={{ ...S.mono, fontSize: "0.75rem", color: "var(--fg-ter)", textDecoration: "none", borderBottom: "1px dashed var(--bdr)" }}>GDPR & Cookies</a>
      </footer>
    </div>
  );
}
