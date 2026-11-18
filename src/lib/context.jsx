"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "01. HOME",
      about: "02. ABOUT",
      experience: "03. EXP",
      skills: "04. STACK",
      projects: "05. WORK",
      contact: "06. CONTACT",
    },
    hero: {
      status: "AVAILABLE FOR PROJECTS & FULL-TIME",
      greeting: "HELLO WORLD // I AM",
      roles: ["FULLSTACK DEVELOPER", "UI/UX DESIGNER", "PROJECT MANAGER"],
      desc: "Crafting bold interfaces & engineering scalable web experiences — from raw wireframes to production-ready systems.",
      ctaPrimary: "EXPLORE WORK",
      ctaSecondary: "DOWNLOAD CV",
      findMe: "CONNECT:",
      stats: [
        { value: "23+", label: "SHIPPED PROJECTS" },
        { value: "5+", label: "COMPANIES" },
        { value: "3+", label: "YEARS EXP." },
      ],
      marquee: "NARESWARA MAULANA ALETHA ALHAQ ★ FULLSTACK WEB DEVELOPER ★ UI/UX DESIGNER ★ PROJECT MANAGER ★",
    },
    about: {
      tag: "SECTION // 02",
      title: "WHO AM I?",
      hello: "HEY THERE! CALL ME NARES.",
      p1: "My full name is Nareswara Maulana Aletha Alhaq, usually called Nares. I am a graduate/student from SMK Raden Umar Said Kudus with a deep focus on Frontend Web Development, Fullstack Engineering, and UI/UX Design.",
      p2: "I turn complex problems and raw design mockups into high-contrast, interactive, user-friendly applications using modern web stacks. Proficient with Figma, Next.js, Laravel, and Flutter — thriving in fast-paced collaborative environments.",
      downloadCv: "GRAB MY RESUME (PDF)",
      expBadge: "YEARS OF HANDS-ON EXPERIENCE",
      whatIDoTag: "CAPABILITIES",
      whatIDoTitle: "WHAT CAN I DO?",
      whatIDoSub: "End-to-end digital execution — from dissecting user pain points and designing systems to shipping production code.",
      services: [
        {
          id: "01",
          title: "UI/UX DESIGN",
          desc: "Crafting intuitive, high-impact interfaces, wireframes, and design systems tailored to real user behavior.",
        },
        {
          id: "02",
          title: "WEB DEVELOPMENT",
          desc: "Building responsive, fast, and scalable web applications using Next.js, React, Tailwind CSS, and Laravel.",
        },
        {
          id: "03",
          title: "UX RESEARCH",
          desc: "Analyzing user journeys and conducting interviews to eliminate friction and validate product decisions.",
        },
        {
          id: "04",
          title: "PROJECT MANAGEMENT",
          desc: "Architecting ERDs, leading agile teams, managing client milestones, and resolving blockers on strict timelines.",
        },
      ],
    },
    experience: {
      tag: "SECTION // 03",
      title: "CAREER LOG",
      subtitle: "REAL-WORLD INDUSTRY & INTERNSHIP TRACK RECORD",
      items: [
        {
          id: "01",
          period: "OCT 2025 – MAR 2026",
          role: "Project Manager & Frontend Web Developer",
          company: "Aston Sistem Indonesia",
          type: "Freelance Hybrid",
          description: [
            "Architected early-stage system foundations including ERDs and initial prototypes.",
            "Managed end-to-end project lifecycles by establishing workflows and defining strict timelines.",
            "Led ongoing client communications and facilitated strategic milestone meetings.",
            "Developed responsive front-end interfaces enforcing collaborative engineering best practices (Git/VCS).",
            "Mentored cross-functional team members and resolved technical blockers to ensure timely delivery.",
          ],
        },
        {
          id: "02",
          period: "FEB 2025 – MAR 2025",
          role: "Internship UI/UX Designer",
          company: "Fundex.id",
          type: "Internship",
          description: [
            "Spearheaded the UI/UX redesign of the Fundex landing page to elevate visual appeal.",
            "Analyzed and optimized end-to-end user flows, eliminating friction points.",
            "Developed comprehensive design systems and moodboards from scratch.",
          ],
        },
        {
          id: "03",
          period: "OCT 2024 – MAR 2025",
          role: "Internship Frontend Developer & Project Manager",
          company: "PT Data Utama Dinamika",
          type: "Internship",
          description: [
            "Architected and developed production-ready websites tailored to solve client challenges.",
            "Led collaborative team workflows and managed strict project timelines.",
            "Translated complex client needs into scalable web features and integrated APIs.",
            "Ensured flawless system performance through rigorous testing and bug resolution.",
          ],
        },
        {
          id: "04",
          period: "MAR 2024 – MAR 2025",
          role: "Frontend Developer & UI/UX Designer",
          company: "ByteBuilder IT Solution",
          type: "Full-time",
          description: [
            "Facilitated strategic client meetings to align project objectives and present design concepts.",
            "Conducted in-depth user interviews and research to drive data-informed solutions.",
            "Crafted interactive, high-fidelity, responsive UI designs using Figma.",
            "Engineered robust web interfaces using Next.js with seamless API integration.",
          ],
        },
        {
          id: "05",
          period: "NOV 2023 – DEC 2023",
          role: "Internship UI/UX Designer",
          company: "PT Nuri Gaya Citra",
          type: "Internship",
          description: [
            "Designed the User Interface for a Cash on Delivery (COD) feature.",
            "Conducted user research to identify key pain points.",
            "Executed the end-to-end UI design process, from wireframing to high-fidelity mockups.",
          ],
        },
      ],
    },
    skills: {
      tag: "SECTION // 04",
      title: "TECH ARSENAL",
      advanced: "CORE / ADVANCED",
      intermediate: "INTERMEDIATE / WORKING PROFICIENCY",
      levels: {
        Advanced: "ADVANCED",
        Intermediate: "INTERMEDIATE",
      },
    },
    projects: {
      tag: "SECTION // 05",
      title: "PROJECT ARCHIVE",
      subtitle: "ALL 23 SHIPPED WEBSITES, APPS & UI DESIGNS IN ONE PLACE",
      filterAll: "ALL WORK",
      filterWeb: "WEB DEV",
      filterApp: "APP DEV",
      filterUi: "UI DESIGN",
      searchPlaceholder: "SEARCH PROJECT...",
      builtWith: "TECH STACK:",
      visitProject: "INSPECT / VISIT",
      privateRepo: "CLIENT / INTERNAL",
      showing: "SHOWING",
      of: "OF",
      projectsLabel: "PROJECTS",
      showAllBtn: "SHOW ALL PROJECTS",
      showLessBtn: "SHOW LESS (3 PROJECTS)",
      typeTranslations: {
        "Website Development": "WEBSITE DEVELOPMENT",
        "Web Development": "WEB DEVELOPMENT",
        "App Development": "APP DEVELOPMENT",
        "UI Design": "UI DESIGN",
      },
      descTranslations: {},
    },
    footer: {
      tag: "SECTION // 06",
      headline1: "LET'S BUILD SOMETHING",
      headline2: "RADICAL TOGETHER.",
      sub: "Open for freelance projects, full-time engineering/design roles, and ambitious collaborations.",
      emailBtn: "SEND TRANSMISSION // EMAIL ME",
      localTime: "LOCAL SYSTEM TIME:",
      rights: "ALL RIGHTS RESERVED.",
      backToTop: "TOP ↑",
    },
  },
  id: {
    nav: {
      home: "01. BERANDA",
      about: "02. TENTANG",
      experience: "03. KARIR",
      skills: "04. KEAHLIAN",
      projects: "05. PROYEK",
      contact: "06. KONTAK",
    },
    hero: {
      status: "TERSEDIA UNTUK PROYEK & FULL-TIME",
      greeting: "HALO DUNIA // SAYA",
      roles: ["FULLSTACK DEVELOPER", "UI/UX DESIGNER", "PROJECT MANAGER"],
      desc: "Merancang antarmuka yang tegas & membangun pengalaman web berskala besar — dari wireframe mentah hingga sistem siap produksi.",
      ctaPrimary: "LIHAT KARYA",
      ctaSecondary: "UNDUH CV",
      findMe: "SOSIAL:",
      stats: [
        { value: "23+", label: "PROYEK SELESAI" },
        { value: "5+", label: "PERUSAHAAN" },
        { value: "3+", label: "TAHUN PENGALAMAN" },
      ],
      marquee: "NARESWARA MAULANA ALETHA ALHAQ ★ FULLSTACK WEB DEVELOPER ★ UI/UX DESIGNER ★ PROJECT MANAGER ★  ",
    },
    about: {
      tag: "BAGIAN // 02",
      title: "SIAPA SAYA?",
      hello: "HALO! PANGGIL SAJA NARES.",
      p1: "Nama lengkap saya Nareswara Maulana Aletha Alhaq, akrab dipanggil Nares. Saya berasal dari SMK Raden Umar Said Kudus dengan ketertarikan mendalam pada Frontend Web Development, Fullstack Engineering, dan UI/UX Design.",
      p2: "Saya suka mengubah desain mockup dan masalah kompleks menjadi website yang interaktif, tegas, dan ramah pengguna menggunakan teknologi web modern. Mahir menggunakan Figma, Next.js, Laravel, dan Flutter — serta terbiasa berkolaborasi dalam tim.",
      downloadCv: "UNDUH CV SAYA (PDF)",
      expBadge: "TAHUN PENGALAMAN PRAKTIS",
      whatIDoTag: "KAPABILITAS",
      whatIDoTitle: "APA YANG BISA SAYA LAKUKAN?",
      whatIDoSub: "Eksekusi digital menyeluruh — mulai dari riset masalah pengguna, membuat desain UI/UX, hingga mengembangkan website siap rilis.",
      services: [
        {
          id: "01",
          title: "DESAIN UI/UX",
          desc: "Merancang antarmuka yang intuitif, wireframe, dan design system yang disesuaikan dengan kebutuhan pengguna.",
        },
        {
          id: "02",
          title: "PENGEMBANGAN WEB",
          desc: "Membangun website responsif dan berkinerja tinggi dengan teknologi modern seperti Next.js, React, dan Laravel.",
        },
        {
          id: "03",
          title: "RISET UX",
          desc: "Menganalisis perilaku pengguna dan melakukan wawancara untuk menciptakan solusi desain yang tepat sasaran.",
        },
        {
          id: "04",
          title: "MANAJEMEN PROYEK",
          desc: "Merancang fondasi sistem (ERD), memimpin alur kerja tim, komunikasi klien, dan memastikan proyek selesai tepat waktu.",
        },
      ],
    },
    experience: {
      tag: "BAGIAN // 03",
      title: "JEJAK KARIR",
      subtitle: "REKAM JEJAK INDUSTRI & MAGANG PROFESIONAL",
      items: [
        {
          id: "01",
          period: "OKT 2025 – MAR 2026",
          role: "Project Manager & Frontend Web Developer",
          company: "Aston Sistem Indonesia",
          type: "Magang",
          description: [
            "Merancang fondasi sistem tahap awal termasuk ERD dan prototipe inisial.",
            "Mengelola siklus hidup proyek dari ujung ke ujung dengan menyusun alur kerja dan tenggat waktu yang ketat.",
            "Memimpin komunikasi berkelanjutan dengan klien dan memfasilitasi rapat pencapaian strategis.",
            "Mengembangkan antarmuka front-end responsif dengan menerapkan praktik rekayasa kolaboratif terbaik (Git/VCS).",
            "Membimbing anggota tim lintas fungsi dan menyelesaikan kendala teknis demi pengiriman tepat waktu.",
          ],
        },
        {
          id: "02",
          period: "FEB 2025 – MAR 2025",
          role: "Internship UI/UX Designer",
          company: "Fundex.id",
          type: "Magang",
          description: [
            "Memimpin desain ulang UI/UX halaman landing Fundex untuk meningkatkan daya tarik visual.",
            "Menganalisis dan mengoptimalkan alur pengguna secara menyeluruh untuk menghilangkan hambatan interaksi.",
            "Mengembangkan design system dan moodboard komprehensif dari awal.",
          ],
        },
        {
          id: "03",
          period: "OKT 2024 – MAR 2025",
          role: "Internship Frontend Developer & Project Manager",
          company: "PT Data Utama Dinamika",
          type: "Magang",
          description: [
            "Merancang dan mengembangkan website siap produksi yang disesuaikan untuk menjawab tantangan klien.",
            "Memimpin alur kerja tim kolaboratif dan mengelola jadwal proyek yang ketat.",
            "Menerjemahkan kebutuhan kompleks klien menjadi fitur web berskala besar dan integrasi API.",
            "Memastikan performa sistem berjalan mulus melalui pengujian ketat dan perbaikan bug.",
          ],
        },
        {
          id: "04",
          period: "MAR 2024 – MAR 2025",
          role: "Frontend Developer & UI/UX Designer",
          company: "ByteBuilder IT Solution",
          type: "Penuh Waktu",
          description: [
            "Memfasilitasi rapat strategis bersama klien untuk menyelaraskan tujuan proyek dan mempresentasikan konsep desain.",
            "Melakukan wawancara mendalam dan riset pengguna untuk menghasilkan solusi berbasis data.",
            "Merancang desain UI interaktif, berketepatan tinggi (Hi-Fi), dan responsif menggunakan Figma.",
            "Membangun antarmuka web yang tangguh menggunakan Next.js dengan integrasi API yang mulus.",
          ],
        },
        {
          id: "05",
          period: "NOV 2023 – DES 2023",
          role: "Internship UI/UX Designer",
          company: "PT Nuri Gaya Citra",
          type: "Magang",
          description: [
            "Merancang Antarmuka Pengguna (UI) untuk fitur Cash on Delivery (COD) pada aplikasi e-commerce.",
            "Melakukan riset pengguna untuk mengidentifikasi titik masalah utama.",
            "Mengeksekusi proses desain UI menyeluruh, mulai dari wireframing hingga mockup high-fidelity.",
          ],
        },
      ],
    },
    skills: {
      tag: "BAGIAN // 04",
      title: "ARSENAL TEKNOLOGI",
      advanced: "UTAMA / MAHIR",
      intermediate: "MENENGAH / KOMPETEN",
      levels: {
        Advanced: "MAHIR",
        Intermediate: "MENENGAH",
      },
    },
    projects: {
      tag: "BAGIAN // 05",
      title: "ARSIP PROYEK",
      subtitle: "SEMUA 23 KARYA WEBSITE, APLIKASI & DESAIN UI DALAM SATU HALAMAN",
      filterAll: "SEMUA KARYA",
      filterWeb: "WEB DEV",
      filterApp: "APP DEV",
      filterUi: "DESAIN UI",
      searchPlaceholder: "CARI PROYEK...",
      builtWith: "TEKNOLOGI:",
      visitProject: "BUKA PROYEK",
      privateRepo: "KLIEN / INTERNAL",
      showing: "MENAMPILKAN",
      of: "DARI",
      projectsLabel: "PROYEK",
      showAllBtn: "TAMPILKAN SEMUA PROYEK",
      showLessBtn: "TAMPILKAN SEDIKIT (3 PROYEK)",
      typeTranslations: {
        "Website Development": "PENGEMBANGAN WEBSITE",
        "Web Development": "PENGEMBANGAN WEB",
        "App Development": "PENGEMBANGAN APLIKASI",
        "UI Design": "DESAIN UI",
      },
      descTranslations: {
        "Smartchoice Pemilu Website": "Proyek ini dibuat untuk memperingati PEMILU 2024 Indonesia, menyajikan informasi lengkap pasangan calon mulai dari biodata, visi misi, hingga video debat capres, dilengkapi fitur real count suara warga.",
        "Neosantara Culture Website": "Dibuat untuk kompetisi website TECHOMFEST 2023 bertema budaya Indonesia bersama 2 rekan tim. Saya berperan sebagai UI/UX Designer dan Frontend Developer berbasis riset pengguna.",
        "KostKu App": "Aplikasi pencarian kamar kos yang dibuat bersama rekan sebagai syarat tugas akhir sekolah. Saya berperan sebagai Frontend Developer.",
        "SmartCarrier Website": "Dibuat untuk kompetisi Dinacom 2024 bertema Smart Cities to Intelligent Governance. Platform pelatihan dan pencarian kerja berbasis riset masalah kurangnya informasi lowongan dan keahlian masyarakat.",
        "Clone Website SNBP": "Proyek latihan slicing website yang terinspirasi dari momen pengumuman SNBP di Indonesia.",
        "RusCare Website Consultation": "Proyek tugas akhir sekolah berupa website pemesanan jadwal konsultasi siswa dengan guru BK khusus untuk siswa SMK Raden Umar Said.",
        "RusCare Website Consultation For Teacher": "Website dashboard khusus untuk guru Bimbingan Konseling (BK) di SMK Raden Umar Said guna mengelola jadwal konsultasi siswa.",
        "SD Birrul Walidain Profile": "Tim saya dipercaya oleh perusahaan di kota kami untuk membangun website profil sekolah SD Birrul Walidain sesuai kebutuhan klien.",
        "PPDB SD Birrul Walidain ": "Tim saya dipercaya untuk membangun sistem website PPDB (Penerimaan Peserta Didik Baru) untuk SD Birrul Walidain.",
        "Nuri E-Commerce App Design": "Proyek saat magang di PT Nuri Gaya Citra sebagai UI/UX Designer. Menyelesaikan desain fitur COD aplikasi e-commerce mulai dari wawancara pengguna, pembuatan UI, prototyping, hingga usability testing.",
        "Redesign Website TemanASN": "Mendesain ulang antarmuka website TemanASN dengan meningkatkan kenyamanan pengguna, proporsi ukuran tombol, kontras warna, dan tata letak.",
        "BetterU App": "Aplikasi yang membawa tim saya meraih Juara 3 di Dinus Application Competition 2025 bertema Society 5.0. Berupa aplikasi penghitung kalori harian dan kalori makanan berbasis AI.",
        "BetterU Landing Page": "Website landing page resmi untuk memberikan informasi lengkap terkait ekosistem Aplikasi BetterU.",
        "Buah Baru Online Website Design": "Proyek klien untuk merancang desain UI website penjualan buah segar secara online di Yogyakarta.",
        "FundEx Website Redesign": "Tugas saat magang di FundEx.Id untuk mendesain ulang landing page website FundEx lengkap dengan Moodboard dan Design System.",
        "GoTank Website Admin": "Dashboard administrasi komprehensif untuk GoTank, platform distribusi air PDAM. Mengelola pesanan pelanggan, sistem manajemen komplain terintegrasi, pelacakan armada real-time, serta modul analitik penjualan.",
        "GoTank Application for Public": "Aplikasi mobile untuk pelanggan PDAM Salatiga yang mendigitalisasi pemesanan air, pembayaran instan, pelacakan pengiriman real-time, serta pelaporan keluhan pelanggan yang transparan.",
        "GoTank Application for Driver": "Aplikasi khusus armada pengemudi pengiriman air PDAM Salatiga. Berfungsi sebagai kopilot digital untuk penugasan otomatis, navigasi presisi ke lokasi pelanggan, dan laporan progres pengiriman real-time.",
        "Widarto Impact": "Merombak hampir 70% isi website mulai dari pergantian tema, restrukturisasi database, hingga penambahan fitur Contact Us yang terhubung langsung ke email.",
        "Yasu Matcha": "Proyek desain website untuk produk Yasu Matcha, mencakup sesi brainstorming, rapat klien, pembuatan wireframe, hingga desain Hi-Fi.",
        "Plai Cafe": "Proyek desain website untuk kafe di Yogyakarta bernama Plai Cafe, mulai dari brainstorming, diskusi klien, wireframing, hingga desain Hi-Fi.",
        "Padelix": "Melakukan perombakan dan penyesuaian beberapa bagian antarmuka pada website Padelix sesuai permintaan klien.",
        "Nutrimate - AI Nutrition Tracker": "Meraih Juara 2 pada ITFest Web Development Competition di UMK. Website pelacak nutrisi bertenaga AI untuk memantau kebutuhan nutrisi tubuh, asupan makanan, rekomendasi makanan, dan kalori yang terbakar saat olahraga.",
      },
    },
    footer: {
      tag: "BAGIAN // 06",
      headline1: "MARI BANGUN SESUATU",
      headline2: "YANG BERDAMPAK.",
      sub: "Terbuka untuk proyek freelance, kesempatan kerja full-time, dan kolaborasi menarik lainnya.",
      emailBtn: "KIRIM PESAN // EMAIL SAYA",
      localTime: "WAKTU SISTEM LOKAL:",
      rights: "HAK CIPTA DILINDUNGI.",
      backToTop: "ATAS ↑",
    },
  },
};

export const AppProvider = ({ children }) => {
  // Default theme is 'light' as requested: "lightmode (utama) dan darkmode"
  const [theme, setTheme] = useState("light");
  const [lang, setLang] = useState("id");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("porto_theme") || "light";
    const savedLang = localStorage.getItem("porto_lang") || "id";
    setTheme(savedTheme);
    setLang(savedLang);
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("porto_theme", next);
    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleLang = () => {
    const next = lang === "en" ? "id" : "en";
    setLang(next);
    localStorage.setItem("porto_lang", next);
  };

  const t = translations[lang] || translations.id;

  return (
    <AppContext.Provider value={{ theme, toggleTheme, lang, setLang, toggleLang, t, mounted }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
