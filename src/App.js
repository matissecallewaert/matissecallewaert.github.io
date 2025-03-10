import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Links from "./components/Links/Links";
import RustiFlow from "./components/RustiFlow/RustiFlow";
import BashBuddy from "./components/BashBuddy/BashBuddy";
import Clock from "./components/Clock/Clock";
import CV from "./components/CV/CV";
import VerticalToolbar from "./components/VerticalToolBar/VerticalToolBar";
import ArtPortfolio from "./components/ArtPortfolio/ArtPortfolio";
import AITetris from "./components/AITetris/AITetris";
import GuidGenerator from "./components/GuidGenerator/GuidGenerator";

const AppContent = () => {
  const [windows, setWindows] = useState({
    bashbuddy: false,
    rustiflow: false,
    "art-portfolio": false,
    "ai-tetris": false,
    "guid-generator": false,
    links: true,
    "clock-window": true,
    "about-me": true,
    projects: true,
  });

  const location = useLocation();

  useEffect(() => {
    const savedWindowStates = localStorage.getItem("windowStates");
    if (savedWindowStates) {
      setWindows(JSON.parse(savedWindowStates));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("windowStates", JSON.stringify(windows));
  }, [windows]);

  const handleWindowClose = (windowClass) => {
    setWindows((prevWindows) => ({
      ...prevWindows,
      [windowClass]: false,
    }));
  };

  const showToolbar = location.pathname !== "/cv";

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div className="components-container">
              {windows["links"] && <Links onClose={handleWindowClose} />}
              {windows["clock-window"] && <Clock onClose={handleWindowClose} />}
              {windows["about-me"] && <AboutMe onClose={handleWindowClose} />}
              {windows["projects"] && <Projects onClose={handleWindowClose} />}
              {windows["bashbuddy"] && (
                <BashBuddy onClose={handleWindowClose} />
              )}
              {windows["rustiflow"] && (
                <RustiFlow onClose={handleWindowClose} />
              )}
              {windows["art-portfolio"] && (
                <ArtPortfolio onClose={handleWindowClose} />
              )}
              {windows["ai-tetris"] && <AITetris onClose={handleWindowClose} />}
              {windows["guid-generator"] && (
                <GuidGenerator onClose={handleWindowClose} />
              )}
            </div>
          }
        />
        <Route path="/cv" element={<CV />} />
      </Routes>
      {showToolbar && (
        <VerticalToolbar windows={windows} setWindows={setWindows} />
      )}
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
export default App;
