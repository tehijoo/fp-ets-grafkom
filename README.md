# 👮 Misi Detektif

<img width="1919" height="909" alt="image" src="https://github.com/user-attachments/assets/b345b9ff-874d-44d1-81c4-7ad80d948428" />
<img width="1914" height="913" alt="image" src="https://github.com/user-attachments/assets/8723ad3c-a2a8-4371-b4f7-707e3053e552" />

Sebuah game petualangan 3D berbasis web yang imersif, dibangun menggunakan React, Three.js, dan React Three Fiber. Berperan sebagai seorang detektif yang diturunkan secara misterius oleh UFO, Anda harus menjelajahi kota, memecahkan teka-teki, dan menguji kecerdasan Anda untuk mengungkap misteri yang ada.

## 🎮 Live Demo

[Play the Game]

## ✨ Fitur Utama

- **Lingkungan 3D Imersif**: Jelajahi kota yang detail dengan gedung-gedung unik, jalanan dengan mobil-mobil, dan efek atmosfer yang memukau.
- **Mekanik Kuis Detektif**: Temukan kotak-kotak misterius yang berisi pertanyaan. Jawab dengan benar untuk mendapatkan poin dan petunjuk ke lokasi selanjutnya.
  <img width="1916" height="913" alt="image" src="https://github.com/user-attachments/assets/dbd5de30-6e21-421f-b439-bd116c41649d" />
  <img width="1919" height="911" alt="image" src="https://github.com/user-attachments/assets/fc4af076-900f-4e0c-94b1-9eb8aeaa1f5e" />
- **Intro Sinematik**: Mulailah permainan dengan adegan pembuka di mana karakter Anda diturunkan dari UFO yang kemudian terbang menjauh.
- **Efek Atmosferik**:
  - UFO dinamis dengan sorotan cahaya beranimasi
  - Partikel yang melayang untuk menambah suasana
  - Efek kabut yang memberikan kedalaman visual
  - Pencahayaan ambien untuk memperkuat nuansa kota.
- **Desain Suara**: Musik latar dan audio posisional untuk pengalaman yang lebih imersif.
- **Opsi Performa**: Opsi untuk mengaktifkan/menonaktifkan bayangan dan penghitung FPS demi performa yang optimal.
- **Kontrol Karakter Modern**: Kontrol karakter yang mulus dengan kemampuan berjalan, berlari, menendang, memukul dan melompat
- **Fisika Realistis**: Ditenagai oleh React Three Rapier untuk pergerakan dan tabrakan yang otentik.

## 🚀 Teknologi yang Digunakan

- **React** - Framework UI untuk membangun antarmuka.
- **Three.js** - Pustaka grafis 3D untuk rendering di web.
- **React Three Fiber** - Renderer React untuk Three.js, membuat dunia 3D menjadi lebih mudah dikelola.
- **React Three Drei** - Kumpulan helper dan abstraksi yang sangat berguna untuk React Three Fiber.
- **React Three Rapier** - Integrasi mesin fisika untuk interaksi yang realistis.
- **Ecctrl** - Kontroler karakter siap pakai untuk pergerakan yang mulus.
- **Zustand** - Manajemen state yang ringan untuk skor, petunjuk, dan logika game.
- **Vite** - Build tool modern yang super cepat.
- **TypeScript** - Untuk kode yang lebih aman dan mudah dikelola.
- **Tailwind CSS** - Framework CSS untuk membangun UI dengan cepat.

## 🎯 Cara Memulai

### Prasyarat

- Node.js (v14 atau lebih tinggi)
- npm or yarn

### Instalasi

1. Clone repository ini:

```bash
git clone https://github.com/tehijoo/fp-ets-grafkom.git
cd fp-ets-grafkom
```

2. Install semua paket yang dibutuhkan:

```bash
npm install
```

3. Jalankan server pengembangan:

```bash
npm run dev
```

4. Buka browser Anda dan navigasi ke `http://localhost:5173`


## 🎮 Kontrol

### Keyboard Controls

| Aksi          | Tombol Keyboard      |
| ------------- | ---------- |
| **Gerakan**   |            |
| Gerak Maju    | `W` or `↑` |
| Gerak Mundur  | `S` or `↓` |
| Gerak Kiri    | `A` or `←` |
| Gerak Kanan   | `D` or `→` |
| Lompak        | `Space`    |
| Lari/Sprint   | `Shift`    |
| **Serang**    |            |
| Meninju       | `F`        |
| Menendang     | `E`        |
| **Lainnya**   |            |
| Emoji         | `1`        |
| Tombol Pause  | `Tab`      |


## 🛠️ Konfigurasi

### Pengaturan Grafik

Kamu bisa menyesuaikan pengaturan yang ada di game:

- **Shadows**: Toggle shadow rendering untuk performa yang lebih realistis
- **FPS Counter**: Lihat/Sembunyi statistika performa

## 📁 Project Structure

```
fp-ets-grafkom/
├── public/              # Aset 3D, gambar dan suara
├── src/
│   ├── components/      # Komponen React & Three.js
│   │   ├── AtmosphericEffects.tsx
│   │   ├── Character.tsx
│   │   ├── ControlsModal.tsx
│   │   ├── Experience.tsx
│   │   ├── Invasion_environment.tsx
│   │   ├── Pakistan_flag.tsx
│   │   ├── SettingsModal.tsx
│   │   ├── StartMenu.tsx
│   │   └── ZombieLoadingScreen.tsx
│   ├── data/          
│   │   ├── animationSet.json
│   │   └── keyboardMap.json
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tsconfig.json
└── vite.config.ts
```
