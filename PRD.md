-------------------------------------- USERFLOW ------------------------------------

[1. Landing / Start Screen (Ala Menu Game)]
       │
       ├──► Klik "Mulai Masak" (Tanpa login ribet di awal / Guest Mode)
       │
[2. Quick Setup: Profil Dapur Anak Kos (Hanya 10 detik)]
       │   ├── Pilih Alat Masak yang Punya: [Rice Cooker] [Kompor] [Teflon] [Tanpa Alat]
       │   └── Set Target Hemat / Mode Tanggal Tua (Opsional)
       │
[3. Main Kitchen Hub (Dapur Utama - Tampilan Meja & Panci)]
       │
       ├─────────────────────────────┬─────────────────────────────┐
       ▼                             ▼                             ▼
[Jalur A: Mode Kulkas]        [Jalur B: Mode Budget]        [Jalur C: Mode Gabut/Sandbox]
"Punya bahan apa?"            "Punya uang berapa?"          "Eksperimen bebas"
• Ketik / Klik cepat bahan    • Geser slider budget         • Drag & drop bahan acak
• Bahan terbang ke panci        (misal: Rp5rb - Rp30rb)       ke meja untuk gabung resep
• Tandai bahan hampir busuk   • Pilih jumlah porsi
       │                             │                             │
       └─────────────────────────────┼─────────────────────────────┘
                                     ▼
[4. Hasil Rekomendasi Resep (Pop-up Kartu Menu)]
       │   ├── Kategori 1: "Langsung Masak!" (100% bahan & budget cocok)
       │   ├── Kategori 2: "Kurang Dikit!" (Tampil info: "Tambah Rp2.000 beli Telur")
       │   └── Prioritas: Resep yang menyelamatkan bahan hampir busuk
       │
[5. Detail Resep & Eksekusi (Tampilan Buku Resep / Cookbook)]
       │   ├── Info: Estimasi biaya per porsi, alat masak, langkah singkat
       │   ├── Aksi 1: [Simpan ke Cookbook] (Bookmark favorit)
       │   ├── Aksi 2: [Masuk Daftar Belanja] (Jika ada bahan kurang)
       │   └── Aksi 3: [Selesai Masak!] ──► Trigger kalkulasi uang terselamatkan!
       │
[6. Impact & Cookbook Dashboard]
       └── Melihat resep tersimpan, daftar belanja warung, & total uang yang dihemat.

----------------------------------- PRD --------------------------------------------
Product Requirements Document (PRD)
Nama Produk: DapurKos (Tentatif)Tema: Optimasi Keuangan dan Gaya Hidup
Target Pengguna: Mahasiswa / Anak Kos
Konsep Visual: Gamifikasi Dapur Interaktif (2D Tabletop / Cooking Game Style)

1. Latar Belakang & Tujuan Produk
Mahasiswa sering mengalami pemborosan akibat dua hal: membeli bahan makanan yang berakhir membusuk karena bingung mengolahnya (food waste), dan tingginya pengeluaran pesan-antar makanan saat malas memasak.

Aplikasi ini bertujuan membantu anak kos mengoptimalkan anggaran makan harian dan menekan limbah makanan melalui pencarian resep berbasis bahan sisa serta batas anggaran, yang dikemas dalam antarmuka interaktif menyerupai permainan memasak.

2. Alur Pengguna (User Flow)
Landing Screen (Guest Session) ➔ Kitchen Setup (Alat & Mode Hemat) ➔ Main Kitchen Hub (Input Bahan / Budget / Sandbox) ➔ Hasil Rekomendasi Resep (Langsung Masak vs Kurang Dikit) ➔ Detail Resep (Cookbook) ➔ Eksekusi (Simpan / Daftar Belanja / Selesai Masak) ➔ Impact Dashboard (Total Uang Hemat)

3. Spesifikasi Fitur Utama (Functional Requirements)
F-01. Landing Screen & Quick Guest Session
Pintu masuk aplikasi bergaya game dapur dengan tombol utama "Mulai Masak". Sistem otomatis membuat sesi lokal via localStorage tanpa wajib login atau registrasi agar pengguna bisa langsung mengakses fitur utama sambil tetap menyimpan riwayat resep dan data penghematan mereka.

F-02. Kitchen Setup & Constraint Filter (Profil Dapur Anak Kos)
Jendela pengaturan singkat di awal di mana pengguna memilih alat masak yang dimiliki (rice cooker, kompor, teflon, atau tanpa alat) serta opsi mengaktifkan "Mode Tanggal Tua". Sistem mengunci preferensi ini untuk menyaring resep agar sesuai fasilitas kos dan membatasi modal bahan maksimal Rp10.000 per porsi saat mode hemat aktif.

F-03. Interactive Pantry & Budget Engine ("What I Have" & "What I Can Afford")
Ruang kerja utama berbentuk meja dapur dan panci interaktif. Pengguna dapat mengeklik cepat ikon bahan makanan (dilengkapi penanda "Segera Busuk" untuk bahan sisa) agar terbang masuk ke panci, atau menggeser slider anggaran harian (Rp5.000–Rp50.000). Sistem otomatis mencocokkan kombinasi resep dan memprioritaskan bahan yang hampir kedaluwarsa.

F-04. Sandbox / Alchemy Mode (Mode Eksplorasi Bebas)
Mode permainan drag-and-drop di atas meja dapur di mana pengguna dapat menggabungkan berbagai ikon bahan lokal secara bebas untuk bereksperimen menemukan resep masakan baru yang unik.

F-05. Smart Recipe Matching & Gap Calculator
Menampilkan hasil rekomendasi resep dalam dua kategori: "Langsung Masak" (100% bahan/budget cocok) dan "Kurang Dikit". Pada kategori kedua, sistem menghitung selisih bahan yang kurang beserta estimasi harga belinya di warung (contoh: "Cukup tambah Rp2.000 untuk beli 1 butir telur").

F-06. Interactive Cookbook & Smart Shopping List
Tampilan detail langkah memasak ala buku resep klasik dengan tiga tombol aksi: "Simpan ke Cookbook" untuk mem-bookmark resep favorit, "Masuk Daftar Belanja" untuk mencatat bahan kurang beserta total estimasi biayanya, dan "Selesai Masak" sebagai konfirmasi eksekusi.

F-07. Financial & Zero-Waste Impact Tracker
Dasbor ringkasan yang mengakumulasi total rupiah yang berhasil dihemat setiap kali pengguna menekan tombol "Selesai Masak", dihitung dari selisih biaya masak sendiri dibanding beli makan luar serta nilai bahan hampir busuk yang diselamatkan dari food waste.

4. Batasan Teknis & Ruang Lingkup MVP (Scope)
Penyimpanan Data: Menggunakan localStorage pada peramban untuk menyimpan profil alat masak, resep favorit (Cookbook), daftar belanja, dan akumulasi nominal penghematan.

Dataset Awal (Curated Dummy Data): Mencakup 20–25 bahan pokok lokal ramah kantong mahasiswa (telur, tempe, tahu, mi instan, sarden, sawi, dll.) beserta estimasi harga satuan, serta 15–20 resep praktis anak kos.

Aset Visual: Menggunakan gaya ilustrasi 2D flat-vector dengan garis tepi (outline) tebal yang konsisten untuk ikon bahan, panci, meja taplak kotak-kotak, dan buku resep.
