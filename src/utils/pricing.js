export function parseRoomPrice(price) {
  return Number(String(price).replace(/[^\d]/g, '')) || 0
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function getStayNights(checkIn, checkOut) {
  if (!checkIn || !checkOut) {
    return 1
  }

  const start = new Date(checkIn)
  const end = new Date(checkOut)
  const diff = end.getTime() - start.getTime()
  const nights = Math.ceil(diff / (1000 * 60 * 60 * 24))

  return nights > 0 ? nights : 1
}

export function getBookingPricing(room, checkIn, checkOut) {
  const nights = getStayNights(checkIn, checkOut)
  const nightlyRate = parseRoomPrice(room?.price)
  const subtotal = nightlyRate * nights
  const taxes = Math.round(subtotal * 0.12)
  const total = subtotal + taxes

  return {
    nights,
    nightlyRate,
    subtotal,
    taxes,
    total,
  }
}
