import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";

import "./Footer.css";

const footerLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Working Style", href: "#working-style" },
];

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__main">
                <div className="footer__intro">
                    <a href="#top" className="footer__brand">
                        Angelo Obrero
                    </a>

                    <p>
                        Full-stack web developer building responsive websites and practical web applications for
                        businesses, professionals, and growing brands.
                    </p>
                </div>

                <div className="footer__navigation">
                    <span className="footer__label">Navigation</span>

                    <ul>
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <a href={link.href}>{link.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer__contact">
                    <span className="footer__label">Contact</span>

                    <a href="mailto:angeloobrero1478@gmail.com">
                        <FiMail />
                        angeloobrero1478@gmail.com
                    </a>

                    <a href="tel:+639764213170">
                        <FiPhone />
                        0976 421 3170
                    </a>

                    <div className="footer__socials">
                        <a href="https://github.com/anggprayers" target="_blank" rel="noreferrer" aria-label="GitHub">
                            <FiGithub />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/angelo-obrero/"
                            target="_blank"
                            rel="noreferrer"
                            aria-label="LinkedIn"
                        >
                            <FiLinkedin />
                        </a>

                        <a href="mailto:angeloobrero1478@gmail.com" aria-label="Email">
                            <FiMail />
                        </a>
                    </div>
                </div>
            </div>

            <div className="container footer__bottom">
                <p>© {currentYear} Angelo Obrero. All rights reserved.</p>

                <p>Built with React and CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;
