import { FiArrowDownRight, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

import Button from "../../../../components/Button/Button";

import angeloPhoto from "../../../../assets/images/angelo-photo.png";

import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero" id="top">
            <div className="container hero__container">
                <div className="hero__content">
                    <div className="hero__availability">
                        <span className="hero__availability-dot"></span>
                        Available for freelance opportunities
                    </div>

                    <p className="hero__eyebrow">Web Developer</p>

                    <h1>I build modern websites that help businesses establish a stronger online presence.</h1>

                    <p className="hero__description">
                        I’m Angelo Obrero, a web developer focused on building responsive websites and practical
                        full-stack applications for businesses, professionals, and growing brands.
                    </p>

                    <div className="hero__actions">
                        <Button href="#projects">
                            View My Work
                            <FiArrowDownRight />
                        </Button>

                        <Button href="#contact" variant="outline">
                            Contact Me
                        </Button>
                    </div>

                    <div className="hero__socials">
                        <a href="https://github.com/anggprayers" aria-label="GitHub" target="_blank" rel="noreferrer">
                            <FiGithub />
                            <span>GitHub</span>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/angelo-obrero/"
                            aria-label="LinkedIn"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FiLinkedin />
                            <span>LinkedIn</span>
                        </a>

                        <a href="angeloobrero1478@gmail.com" aria-label="Email">
                            <FiMail />
                            <span>Email</span>
                        </a>
                    </div>
                </div>

                <div className="hero__visual">
                    <div className="hero__image-frame">
                        <div className="hero__image-background"></div>

                        <img src={angeloPhoto} alt="Angelo Obrero, full-stack web developer" className="hero__image" />

                        <div className="hero__floating-card hero__floating-card--top">
                            <span>Based in</span>
                            <strong>Philippines</strong>
                        </div>

                        <div className="hero__floating-card hero__floating-card--bottom">
                            <span>Focused on</span>
                            <strong>Web Development</strong>
                        </div>
                    </div>

                    <div className="hero__experience">
                        <div>
                            <strong>2+</strong>
                            <span>Completed projects</span>
                        </div>

                        <div>
                            <strong>MERN</strong>
                            <span>Primary stack</span>
                        </div>

                        <div>
                            <strong>100%</strong>
                            <span>Responsive builds</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
