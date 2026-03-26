import { useState } from 'react'
import { rooms } from '../data/hotelData'

const initialBooking = {
  checkIn: '',
  checkOut: '',
  guests: '2 Guests',
  room: rooms[0].name,
}

function BookingForm({ compact = false }) {
  const [bookingForm, setBookingForm] = useState(initialBooking)
  const [bookingMessage, setBookingMessage] = useState('')

  function handleBookingChange(event) {
    const { name, value } = event.target
    setBookingForm((current) => ({ ...current, [name]: value }))
  }

  function handleBookingSubmit(event) {
    event.preventDefault()
    setBookingMessage(
      `Reservation request sent for ${bookingForm.room}. You can pay at the hotel during check-in.`,
    )
  }

  return (
    <aside className={compact ? 'booking-card booking-card--compact' : 'booking-card'}>
      <p className="card-kicker">Quick booking</p>
      <h3>Reserve now, pay at hotel</h3>
      <form onSubmit={handleBookingSubmit}>
        <label>
          Check in
          <input
            name="checkIn"
            type="date"
            value={bookingForm.checkIn}
            onChange={handleBookingChange}
            required
          />
        </label>
        <label>
          Check out
          <input
            name="checkOut"
            type="date"
            value={bookingForm.checkOut}
            onChange={handleBookingChange}
            required
          />
        </label>
        <label>
          Guests
          <select name="guests" value={bookingForm.guests} onChange={handleBookingChange}>
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </label>
        <label>
          Room type
          <select name="room" value={bookingForm.room} onChange={handleBookingChange}>
            {rooms.map((room) => (
              <option key={room.name}>{room.name}</option>
            ))}
          </select>
        </label>
        <button type="submit" className="primary-button full-width">
          Confirm booking request
        </button>
        <p className="fine-print">
          No advance payment required. Our reservation team confirms availability and
          you pay during check-in.
        </p>
        {bookingMessage && <p className="success-message">{bookingMessage}</p>}
      </form>
    </aside>
  )
}

export default BookingForm
