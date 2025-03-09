import React, { useEffect } from "react";
import "./Navbar.scss";
import { GiPapers } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { search_icon } from "../../utils/images";
import { useSidebarContext } from "../../context/sidebarContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { openSidebar } = useSidebarContext();

    useEffect(() => {
        console.log("Hello from navbar")
    }, [])

    return (
        <header className="header" role="banner">
            <nav className="navbar container" aria-label="Main navigation">
                <div className="navbar__logo">
                    <Link to="/" aria-label="Go to homepage"><GiPapers />Blog</Link>
                </div>

                <div className="navbar__actions">
                    <ul className="navbar__menu">
                        <li className="navbar__item">
                            <Link to="/" className="navbar__link">Home</Link>
                        </li>
                        <li className="navbar__item">
                            <a href="#blogs" className="navbar__link">Blog</a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">About</a>
                        </li>
                    </ul>

                    <button type="button" className="navbar__search" aria-label="Search">
                        <img src={search_icon} alt="Search" />
                    </button>
                </div>

                <button type="button" className="menu-icon" onClick={openSidebar} aria-label="Open menu">
                    <FaBars />
                </button>
            </nav>
        </header>
    );
}

export default Navbar;