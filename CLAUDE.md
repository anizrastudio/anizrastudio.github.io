# Catatan Proyek: Anizra Studio (website utama)

File ini dibaca otomatis oleh Claude Code setiap kali proyek ini dibuka.
Isinya ringkasan hal penting supaya tidak perlu dijelaskan ulang.

> Repo GitHub ini **publik**. Jangan menulis data rahasia (password, API key, data klien, file penawaran) di file mana pun di proyek ini.
> File `.htaccess` memblokir semua file `.md` dan folder `.git` agar tidak bisa dibuka dari website. Jangan dihapus.

## 1. Tentang pemilik
- Pemilik fokus pada sisi bisnis. Fokus teknis diserahkan ke Claude.
- Jelaskan dalam **Bahasa Indonesia yang sederhana**, langkah demi langkah, tanpa istilah teknis yang tidak perlu.
- Kode, nama class, dan komentar kode tetap dalam **bahasa Inggris**.
- Pola kerja: **Claude yang menulis kode, pemilik yang memeriksa (review)**.
- Jangan menyebut nama pribadi pemilik di website. Pakai nama usaha "Anizra Studio".

## 2. Aturan wajib sebelum commit
- **Jangan pernah commit atau push tanpa diminta.** Push ke `main` langsung tayang ke anizrastudio.com.
- Setelah mengubah file, beri ringkasan singkat: file apa yang diubah, dan apa yang perlu dicek pemilik.
- Pemilik selalu: (1) membaca perubahan di Source Control, (2) menguji di browser, (3) baru commit.
- Jangan menghapus file sebelum mencari pemakaiannya di seluruh proyek (Ctrl+Shift+F).

## 3. Konteks bisnis
- Niche: **produsen lokal yang menjual ke pembeli besar (B2B)**: hotel, restoran, kafe, toko, distributor.
- Mulai dari Bali, tapi pesan website berlaku nasional.
- Harga (ada di FAQ):
  - Paket Profil & Katalog mulai **Rp1,5 juta**.
  - Harga perkenalan **Rp750 ribu** untuk 3 klien pertama.
  - Perawatan: Dasar **Rp150 rb/bulan**, Aktif **Rp350 rb/bulan**.
- Kontak: WhatsApp `628214222807`, email `anizrastudio@gmail.com`. Instagram **belum dibuat**. Nanti ditambahkan ke section Kontak (kolom contact-list 3 → 4).
- **Prinsip jujur:** tidak ada testimoni, angka, logo klien, atau sertifikat palsu. Proyek konsep wajib diberi label fiktif.

## 4. Struktur website
- Halaman Indonesia: `index.html`. Halaman Inggris: `en/index.html`. Isi keduanya harus tetap sejajar.
- Urutan section: hero, masalah, layanan, untuk-siapa, karya, cara-kerja, tentang, faq, kontak, footer.
- Karya:
  - Reforma: proyek nyata, https://anizrastudio.github.io/reforma-furniture/
  - Tani Segar Bedugul: konsep, https://anizrastudio.github.io/tani-segar-bedugul/
  - Lereng Coffee: "Dalam pengerjaan".

## 5. Aturan teknis
- HTML, CSS, dan JS biasa (tanpa framework). Penamaan class memakai **BEM**.
- Warna dan ukuran memakai **CSS variables** (token) di `:root`. Jangan menulis warna langsung.
  - bg `#131211`, surface `#1E1C1A`, text `#F5F1EB`, muted `#A8A29A`, accent `#E8693F`, on-accent `#131211`.
- **Mobile-first.** Blok `@media (min-width: 900px)` untuk laptop diletakkan di **bagian bawah** CSS.
- Font: Plus Jakarta Sans 400/600/800. **Font harus cocok di dua tempat**: `<link>` Google Fonts di HTML dan variabel di CSS, termasuk ketebalannya.
- Gambar memakai WebP, ada atribut `width`/`height`, `loading="lazy"` (kecuali gambar di hero), dan `srcset` 480/800 bila perlu.
- Animasi:
  - **Tidak ada animasi di hero**, karena menurunkan skor performa (LCP).
  - Animasi muncul saat di-scroll diatur oleh `initReveal()` di JS.
  - Selalu hormati `prefers-reduced-motion`.
- SEO: semua URL absolut memakai `https://anizrastudio.com/`, yaitu canonical, hreflang, Open Graph, JSON-LD, dan sitemap. Hanya link Reforma dan Tani Segar yang tetap memakai github.io.
- Gambar Open Graph berukuran 1200×630, format JPG.

## 6. Deploy
- Repo GitHub: `anizrastudio/anizrastudio.github.io`, branch `main`.
- Hostinger auto-deploy: setiap push ke `main` otomatis masuk ke `public_html`, lalu tayang di https://anizrastudio.com.
- GitHub Pages untuk repo ini **sudah dimatikan**, supaya tidak ada konten ganda.

## 7. Jebakan yang pernah terjadi
- Satu blok section terhapus atau bersarang saat mengganti kode. Periksa pasangan tag pembuka dan penutup.
- Lupa menyimpan file CSS. Auto Save sudah disarankan.
- Website live terlihat belum berubah karena cache browser. Cek di **Incognito** atau tekan Ctrl+Shift+R.
- Skor Lighthouse di laptop tidak bisa dipercaya. Untuk website live, pakai **PageSpeed Insights**. Skor terakhir: 98 mobile, 100 desktop.
