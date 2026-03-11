function SimpleChart({ data, color = '#42d392', labelKey, valueKey }) {
  if (!data.length) return <p className="empty">Belum ada data, mulai check-in hari ini.</p>;
  const max = Math.max(...data.map((d) => d[valueKey]), 1);

  return (
    <div className="chart-wrap">
      {data.map((entry) => (
        <div key={entry.date} className="chart-bar-row">
          <span>{entry[labelKey]}</span>
          <div className="chart-bar-bg">
            <div className="chart-bar" style={{ width: `${(entry[valueKey] / max) * 100}%`, background: color }} />
          </div>
          <strong>{entry[valueKey]}</strong>
        </div>
      ))}
    </div>
  );
}

export default SimpleChart;
