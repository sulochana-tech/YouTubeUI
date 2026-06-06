import './Sidebar.css'

export default function Sidebar({ isOpen }) {
  const navItems = [
    { icon: '🏠', label: 'Home' },
    { icon: '📱', label: 'Shorts' },
    { icon: '📡', label: 'Subscriptions' },
    { icon: '🕓', label: 'History' },
    { icon: '👍', label: 'Liked Videos' },
    { icon: '🎬', label: 'Your Videos' },
    { icon: '⏰', label: 'Watch Later' },
    { icon: '🔥', label: 'Trending' },
    { icon: '🎵', label: 'Music' },
    { icon: '🎮', label: 'Gaming' },
    { icon: '📰', label: 'News' },
    { icon: '🏆', label: 'Sports' },
    { icon: '💡', label: 'Learning' },
    { icon: '👗', label: 'Fashion' },
    { icon: '🎭', label: 'Podcasts' },
    { icon: '⚙️', label: 'Settings' },
    { icon: '🚩', label: 'Report History' },
    { icon: '❓', label: 'Help' },
    { icon: '💬', label: 'Send Feedback' },
  ]

  return (
    <aside className={`yt-sidebar ${isOpen ? 'yt-sidebar--open' : 'yt-sidebar--closed'}`}>
      {/* Main nav */}
      <div className="yt-sidebar__section">
        {navItems.slice(0, 3).map((item, i) => (
          <button
            key={i}
            className={`yt-sidebar__item ${i === 0 ? 'yt-sidebar__item--active' : ''} ${!isOpen ? 'yt-sidebar__item--icon-only' : ''}`}
          >
            <span className="yt-sidebar__icon">{item.icon}</span>
            {isOpen && <span className="yt-sidebar__label">{item.label}</span>}
          </button>
        ))}
      </div>

      {isOpen && <div className="yt-sidebar__divider" />}

      {/* You section */}
      {isOpen && <p className="yt-sidebar__section-title">You</p>}
      <div className="yt-sidebar__section">
        {navItems.slice(3, 7).map((item, i) => (
          <button
            key={i}
            className={`yt-sidebar__item ${!isOpen ? 'yt-sidebar__item--icon-only' : ''}`}
          >
            <span className="yt-sidebar__icon">{item.icon}</span>
            {isOpen && <span className="yt-sidebar__label">{item.label}</span>}
          </button>
        ))}
      </div>

      {isOpen && <div className="yt-sidebar__divider" />}

      {/* Explore section */}
      {isOpen && <p className="yt-sidebar__section-title">Explore</p>}
      <div className="yt-sidebar__section">
        {navItems.slice(7, 15).map((item, i) => (
          <button
            key={i}
            className={`yt-sidebar__item ${!isOpen ? 'yt-sidebar__item--icon-only' : ''}`}
          >
            <span className="yt-sidebar__icon">{item.icon}</span>
            {isOpen && <span className="yt-sidebar__label">{item.label}</span>}
          </button>
        ))}
      </div>

      {isOpen && <div className="yt-sidebar__divider" />}

      {/* More section */}
      {isOpen && <p className="yt-sidebar__section-title">More from YouTube</p>}
      <div className="yt-sidebar__section">
        {navItems.slice(15).map((item, i) => (
          <button
            key={i}
            className={`yt-sidebar__item ${!isOpen ? 'yt-sidebar__item--icon-only' : ''}`}
          >
            <span className="yt-sidebar__icon">{item.icon}</span>
            {isOpen && <span className="yt-sidebar__label">{item.label}</span>}
          </button>
        ))}
      </div>

      {isOpen && (
        <div className="yt-sidebar__footer">
          <p>© 2026 YouTube Clone</p>
          <p>Made with ❤️ in React</p>
        </div>
      )}
    </aside>
  )
}