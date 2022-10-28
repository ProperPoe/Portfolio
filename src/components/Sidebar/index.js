import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faComputer, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

function Sidebar() {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink end to="/" className={({isActive}) => isActive ? "active" : ""} >
                    <FontAwesomeIcon icon={faHome}  />
                </NavLink>
                <NavLink end to="/projects" className={({isActive}) => isActive ? "active" : ""} >
                    <FontAwesomeIcon icon={faComputer} />
                </NavLink>
                <NavLink end to="/contact" className={({isActive}) => isActive ? "active" : ""}>
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
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
        </div>
    )
}

export default Sidebar
