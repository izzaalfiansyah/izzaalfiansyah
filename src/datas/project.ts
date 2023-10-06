interface Project {
  name: string;
  description: string;
  team?: boolean;
  language: string[];
  photo: string[];
  link?: string;
}

const projects: Project[] = [
  {
    name: "Simple Whatsapp BOT",
    description:
      "simple whatsApp bot that can send messages automatically and convert images to stickers",
    team: false,
    language: ["Express"],
    photo: ["whatsapp-bot.jpg", "whatsapp-bot2.jpg"],
  },
  {
    name: "KuyBisnis",
    description:
      "Tracking bisnis dari kelompok mahasiswa. Rencanakan kewirausahaan, kembangkan bisnis, dan ketahui hasil kegiatan bisnis berbasis web",
    team: false,
    language: ["Laravel"],
    photo: [
      "kuybisnis.jpg",
      "kuybisnis2.jpg",
      "kuybisnis3.jpg",
      "kuybisnis4.jpg",
    ],
  },
  {
    name: "LostInfo",
    description:
      "Platform informasi pencarian dan pelaporan barang hilang. Dengan aplikasi ini penyebaran informasi mengenai barang hilang dan temuan menjadi lebih efektif. Fitur unggulan aplikasi ini adalah adanya perbandingan antara barang temuan dan barang hilang sehingga pengguna lebih menemukan barang miliknya dari barang yang serupa. Disediakan juga fitur lelang apabila tidak ada yang mengeklaim barang temuan user, selain itu user juga bisa melelang barang miliknya yang sudah tidak digunakan.",
    team: true,
    language: ["Laravel", "Solid", "Flutter"],
    photo: ["lostinfo.png", "lostinfo2.jpg", "lostinfo3.jpg", "lostinfo4.jpg"],
  },
  {
    name: "Rental Mobil",
    description:
      "Jasa layanan penyewaan dan rental mobil. Pengguna dapat mencari, memilih, dan memesan mobil yang sesuai dengan kebutuhan tanpa harus datang ke tempat sewa secara langsung",
    team: false,
    language: ["Laravel"],
    photo: ["rental-mobil.jpg", "rental-mobil2.jpg", "rental-mobil3.jpg"],
  },
  {
    name: "Arsogi Group",
    description: "Aplikasi katalog produk dan transaksi jual beli",
    link: "http://arsogigrup.com",
    team: false,
    language: ["Laravel", "Svelte"],
    photo: ["arsogi.png", "arsogi2.png", "arsogi3.png"],
  },
  {
    name: "E-Library",
    description: "Aplikasi untuk mengakses data peminjaman buku",
    team: false,
    language: ["Laravel", "Vue"],
    photo: ["e-library.png", "e-library2.png", "e-library3.png"],
  },
  {
    name: "Pasar Online",
    description: "Pasar Online Tugas Akhir Pemrograman WEB",
    team: true,
    language: ["Codeigniter"],
    photo: ["pasaronline.png", "pasaronline2.png"],
  },
  {
    name: "Aset Desa Brebes",
    description: "Aset tanah PT MG INTERMEDIATAMA",
    link: "",
    team: true,
    language: ["Laravel", "Vue"],
    photo: ["asetdesa.png", "asetdesa2.png", "asetdesa3.png", "asetdesa4.png"],
  },
  {
    name: "Jurnal Mengajar",
    description: "Jurnal mengajar SMKN 2 Jember",
    link: "",
    team: false,
    language: ["Laravel", "React"],
    photo: ["jurnalmengajar.png", "jurnalmengajar2.png", "jurnalmengajar3.png"],
  },
  {
    name: "SPP SMK PGRI 5 Jember",
    description:
      "Sistem Informasi Aplikasi Pembayaran Sekolah SMK PGRI 5 Jember",
    team: true,
    language: ["CodeIgniter"],
    photo: ["sppsmk.png", "sppsmk2.png"],
  },
  {
    name: "Fopegram",
    description: "Aplikasi portofolio konsultan IT",
    link: "https://fopegram.id",
    team: true,
    language: ["Laravel", "Svelte"],
    photo: ["fopegram.png", "fopegram2.png", "fopegram3.png"],
  },
  {
    name: "PPDB SDUA",
    description: "Aplikasi Pendaftaran Siswa Baru SD Ummu Aiman",
    team: true,
    language: ["CodeIgniter"],
    photo: ["ppdb.png", "ppdb2.png"],
  },
  {
    name: "Perpustakaan",
    description: "Aplikasi E-Perpustakaan SDN Inpres Bhayangkara Kota Jayapura",
    team: true,
    language: ["CodeIgniter"],
    photo: ["perpustakaan.png", "perpustakaan2.png"],
  },
  {
    name: "Siphuda",
    description:
      "Sistem Inventarisasi Produk Hukum Daerah Sekretariat DPRD Kabupaten Trenggalek",
    link: "https://siphuda.com",
    language: ["Laravel", "Svelte"],
    photo: ["siphuda.png"],
  },
  {
    name: "Prima Usadha Jaya",
    description: "Aplikasi manajemen service bengkel",
    link: "https://primausadha.com",
    language: ["Laravel", "Svelte"],
    photo: ["bengkel.png", "bengkel2.png"],
  },
  {
    name: "Administrasi Desa",
    description: "Aplikasi perantara keluhan rakyat desa",
    link: "",
    language: ["CodeIgniter"],
    photo: ["administrasi.png"],
  },
  {
    name: "Tes Skripsi",
    description: "Aplikasi pengelolaan tes skripsi mahasiswa",
    team: true,
    link: "https://e-mta.fkm.untad.ac.id/",
    language: ["CodeIgniter"],
    photo: ["skripsi.png"],
  },
  {
    name: "Shabab Aqiqah",
    description: "Aplikasi pengelolaan qurban & aqiqah",
    link: "http://shababaqiqah.com/",
    language: ["CodeIgniter"],
    photo: ["shababaqiqah.png"],
  },
  {
    name: "Rumah Ibadah",
    description: "Aplikasi pencarian tempat ibadah suatu daerah",
    link: "",
    language: ["CodeIgniter", "React"],
    photo: ["rumah-ibadah.png"],
  },
  {
    name: "Absen Petugas Masjid",
    description: "Aplikasi pengelolaan daftar hadir petugas masjid",
    link: "",
    language: ["Laravel", "React"],
    photo: ["absensi-masjid.png"],
  },
  {
    name: "Smegrima Kelulusan",
    description: "Aplikasi cek kelulusan siswa SMK PGRI 05 Jember",
    team: true,
    link: "https://esemkaprima.com/kelulusan",
    language: ["CodeIgniter"],
    photo: ["kelulusan.png", "kelulusan2.png"],
  },
  {
    name: "Puskesmas",
    description: "Aplikasi pelayanan puskesmas Elly Uyo Adipura",
    link: "",
    language: ["CodeIgniter"],
    photo: ["rumah-sakit.png"],
  },
  {
    name: "Zakat",
    description: "Aplikasi Manajemen Zakat Desa Ujong Gunong Rayeuk",
    link: "",
    language: ["CodeIgniter"],
    photo: ["zakat.png"],
  },
  {
    name: "Direktori Biodata",
    description: "Aplikasi pengelolaan biodata pekerja",
    link: "",
    language: ["Codeigniter"],
    photo: ["direktori.png"],
  },
  {
    name: "PMB Uniyap",
    description: "Aplikasi pendaftaran mahasiswa baru Universitas Yapis Papua",
    link: "https://pmb-uniyap.com",
    language: ["Laravel", "Vue"],
    photo: ["pmb-uniyap.png", "pmb-uniyap2.png"],
  },
  {
    name: "Pengajuan Beasiswa",
    description: "Aplikasi pengajaun beasiswa Poltas",
    link: "",
    language: ["CodeIgniter"],
    photo: ["beasiswa.png"],
  },
  {
    name: "Pinjam Sarana",
    description: "Aplikasi peminjaman sarana sekolah",
    link: "",
    language: ["CodeIgniter"],
    photo: ["pinjam-sarana.png"],
  },
  {
    name: "Absensi QRCode",
    description: "Aplikasi manajemen absensi berbasis QRcode",
    link: "",
    language: ["CodeIgniter"],
    photo: ["absensi-qrcode.png"],
  },
  {
    name: "Sewa Kamar",
    description: "Aplikasi Penyewaan Kamar",
    link: "",
    language: ["CodeIgniter", "Vue"],
    photo: ["sewa-kamar.png", "sewa-kamar2.png"],
  },
  {
    name: "E-SPP",
    description: "Aplikasi pengelolaan pembayaran SPP",
    link: "",
    language: ["CodeIgniter"],
    photo: ["e-spp.png"],
  },
  {
    name: "Prima Store",
    description: "Aplikasi market place kebutuhan siswa SMK PGRI 05 Jember",
    link: "",
    team: true,
    language: ["CodeIgniter"],
    photo: [
      "prima-store.png",
      "prima-store2.png",
      "prima-store3.png",
      "prima-store4.png",
    ],
  },
  {
    name: "E-Kuisioner",
    description: "Aplikasi pelacakan alumni mahasiswa",
    link: "http://e-kuesioner.com",
    language: ["CodeIgniter"],
    photo: ["e-kuisioner.png"],
  },
  {
    name: "Toko",
    description: "Aplikasi penjualan barang toko",
    link: "",
    language: ["CodeIgniter"],
    photo: ["toko.png"],
  },
  {
    name: "Vicate",
    description: "Aplikasi manajemen sertifikat online",
    link: "http://vicate.org",
    language: ["CodeIgniter"],
    photo: ["vicate.png", "vicate2.png"],
  },
  {
    name: "Pilkada",
    description: "Aplikasi pemilihan ketua daerah",
    link: "",
    language: ["CodeIgniter"],
    photo: ["pilkada.png", "pilkada2.png"],
  },
];

export default projects;
