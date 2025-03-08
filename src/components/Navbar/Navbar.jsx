import React from "react";
import "./Navbar.scss";
import { GiPapers } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { search_icon } from "../../utils/images";
import { useSidebarContext } from "../../context/sidebarContext";
import { Link } from "react-router-dom";

function Navbar() {
    const { openSidebar } = useSidebarContext();

    return (
        <header className="header">
            <nav className="navbar container">
                <div className="navbar__logo">
                    <Link to="/"><GiPapers />Blog</Link>
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

                    <button type="button" className="navbar__search">
                        <img src={search_icon} alt="Search" />
                    </button>
                </div>

                {/* Mobile Menu Icon */}
                <button type="button" className="menu-icon" onClick={openSidebar}>
                    <FaBars />
                </button>
            </nav>
        </header>

    );
}

export default Navbar;