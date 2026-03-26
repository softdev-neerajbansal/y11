import { useState } from 'react'

const initialContact = {
  name: '',
  email: '',
  phone: '',
  message: '',
}

function ContactForm() {
  const [contactForm, setContactForm] = useState(initialContact)
  const [contactMessage, setContactMessage] = useState('')

  function handleContactChange(event) {
    const { name, value } = event.target
    setContactForm((current) => ({ ...current, [name]: value }))
  }

  function handleContactSubmit(event) {
    event.preventDefault()
    setContactMessage(
      `Thanks ${contactForm.name || 'there'}, our team will contact you shortly.`,
    )
    setContactForm(initialContact)
  }

  return (
    <form className="contact-form" onSubmit={handleContactSubmit}>
      <label>
        Full name
        <input
          name="name"
          type="text"
          value={contactForm.name}
          onChange={handleContactChange}
          placeholder="Your name"
          required
        />
      </label>
      <label>
        Email
        <input
          name="email"
          type="email"
          value={contactForm.email}
          onChange={handleContactChange}
          placeholder="you@example.com"
          required
        />
      </label>
      <label>
        Phone
        <input
          name="phone"
          type="tel"
          value={contactForm.phone}
          onChange={handleContactChange}
          placeholder="+91"
          required
        />
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows="5"
          value={contactForm.message}
          onChange={handleContactChange}
          placeholder="Tell us about your stay or event requirements"
          required
        />
      </label>
      <button type="submit" className="primary-button full-width">
        Send enquiry
      </button>
      {contactMessage && <p className="success-message">{contactMessage}</p>}
    </form>
  )
}

export default ContactForm
