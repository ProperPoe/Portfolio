import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faComputer, faEnvelope, faBars, faClose } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
    const [showNav, setShowNav] = useState(false);

    const handleClick = () => {
        setShowNav(true)
    }

    return (
        <div className='nav-bar'>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink end to="/" className={({isActive}) => isActive ? "active" : ""} >
                    <FontAwesomeIcon icon={faHome}  />
                </NavLink>
                <NavLink end to="/projects" className={({isActive}) => isActive ? "active" : ""} >
                    <FontAwesomeIcon icon={faComputer} />
                </NavLink>
                <NavLink end to="/contact" className={({isActive}) => isActive ? "active" : ""}>
                    <FontAwesomeIcon icon={faEnvelope}  />
                </NavLink>
                <FontAwesomeIcon onClick={() => setShowNav(false)} icon={faClose} color="#ffd700" size='3x' className='close-mobile-menu' />
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel="noreferrer" href="https://github.com/ProperPoe">
                        <FontAwesomeIcon icon={faGithub} color="aqua" className='icon '/>
                    </a>
                </li>
                <li className='linked'>
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/">
                        <FontAwesomeIcon icon={faLinkedinIn} color="aqua" className='icon' />
                    </a>
                </li>
            </ul>       
            <FontAwesomeIcon onClick={handleClick} icon={faBars} color="#ffd700" size='3x' className='hamburger-icon' />
        </div>
    )
}

export default Sidebar
