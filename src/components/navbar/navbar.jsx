import React, { useState, useEffect } from "react";
import "./navbar.css";
import OHLogo from "../../assets/logo-one.png";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHidden, setIsHidden] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    let prevScrollY = 0;

    const toggleMenu = () => {
        const fullscreenMenu = document.querySelector(".fullscreen-menu");

        if (isMenuOpen) {
            fullscreenMenu.classList.add("is-exiting");
            setTimeout(() => {
                setIsMenuOpen(false);
                fullscreenMenu.classList.remove("is-exiting");
            }, 300);
        } else {
            setIsMenuOpen(true);
        }
    };

    const closeMenu = () => {
        const fullscreenMenu = document.querySelector(".fullscreen-menu");
        if (fullscreenMenu) {
            fullscreenMenu.classList.add("is-exiting");
            setTimeout(() => {
                setIsMenuOpen(false);
                fullscreenMenu.classList.remove("is-exiting");
            }, 300);
        }
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) {
                setIsMenuOpen(false); // Close mobile menu on larger screens
            }
        };

        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && currentScrollY > 50) {
                setIsHidden(true);
            } else {
                setIsHidden(false);
            }

            if (currentScrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            prevScrollY = currentScrollY;
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            className={`navbar ${isHidden ? "hidden" : ""} ${
                isScrolled ? "scrolled" : ""
            }`}
        >
            <nav className="navbar-container">
                <a href="#home" onClick={closeMenu}>
                    <img
                        alt="OH Logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        className="OH Logo"
                        src={OHLogo}
                    />
                </a>
                <button
                    className={`hamburger ${isMenuOpen ? "is-active" : ""}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
                </button>
                <div className="nav-links desktop">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#faq">FAQ</a>
                    <a href="#sponsors">Sponsors</a>
                    {/* <a href="#contact">Contact</a> */}
                </div>
                {isMenuOpen && (
                    <div className="fullscreen-menu">
                        <ul className="menu-items">
                            <li className="menu-item">
                            <a href="#home" onClick={closeMenu}>
                    <img
                        alt="OH Logo"
                        loading="lazy"
                        width="60"
                        height="60"
                        decoding="async"
                        className="OH Logo"
                        src={OHLogo}
                    />
                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#about" onClick={closeMenu}>
                                    About
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#gallery" onClick={closeMenu}>
                                    Gallery
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#faq" onClick={closeMenu}>
                                    FAQ
                                </a>
                            </li>
                            <li className="menu-item">
                                <a href="#sponsors" onClick={closeMenu}>
                                    Sponsors
                                </a>
                            </li>
                            {/* <li className="menu-item">
                                <a href="#contact" onClick={closeMenu}>
                                    Contact
                                </a>
                            </li> */}
                        </ul>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
