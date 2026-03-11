export const calculateBMI = (weightKg, heightCm) => {
  if (!weightKg || !heightCm) return 0;
  return weightKg / ((heightCm / 100) ** 2);
};

export const estimateCalories = ({ weightKg, heightCm, age = 30, activityFactor = 1.45 }) => {
  const bmr = 10 * weightKg + 6.25 * heightCm - 5 * age + 5;
  return Math.round(bmr * activityFactor);
};

export const getWeightProgress = ({ startWeight, currentWeight, targetWeight }) => {
  const totalToLose = Math.max(startWeight - targetWeight, 0.01);
  const lost = Math.max(startWeight - currentWeight, 0);
  const remaining = Math.max(currentWeight - targetWeight, 0);
  const percentage = Math.min((lost / totalToLose) * 100, 100);
  return { lost, remaining, percentage };
};

export const getPullupProgress = ({ currentReps, targetReps }) => {
  const safeTarget = Math.max(targetReps, 1);
  const remaining = Math.max(targetReps - currentReps, 0);
  const percentage = Math.min((currentReps / safeTarget) * 100, 100);
  return { remaining, percentage };
};

export const getProgressStatus = (weightLogs = []) => {
  if (weightLogs.length < 2) return 'on track';
  const sorted = [...weightLogs].sort((a, b) => new Date(a.date) - new Date(b.date));
  const first = sorted[0].weight;
  const last = sorted[sorted.length - 1].weight;
  const weeks = Math.max((new Date(sorted[sorted.length - 1].date) - new Date(sorted[0].date)) / (7 * 24 * 3600 * 1000), 1);
  const weeklyRate = (first - last) / weeks;

  if (weeklyRate > 1.2) return 'too fast';
  if (weeklyRate < 0.3) return 'too slow';
  return 'on track';
};

export const getSafetyWarning = (targetLossKg, targetWeeks) => {
  const weekly = targetLossKg / Math.max(targetWeeks, 1);
  if (weekly > 1) {
    return 'Warning: target penurunan berat terlalu agresif. Disarankan 0.5–1.0 kg/minggu agar aman dan berkelanjutan.';
  }
  return 'Target penurunan berat masih dalam rentang aman bila konsisten.';
};
