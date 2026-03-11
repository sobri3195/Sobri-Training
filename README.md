# Sobri-Training

Aplikasi mobile-first React + Vite untuk tracking fat loss, progres pull-up, habit harian, dan program latihan 30 hari.

## Fitur utama
- 5 menu bottom navigation: Home, Plan, Workout, Progress, Profile
- Onboarding pertama kali
- Program 30 hari per fase
- Workout tracker + timer + mark as done
- Progress tracker (berat badan, pull-up, readiness score, status progres)
- Habit tracker harian
- Badge achievement
- BMI + estimasi kalori
- Persistensi full localStorage (tanpa backend/database)

## Struktur folder

```
src/
  components/
  data/
  hooks/
  pages/
  styles/
  utils/
```

## Setup lokal
1. Install dependencies
   ```bash
   npm install
   ```
2. Jalankan dev server
   ```bash
   npm run dev
   ```
3. Build production
   ```bash
   npm run build
   ```
4. Preview build
   ```bash
   npm run preview
   ```

## Deploy ke Vercel
1. Push repository ke GitHub.
2. Import project di Vercel.
3. Framework preset: **Vite**.
4. Build command: `npm run build`.
5. Output directory: `dist`.
6. Deploy.

## Catatan keamanan progres
Target turun 12 kg dalam 1 bulan tergolong agresif. App menampilkan warning agar progres tetap aman dan realistis (sekitar 0.5–1.0 kg/minggu).
