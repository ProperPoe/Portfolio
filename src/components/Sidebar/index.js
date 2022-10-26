import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.css'

function Sidebar() {
    return (
        <div className='nav-bar'>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    Home
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    Projects
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact">
                    Contact
                </NavLink>
            </nav>
        </div>
    )
}

export default Sidebar
