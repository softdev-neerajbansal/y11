import { NavLink, Outlet } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/rooms', label: 'Rooms' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/booking', label: 'Booking' },
  { to: '/contact', label: 'Contact' },
]

function Layout() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <NavLink to="/" className="site-header__brand" aria-label="Azure Crest Retreat home">
          <span className="brand-mark">AC</span>
          <span className="brand-lockup">
            <span className="eyebrow">Azure Crest Retreat</span>
            <span className="brand brand--small">Neeraj Sharma</span>
          </span>
        </NavLink>
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'nav-pill nav-pill--active' : 'nav-pill'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <NavLink to="/booking" className="header-cta">
          Book stay
        </NavLink>
      </header>
      <div id="main-content">
        <Outlet />
      </div>
      <footer className="footer">
        <div className="footer__brand">
          <span className="brand-mark brand-mark--footer">AC</span>
          <div>
            <p>Azure Crest Retreat</p>
            <span>Premium rooms, flexible booking, and full guest support.</span>
          </div>
        </div>
        <p>Pay online or pay at hotel with direct reservation assistance.</p>
      </footer>
    </>
  )
}

export default Layout
