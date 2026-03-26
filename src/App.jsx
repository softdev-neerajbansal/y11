import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import BookingPage from './pages/BookingPage'
import ContactPage from './pages/ContactPage'
import GalleryPage from './pages/GalleryPage'
import HomePage from './pages/HomePage'
import RoomsPage from './pages/RoomsPage'
import './App.css'

function App() {
  return (
    <div className="page-shell">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="rooms" element={<RoomsPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="booking" element={<BookingPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
