import { Link } from 'react-router-dom'
import BookingForm from '../components/BookingForm'
import RoomsGrid from '../components/RoomsGrid'
import {
  amenities,
  experiences,
  featuredOffers,
  heroImages,
  hotelDetails,
  hotelFacts,
  testimonials,
} from '../data/hotelData'

function HomePage() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-grid">
          <section className="hero-copy">
            <p className="badge">Pay at Hotel available on every room booking</p>
            <h2>Modern hotel living with calm rooms, seamless booking, and elevated service.</h2>
            <p className="lead">
              Designed for travelers who want convenience without compromise, Azure
              Crest combines direct booking, premium rooms, destination dining, and
              relaxed hospitality in one polished stay experience.
            </p>
            <div className="cta-row">
              <Link className="primary-button" to="/booking">
                Book your stay
              </Link>
              <Link className="secondary-button" to="/gallery">
                Explore gallery
              </Link>
            </div>
            <ul className="facts-list">
              {hotelFacts.map((fact) => (
                <li key={fact}>{fact}</li>
              ))}
            </ul>
          </section>

          <div className="hero-stack">
            <div className="hero-showcase">
              <img className="hero-showcase__image hero-showcase__image--main" src={heroImages.main} alt="Azure Crest exterior view" />
              <div className="hero-showcase__aside">
                <img className="hero-showcase__image" src={heroImages.sideTop} alt="Hotel suite interior" />
                <img className="hero-showcase__image" src={heroImages.sideBottom} alt="Hotel dining area" />
              </div>
              <div className="hero-showcase__panel">
                <p className="eyebrow">Signature stay</p>
                <h3>Skyline Suite</h3>
                <p>
                  Expansive views, curated interiors, and direct booking support for a
                  smoother arrival.
                </p>
              </div>
              <div className="hero-showcase__stats">
                <div>
                  <strong>38</strong>
                  <span>Rooms & suites</span>
                </div>
                <div>
                  <strong>4.8</strong>
                  <span>Guest score</span>
                </div>
                <div>
                  <strong>24/7</strong>
                  <span>Front desk</span>
                </div>
              </div>
            </div>
            <BookingForm compact />
          </div>
        </div>
      </section>

      <main>
        <section className="details-strip">
          {amenities.map((amenity) => (
            <span key={amenity}>{amenity}</span>
          ))}
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured offers</p>
            <h2>Book more than a room</h2>
            <p>
              Direct booking unlocks curated stay packages for leisure trips, work
              stays, and celebrations.
            </p>
          </div>
          <div className="offer-grid">
            {featuredOffers.map((offer) => (
              <article className="offer-card" key={offer.title}>
                <p className="gallery-tag">{offer.tag}</p>
                <h3>{offer.title}</h3>
                <p>{offer.description}</p>
                <Link className="text-link" to="/booking">
                  Explore package
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Featured rooms</p>
            <h2>Handpicked spaces for city escapes and family stays</h2>
            <p>
              From peaceful garden rooms to skyline suites, every stay is designed for
              comfort and thoughtful hospitality.
            </p>
          </div>
          <RoomsGrid />
          <div className="cta-row cta-row--section">
            <Link className="primary-button" to="/rooms">
              View all rooms
            </Link>
          </div>
        </section>

        <section className="section split-section">
          <article className="panel accent-panel">
            <p className="eyebrow">Experiences</p>
            <h2>More than a stay, built around how guests actually travel</h2>
            <div className="experience-list">
              {experiences.map((experience) => (
                <div className="experience-item" key={experience.title}>
                  <h3>{experience.title}</h3>
                  <p>{experience.description}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="panel panel--visual">
            <img
              className="panel-image panel-image--large"
              src={heroImages.sideBottom}
              alt="Hotel restaurant and lounge"
            />
            <p className="eyebrow">Guest favorite</p>
            <h2>Evenings move from rooftop dining to relaxed lounge corners</h2>
            <p>
              A real hotel experience feels layered. Dining, wellness, events, and
              premium service all work together to make the stay memorable.
            </p>
          </article>
        </section>

        <section className="section split-section">
          <article className="panel">
            <p className="eyebrow">Hotel details</p>
            <h2>Everything you expect from a modern premium hotel</h2>
            <p>
              Located near the central gardens, Azure Crest Retreat offers airport
              pickup, in-room dining, conference support, and custom event planning.
            </p>
            <ul className="feature-list">
              {hotelDetails.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>

          <article className="panel accent-panel">
            <p className="eyebrow">Why guests return</p>
            <h2>Designed for peaceful stays and memorable occasions</h2>
            <p>
              Guests choose us for flexible reservations, thoughtful hospitality, and
              spaces that feel calm from arrival to checkout.
            </p>
            <div className="stats-grid">
              <div>
                <strong>4.8/5</strong>
                <span>Guest rating</span>
              </div>
              <div>
                <strong>38</strong>
                <span>Premium rooms</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Dining venues</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Support desk</span>
              </div>
            </div>
          </article>
        </section>

        <section className="section">
          <div className="section-heading">
            <p className="eyebrow">Guest reviews</p>
            <h2>What guests remember after checkout</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <article className="testimonial-card" key={testimonial.name}>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
                <div className="testimonial-meta">
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default HomePage
