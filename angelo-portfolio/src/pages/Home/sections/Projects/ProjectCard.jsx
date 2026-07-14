import { FiArrowUpRight, FiGithub } from "react-icons/fi";

import Button from "../../../../components/Button/Button";

import "./Project.css";

const ProjectCard = ({ project }) => {
    return (
        <article className="project-card">
            <div className="project-card__browser">
                <div className="project-card__browser-bar">
                    <div className="project-card__browser-dots">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className="project-card__browser-url">
                        {project.liveDemo !== "#" ? project.liveDemo.replace("https://", "") : project.title}
                    </div>
                </div>

                <div className="project-card__image">
                    <img src={project.image} alt={`${project.title} website preview`} loading="lazy" />
                </div>
            </div>

            <div className="project-card__content">
                <span className="project-card__badge">{project.featured ? "Featured Project" : "Project"}</span>

                <h3>{project.title}</h3>

                <p className="project-card__subtitle">{project.subtitle}</p>

                <p className="project-card__overview">{project.overview}</p>

                <div className="project-card__stack">
                    {project.stack.map((tech) => (
                        <span key={tech}>{tech}</span>
                    ))}
                </div>

                <div className="project-card__features">
                    <h4>Highlights</h4>

                    <ul>
                        {project.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                </div>

                <div className="project-card__actions">
                    <Button href={project.liveDemo} target="_blank" rel="noreferrer">
                        Live Demo
                        <FiArrowUpRight />
                    </Button>

                    <Button href={project.github} variant="outline" target="_blank" rel="noreferrer">
                        GitHub
                        <FiGithub />
                    </Button>
                </div>
            </div>
        </article>
    );
};

export default ProjectCard;
