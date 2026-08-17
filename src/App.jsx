import Navbar from './Navbar.jsx'
import './App.css'
import Care from "./Care.jsx"
import Home from "./Home.jsx"
import Rooms from "./Rooms.jsx"
import Contact from "./Contact.jsx"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/care" element={<Care />} />
        <Route path="/ourhome" element={<Rooms />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
