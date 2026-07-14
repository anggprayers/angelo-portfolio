import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

import ProjectCard from "./ProjectCard";
import projects from "./projectsData";

import "./Project.css";

const Projects = () => {
    return (
        <section className="projects section" id="projects">
            <div className="container">
                <SectionHeader
                    label="Projects"
                    title="Featured Projects"
                    description="A selection of full-stack projects that reflect my experience in frontend development, backend APIs, databases, deployment, and production setup."
                />

                <div className="projects__list">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
