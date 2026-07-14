import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

import Button from "../Button/Button";

import "./Navbar.css";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 820) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <header className="navbar">
            <div className="container navbar__inner">
                <a href="#top" className="navbar__brand" onClick={closeMenu}>
                    Angelo Obrero
                </a>

                <button
                    className="navbar__toggle"
                    type="button"
                    aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setIsOpen((current) => !current)}
                >
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

                <nav
                    id="primary-navigation"
                    className={`navbar__menu ${isOpen ? "is-open" : ""}`}
                    aria-label="Primary navigation"
                >
                    <ul className="navbar__links">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} onClick={closeMenu}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <Button href="#contact" onClick={closeMenu}>
                        Contact Me
                    </Button>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
