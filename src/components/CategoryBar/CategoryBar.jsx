import './CategoryBar.css'

export default function CategoryBar({ active, onChange }) {
  const categories = [
    "All", "React", "JavaScript", "Gaming",
    "Music", "News", "Sports", "Coding", "Travel", "Food"
  ]

  return (
    <div className="yt-category-bar">
      {categories.map(cat => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`yt-category-btn ${active === cat ? 'yt-category-btn--active' : ''}`}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}