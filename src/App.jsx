import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Home } from './pages/Home'
import { Doctors } from './pages/Doctors'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Login } from './pages/Login'
import { Profile } from './pages/Profile'
import { MyAppointments } from './pages/MyAppointments'
import { Appointments } from './pages/Appointments'
import { Navbar } from './componets/Navbar'
import { Footer } from './componets/Footer'

function App() {

  return (
    <div className="mx-4 sm:mx-[10%]">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/doctors/:speciality" element={<Doctors />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/my-appointments" element={<MyAppointments />} />
      <Route path="/appointments:/docId" element={<Appointments />} />
    </Routes>
    <Footer />
    </div>
  )
}

export default App
