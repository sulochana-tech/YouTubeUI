import { useState, useCallback } from 'react'
import './VideoCard.css'

export default function VideoCard({ video, onPlay }) {
  const [hover, setHover] = useState(false)

  const handleMouseEnter = useCallback(() => setHover(true), [])
  const handleMouseLeave = useCallback(() => setHover(false), [])
  const handleClick = useCallback(() => onPlay(video), [video, onPlay])

  return (
    <div
      className="yt-video-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="yt-video-card__thumb-wrap">
        <img
          src={video.img}
          alt={video.title}
          className={`yt-video-card__thumb ${hover ? 'yt-video-card__thumb--hover' : ''}`}
        />
        <span className="yt-video-card__duration">{video.duration}</span>
      </div>

      <div className="yt-video-card__info">
        <img
          src={video.avatar}
          alt={video.channel}
          className="yt-video-card__avatar"
        />
        <div className="yt-video-card__meta">
          <p className="yt-video-card__title">{video.title}</p>
          <div className="yt-video-card__channel">
            <span>{video.channel}</span>
            {video.verified && <span className="yt-verified">✓</span>}
          </div>
          <p className="yt-video-card__stats">
            {video.views} views · {video.time}
          </p>
        </div>
        <button className="yt-video-card__dots">⋮</button>
      </div>
    </div>
  )
}