import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="game-nav">
      <div className="nav-header">
        <div className="nav-logo">
          <span className="logo-icon">🎮</span>
          <div className="logo-text">
            <h1>TASKSENSE</h1>
            <span className="logo-subtitle">QUEST MANAGER</span>
          </div>
        </div>
      </div>

      <div className="nav-stats">
        <div className="stat-item">
          <span className="stat-icon">⭐</span>
          <span className="stat-label">PLAYER 1</span>
        </div>
        <div className="stat-bar">
          <div className="stat-fill"></div>
        </div>
      </div>

      <ul className="nav-menu">
        <li>
          <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">🏠</span>
            <span className="nav-text">HOME BASE</span>
            <span className="nav-arrow">▶</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/new-quest" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">⚔️</span>
            <span className="nav-text">NEW QUEST</span>
            <span className="nav-arrow">▶</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/quests" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">📜</span>
            <span className="nav-text">QUEST LOG</span>
            <span className="nav-arrow">▶</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/inventory" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">🎒</span>
            <span className="nav-text">INVENTORY</span>
            <span className="nav-arrow">▶</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/achievements" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
            <span className="nav-icon">🏆</span>
            <span className="nav-text">ACHIEVEMENTS</span>
            <span className="nav-arrow">▶</span>
          </NavLink>
        </li>
      </ul>

      <div className="nav-footer">
        <div className="power-ups">
          <span className="power-up" title="Speed Boost">⚡</span>
          <span className="power-up" title="Shield Active">🛡️</span>
          <span className="power-up" title="Focus Mode">🎯</span>
        </div>
        <p className="nav-version">v1.0.0 • ARCADE MODE</p>
      </div>
    </nav>
  );
}

export default Navigation;
