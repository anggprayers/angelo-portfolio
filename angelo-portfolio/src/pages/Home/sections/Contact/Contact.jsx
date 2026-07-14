import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import Button from "../../../../components/Button/Button";

import "./Contact.css";

const Contact = () => {
    return (
        <section className="contact section" id="contact">
            <div className="container">
                <div className="contact__panel">
                    <div className="contact__content">
                        <span className="section-label">Let&apos;s Work Together</span>

                        <h2>Have a project in mind or an opportunity to discuss?</h2>

                        <p>
                            I&apos;m open to freelance projects, junior development opportunities, and collaborations
                            where I can contribute while continuing to grow as a web developer.
                        </p>

                        <div className="contact__actions">
                            <Button href="mailto:angeloobrero1478@gmail.com">
                                Get In Touch
                                <FiArrowUpRight />
                            </Button>

                            <Button href="/Angelo-Obrero-CV.pdf" variant="outline" target="_blank" rel="noreferrer">
                                View Resume
                            </Button>
                        </div>
                    </div>

                    <div className="contact__details">
                        <div className="contact__detail">
                            <span>Email</span>

                            <a href="mailto:angeloobrero1478@gmail.com">angeloobrero1478@gmail.com</a>
                        </div>

                        <div className="contact__detail">
                            <span>Mobile</span>

                            <a href="tel:+639764213170">0976 421 3170</a>
                        </div>

                        <div className="contact__detail">
                            <span>Location</span>

                            <p>Philippines</p>
                        </div>

                        <div className="contact__detail">
                            <span>Availability</span>

                            <p>Open to freelance and junior web development opportunities</p>
                        </div>

                        <div className="contact__socials">
                            <a
                                href="https://github.com/anggprayers"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                            >
                                <FiGithub />
                                GitHub
                            </a>

                            <a
                                href="https://www.linkedin.com/in/angelo-obrero/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                            >
                                <FiLinkedin />
                                LinkedIn
                            </a>

                            <a href="mailto:angeloobrero1478@gmail.com" aria-label="Email">
                                <FiMail />
                                Email
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
