import { useCallback } from 'react'
import './VideoModal.css'

export default function VideoModal({ video, onClose }) {
  const handleBackdrop = useCallback((e) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  if (!video) return null

  return (
    <div className="yt-modal__backdrop" onClick={handleBackdrop}>
      <div className="yt-modal__content">
        <img
          src={video.img}
          alt={video.title}
          className="yt-modal__thumb"
        />
        <div className="yt-modal__body">
          <h2 className="yt-modal__title">{video.title}</h2>
          <div className="yt-modal__channel-row">
            <img
              src={video.avatar}
              alt={video.channel}
              className="yt-modal__avatar"
            />
            <div>
              <p className="yt-modal__channel">{video.channel}</p>
              <p className="yt-modal__stats">
                {video.views} views · {video.time}
              </p>
            </div>
            <button className="yt-modal__subscribe">Subscribe</button>
          </div>
          <button className="yt-modal__close" onClick={onClose}>
            ✕ Close
          </button>
        </div>
      </div>
    </div>
  )
}