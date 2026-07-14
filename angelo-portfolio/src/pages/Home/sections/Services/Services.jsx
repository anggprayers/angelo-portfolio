import { FiCode, FiLayout, FiServer, FiTool } from "react-icons/fi";

import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

import "./Services.css";

const services = [
    {
        icon: <FiLayout />,
        title: "Business Websites",
        description:
            "Professional websites designed for businesses, professionals, and organizations with a focus on performance, accessibility, and user experience.",
    },
    {
        icon: <FiCode />,
        title: "Frontend Development",
        description:
            "Interactive and responsive user interfaces built with React, JavaScript, and modern CSS, following clean and maintainable coding practices.",
    },
    {
        icon: <FiServer />,
        title: "Full-Stack Web Applications",
        description:
            "RESTful APIs, authentication, database integration, and backend systems using Node.js, Express, and MongoDB.",
    },
    {
        icon: <FiTool />,
        title: "Website Maintenance",
        description:
            "Deployment, bug fixes, feature updates, performance improvements, and ongoing maintenance for modern web applications.",
    },
];

const Services = () => {
    return (
        <section className="services section" id="services">
            <div className="container">
                <SectionHeader
                    label="Services"
                    title="What I Build"
                    description="I build practical web solutions based on the needs of businesses, professionals, and growing brands."
                />

                <div className="services-grid">
                    {services.map((service, index) => (
                        <article className="service-card" key={service.title}>
                            <div className="service-card__top">
                                <span className="service-card__number">{String(index + 1).padStart(2, "0")}</span>

                                <div className="service-card__icon">{service.icon}</div>
                            </div>

                            <h3>{service.title}</h3>

                            <p>{service.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
