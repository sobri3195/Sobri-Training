const PREFIX = 'sobri-training';

export const storageKeys = {
  profile: `${PREFIX}:profile`,
  workoutsDone: `${PREFIX}:workoutsDone`,
  habitsByDate: `${PREFIX}:habitsByDate`,
  weightLogs: `${PREFIX}:weightLogs`,
  pullupLogs: `${PREFIX}:pullupLogs`,
  onboardingDone: `${PREFIX}:onboardingDone`,
  theme: `${PREFIX}:theme`
};

export const getLocalData = (key, fallback) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
};

export const setLocalData = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
