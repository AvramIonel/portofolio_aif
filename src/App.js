import "./App.css";
import AboutMe from "./PortofolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortofolioContainer/ContactMe/ContactMe";
import Intro from "./PortofolioContainer/Intro/Intro";
import PersonalProjects from "./PortofolioContainer/PersonalProjects/PersonalProjects";

function App() {
  return (
    <div className="App">
      <Intro />
      <AboutMe />
      <PersonalProjects />
      <ContactMe />
    </div>
  );
}

export default App;
