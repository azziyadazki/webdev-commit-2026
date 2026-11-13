# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## DapurKos

**Smart Meal Planning & Student Financial Optimization**

  Informasi         Detail
  ----------------- -------------------------------
  Dokumen           Product Requirements Document
  Versi             1.0
  Tanggal           13 November 2026
  Status            Draft -- MVP
  Platform          Web Application
  Target pengguna   Mahasiswa / anak kos
  Pasar awal        Yogyakarta

------------------------------------------------------------------------

## 1. Product Overview

### 1.1 Product Background

Mahasiswa, khususnya yang tinggal di kos, sering menghadapi kesulitan
dalam mengatur pengeluaran makanan sehari-hari. Keterbatasan waktu,
kemampuan memasak, peralatan dapur, dan informasi resep ekonomis membuat
mahasiswa cenderung membeli makanan di luar.

Memasak sendiri dapat menjadi alternatif yang lebih hemat apabila
dilakukan dengan perencanaan yang tepat. Namun, pengguna perlu
mengetahui menu yang sesuai dengan budget, bahan dan alat yang tersedia,
serta jumlah bahan yang perlu dibeli.

DapurKos dikembangkan sebagai platform web yang membantu mahasiswa
menemukan resep ekonomis dan menyusun rencana memasak hingga tujuh hari
dengan bantuan AI.

### 1.2 Product Vision

Menjadi platform pendamping gaya hidup mahasiswa yang membantu mengelola
pengeluaran makanan secara lebih cerdas melalui perencanaan masakan yang
ekonomis, praktis, dan sesuai kebutuhan individu.

### 1.3 Product Objectives

1.  Membantu mahasiswa menemukan resep yang sesuai dengan budget.
2.  Membantu mahasiswa merencanakan menu memasak untuk maksimal tujuh
    hari.
3.  Mengoptimalkan penggunaan bahan makanan dan peralatan yang tersedia.
4.  Menampilkan estimasi pengeluaran serta potensi penghematan dari
    memasak sendiri.
5.  Mendorong kebiasaan memasak yang lebih terencana dan efisien.

### 1.4 Target Audience

**Pengguna utama:** - Mahasiswa yang tinggal di kos. - Mahasiswa dengan
anggaran makan terbatas. - Mahasiswa yang ingin belajar memasak. -
Mahasiswa yang ingin mengatur pengeluaran makanan secara mandiri.

**Fokus geografis awal:** Yogyakarta, khususnya kawasan tempat tinggal
mahasiswa seperti Pogung, Seturan, Gejayan, Babarsari, dan area sekitar
kampus.

------------------------------------------------------------------------

## 2. Problem Statement

Mahasiswa memiliki kebutuhan makan sehari-hari, tetapi sering kesulitan
menemukan alternatif makanan yang hemat, praktis, dan sesuai dengan
kondisi tempat tinggal mereka.

  -----------------------------------------------------------------------
  Permasalahan                        Deskripsi
  ----------------------------------- -----------------------------------
  Budget terbatas                     Sulit menentukan makanan yang
                                      sesuai dengan anggaran.

  Kurangnya ide masakan               Bingung menentukan menu makanan
                                      setiap hari.

  Keterbatasan peralatan              Tidak semua mahasiswa memiliki
                                      peralatan dapur lengkap.

  Food waste                          Bahan makanan sering tersisa atau
                                      tidak terpakai.

  Kurangnya perencanaan               Pembelian bahan makanan tidak
                                      terorganisasi.

  Tidak mengetahui potensi hemat      Tidak mengetahui perbandingan biaya
                                      memasak dan membeli makanan.
  -----------------------------------------------------------------------

### Proposed Solution

Menyediakan rekomendasi resep berdasarkan budget, bahan, dan peralatan
yang tersedia, serta fitur AI Meal Planner untuk menyusun rencana
memasak secara otomatis.

------------------------------------------------------------------------

## 3. Product Scope

Produk memiliki dua fitur utama:

### 3.1 Recipe Recommendation

Halaman utama yang menampilkan berbagai rekomendasi resep ekonomis untuk
mahasiswa. Pengguna dapat membuka detail resep untuk melihat bahan,
peralatan, langkah memasak, estimasi biaya, dan potensi penghematan.

### 3.2 AI Meal Planner

Fitur unggulan yang memungkinkan pengguna membuat rencana memasak selama
maksimal tujuh hari berdasarkan budget, ketersediaan bahan, peralatan,
dan frekuensi memasak.

