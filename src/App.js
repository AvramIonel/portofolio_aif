import "./App.css";
import AboutMe from "./PortofolioContainer/AboutMe/AboutMe";
import ContactMe from "./PortofolioContainer/ContactMe/ContactMe";
import Footer from "./PortofolioContainer/Footer/Footer";
import Header from "./PortofolioContainer/Header/Header";
import Intro from "./PortofolioContainer/Intro/Intro";
import PersonalProjects from "./PortofolioContainer/PersonalProjects/PersonalProjects";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <AboutMe />
      <PersonalProjects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
