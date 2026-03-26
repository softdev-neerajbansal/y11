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
      <header className="site-header">
        <div className="site-header__brand">
          <p className="eyebrow">Azure Crest Retreat</p>
          <h1 className="brand brand--small">Neeraj Bansal</h1>
        </div>
        <nav className="nav-links">
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
          Reserve now
        </NavLink>
      </header>
      <Outlet />
      <footer className="footer">
        <p>Azure Crest Retreat</p>
        <p>Flexible room booking with pay at hotel, premium rooms, and full guest support.</p>
      </footer>
    </>
  )
}

export default Layout
