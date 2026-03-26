import { Link } from 'react-router-dom'
import RoomsGrid from '../components/RoomsGrid'

function RoomsPage() {
  return (
    <main className="page-content">
      <section className="page-hero">
        <p className="eyebrow">Rooms</p>
        <h2>Choose the stay that fits your trip</h2>
        <p>
          Every room includes premium linens, smart TV, high-speed internet, and
          complimentary breakfast.
        </p>
      </section>
      <section className="section section--tight">
        <RoomsGrid />
        <div className="cta-row cta-row--section">
          <Link className="primary-button" to="/booking">
            Reserve a room
          </Link>
        </div>
      </section>
    </main>
  )
}

export default RoomsPage
