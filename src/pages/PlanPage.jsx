import Card from '../components/Card';
import { program30Days } from '../data/program';
import { getSafetyWarning } from '../utils/health';

function PlanPage({ profile }) {
  const warning = getSafetyWarning(profile.startWeight - profile.targetWeight, profile.targetWeeks);

  return (
    <div className="page">
      <h1>30-Day Program</h1>
      <Card className="warning-card">
        <p>{warning}</p>
        <small>Catatan: target turun 12kg dalam 1 bulan sangat agresif. Prioritaskan keamanan, performa, dan pemulihan.</small>
      </Card>
      {program30Days.map((day) => (
        <Card key={day.day} title={`Day ${day.day} • ${day.phase}`}>
          <p>{day.workoutType}</p>
          <small>{day.duration} • fokus: {day.focus} • estimasi {day.calories} kkal</small>
        </Card>
      ))}
    </div>
  );
}

export default PlanPage;
