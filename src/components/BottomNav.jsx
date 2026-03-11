const menus = ['Home', 'Plan', 'Workout', 'Progress', 'Profile'];

function BottomNav({ current, onChange }) {
  return (
    <nav className="bottom-nav">
      {menus.map((menu) => (
        <button
          key={menu}
          className={current === menu ? 'active' : ''}
          onClick={() => onChange(menu)}
        >
          {menu}
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