------------------------------------------------------------------------

## 4. Functional Requirements

### 4.1 Homepage -- Recipe Recommendation

**Deskripsi:** Halaman utama menjadi tempat pengguna menemukan resep
masakan ekonomis.

**Kebutuhan fungsional:** - Menampilkan judul utama **"Resep
Rekomendasi"**. - Menampilkan kumpulan resep dalam bentuk card. - Setiap
card menampilkan: - Gambar masakan. - Nama resep. - Estimasi biaya per
porsi. - Estimasi waktu memasak. - Kategori masakan. - Tingkat
kesulitan. - Pengguna dapat memilih resep untuk melihat detailnya. -
Menyediakan navigasi menuju AI Meal Planner.

#### Recipe Detail

Ketika pengguna memilih resep, sistem menampilkan: 1. Gambar masakan. 2.
Nama dan deskripsi resep. 3. Estimasi waktu memasak. 4. Jumlah porsi. 5.
Peralatan yang dibutuhkan. 6. Daftar bahan dan kuantitasnya. 7. Estimasi
harga setiap bahan. 8. Total estimasi biaya memasak. 9. Langkah-langkah
memasak. 10. Estimasi harga apabila membeli makanan serupa. 11. Potensi
penghematan.

**Saving Calculation:**

`Total Penghematan = Harga Makanan di Luar - Biaya Memasak`

Contoh: - Harga nasi telur di luar: Rp15.000. - Estimasi biaya memasak:
Rp8.000. - Potensi penghematan: Rp7.000.

Perbandingan harus menggunakan jumlah porsi yang sama. Biaya memasak
dihitung berdasarkan bahan yang benar-benar digunakan, bukan seluruh
harga pembelian kemasan.

### 4.2 AI Meal Planner

**Deskripsi:** Fitur utama yang membantu pengguna menyusun rencana
memasak berdasarkan kebutuhan dan kemampuan finansial.

#### Step 1 -- Kitchen Inventory

Sistem menanyakan peralatan dan bahan yang dimiliki pengguna.

**A. Cooking Equipment**

Contoh: - Rice cooker. - Kompor. - Wajan. - Panci. - Pisau. - Talenan. -
Microwave.

Pengguna dapat memilih lebih dari satu peralatan.

**B. Available Ingredients**

Contoh: - Beras. - Telur. - Tempe. - Tahu. - Bawang merah. - Bawang
putih. - Kecap. - Minyak goreng.

Pengguna dapat memasukkan bahan secara manual. Setiap bahan dapat
memiliki informasi kuantitas dan satuan agar sistem dapat memperkirakan
bahan yang masih perlu dibeli.

#### Step 2 -- Planning Duration

Sistem menanyakan durasi perencanaan memasak.

Ketentuan: - Minimal: 1 hari. - Maksimal: 7 hari.

Sistem juga menanyakan frekuensi memasak setiap hari, misalnya: - 1 kali
sehari. - 2 kali sehari. - 3 kali sehari.

`Total kebutuhan resep = Jumlah hari × Frekuensi memasak per hari`

#### Step 3 -- Budget Configuration

Sistem meminta pengguna menentukan total budget untuk seluruh periode
perencanaan.

Contoh: **Rp150.000**.

Budget menjadi batas maksimal estimasi pengeluaran untuk seluruh rencana
memasak.

#### Step 4 -- AI Recipe Generation

Setelah seluruh informasi terkumpul, AI menghasilkan rekomendasi resep
berdasarkan: - Ketersediaan peralatan. - Bahan yang dimiliki. - Durasi
perencanaan. - Frekuensi memasak. - Total budget. - Harga bahan
makanan. - Variasi menu. - Kebutuhan nutrisi dasar.

AI menampilkan resep dalam bentuk swipeable card.

**Recipe Card Information:** - Gambar masakan. - Nama masakan. -
Deskripsi singkat. - Estimasi biaya. - Waktu memasak. - Bahan utama. -
Potensi penghematan.

**Swipe Interaction:** - **Swipe Right:** Menambahkan resep ke daftar
pilihan. - **Swipe Left:** Melewati resep. - **Detail Button:** Melihat
informasi lengkap resep sebelum memilih.

