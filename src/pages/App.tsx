import GlobalStyles from "../styles/GlobalStyles";
import NavBar from "../components/layout/NavBar";
import "../styles/Styles.css";
// import "./App.css";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/About";
import ExperienceSection from "../components/Experience";
import StarsCanvas from "../components/common/StarsBackground";
import Footer from "../components/layout/Footer";
import Projects from "../components/Projects";

function App() {
    return (
        <div id="canvas-container">
            <GlobalStyles />
            <StarsCanvas />
            <NavBar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
            <Projects />
            <Footer />
        </div>
    );
}

export default App;
