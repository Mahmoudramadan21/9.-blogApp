import React, { useCallback } from "react";
import "./Sidebar.scss";
import { FaTimes } from "react-icons/fa";
import { GiPapers } from "react-icons/gi";
import { useSidebarContext } from "../../context/sidebarContext";

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useSidebarContext();

    const handleLinkClick = useCallback(() => {
        closeSidebar();
    }, [closeSidebar]);

    return (
        <aside className={`sidebar ${isSidebarOpen ? 'sidebar--open' : ''}`}
            role="dialog" aria-modal="true" aria-labelledby="sidebar-title"
            aria-hidden={!isSidebarOpen}>
            <div className="container">
                <div className="sidebar__header">
                    <span className="sidebar__logo" id="sidebar-title">
                        <GiPapers />
                        <strong>Blog</strong>
                    </span>
                    <button
                        type='button'
                        className='sidebar__close-btn'
                        aria-label="Close menu"
                        tabIndex={isSidebarOpen ? 0 : -1}
                        onClick={closeSidebar}
                    >
                        <FaTimes />
                    </button>
                </div>
                <nav className="sidebar__nav" aria-label="Sidebar navigation">
                    <ul className="sidebar__nav-list">
                        <li>
                            <a
                                href="#"
                                className="sidebar__nav-link"
                                tabIndex={isSidebarOpen ? 0 : -1}
                                onClick={handleLinkClick}
                            >Home</a>
                        </li>
                        <li>
                            <a
                                href="#blogs"
                                className="sidebar__nav-link"
                                tabIndex={isSidebarOpen ? 0 : -1}
                                onClick={handleLinkClick}
                            >Blog</a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="sidebar__nav-link"
                                tabIndex={isSidebarOpen ? 0 : -1}
                                onClick={handleLinkClick}
                            >About</a>
                        </li>
                    </ul>
                </nav>
                <address className="sidebar__contact">
                    <p className="sidebar__contact-item"><strong>Address:</strong> 3568 Cambridge Place Laurel, MD 2905</p>
                    <p className="sidebar__contact-item"><strong>Phone:</strong> 687-009-9780</p>
                    <p className="sidebar__contact-item"><strong>Email:</strong> <a href="mailto:blog@gmail.com" tabIndex={isSidebarOpen ? 0 : -1}>blog@gmail.com</a></p>
                </address>
            </div>
        </aside>
    );
};

export default Sidebar;