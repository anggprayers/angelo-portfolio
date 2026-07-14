// import SEO from "../../components/SEO/SEO";

import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Skills from "./sections/Skills/Skills";
import Services from "./sections/Services/Services";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import WorkingStyle from "./sections/WorkingStyle/WorkingStyle";
import Contact from "./sections/Contact/Contact";

import "./Home.css";

const Home = () => {
    return (
        <>
            {/* <SEO
                title="Angelo Obrero | Full-Stack Web Developer"
                description="Portfolio of Angelo Obrero, a full-stack web developer building responsive websites and practical web applications."
            /> */}

            <div className="page">
                <Hero />
                <About />
                <Skills />
                <Services />
                <Projects />
                <Experience />
                <WorkingStyle />
                <Contact />
            </div>
        </>
    );
};

export default Home;
