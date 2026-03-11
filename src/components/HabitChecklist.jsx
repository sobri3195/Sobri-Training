import { defaultHabits } from '../data/program';

function HabitChecklist({ checkedHabits, onToggle }) {
  return (
    <div className="habit-list">
      {defaultHabits.map((habit) => (
        <label key={habit.id}>
          <input
            type="checkbox"
            checked={Boolean(checkedHabits[habit.id])}
            onChange={() => onToggle(habit.id)}
          />
          {habit.label}
        </label>
      ))}
    </div>
  );
}

export default HabitChecklist;
