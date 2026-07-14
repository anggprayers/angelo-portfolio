import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

import "./Skills.css";

const skillCategories = [
    {
        title: "Frontend",
        description: "Building responsive, accessible, and user-friendly interfaces with modern web technologies.",
        skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
    },
    {
        title: "Backend",
        description: "Developing RESTful APIs, authentication, and database-driven applications.",
        skills: ["Node.js", "Express.js", "MongoDB", "SQL / MySQL", "RESTful APIs"],
    },
    {
        title: "Tools & Workflow",
        description:
            "Using modern development tools, deployment platforms, version control, and AI-assisted workflows to build projects efficiently.",
        skills: ["Git", "GitHub", "Vercel", "Render", "Cloudflare", "MongoDB Atlas", "AI-Assisted Development"],
    },
];

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <div className="container">
                <SectionHeader
                    label="Skills"
                    title="Technologies I Work With"
                    description="A collection of technologies, tools, and workflows I use to build, deploy, and maintain modern web applications."
                />

                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <article key={category.title} className="skills-card">
                            <h3>{category.title}</h3>

                            <p className="skills-card__description">{category.description}</p>

                            <ul>
                                {category.skills.map((skill) => (
                                    <li key={skill}>{skill}</li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
