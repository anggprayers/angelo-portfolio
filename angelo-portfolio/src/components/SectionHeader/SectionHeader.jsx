import "./SectionHeader.css";

const SectionHeader = ({ label, title, description, align = "left" }) => {
    return (
        <header className={`section-header section-header--${align}`}>
            {label && <span className="section-label">{label}</span>}

            <h2>{title}</h2>

            {description && <p>{description}</p>}
        </header>
    );
};

export default SectionHeader;
