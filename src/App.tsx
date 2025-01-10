import { GlobalStyles } from "./styles/GlobalStyles";
import NavBar from "./components/NavBar";
import "./styles/Styles.css";
// import "./App.css";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/About";
import ExperienceSection from "./components/Experience";
import StarsCanvas from "./components/StarsBackground";

function App() {
    return (
        <div id="canvas-container">
            <GlobalStyles />
            <StarsCanvas />
            <NavBar />
            <HeroSection />
            <AboutSection />
            <ExperienceSection />
        </div>
    );
}

export default App;
