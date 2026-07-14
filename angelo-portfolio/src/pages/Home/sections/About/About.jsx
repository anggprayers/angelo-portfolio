import { FiArrowUpRight } from "react-icons/fi";

import Button from "../../../../components/Button/Button";
import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

import "./About.css";

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <SectionHeader
                    label="About Me"
                    title="I build practical web experiences with clean design and reliable functionality."
                    description="I create responsive websites and full-stack applications that are clear, maintainable, and built around real project needs."
                />

                <div className="about__grid">
                    <div className="about__story">
                        <p>I’m Angelo Obrero, a recent graduate of Bachelor of Science in Information Technology.</p>

                        <p>
                            I work mainly with React, JavaScript, Node.js, Express, MongoDB, and SQL/MySQL. I enjoy
                            turning ideas and requirements into responsive websites and practical systems for
                            businesses, professionals, and growing brands.
                        </p>

                        <p>
                            My experience includes building, deploying, and maintaining complete projects from frontend
                            to backend while continuously improving my development workflow and technical skills.
                        </p>

                        <div className="about__actions">
                            <Button href="#projects">
                                View Projects
                                <FiArrowUpRight />
                            </Button>

                            <Button href="/Angelo-Obrero-Resume.pdf" variant="outline" target="_blank" rel="noreferrer">
                                Download Resume
                            </Button>
                        </div>
                    </div>

                    <div className="about__details">
                        <article className="about__card">
                            <span>Education</span>

                            <h3>Bachelor of Science in Information Technology</h3>

                            <p>Arellano University – Jose Abad Santos Campus</p>
                        </article>

                        <article className="about__card">
                            <span>Primary Focus</span>

                            <h3>Full-Stack Web Development</h3>

                            <p>
                                Responsive interfaces, RESTful APIs, authentication, database integration, and
                                production deployment.
                            </p>
                        </article>

                        <article className="about__card">
                            <span>Current Goal</span>

                            <h3>Freelance and Junior Development Opportunities</h3>

                            <p>
                                Contributing to real projects while continuing to strengthen my skills through client
                                and team collaboration.
                            </p>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
