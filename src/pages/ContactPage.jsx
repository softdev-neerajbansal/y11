import ContactForm from '../components/ContactForm'
import { contactImage } from '../data/hotelData'

function ContactPage() {
  return (
    <main className="page-content">
      <section className="page-hero">
        <p className="eyebrow">Contact us</p>
        <h2>Plan your stay, event, or group booking</h2>
        <p>
          Send your questions and our team will help with room selection, pricing,
          celebrations, or special requests.
        </p>
      </section>
      <section className="section section--tight contact-layout">
        <div className="contact-details">
          <img className="panel-image" src={contactImage} alt="Hotel concierge desk" />
          <div>
            <h3>Address</h3>
            <p>18 Garden Boulevard, Central District, New Delhi</p>
          </div>
          <div>
            <h3>Call</h3>
            <p>+91 98765 43210</p>
          </div>
          <div>
            <h3>Email</h3>
            <p>stay@azurecrestretreat.com</p>
          </div>
        </div>

        <ContactForm />
      </section>
    </main>
  )
}

export default ContactPage