Sistem terus memberikan rekomendasi sampai kebutuhan jumlah resep
terpenuhi. Apabila resep yang tersedia tidak cukup atau budget tidak
memungkinkan, sistem memberikan notifikasi dan alternatif penyesuaian.

#### Step 5 -- Budget Optimization

Sistem mengevaluasi seluruh resep yang dipilih.

Apabila total pengeluaran melebihi budget, AI dapat memberikan
alternatif: - Mengganti bahan dengan bahan yang lebih ekonomis. -
Menggunakan bahan yang sudah tersedia. - Mengganti resep dengan resep
lain. - Menggunakan bahan yang sama untuk beberapa menu. - Menyesuaikan
jumlah porsi.

Pengguna tetap memiliki kendali untuk menerima atau menolak alternatif
tersebut.

#### Step 6 -- AI Planning Summary

Setelah pengguna selesai memilih resep, sistem menampilkan ringkasan: -
Jumlah resep terpilih. - Total estimasi pengeluaran. - Total budget. -
Sisa budget. - Total potensi penghematan. - Daftar bahan yang perlu
dibeli. - Bahan yang sudah tersedia. - Ringkasan menu selama periode
perencanaan.

Pengguna dapat mengonfirmasi rencana atau kembali mengubah pilihannya.

#### Step 7 -- Meal Plan Result

Sistem menghasilkan tabel perencanaan memasak berdasarkan hari dan waktu
makan.

Contoh struktur:

  Hari     Pagi         Siang            Malam
  -------- ------------ ---------------- -------------
  Senin    Nasi telur   Tumis tempe      Sayur sop
  Selasa   Nasi kecap   Ayam teriyaki    Tahu crispy
  Rabu     Nasi telur   Tumis kangkung   Orek tempe

Tabel menyesuaikan frekuensi memasak yang dipilih pengguna.

Setiap menu dapat diklik untuk membuka popup atau modal detail resep.

**Recipe Modal:** - Gambar dan nama masakan. - Peralatan yang
dibutuhkan. - Daftar bahan dan kuantitas. - Estimasi biaya. - Langkah
memasak. - Estimasi harga makanan di luar. - Potensi penghematan.

Pengguna dapat menyimpan meal plan tersebut.

#### Step 8 -- Homepage Integration

Setelah meal plan berhasil disimpan, sistem mengarahkan pengguna kembali
ke homepage.

Homepage memiliki section tambahan bernama **"Meal Plan Saya"**.

Section ini menampilkan: - Nama atau periode meal plan. - Tanggal
perencanaan. - Jumlah hari. - Total estimasi pengeluaran. - Total
potensi penghematan. - Progress memasak.

Pengguna dapat membuka kembali meal plan dan melihat seluruh resep di
dalamnya.

------------------------------------------------------------------------

## 5. Non-Functional Requirements

### 5.1 Performance

-   Homepage memiliki target waktu loading maksimal 3 detik pada kondisi
    jaringan normal.
-   Navigasi antarhalaman berjalan responsif.
-   Proses AI memiliki loading state dan feedback yang jelas.
-   Gambar menggunakan optimasi ukuran dan format.

### 5.2 Responsive Design

-   Mendukung desktop, tablet, dan mobile.
-   Tampilan mobile menjadi prioritas karena target pengguna banyak
    mengakses melalui smartphone.

### 5.3 Security

-   Password pengguna harus disimpan dalam bentuk hash.
-   Data pengguna hanya dapat diakses oleh pemilik akun.
-   API key AI tidak boleh diekspos di frontend.
-   Validasi dilakukan di sisi frontend dan backend.

### 5.4 Reliability

-   Meal plan yang telah disimpan tidak hilang ketika pengguna melakukan
    refresh.
-   Sistem memberikan penanganan ketika AI gagal menghasilkan
    rekomendasi.
-   Perhitungan budget dilakukan oleh backend, bukan hanya mengandalkan
    hasil teks AI.

------------------------------------------------------------------------

## 6. AI Requirements

AI merupakan komponen utama pada fitur Meal Planner.

### 6.1 AI Responsibilities

1.  Menghasilkan rekomendasi resep berdasarkan bahan yang tersedia.
2.  Memastikan resep sesuai dengan peralatan pengguna.
3.  Memperhatikan budget pengguna.
4.  Menghindari rekomendasi resep yang terlalu repetitif.
5.  Memberikan alternatif bahan.
6.  Membantu mengoptimalkan penggunaan bahan.
7.  Menyusun rekomendasi menu selama periode tertentu.

