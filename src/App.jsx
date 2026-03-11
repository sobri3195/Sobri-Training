import { useMemo, useState } from 'react';
import BottomNav from './components/BottomNav';
import OnboardingModal from './components/OnboardingModal';
import HomePage from './pages/HomePage';
import PlanPage from './pages/PlanPage';
import WorkoutPage from './pages/WorkoutPage';
import ProgressPage from './pages/ProgressPage';
import ProfilePage from './pages/ProfilePage';
import { achievements } from './data/program';
import { useLocalStorage } from './hooks/useLocalStorage';
import { useTheme } from './hooks/useTheme';
import { getPullupProgress, getWeightProgress } from './utils/health';
import { storageKeys } from './utils/storage';

const defaultProfile = {
  name: 'Sobri',
  heightCm: 173,
  startWeight: 85,
  targetWeight: 73,
  targetWeeks: 12,
  currentPullup: 0,
  targetPullup: 20
};

function App() {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [loading] = useState(false);
  const [profile, setProfile] = useLocalStorage(storageKeys.profile, defaultProfile);
  const [workoutsDone, setWorkoutsDone] = useLocalStorage(storageKeys.workoutsDone, {});
  const [habitsByDate, setHabitsByDate] = useLocalStorage(storageKeys.habitsByDate, {});
  const [weightLogs, setWeightLogs] = useLocalStorage(storageKeys.weightLogs, [{ date: new Date().toISOString().slice(0, 10), weight: 85 }]);
  const [pullupLogs, setPullupLogs] = useLocalStorage(storageKeys.pullupLogs, [{ date: new Date().toISOString().slice(0, 10), reps: 0 }]);
  const [onboardingDone, setOnboardingDone] = useLocalStorage(storageKeys.onboardingDone, false);
  const [theme, setTheme] = useLocalStorage(storageKeys.theme, 'dark');

  useTheme(theme);

  const todayKey = new Date().toISOString().slice(0, 10);
  const todayHabits = habitsByDate[todayKey] || {};
  const currentWeight = weightLogs.at(-1)?.weight ?? profile.startWeight;
  const currentPullup = pullupLogs.at(-1)?.reps ?? profile.currentPullup;

  const weightProgress = getWeightProgress({
    startWeight: profile.startWeight,
    currentWeight,
    targetWeight: profile.targetWeight
  });

  const pullupProgress = getPullupProgress({
    currentReps: currentPullup,
    targetReps: profile.targetPullup
  });

  const achievementsUnlocked = useMemo(() => achievements.filter((a) => a.rule({
    totalWorkouts: Object.values(workoutsDone).filter(Boolean).length,
    consistencyDays: Object.values(habitsByDate).filter((daily) => Object.values(daily).filter(Boolean).length >= 3).length,
    weightLost: profile.startWeight - currentWeight,
    bestPullup: Math.max(...pullupLogs.map((p) => p.reps), 0)
  })), [workoutsDone, habitsByDate, profile.startWeight, currentWeight, pullupLogs]);

  const toggleHabit = (habitId) => {
    setHabitsByDate((prev) => ({
      ...prev,
      [todayKey]: {
        ...(prev[todayKey] || {}),
        [habitId]: !prev[todayKey]?.[habitId]
      }
    }));
  };

  const addWeightLog = (weight) => {
    if (!weight) return;
    setWeightLogs((prev) => [...prev, { date: todayKey, weight }]);
  };

  const addPullupLog = (reps) => {
    if (Number.isNaN(reps)) return;
    setPullupLogs((prev) => [...prev, { date: todayKey, reps }]);
  };

  const pages = {
    Home: <HomePage profile={profile} weightProgress={weightProgress} pullupProgress={pullupProgress} todayHabits={todayHabits} onToggleHabit={toggleHabit} />,
    Plan: <PlanPage profile={profile} />,
    Workout: <WorkoutPage doneMap={workoutsDone} onDone={(id) => setWorkoutsDone((prev) => ({ ...prev, [id]: true }))} />,
    Progress: <ProgressPage weightLogs={weightLogs} pullupLogs={pullupLogs} addWeightLog={addWeightLog} addPullupLog={addPullupLog} doneMap={workoutsDone} />,
    Profile: <ProfilePage profile={profile} setProfile={setProfile} onReset={() => localStorage.clear()} theme={theme} toggleTheme={() => setTheme((t) => t === 'dark' ? 'light' : 'dark')} achievementsUnlocked={achievementsUnlocked} />
  };

  if (loading) return <div className="loading">Loading Sobri-Training...</div>;

  return (
    <div className="app-shell">
      {!onboardingDone && <OnboardingModal onSubmit={(data) => { setProfile(data); setOnboardingDone(true); }} />}
      <main>{pages[activeMenu]}</main>
      <BottomNav current={activeMenu} onChange={setActiveMenu} />
    </div>
  );
}

export default App;
