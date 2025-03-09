import "./App.css";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Links from "./components/Links/Links";
import RustiFlow from "./components/RustiFlow/RustiFlow";
import BashBuddy from "./components/BashBuddy/BashBuddy";
import Clock from "./components/Clock/Clock";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="components-container">
        <Links />
        <Clock />
        <BashBuddy />
        <RustiFlow />
        <AboutMe />
        <Projects />
      </div>
    </div>
  );
}

export default App;
