export const program30Days = [
  ...Array.from({ length: 7 }, (_, i) => ({ day: i + 1, week: 1, phase: 'Adaptasi & Fondasi', workoutType: 'Mobility + Full Body Basic', duration: '30-40 menit', focus: 'Membangun kebiasaan & teknik', calories: 220 + i * 5 })),
  ...Array.from({ length: 7 }, (_, i) => ({ day: i + 8, week: 2, phase: 'Fat Loss & Conditioning', workoutType: 'HIIT ringan + jalan cepat + core', duration: '40-50 menit', focus: 'Defisit kalori dan stamina', calories: 300 + i * 8 })),
  ...Array.from({ length: 7 }, (_, i) => ({ day: i + 15, week: 3, phase: 'Upper Body + Core Strength', workoutType: 'Push/Pull bodyweight + core', duration: '45-55 menit', focus: 'Kekuatan punggung, bahu, core', calories: 320 + i * 8 })),
  ...Array.from({ length: 9 }, (_, i) => ({ day: i + 22, week: 4, phase: 'Pull-Up Progression Intensif', workoutType: 'Pull-up drills + volume training', duration: '45-60 menit', focus: 'Skill pull-up bertahap 0 menuju 20', calories: 330 + i * 10 }))
];

export const workoutLibrary = [
  { id: 'w1', category: 'fat loss', name: 'Brisk Walk + Incline', sets: 1, repsOrDuration: '25 menit', level: 'Beginner', instruction: 'Jaga pace bicara terputus untuk zona fat loss.' },
  { id: 'w2', category: 'upper body', name: 'Push-up Incline', sets: 4, repsOrDuration: '8-12 reps', level: 'Beginner', instruction: 'Turunkan dada terkontrol, siku 45 derajat.' },
  { id: 'w3', category: 'core', name: 'Dead Bug', sets: 3, repsOrDuration: '10/side', level: 'Beginner', instruction: 'Punggung bawah menempel lantai sepanjang gerakan.' },
  { id: 'w4', category: 'mobility/recovery', name: 'Hip & Thoracic Mobility', sets: 2, repsOrDuration: '8 menit', level: 'All Level', instruction: 'Gunakan napas dalam untuk relaksasi.' },
  { id: 'w5', category: 'pull-up progression', name: 'Dead Hang', sets: 4, repsOrDuration: '15-30 detik', level: 'Beginner', instruction: 'Pegang bar aktifkan grip dan bahu.' },
  { id: 'w6', category: 'pull-up progression', name: 'Active Hang', sets: 4, repsOrDuration: '8-12 detik', level: 'Beginner', instruction: 'Depresi skapula, hindari shrug.' },
  { id: 'w7', category: 'pull-up progression', name: 'Scapular Pull-up', sets: 4, repsOrDuration: '6-10 reps', level: 'Beginner', instruction: 'Gerak pendek dari bahu, siku lurus.' },
  { id: 'w8', category: 'pull-up progression', name: 'Inverted Row', sets: 4, repsOrDuration: '8-12 reps', level: 'Beginner', instruction: 'Tarik dada ke bar, core rapat.' },
  { id: 'w9', category: 'pull-up progression', name: 'Negative Pull-up', sets: 5, repsOrDuration: '3-5 reps', level: 'Intermediate', instruction: 'Turun perlahan 4-6 detik tiap rep.' },
  { id: 'w10', category: 'pull-up progression', name: 'Band-assisted Pull-up', sets: 4, repsOrDuration: '6-10 reps', level: 'Intermediate', instruction: 'Pilih resistance band yang memungkinkan teknik bagus.' },
  { id: 'w11', category: 'pull-up progression', name: 'Assisted Pull-up', sets: 4, repsOrDuration: '6-8 reps', level: 'Intermediate', instruction: 'Gunakan mesin/kaki bantu seminimal mungkin.' },
  { id: 'w12', category: 'pull-up progression', name: 'Partial Pull-up', sets: 4, repsOrDuration: '5-8 reps', level: 'Intermediate', instruction: 'Fokus rentang atas agar lockout kuat.' },
  { id: 'w13', category: 'pull-up progression', name: 'Strict Pull-up Progression', sets: 5, repsOrDuration: '1-3 reps', level: 'Advanced', instruction: 'Prioritaskan kualitas over kuantitas.' },
  { id: 'w14', category: 'pull-up progression', name: 'Volume Ladder to 20', sets: 1, repsOrDuration: 'Total 20 reps', level: 'Advanced', instruction: 'Pecah menjadi set kecil sampai total 20.' }
];

export const motivationalQuotes = [
  'Consistency beats intensity when intensity is random.',
  'Kecil tapi rutin selalu menang dari besar tapi jarang.',
  'Build the athlete mindset, one rep at a time.'
];

export const defaultHabits = [
  { id: 'water', label: 'Minum air 2-3L' },
  { id: 'walk', label: 'Jalan kaki 7k+ langkah' },
  { id: 'workout', label: 'Workout selesai' },
  { id: 'sleep', label: 'Tidur cukup 7+ jam' }
];

export const achievements = [
  { id: 'first-workout', title: 'Latihan Pertama Selesai', rule: (s) => s.totalWorkouts >= 1 },
  { id: '3-days', title: '3 Hari Konsisten', rule: (s) => s.consistencyDays >= 3 },
  { id: '7-days', title: '7 Hari Konsisten', rule: (s) => s.consistencyDays >= 7 },
  { id: 'minus-1kg', title: 'Turun 1 Kg', rule: (s) => s.weightLost >= 1 },
  { id: 'first-pullup', title: 'Pull-up Pertama', rule: (s) => s.bestPullup >= 1 },
  { id: '5-pullup', title: '5 Pull-up', rule: (s) => s.bestPullup >= 5 },
  { id: '10-pullup', title: '10 Pull-up', rule: (s) => s.bestPullup >= 10 },
  { id: '20-pullup', title: '20 Pull-up', rule: (s) => s.bestPullup >= 20 }
];
