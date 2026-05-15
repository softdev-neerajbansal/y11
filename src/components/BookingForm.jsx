import { useState } from 'react'
import PaymentGateway from './PaymentGateway'
import { rooms } from '../data/hotelData'
import { formatCurrency, getBookingPricing } from '../utils/pricing'

const initialBooking = {
  checkIn: '',
  checkOut: '',
  guests: '2 Guests',
  room: rooms[0].name,
  paymentMode: 'payOnline',
  gateway: 'upi',
  upiId: '',
  cardName: '',
  cardNumber: '',
  cardExpiry: '',
  cardCvv: '',
  bank: 'HDFC Bank',
  walletMobile: '',
}

const gatewayLabels = {
  upi: 'UPI',
  card: 'card',
  netbanking: 'netbanking',
  wallet: 'wallet',
}

function BookingForm({ compact = false }) {
  const [bookingForm, setBookingForm] = useState(initialBooking)
  const [bookingMessage, setBookingMessage] = useState('')
  const selectedRoom = rooms.find((room) => room.name === bookingForm.room) ?? rooms[0]
  const pricing = getBookingPricing(selectedRoom, bookingForm.checkIn, bookingForm.checkOut)

  function handleBookingChange(event) {
    const { name, value } = event.target
    updateBookingField(name, value)
  }

  function updateBookingField(name, value) {
    setBookingForm((current) => ({ ...current, [name]: value }))
  }

  function handleBookingSubmit(event) {
    event.preventDefault()

    if (!compact && bookingForm.paymentMode === 'payOnline') {
      setBookingMessage(
        `Payment session ready for ${bookingForm.room}. Total ${formatCurrency(
          pricing.total,
        )} will continue through ${gatewayLabels[bookingForm.gateway]}.`,
      )
      return
    }

    setBookingMessage(
      `Reservation request sent for ${bookingForm.room}. You can pay at the hotel during check-in.`,
    )
  }

  return (
    <aside className={compact ? 'booking-card booking-card--compact' : 'booking-card'}>
      <p className="card-kicker">Quick booking</p>
      <h3>{compact ? 'Reserve now, pay at hotel' : 'Reserve with secure checkout'}</h3>
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
        {!compact && (
          <PaymentGateway
            booking={bookingForm}
            pricing={pricing}
            onFieldChange={updateBookingField}
          />
        )}
        <button type="submit" className="primary-button full-width">
          {compact ? 'Confirm booking request' : 'Continue checkout'}
        </button>
        <p className="fine-print">
          {compact
            ? 'No advance payment required. Our reservation team confirms availability and you pay during check-in.'
            : 'Online payment creates a secure checkout session. Pay-at-hotel bookings stay flexible until check-in.'}
        </p>
        {bookingMessage && <p className="success-message">{bookingMessage}</p>}
      </form>
    </aside>
  )
}

export default BookingForm
