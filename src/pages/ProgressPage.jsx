import { useState } from 'react';
import Card from '../components/Card';
import SimpleChart from '../components/SimpleChart';
import { getProgressStatus } from '../utils/health';

function ProgressPage({ weightLogs, pullupLogs, addWeightLog, addPullupLog, doneMap }) {
  const [weightInput, setWeightInput] = useState('');
  const [pullupInput, setPullupInput] = useState('');
  const status = getProgressStatus(weightLogs);
  const totalDone = Object.values(doneMap).filter(Boolean).length;
  const readiness = Math.min(Math.round(((pullupLogs.at(-1)?.reps || 0) / 20) * 100 + totalDone), 100);

  return (
    <div className="page">
      <h1>Progress</h1>
      <Card title="Input Berat Badan">
        <input type="number" placeholder="contoh 84.5" value={weightInput} onChange={(e) => setWeightInput(e.target.value)} />
        <button onClick={() => { addWeightLog(Number(weightInput)); setWeightInput(''); }}>Simpan Berat</button>
      </Card>
      <Card title="Input Pull-up Test">
        <input type="number" placeholder="reps" value={pullupInput} onChange={(e) => setPullupInput(e.target.value)} />
        <button onClick={() => { addPullupLog(Number(pullupInput)); setPullupInput(''); }}>Simpan Pull-up</button>
      </Card>
      <Card title="Grafik Berat Badan"><SimpleChart data={weightLogs.map((l) => ({ ...l, day: l.date.slice(5) }))} labelKey="day" valueKey="weight" color="#f97316" /></Card>
      <Card title="Grafik Pull-up"><SimpleChart data={pullupLogs.map((l) => ({ ...l, day: l.date.slice(5) }))} labelKey="day" valueKey="reps" /></Card>
      <Card title="Statistik">
        <p>Total latihan selesai: {totalDone}</p>
        <p>Pull-up readiness score: {readiness}/100</p>
        <p>Status progres: {status}</p>
        {status === 'too fast' && <p className="danger">Warning: penurunan berat terlalu cepat. Tingkatkan asupan dan recovery.</p>}
      </Card>
      <Card title="Riwayat Check-in">
        {weightLogs.length === 0 && <p className="empty">Belum ada check-in. Mulai hari ini!</p>}
        {weightLogs.map((item) => <p key={item.date + item.weight}>{item.date}: {item.weight} kg</p>)}
      </Card>
    </div>
  );
}

export default ProgressPage;
