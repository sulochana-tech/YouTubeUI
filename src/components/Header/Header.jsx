import { useCallback } from 'react'
import './Header.css'

export default function Header({ onMenuClick, search, onSearch }) {
  return (
    <header className="yt-header">
      {/* Left */}
      <div className="yt-header__left">
        <button className="yt-icon-btn" onClick={onMenuClick}>
          <span className="menu-icon">☰</span>
        </button>
        <div className="yt-logo">
          <span className="yt-logo__icon">▶</span>
          <span className="yt-logo__text">YouTube</span>
        </div>
      </div>

      {/* Center - Search */}
      <div className="yt-header__center">
        <div className="yt-search">
          <input
            type="text"
            className="yt-search__input"
            placeholder="Search"
            value={search}
            onChange={onSearch}
          />
          <button className="yt-search__btn">🔍</button>
        </div>
      </div>

      {/* Right */}
      <div className="yt-header__right">
        <button className="yt-icon-btn">🔔</button>
        <div className="yt-avatar">R</div>
      </div>
    </header>
  )
}