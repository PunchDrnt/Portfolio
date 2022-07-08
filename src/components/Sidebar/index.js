import React from 'react'
import { FaTimes } from 'react-icons/fa'
import './Sidebar.css'

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <aside className={isOpen ? 'sidebar active' : 'sidebar'}>
      <div className="side-warpper">
        <div className="close-icons">
          <FaTimes onClick={toggle} />
        </div>
        <ul className="nav-menu" onClick={toggle}>
          {/* <li>About</li>
          <li>Skill</li>
          <li>Contact</li> */}
        </ul>
      </div>
      <div className="blur" onClick={toggle} />
    </aside>
  )
}

export default Sidebar
