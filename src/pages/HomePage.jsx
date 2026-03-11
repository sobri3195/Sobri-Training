import Card from '../components/Card';
import ProgressBar from '../components/ProgressBar';
import HabitChecklist from '../components/HabitChecklist';
import { motivationalQuotes, program30Days } from '../data/program';

function HomePage({ profile, weightProgress, pullupProgress, todayHabits, onToggleHabit }) {
  const today = new Date().toISOString().slice(0, 10);
  const dayOfProgram = Math.min(Math.floor((Date.now() - new Date(today).getTime()) / (24 * 3600 * 1000)) + 1, 30);
  const todayPlan = program30Days.find((d) => d.day === dayOfProgram) || program30Days[0];
  const quote = motivationalQuotes[new Date().getDate() % motivationalQuotes.length];

  return (
    <div className="page">
      <h1>Hi, {profile.name} 👋</h1>
      <Card title="Target Berat">
        <p>{profile.startWeight} kg ➜ {profile.targetWeight} kg</p>
        <p>Sisa {weightProgress.remaining.toFixed(1)} kg lagi menuju target.</p>
        <ProgressBar value={weightProgress.percentage} />
      </Card>
      <Card title="Target Pull-up">
        <p>{profile.currentPullup} ➜ {profile.targetPullup} reps</p>
        <p>Sisa {pullupProgress.remaining} reps lagi menuju 20 pull-up.</p>
        <ProgressBar value={pullupProgress.percentage} />
      </Card>
      <Card title="Workout Hari Ini">
        <p>{todayPlan.workoutType}</p>
        <small>{todayPlan.duration} • fokus: {todayPlan.focus}</small>
      </Card>
      <Card title="Habit Checklist Hari Ini">
        <HabitChecklist checkedHabits={todayHabits} onToggle={onToggleHabit} />
      </Card>
      <Card title="Motivasi">
        <blockquote>{quote}</blockquote>
        <p>Reminder: latihan, hidrasi, tidur, dan jaga defisit kalori moderat.</p>
      </Card>
    </div>
  );
}

export default HomePage;
