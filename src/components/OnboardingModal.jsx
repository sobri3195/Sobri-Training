import { useState } from 'react';

function OnboardingModal({ onSubmit }) {
  const [form, setForm] = useState({
    name: 'Sobri',
    heightCm: 173,
    startWeight: 85,
    targetWeight: 73,
    targetWeeks: 12,
    currentPullup: 0,
    targetPullup: 20
  });

  const handleChange = (key, value) => setForm((prev) => ({ ...prev, [key]: Number.isNaN(Number(value)) ? value : Number(value) }));

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Welcome to Sobri-Training</h2>
        <p>Isi data awal untuk personalisasi program.</p>
        {Object.entries(form).map(([key, value]) => (
          <label key={key}>
            {key}
            <input value={value} onChange={(e) => handleChange(key, e.target.value)} />
          </label>
        ))}
        <button onClick={() => onSubmit(form)}>Mulai</button>
      </div>
    </div>
  );
}

export default OnboardingModal;
