import React, { useState } from 'react'
import '../Header/Header.css'

export default function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="navbar-header">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#home">Sathuragiri</a>
          <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className={`navbar-nav ms-auto nav-links ${menuOpen ? 'mobile-nav' : ''}`}>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu} href="#home">Home</a></li>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu} href="#about">About</a></li>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu} href="#experience">Experience</a></li>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu} href="#skills">Skills</a></li>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu} href="#education">Education</a></li>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu} href="#project">Projects</a></li>
              <li className="nav-item"><a className="nav-link" onClick={toggleMenu} href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
