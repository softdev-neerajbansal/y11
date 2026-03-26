import { Link } from 'react-router-dom'
import GallerySection from '../components/GallerySection'

function GalleryPage() {
  return (
    <main className="page-content">
      <section className="page-hero">
        <p className="eyebrow">Gallery</p>
        <h2>See the spaces before you arrive</h2>
        <p>
          Browse room views, dining corners, wellness areas, and celebration venues.
        </p>
      </section>
      <section className="section section--tight">
        <GallerySection />
        <div className="cta-row cta-row--section">
          <Link className="primary-button" to="/contact">
            Ask about events
          </Link>
        </div>
      </section>
    </main>
  )
}

export default GalleryPage
