import { useEffect, useMemo, useState } from 'react';
import Card from '../components/Card';
import { workoutLibrary } from '../data/program';

const categories = ['all', 'fat loss', 'upper body', 'core', 'pull-up progression', 'mobility/recovery'];

function WorkoutPage({ doneMap, onDone }) {
  const [category, setCategory] = useState('all');
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  const filtered = useMemo(
    () => workoutLibrary.filter((w) => category === 'all' || w.category === category),
    [category]
  );

  return (
    <div className="page">
      <h1>Workout</h1>
      <Card title="Workout Timer">
        <p>{Math.floor(seconds / 60)}:{String(seconds % 60).padStart(2, '0')}</p>
      </Card>
      <div className="chip-row">
        {categories.map((c) => (
          <button key={c} className={category === c ? 'chip active' : 'chip'} onClick={() => setCategory(c)}>{c}</button>
        ))}
      </div>
      {filtered.map((workout) => (
        <Card key={workout.id} title={workout.name}>
          <p>{workout.sets} set • {workout.repsOrDuration}</p>
          <p>{workout.level}</p>
          <small>{workout.instruction}</small>
          <button onClick={() => onDone(workout.id)} disabled={Boolean(doneMap[workout.id])}>
            {doneMap[workout.id] ? 'Done ✅' : 'Mark as Done'}
          </button>
        </Card>
      ))}
    </div>
  );
}

export default WorkoutPage;
