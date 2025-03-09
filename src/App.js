import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Links from "./components/Links/Links";
import OfficeHours from "./components/OfficeHours/OfficeHours";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="column-container">
        <div className="column">
          <div className="column-item">
            <Projects />
          </div>
          <div className="column-item">
            <OfficeHours />
          </div>
        </div>
        <div className="column">
          <div className="column-item">
            <AboutMe />
          </div>
          <div className="column-item">
            <Links />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
