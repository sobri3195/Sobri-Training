function ProgressBar({ value }) {
  return (
    <div className="progress-bar">
      <div className="progress-fill" style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }} />
    </div>
  );
}

export default ProgressBar;
