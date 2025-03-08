import React from "react";
import "./Sidebar.scss";
import { FaTimes } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { useSidebarContext } from "../../context/sidebarContext";

function Sidebar() {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}
            role="dialog" aria-modal="true" >
            <div className="container">
                <div className="sidebar__header">
                    <span className="sidebar__logo">
                        <GiPapers />
                        <strong>Blog</strong>
                    </span>
                    <button
                        type='button'
                        className='sidebar__close-btn'
                        aria-label="Close menu"
                        tabIndex="0"
                        onClick={() => closeSidebar()}
                    >
                        <FaTimes />
                    </button>
                </div>
                <nav className="sidebar__nav">
                    <ul className="sidebar__nav-list">
                        <li><a href="#" className="sidebar__nav-link">Home</a></li>
                        <li><a href="#" className="sidebar__nav-link">Blog</a></li>
                        <li><a href="#" className="sidebar__nav-link">About</a></li>
                    </ul>
                </nav>
                <address className="sidebar__contact">
                    <p className="sidebar__contact-item"><strong>Address:</strong> 3568 Cambridge Place Laurel, MD 2905</p>
                    <p className="sidebar__contact-item"><strong>Phone:</strong> 687-009-9780</p>
                    <p className="sidebar__contact-item"><strong>Email:</strong> <a href="mailto:blog@gmail.com">blog@gmail.com</a></p>
                </address>
            </div>
        </aside >
    );
}

export default Sidebar;
