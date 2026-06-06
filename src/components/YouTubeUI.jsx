import { useState, useCallback } from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import CategoryBar from './CategoryBar/CategoryBar'
import VideoCard from './VideoCard/VideoCard'
import VideoModal from './VideoModal/VideoModal'
import { useVideos } from '../hooks/useVideos'

export default function YouTubeUI() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [activeVideo, setActiveVideo] = useState(null)

  const {
    search,
    category,
    paginated,
    hasMore,
    handleSearch,
    handleCategory,
    loadMore,
  } = useVideos()

  const toggleSidebar = useCallback(() => setSidebarOpen(p => !p), [])
  const handlePlay = useCallback((v) => setActiveVideo(v), [])
  const handleClose = useCallback(() => setActiveVideo(null), [])

  return (
    <div style={{
      fontFamily: 'Roboto, Arial, sans-serif',
      background: '#f9f9f9',
      minHeight: '100vh'
    }}>
      <Header
        onMenuClick={toggleSidebar}
        search={search}
        onSearch={handleSearch}
      />

      <div style={{ display: 'flex', paddingTop: 56 }}>
        <Sidebar isOpen={sidebarOpen} />

        <main style={{
          marginLeft: sidebarOpen ? 240 : 72,
          flex: 1,
          padding: '20px 24px',
          transition: 'margin-left 0.3s'
        }}>
          <CategoryBar active={category} onChange={handleCategory} />

          {paginated.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '80px 0',
              color: '#606060'
            }}>
              <p style={{ fontSize: 24 }}>🔍</p>
              <p style={{ fontSize: 18, fontWeight: 600 }}>No results found</p>
              <p>Try a different search or category</p>
            </div>
          ) : (
            <>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 20
              }}>
                {paginated.map(v => (
                  <VideoCard key={v.id} video={v} onPlay={handlePlay} />
                ))}
              </div>

              {hasMore && (
                <div style={{ textAlign: 'center', marginTop: 40 }}>
                  <button
                    onClick={loadMore}
                    style={{
                      padding: '12px 40px',
                      background: '#0f0f0f',
                      color: 'white',
                      border: 'none',
                      borderRadius: 20,
                      fontSize: 15,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>

      <VideoModal video={activeVideo} onClose={handleClose} />
    </div>
  )
}