import SectionHeader from "../../../../components/SectionHeader/SectionHeader";

import "./WorkingStyle.css";

const workingStyles = [
    {
        title: "Clear Communication",
        description:
            "I believe successful projects begin with clear communication. I work closely with clients to understand their goals, provide regular updates, and keep expectations aligned throughout the development process.",
    },
    {
        title: "Detail-Oriented",
        description:
            "I take time to understand the problem before writing code. From planning layouts to debugging backend logic, I focus on clean, maintainable solutions and thoughtful implementation.",
    },
    {
        title: "Continuous Learning",
        description:
            "Technology evolves quickly, so I continuously improve my skills by building real projects, exploring modern development practices, and learning new tools that improve the quality of my work.",
    },
    {
        title: "AI-Assisted Development",
        description:
            "I regularly use AI-assisted development tools to accelerate coding, debugging, documentation, and learning. They help improve productivity while I remain responsible for implementation, testing, and final decisions.",
    },
];

const WorkingStyle = () => {
    return (
        <section className="working-style section" id="working-style">
            <div className="container">
                <SectionHeader
                    label="What You Can Expect"
                    title="How I Work"
                    description="Beyond writing code, I value communication, continuous learning, and delivering reliable solutions that clients can confidently build upon."
                />

                <div className="working-style__grid">
                    {workingStyles.map((item) => (
                        <article className="working-style__card" key={item.title}>
                            <h3>{item.title}</h3>

                            <p>{item.description}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkingStyle;