### 6.2 AI Constraints

-   AI tidak boleh menjadi satu-satunya sumber data harga.
-   Harga bahan harus berasal dari database harga yang dikelola sistem.
-   AI bertugas melakukan pemilihan dan penyusunan resep berdasarkan
    data tersebut.
-   AI tidak boleh mengklaim resep berada dalam budget apabila
    perhitungan backend menunjukkan sebaliknya.

### 6.3 Recommended AI Output

AI sebaiknya menghasilkan structured JSON agar mudah diproses oleh
backend dan frontend.

Contoh:

``` json
{
  "recipe_name": "Tumis Tempe Kecap",
  "ingredients": [
    {
      "name": "Tempe",
      "quantity": 100,
      "unit": "gram"
    },
    {
      "name": "Kecap",
      "quantity": 1,
      "unit": "sendok makan"
    }
  ],
  "equipment": ["Wajan", "Spatula"],
  "estimated_cost": 8000,
  "cooking_time": 15,
  "difficulty": "easy",
  "instructions": [
    "Potong tempe.",
    "Goreng hingga matang.",
    "Tambahkan kecap dan bumbu."
  ]
}
```

Angka biaya pada contoh hanya ilustrasi. Backend harus melakukan
validasi ulang menggunakan database harga.

------------------------------------------------------------------------

## 7. Data Requirements

Sistem membutuhkan beberapa jenis data utama.

### 7.1 User Data

-   User ID.
-   Nama.
-   Email.
-   Password hash.
-   Tanggal registrasi.

### 7.2 Recipe Data

-   Recipe ID.
-   Nama resep.
-   Deskripsi.
-   Gambar.
-   Kategori.
-   Waktu memasak.
-   Jumlah porsi.
-   Tingkat kesulitan.
-   Daftar bahan.
-   Daftar peralatan.
-   Instruksi memasak.

### 7.3 Ingredient Data

-   Ingredient ID.
-   Nama bahan.
-   Satuan.
-   Harga referensi.
-   Harga per satuan.
-   Kategori.
-   Tanggal pembaruan harga.

### 7.4 Meal Plan Data

-   Meal Plan ID.
-   User ID.
-   Tanggal mulai.
-   Durasi.
-   Frekuensi memasak.
-   Total budget.
-   Total estimasi biaya.
-   Total estimasi penghematan.
-   Status meal plan.

### 7.5 Meal Plan Recipe Data

-   Meal Plan ID.
-   Recipe ID.
-   Hari keberapa.
-   Waktu makan.
-   Jumlah porsi.
-   Estimasi biaya.

------------------------------------------------------------------------

## 8. User Flow

### Main Flow

1.  Pengguna membuka homepage.
2.  Pengguna melihat rekomendasi resep.
3.  Pengguna dapat membuka detail resep atau memulai AI Meal Planner.
4.  Pengguna mengisi informasi peralatan dan bahan.
5.  Pengguna menentukan durasi memasak.
6.  Pengguna menentukan frekuensi memasak.
7.  Pengguna memasukkan budget.
8.  AI menghasilkan rekomendasi resep.
9.  Pengguna melakukan swipe untuk memilih resep.
10. Sistem mengevaluasi budget.
11. AI memberikan alternatif jika diperlukan.
12. Pengguna mengonfirmasi pilihan.
13. Sistem menghasilkan meal plan.
14. Pengguna menyimpan meal plan.
15. Meal plan muncul pada homepage.

------------------------------------------------------------------------

## 9. Success Metrics (KPIs)

Keberhasilan produk diukur melalui beberapa indikator.

  -----------------------------------------------------------------------
  KPI                                 Measurement
  ----------------------------------- -----------------------------------
  Meal Plan Creation Rate             Persentase pengguna yang berhasil
                                      membuat meal plan.

  Recipe Selection Rate               Jumlah resep yang dipilih
                                      dibandingkan resep yang
                                      ditampilkan.

  Meal Plan Completion Rate           Persentase meal plan yang
                                      diselesaikan pengguna.

  Average Estimated Savings           Rata-rata potensi penghematan per
                                      meal plan.

  User Retention                      Persentase pengguna yang kembali
                                      menggunakan platform.

  AI Recommendation Acceptance        Persentase rekomendasi AI yang
                                      diterima pengguna.
  -----------------------------------------------------------------------

