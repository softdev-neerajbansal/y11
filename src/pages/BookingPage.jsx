import BookingForm from '../components/BookingForm'
import { bookingImage } from '../data/hotelData'

function BookingPage() {
  return (
    <main className="page-content">
      <section className="page-hero">
        <p className="eyebrow">Booking</p>
        <h2>Book now and pay at the hotel</h2>
        <p>
          Send your reservation request online, then complete payment during check-in at
          the property.
        </p>
      </section>
      <section className="section section--tight booking-page-layout">
        <BookingForm />
        <article className="panel accent-panel">
          <img className="panel-image" src={bookingImage} alt="Hotel reception desk" />
          <p className="eyebrow">Booking benefits</p>
          <h2>Simple reservation flow for direct guests</h2>
          <p>
            Secure your dates without prepayment, coordinate special requests directly
            with the front desk, and finalize everything with our team before arrival.
          </p>
          <ul className="feature-list">
            <li>Flexible direct booking support</li>
            <li>Pay at Hotel for all listed room types</li>
            <li>Group stays and event guests can request custom pricing</li>
            <li>Airport transfer and early check-in requests handled by our team</li>
          </ul>
        </article>
      </section>
    </main>
  )
}

export default BookingPage
