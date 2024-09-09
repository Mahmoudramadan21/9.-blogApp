import React from "react";
import "./Sidebar.scss";
import { FaTimes } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { useSidebarContext } from "../../context/sidebarContext";

function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();

    return (
        <aside className={`mobile-menu ${isSidebarOpen ? 'active' : ''}`}
            role="dialog" aria-modal="true" >
            <div className="container">
                <div className="menu-header">
                    <span className="logo">
                        <GiPapers />
                        <strong>Blog</strong>
                    </span>
                    <button
                        type='button'
                        className='close-menu'
                        aria-label="Close menu"
                        tabIndex="0"
                        onClick={() => closeSidebar()}
                    >
                        <FaTimes />
                    </button>
                </div>
                <nav className="mobile-links">
                    <ul>
                        <li><a href="#" className="nav-link">Home</a></li>
                        <li><a href="#" className="nav-link">Blog</a></li>
                        <li><a href="#" className="nav-link">About</a></li>
                    </ul>
                </nav>
                <address className="contact-info">
                    <p className="address"><strong>Address:</strong> 3568 Cambridge Place Laurel, MD 2905</p>
                    <p className="phone"><strong>Phone:</strong> 687-009-9780</p>
                    <p className="email"><strong>Email:</strong> <a href="mailto:blog@gmail.com">blog@gmail.com</a></p>
                </address>
            </div>
        </aside >
    );
}

export default Sidebar;
