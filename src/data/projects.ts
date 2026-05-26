export interface Project {
  slug: string
  title: string
  description: string
  image: string
  tags: string[]
  links?: {
    github?: string
    live?: string
  }
}

export const projects: Project[] = [
  {
    slug: "talent-management-analysis",
    title: "Talent Management Analysis",
    description:
      "Intelligent analytical feature developed using a LLM with a Retrieval-Augmented Generation (RAG) approach to analyze data stored in the Human Resources system.",
    image: "/projects/hris-ai.jpg",
    tags: ["AI", "LLM", "RAG", "Full Stack"],
  },
  {
    slug: "human-resources",
    title: "Human Resources",
    description:
      "Digital platform developed to manage and streamline HR operations within organizations. This system helps handle employee data, recruitment process, work targets, retention analysis, leave management, and performance tracking. It also provides tools for training and development, performance appraisal, and employee feedback.",
    image: "/projects/hris.jpg",
    tags: ["Full Stack", "HR System", "Vue", "Laravel"],
  },
  {
    slug: "knowledge-management-system",
    title: "Knowledge Management System",
    description:
      "Belajar bersama Badiklat Kemhan. Knowledge Management System adalah platform pembelajaran jarak jauh dan merdeka belajar online dari Badiklat Kemhan RI, yang membantu pengajar membuat diklat dan materi sehingga siswa dapat belajar di dalamnya.",
    image: "/projects/lms.png",
    tags: ["E-Learning", "Full Stack", "Vue", "Laravel"],
  },
  {
    slug: "oriens",
    title: "Oriens",
    description:
      "OriensCRM adalah productivity tools yang membantu tim dalam mengelola proyek, tugas, dan kolaborasi. Dengan fitur-fitur seperti manajemen job, pelacakan waktu, integrasi dengan berbagai aplikasi, automation, laporan analitik, dan lainnya.",
    image: "/projects/oriens.png",
    tags: ["CRM", "Productivity", "Full Stack"],
  },
  {
    slug: "vitalmetrics",
    title: "Vitalmetrics",
    description: "Platform kalkulator BMI berbasis Internet of Things.",
    image: "/projects/vitalmetrics.png",
    tags: ["IoT", "Full Stack", "Vue"],
  },
  {
    slug: "midtown-hotel-apps",
    title: "Midtown Hotel Apps",
    description:
      "Permudah pemesanan kamar untuk warga lokal dan juga turis untuk mencari hotel yang lokasi yang strategis di Surabaya, Jakarta, Samarinda, Balikpapan, dan Sampit.",
    image: "/projects/midtown.png",
    tags: ["Mobile", "Flutter", "Hotel Booking"],
  },
  {
    slug: "aset-tanah-polda",
    title: "Aset Tanah Polda",
    description: "Sistem pengelolaan tanah polda dan wilayah.",
    image: "/projects/tanah-polda.png",
    tags: ["Web App", "Laravel", "GIS"],
  },
  {
    slug: "java-horoscope",
    title: "Java Horoscope",
    description:
      "Web scrapping dan implementasi dari situs primbon.com menggunakan express.js, puppeteer, dan vue.js.",
    image: "/projects/java-horoscope.png",
    tags: ["Web Scraping", "ExpressJS", "Vue"],
    links: { github: "https://github.com/izzaalfiansyah/java-horoscope" },
  },
  {
    slug: "fermonitor",
    title: "Fermonitor",
    description:
      "Sistem identifikasi kematangan tapai singkong melalui kadar gas berbasis Internet of Things.",
    image: "/projects/fermonitor.png",
    tags: ["IoT", "Embedded Systems"],
  },
  {
    slug: "kuybisnis",
    title: "KuyBisnis",
    description:
      "Tracking bisnis dari kelompok mahasiswa. Rencanakan kewirausahaan, kembangkan bisnis, dan ketahui hasil kegiatan bisnis berbasis web.",
    image: "/projects/kuybisnis.jpg",
    tags: ["Business", "Full Stack"],
  },
  {
    slug: "lostinfo",
    title: "LostInfo",
    description:
      "Platform informasi pencarian dan pelaporan barang hilang. Dengan aplikasi ini penyebaran informasi mengenai barang hilang dan temuan menjadi lebih efektif. Fitur unggulan aplikasi ini adalah adanya perbandingan antara barang temuan dan barang hilang sehingga pengguna lebih menemukan barang miliknya dari barang yang serupa. Disediakan juga fitur lelang apabila tidak ada yang mengeklaim barang temuan user.",
    image: "/projects/lostinfo.png",
    tags: ["Full Stack", "Laravel", "Vue"],
  },
  {
    slug: "rental-mobil",
    title: "Rental Mobil",
    description:
      "Jasa layanan penyewaan dan rental mobil. Pengguna dapat mencari, memilih, dan memesan mobil yang sesuai dengan kebutuhan tanpa harus datang ke tempat sewa secara langsung.",
    image: "/projects/rental-mobil.jpg",
    tags: ["Full Stack", "Laravel"],
  },
  {
    slug: "arsogi-group",
    title: "Arsogi Group",
    description: "Aplikasi katalog produk dan transaksi jual beli.",
    image: "/projects/arsogi.png",
    tags: ["E-Commerce", "Full Stack"],
  },
  {
    slug: "e-library",
    title: "E-Library",
    description: "Aplikasi untuk mengakses data peminjaman buku.",
    image: "/projects/e-library.png",
    tags: ["Library", "Full Stack"],
  },
  {
    slug: "pasar-online",
    title: "Pasar Online",
    description: "Pasar Online Tugas Akhir Pemrograman WEB.",
    image: "/projects/pasaronline.png",
    tags: ["E-Commerce", "PHP"],
  },
  {
    slug: "aset-desa-brebes",
    title: "Aset Desa Brebes",
    description: "Aset tanah PT MG INTERMEDIATAMA.",
    image: "/projects/asetdesa.png",
    tags: ["Web App", "Laravel"],
  },
  {
    slug: "jurnal-mengajar",
    title: "Jurnal Mengajar",
    description: "Jurnal mengajar SMKN 2 Jember.",
    image: "/projects/jurnalmengajar.png",
    tags: ["Education", "Laravel"],
  },
  {
    slug: "spp-smk-pgri-5-jember",
    title: "SPP SMK PGRI 5 Jember",
    description: "Sistem Informasi Aplikasi Pembayaran Sekolah SMK PGRI 5 Jember.",
    image: "/projects/sppsmk.png",
    tags: ["School", "Payment", "Laravel"],
  },
  {
    slug: "ppdb-sdua",
    title: "PPDB SDUA",
    description: "Aplikasi Pendaftaran Siswa Baru SD Ummu Aiman.",
    image: "/projects/ppdb.png",
    tags: ["Education", "Registration", "Laravel"],
  },
  {
    slug: "perpustakaan",
    title: "Perpustakaan",
    description: "Aplikasi E-Perpustakaan SDN Inpres Bhayangkara Kota Jayapura.",
    image: "/projects/perpustakaan.png",
    tags: ["Library", "Laravel"],
  },
  {
    slug: "siphuda",
    title: "Siphuda",
    description:
      "Sistem Inventarisasi Produk Hukum Daerah Sekretariat DPRD Kabupaten Trenggalek.",
    image: "/projects/siphuda.png",
    tags: ["Government", "Laravel"],
  },
  {
    slug: "prima-usadha-jaya",
    title: "Prima Usadha Jaya",
    description: "Aplikasi manajemen service bengkel.",
    image: "/projects/bengkel.png",
    tags: ["Workshop", "Management", "Laravel"],
  },
  {
    slug: "administrasi-desa",
    title: "Administrasi Desa",
    description: "Aplikasi perantara keluhan rakyat desa.",
    image: "/projects/administrasi.png",
    tags: ["Government", "Laravel"],
  },
  {
    slug: "tes-skripsi",
    title: "Tes Skripsi",
    description: "Aplikasi pengelolaan tes skripsi mahasiswa.",
    image: "/projects/skripsi.png",
    tags: ["Education", "Laravel"],
  },
  {
    slug: "shabab-aqiqah",
    title: "Shabab Aqiqah",
    description: "Aplikasi pengelolaan qurban & aqiqah.",
    image: "/projects/shababaqiqah.png",
    tags: ["Management", "Laravel"],
  },
  {
    slug: "rumah-ibadah",
    title: "Rumah Ibadah",
    description: "Aplikasi pencarian tempat ibadah suatu daerah.",
    image: "/projects/rumah-ibadah.png",
    tags: ["Maps", "Laravel"],
  },
  {
    slug: "absen-petugas-masjid",
    title: "Absen Petugas Masjid",
    description: "Aplikasi pengelolaan daftar hadir petugas masjid.",
    image: "/projects/absensi-masjid.png",
    tags: ["Attendance", "Laravel"],
  },
  {
    slug: "smegrima-kelulusan",
    title: "Smegrima Kelulusan",
    description: "Aplikasi cek kelulusan siswa SMK PGRI 05 Jember.",
    image: "/projects/kelulusan.png",
    tags: ["Education", "Laravel"],
  },
  {
    slug: "puskesmas",
    title: "Puskesmas",
    description: "Aplikasi pelayanan puskesmas Elly Uyo Adipura.",
    image: "/projects/rumah-sakit.png",
    tags: ["Healthcare", "Laravel"],
  },
  {
    slug: "zakat",
    title: "Zakat",
    description: "Aplikasi Manajemen Zakat Desa Ujong Gunong Rayeuk.",
    image: "/projects/zakat.png",
    tags: ["Finance", "Laravel"],
  },
  {
    slug: "direktori-biodata",
    title: "Direktori Biodata",
    description: "Aplikasi pengelolaan biodata pekerja.",
    image: "/projects/direktori.png",
    tags: ["HR", "Laravel"],
  },
  {
    slug: "pmb-uniyap",
    title: "PMB Uniyap",
    description: "Aplikasi pendaftaran mahasiswa baru Universitas Yapis Papua.",
    image: "/projects/pmb-uniyap.png",
    tags: ["Education", "Registration", "Laravel"],
  },
  {
    slug: "pengajuan-beasiswa",
    title: "Pengajuan Beasiswa",
    description: "Aplikasi pengajuan beasiswa Poltas.",
    image: "/projects/beasiswa.png",
    tags: ["Education", "Scholarship", "Laravel"],
  },
  {
    slug: "pinjam-sarana",
    title: "Pinjam Sarana",
    description: "Aplikasi peminjaman sarana sekolah.",
    image: "/projects/pinjam-sarana.png",
    tags: ["Education", "Laravel"],
  },
  {
    slug: "absensi-qrcode",
    title: "Absensi QRCode",
    description: "Aplikasi manajemen absensi berbasis QRcode.",
    image: "/projects/absensi-qrcode.png",
    tags: ["Attendance", "QR Code", "Laravel"],
  },
  {
    slug: "sewa-kamar",
    title: "Sewa Kamar",
    description: "Aplikasi Penyewaan Kamar.",
    image: "/projects/sewa-kamar.png",
    tags: ["Rental", "Laravel"],
  },
  {
    slug: "e-spp",
    title: "E-SPP",
    description: "Aplikasi pengelolaan pembayaran SPP.",
    image: "/projects/e-spp.png",
    tags: ["Payment", "School", "Laravel"],
  },
  {
    slug: "prima-store",
    title: "Prima Store",
    description: "Aplikasi market place kebutuhan siswa SMK PGRI 05 Jember.",
    image: "/projects/prima-store.png",
    tags: ["E-Commerce", "Laravel"],
  },
  {
    slug: "e-kuisioner",
    title: "E-Kuisioner",
    description: "Aplikasi pelacakan alumni mahasiswa.",
    image: "/projects/e-kuisioner.png",
    tags: ["Survey", "Alumni", "Laravel"],
  },
  {
    slug: "toko",
    title: "Toko",
    description: "Aplikasi penjualan barang toko.",
    image: "/projects/toko.png",
    tags: ["E-Commerce", "Laravel"],
  },
  {
    slug: "vicate",
    title: "Vicate",
    description: "Aplikasi manajemen sertifikat online.",
    image: "/projects/vicate.png",
    tags: ["Certificate", "Laravel"],
  },
  {
    slug: "pilkada",
    title: "Pilkada",
    description: "Aplikasi pemilihan ketua daerah.",
    image: "/projects/pilkada.png",
    tags: ["Government", "Voting", "Laravel"],
  },
]