Target angka KPI ditetapkan setelah pengujian MVP dan pengumpulan data
pengguna awal.

------------------------------------------------------------------------

## 10. MVP Scope

Untuk menghindari development yang terlalu kompleks pada tahap awal,
fitur dibagi menjadi beberapa prioritas.

### Must Have (P0)

-   Homepage.
-   Rekomendasi resep.
-   Detail resep.
-   Estimasi biaya memasak.
-   Estimasi penghematan.
-   AI Meal Planner.
-   Input peralatan dan bahan.
-   Input durasi dan frekuensi memasak.
-   Input budget.
-   AI recipe generation.
-   Swipe interaction.
-   Budget validation.
-   Meal plan summary.
-   Meal plan result.
-   Penyimpanan meal plan.

### Should Have (P1)

-   Autentikasi pengguna.
-   Daftar meal plan sebelumnya.
-   Daftar belanja otomatis.
-   Progress memasak.
-   Alternatif bahan.
-   Filter kategori resep.
-   Penggunaan sisa bahan dari resep sebelumnya.

### Could Have (P2)

-   Integrasi harga bahan dari toko atau pasar lokal.
-   Rekomendasi berdasarkan preferensi makanan.
-   Kalkulasi nutrisi.
-   Notifikasi jadwal memasak.
-   Fitur berbagi meal plan.

### Won't Have (Initial MVP)

-   Pemesanan bahan makanan secara langsung.
-   Integrasi pembayaran.
-   Marketplace penjual makanan.
-   Social media atau komunitas memasak.
-   Pelacakan keuangan keseluruhan pengguna.

------------------------------------------------------------------------

## 11. Risks & Mitigation

  -----------------------------------------------------------------------
  Risk                                Mitigation
  ----------------------------------- -----------------------------------
  Harga bahan tidak akurat            Menggunakan database harga dengan
                                      tanggal pembaruan.

  AI menghasilkan resep tidak         Menggunakan database resep
  realistis                           terverifikasi dan validasi backend.

  Rekomendasi melebihi budget         Melakukan perhitungan sebelum resep
                                      ditampilkan.

  Pengguna tidak memiliki alat        Menjadikan ketersediaan peralatan
  tertentu                            sebagai constraint.

  Resep terlalu repetitif             Menambahkan sistem variasi dan
                                      penggunaan bahan bersama.

  Pengguna tidak menyelesaikan meal   Menyediakan UI sederhana dan proses
  plan                                interaktif.

  Estimasi penghematan tidak sesuai   Menggunakan perbandingan porsi dan
  kenyataan                           komponen biaya yang konsisten.
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 12. Definition of Done

MVP dinyatakan siap untuk diuji ketika:

1.  Seluruh halaman utama dapat diakses dengan baik.
2.  Pengguna dapat melihat detail resep.
3.  Pengguna dapat membuat meal plan maksimal tujuh hari.
4.  Sistem dapat menerima input bahan, peralatan, frekuensi, dan budget.
5.  AI dapat menghasilkan rekomendasi resep sesuai constraint.
6.  Swipe interaction berjalan sesuai fungsinya.
7.  Sistem dapat menghitung total pengeluaran dan sisa budget.
8.  Sistem dapat menghasilkan meal plan berdasarkan pilihan pengguna.
9.  Pengguna dapat membuka detail setiap resep.
10. Meal plan dapat disimpan dan ditampilkan kembali pada homepage.
11. Seluruh fitur utama dapat digunakan pada desktop dan mobile.

------------------------------------------------------------------------

## 13. Product Roadmap

### Phase 1 -- Foundation

-   UI/UX Design.
-   Database Design.
-   Recipe Database.
-   Homepage.
-   Recipe Detail.

### Phase 2 -- Core Development

-   AI Meal Planner.
-   Kitchen Inventory.
-   Budget Configuration.
-   Recipe Generation.
-   Swipe Interaction.

### Phase 3 -- Optimization

-   Budget Validation.
-   Ingredient Substitution.
-   Meal Plan Summary.
-   Meal Plan Result.
-   Homepage Integration.

### Phase 4 -- Testing & Release

-   Functional Testing.
-   AI Output Testing.
-   Responsive Testing.
-   User Acceptance Testing.
-   MVP Release.

------------------------------------------------------------------------

## 14. Product Success Vision

Produk ini diharapkan mampu mengubah cara mahasiswa dalam mengelola
pengeluaran makanan.

