import React from 'react';
import "./Navbar.scss";
import { GiPapers } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { search_icon } from '../../utils/images';
import { useSidebarContext } from '../../context/sidebarContext';
import { Link } from 'react-router-dom';

function Navbar() {
    const { openSidebar } = useSidebarContext();

    return (
        <header className="navbar">
            <div className="container">
                <div className="logo">
                    <Link to={`/`}>
                        <span className="logo">
                            <GiPapers />
                        </span>
                        <span>Blog</span>
                    </Link>
                </div>
                <nav className="navbar-links">
                    <ul>
                        <li><a href="#" className='nav-link'>Home</a></li>
                        <li><a href="#" className='nav-link'>Blog</a></li>
                        <li><a href="#" className='nav-link'>About</a></li>
                    </ul>
                </nav>
                <div className="navbar-icons">
                    <button type='button' className='search-icon'>
                        <img src={search_icon} alt="Search" />
                    </button>
                    <button type='button' className='menu-icon' onClick={() => openSidebar()}>
                        <FaBars />
                    </button>
                </div>
            </div>
        </header>
    );
}

export default Navbar;
