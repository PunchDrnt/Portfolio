import React from 'react'
import { FaBars } from 'react-icons/fa'
import './Navbar.css'

const Navbar = ({ toggle }) => {
  return (
    <nav>
      <div className="nav-warpper">
        <div className="nav-icons" onClick={toggle}>
          <FaBars onClick={toggle} />
        </div>
        <div className="nav-logo">Portfolio</div>
        <ul className="nav-menu">
          {/* <li>About</li>
          <li>Skill</li>
          <li>Contect</li> */}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
