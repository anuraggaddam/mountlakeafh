import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">

 
      </Link>

      <button 
        className="mobile-toggle" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Navigation"
      >
        {isOpen ? '✕' : '☰'}
      </button>

      <ul className={`navbar-menu ${isOpen ? 'open' : ''}`}>
        <li className="navbar-item"><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li className="navbar-item"><Link to="/care" onClick={() => setIsOpen(false)}>Our Care</Link></li>
      
        <li className="navbar-item"><Link to="/ourhome" onClick={() => setIsOpen(false)}>Our Home</Link></li>
        <li className="navbar-item"><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
      </ul>

     
    </nav>
  )
}

export default Navbar