Tidak hanya memberikan rekomendasi makanan murah, tetapi membantu
pengguna mengambil keputusan yang lebih baik mengenai apa yang dimasak,
berapa biaya yang diperlukan, bahan apa yang harus dibeli, dan berapa
potensi uang yang dapat dihemat.

**Core Product Value:**

> Eat Better, Spend Smarter, Live Better.

------------------------------------------------------------------------

## 15. Catatan Strategis Product Manager

### 15.1 Gunakan Hybrid Approach untuk AI

Jangan menjadikan AI sebagai sumber utama resep dan harga. Gunakan
pendekatan:

**Recipe Database + AI Recommendation + Backend Calculation**

Alurnya: 1. Recipe Database menyimpan resep, bahan, takaran, alat, dan
instruksi. 2. AI Recommendation Engine memilih resep berdasarkan
kebutuhan pengguna. 3. Backend Calculation memvalidasi bahan, harga,
budget, dan penghematan. 4. Meal Plan Result menampilkan rencana memasak
yang sudah tervalidasi.

Alasannya: - AI bisa menghasilkan harga yang tidak akurat. - AI bisa
merekomendasikan bahan yang sebenarnya tidak tersedia. - Perhitungan
budget harus konsisten. - Database membuat rekomendasi lebih mudah
dikontrol.

### 15.2 Bedakan Total Harga Belanja dan Biaya Bahan yang Digunakan

Contoh: - Harga satu kemasan telur: Rp30.000. - Harga telur yang
digunakan: Rp3.000. - Biaya bahan lain yang digunakan: Rp2.000.

Dua informasi harus dibedakan:

  -----------------------------------------------------------------------
  Informasi                                                         Harga
  ------------------------------ ----------------------------------------
  Uang yang harus dikeluarkan    Bergantung pada ukuran kemasan dan bahan
  untuk membeli bahan                                   yang harus dibeli

  Biaya bahan yang benar-benar                                    Rp5.000
  digunakan                      
  -----------------------------------------------------------------------

Untuk optimasi keuangan, keduanya harus tersedia. Jika hanya menghitung
biaya bahan yang digunakan, pengguna bisa merasa budget-nya cukup
padahal uang yang harus dikeluarkan saat belanja lebih besar.

### 15.3 Ingredient Reuse Optimization

Fitur yang berpotensi menjadi pembeda produk adalah optimasi penggunaan
bahan.

Contoh bahan yang dibeli pengguna: - 1 papan tempe. - 5 butir telur. - 1
ikat kangkung. - 1 bungkus tahu.

AI menyusun menu selama beberapa hari dengan memanfaatkan bahan tersebut
secara optimal dan tetap memberikan variasi menu.

Manfaat: - Mengurangi pengeluaran belanja. - Mengurangi sisa bahan
makanan. - Mengurangi food waste. - Menghemat waktu menentukan menu.

------------------------------------------------------------------------

## 16. Recommended Technology Stack

  Layer              Teknologi
  ------------------ --------------------------
  Frontend           React + TypeScript
  Styling            Tailwind CSS
  Backend            Python FastAPI
  Database           PostgreSQL
  AI                 LLM API
  Authentication     Supabase Auth
  Database Hosting   Supabase
  Deployment         Vercel + Backend Hosting

Teknologi tersebut merupakan rekomendasi awal dan dapat disesuaikan
dengan kemampuan serta kebutuhan tim.

------------------------------------------------------------------------

## 17. Open Questions -- Before Development

Sebelum development dimulai, tim perlu memvalidasi beberapa keputusan
produk:

1.  **Sumber harga bahan:** Apakah harga bahan menggunakan harga
    rata-rata pasar Yogyakarta atau harga dari toko tertentu?
2.  **Autentikasi:** Apakah pengguna wajib memiliki akun untuk membuat
    meal plan? Rekomendasi awal: sediakan guest mode untuk mengurangi
    hambatan penggunaan.
3.  **Pelacakan pengeluaran:** Apakah meal plan hanya menghasilkan
    rekomendasi atau juga melacak realisasi pengeluaran setelah memasak?
    Rekomendasi awal: jadikan pelacakan realisasi sebagai pengembangan
    berikutnya.

------------------------------------------------------------------------

**Dokumen ini menjadi acuan awal untuk penyusunan Development Backlog,
User Stories, Acceptance Criteria, UI/UX Design, dan pembagian tugas
tim.**
