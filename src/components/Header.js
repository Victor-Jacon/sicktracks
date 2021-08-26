import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/" className="logo">SickTracks </Link></li>
          <li><Link to="/" className="menu-link">Home</Link></li>
          <li><Link to="/playlist" className="menu-link">Playlist</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
