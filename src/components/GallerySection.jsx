import { useState } from 'react'
import { galleryCategories, galleryItems } from '../data/hotelData'

function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const visibleGallery =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory)

  return (
    <>
      <div className="gallery-filters">
        {galleryCategories.map((category) => (
          <button
            key={category}
            type="button"
            className={selectedCategory === category ? 'filter active' : 'filter'}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {visibleGallery.map((item) => (
          <article className="gallery-card" key={`${item.category}-${item.title}`}>
            <img className="gallery-art" src={item.image} alt={item.title} />
            <p className="gallery-tag">{item.category}</p>
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
          </article>
        ))}
      </div>
    </>
  )
}

export default GallerySection
