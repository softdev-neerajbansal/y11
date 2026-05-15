import { formatCurrency } from '../utils/pricing'

const paymentModes = [
  {
    id: 'payOnline',
    title: 'Pay online',
    description: 'UPI, cards, wallets, and netbanking',
    badge: 'Secure gateway',
  },
  {
    id: 'payAtHotel',
    title: 'Pay at hotel',
    description: 'Reserve now and settle during check-in',
    badge: 'Flexible',
  },
]

const gatewayOptions = [
  { id: 'upi', label: 'UPI', detail: 'Google Pay, PhonePe, BHIM' },
  { id: 'card', label: 'Card', detail: 'Visa, Mastercard, RuPay' },
  { id: 'netbanking', label: 'Netbanking', detail: 'Major Indian banks' },
  { id: 'wallet', label: 'Wallet', detail: 'Mobile wallet payment' },
]

const bankOptions = ['HDFC Bank', 'ICICI Bank', 'SBI', 'Axis Bank', 'Kotak Bank']

function PaymentGateway({ booking, pricing, onFieldChange }) {
  const isOnlinePayment = booking.paymentMode === 'payOnline'
  const payableNow = isOnlinePayment ? pricing.total : 0

  function selectPaymentMode(paymentMode) {
    onFieldChange('paymentMode', paymentMode)
  }

  function selectGateway(gateway) {
    onFieldChange('gateway', gateway)
  }

  function handleInputChange(event) {
    const { name, value } = event.target
    onFieldChange(name, value)
  }

  return (
    <fieldset className="payment-gateway">
      <legend>Payment gateway</legend>

      <div className="payment-mode-grid" role="radiogroup" aria-label="Payment mode">
        {paymentModes.map((mode) => (
          <button
            className={
              booking.paymentMode === mode.id
                ? 'payment-mode payment-mode--active'
                : 'payment-mode'
            }
            key={mode.id}
            type="button"
            aria-pressed={booking.paymentMode === mode.id}
            onClick={() => selectPaymentMode(mode.id)}
          >
            <span className="payment-mode__meta">
              <strong>{mode.title}</strong>
              <small>{mode.description}</small>
            </span>
            <span className="payment-mode__badge">{mode.badge}</span>
          </button>
        ))}
      </div>

      {isOnlinePayment && (
        <>
          <div className="gateway-tabs" role="radiogroup" aria-label="Gateway type">
            {gatewayOptions.map((gateway) => (
              <button
                className={
                  booking.gateway === gateway.id
                    ? 'gateway-tab gateway-tab--active'
                    : 'gateway-tab'
                }
                key={gateway.id}
                type="button"
                aria-pressed={booking.gateway === gateway.id}
                onClick={() => selectGateway(gateway.id)}
              >
                <strong>{gateway.label}</strong>
                <small>{gateway.detail}</small>
              </button>
            ))}
          </div>

          <div className="gateway-fields">
            {booking.gateway === 'upi' && (
              <label>
                UPI ID
                <input
                  name="upiId"
                  type="text"
                  value={booking.upiId}
                  onChange={handleInputChange}
                  placeholder="name@bank"
                  required
                />
              </label>
            )}

            {booking.gateway === 'card' && (
              <>
                <label>
                  Name on card
                  <input
                    name="cardName"
                    type="text"
                    value={booking.cardName}
                    onChange={handleInputChange}
                    placeholder="Guest name"
                    required
                  />
                </label>
                <label>
                  Card number
                  <input
                    name="cardNumber"
                    type="text"
                    inputMode="numeric"
                    maxLength="19"
                    value={booking.cardNumber}
                    onChange={handleInputChange}
                    placeholder="4111 1111 1111 1111"
                    required
                  />
                </label>
                <div className="gateway-field-row">
                  <label>
                    Expiry
                    <input
                      name="cardExpiry"
                      type="text"
                      inputMode="numeric"
                      maxLength="5"
                      value={booking.cardExpiry}
                      onChange={handleInputChange}
                      placeholder="MM/YY"
                      required
                    />
                  </label>
                  <label>
                    CVV
                    <input
                      name="cardCvv"
                      type="password"
                      inputMode="numeric"
                      maxLength="4"
                      value={booking.cardCvv}
                      onChange={handleInputChange}
                      placeholder="123"
                      required
                    />
                  </label>
                </div>
              </>
            )}

            {booking.gateway === 'netbanking' && (
              <label>
                Bank
                <select name="bank" value={booking.bank} onChange={handleInputChange}>
                  {bankOptions.map((bank) => (
                    <option key={bank}>{bank}</option>
                  ))}
                </select>
              </label>
            )}

            {booking.gateway === 'wallet' && (
              <label>
                Wallet mobile number
                <input
                  name="walletMobile"
                  type="tel"
                  inputMode="tel"
                  value={booking.walletMobile}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                />
              </label>
            )}
          </div>
        </>
      )}

      <div className="payment-summary" aria-live="polite">
        <div>
          <span>Nightly rate</span>
          <strong>{formatCurrency(pricing.nightlyRate)}</strong>
        </div>
        <div>
          <span>{pricing.nights} night stay</span>
          <strong>{formatCurrency(pricing.subtotal)}</strong>
        </div>
        <div>
          <span>Taxes and fees</span>
          <strong>{formatCurrency(pricing.taxes)}</strong>
        </div>
        <div className="payment-summary__total">
          <span>Payable now</span>
          <strong>{formatCurrency(payableNow)}</strong>
        </div>
      </div>
    </fieldset>
  )
}

export default PaymentGateway
