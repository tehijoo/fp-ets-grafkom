Struktur project ini adalah aplikasi game 3D berbasis web yang dibangun dengan React, Three.js, React Three Fiber, dan ekosistem terkait. Berikut penjelasan tiap bagian utama:

### Akar Project
- **index.html**  
  Entry point HTML untuk aplikasi web. Di sini terdapat `<div id="root"></div>` sebagai tempat mounting React.
- **package.json**  
  Konfigurasi npm, dependensi, dan script build/dev.
- **vite.config.ts**  
  Konfigurasi Vite sebagai bundler dan dev server.
- **`tsconfig*.json`**  
  Konfigurasi TypeScript untuk aplikasi dan node.
- **eslint.config.js**  
  Konfigurasi linting dengan ESLint.
- **.gitignore**  
  File/folder yang diabaikan git.
- **README.md**  
  Dokumentasi project.

### Folder public
- **`images/`**  
  Gambar untuk UI/background.
- **`models/`**  
  Model 3D (`.glb`) dan tekstur (`Textures/`).
- **`sounds/`**  
  File audio untuk game.

### Folder src
- **App.tsx**  
  Root React component, mengatur routing menu, loading, dan canvas utama.
- **main.tsx**  
  Entry point React, render ke DOM.
- **index.css**  
  Styling global, import Tailwind CSS.
- **vite-env.d.ts**  
  Deklarasi tipe untuk Vite.

#### Subfolder `components/`
Berisi komponen React modular:
- **AtmosphericEffects.tsx**  
  Efek atmosfer (UFO beam, partikel).
- **Character.tsx**  
  Model karakter utama.
- **ControlsModal.tsx**  
  Modal petunjuk kontrol.
- **Experience.tsx**  
  Scene utama 3D, mengatur environment, karakter, physics, dan pertanyaan.
- **Invasion_environment.tsx**  
  Model environment kota 3D.
- **QuestionBox.tsx**  
  Kotak pertanyaan interaktif di dunia 3D.
- **QuestionModal.tsx**  
  Modal pertanyaan (quiz) yang muncul saat kotak diaktifkan.
- **SettingsModal.tsx**  
  Modal pengaturan grafis/performance.
- **StartMenu.tsx**  
  Menu utama game.
- **ZombieLoadingScreen.tsx**  
  Layar loading dengan animasi.

#### Subfolder `data/`
- **animationSet.json**  
  Mapping animasi karakter.
- **keyboardMap.json**  
  Mapping tombol keyboard ke aksi game.
- **questions.json**  
  Data pertanyaan quiz, posisi, skor, dan petunjuk.

#### Subfolder stores
- **useGameStore.ts**  
  State management (menggunakan Zustand) untuk skor, pertanyaan, modal, dsb.

---

### Alur Utama
1. **StartMenu** → **ZombieLoadingScreen** → **Experience (Canvas 3D)**
2. Di dalam Experience, player bergerak di environment 3D, menemukan kotak pertanyaan.
3. Jika kotak diaktifkan, **QuestionModal** muncul, player menjawab quiz.
4. Skor dan petunjuk tampil di overlay UI.
5. Ada modal untuk kontrol dan pengaturan.

---

**Kesimpulan:**  
Struktur ini modular, memisahkan logika UI, data, dan 3D scene. Semua komponen utama dan data quiz mudah dikembangkan/ditambah.  
Untuk detail tiap file, klik:  
- App.tsx  
- Experience.tsx  
- useGameStore.ts  
- questions.json