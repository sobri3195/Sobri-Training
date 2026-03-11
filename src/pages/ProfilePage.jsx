import { useMemo, useState } from 'react';
import Card from '../components/Card';
import { calculateBMI, estimateCalories } from '../utils/health';

function ProfilePage({ profile, setProfile, onReset, theme, toggleTheme, achievementsUnlocked }) {
  const [draft, setDraft] = useState(profile);

  const bmi = useMemo(() => calculateBMI(profile.startWeight, profile.heightCm).toFixed(1), [profile]);
  const calories = useMemo(() => estimateCalories({ weightKg: profile.startWeight, heightCm: profile.heightCm }), [profile]);

  const onChange = (k, v) => setDraft((p) => ({ ...p, [k]: Number.isNaN(Number(v)) ? v : Number(v) }));

  return (
    <div className="page">
      <h1>Profile</h1>
      <Card title="Data User">
        {Object.entries(draft).map(([k, v]) => (
          <label key={k}>{k}<input value={v} onChange={(e) => onChange(k, e.target.value)} /></label>
        ))}
        <button onClick={() => setProfile(draft)}>Simpan Profil</button>
      </Card>
      <Card title="Health Metrics">
        <p>BMI: {bmi}</p>
        <p>Estimasi kebutuhan kalori harian: {calories} kkal</p>
      </Card>
      <Card title="Achievement Badge">
        {achievementsUnlocked.length === 0 ? <p className="empty">Belum ada badge, ayo mulai latihan pertama!</p> : achievementsUnlocked.map((a) => <p key={a.id}>🏅 {a.title}</p>)}
      </Card>
      <Card title="Preferences">
        <button onClick={toggleTheme}>Theme: {theme}</button>
        <button className="danger-btn" onClick={onReset}>Reset Semua Data</button>
      </Card>
    </div>
  );
}

export default ProfilePage;
