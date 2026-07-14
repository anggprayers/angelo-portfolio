import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container footer__inner">
                <div>
                    <a href="#top" className="footer__brand">
                        Angelo Obrero
                    </a>

                    <p>Full-stack web developer building responsive and practical digital experiences.</p>
                </div>

                <div className="footer__socials">
                    <a href="https://github.com/anggprayers" target="_blank" rel="noreferrer" aria-label="GitHub">
                        <FiGithub />
                    </a>

                    <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <FiLinkedin />
                    </a>

                    <a href="mailto:your-email@example.com" aria-label="Email">
                        <FiMail />
                    </a>
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
