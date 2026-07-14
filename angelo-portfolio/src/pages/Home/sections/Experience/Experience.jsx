import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

import "./Experience.css";

const experiences = [
    {
        period: "2025",
        role: "Software Intern",
        company: "Sognare Systems & Solutions Corp.",
        description:
            "Supported software-related tasks, worked with Odoo modules, assisted with Softdial Sytel scripting, and handled basic IT support activities.",
        highlights: ["Odoo module exposure", "Softdial Sytel scripting", "Basic IT support", "Software configuration"],
    },
    {
        period: "2025",
        role: "Freelance Web Developer",
        company: "Kukz Sportswear",
        description:
            "Designed and developed a full-stack e-commerce website featuring product browsing, user authentication, shopping cart functionality, and an admin dashboard for managing products and application data.",
        highlights: [
            "React frontend",
            "Node.js and Express backend",
            "MongoDB database",
            "RESTful APIs",
            "Authentication",
            "Admin dashboard",
        ],
    },
    {
        period: "2026",
        role: "Freelance Web Developer",
        company: "Mind Motion Therapy",
        description:
            "Designed, developed, and deployed a full-stack website for a licensed occupational therapist, including the public website, admin dashboard, backend API, database, and production setup.",
        highlights: [
            "React frontend",
            "Node.js and Express backend",
            "MongoDB and Cloudinary",
            "Admin dashboard",
            "SEO and deployment",
        ],
    },
];

const Experience = () => {
    return (
        <section className="experience section" id="experience">
            <div className="container">
                <SectionHeader
                    label="Experience"
                    title="Practical Experience and Continuous Growth"
                    description="A combination of internship experience, client work, and independent projects that helped strengthen my technical and professional skills."
                />

                <div className="experience__timeline">
                    {experiences.map((experience) => (
                        <article className="experience__item" key={`${experience.role}-${experience.company}`}>
                            <div className="experience__period">
                                <span>{experience.period}</span>
                            </div>

                            <div className="experience__content">
                                <div className="experience__heading">
                                    <div>
                                        <h3>{experience.role}</h3>
                                        <p>{experience.company}</p>
                                    </div>
                                </div>

                                <p className="experience__description">{experience.description}</p>

                                <ul className="experience__highlights">
                                    {experience.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
