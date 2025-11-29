import "./App.css";
import {
  BrowserRouter as HashRouter,
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
import Timeline from "./components/Timeline/Timeline";
import DynaRoster from "./components/DynaRoster/DynaRoster";
import Strategoo from "./components/Strategoo/Strategoo";
import Award from "./components/Award/Award";

const AppContent = () => {
  const [windows, setWindows] = useState({
    bashbuddy: false,
    rustiflow: false,
    "art-portfolio": false,
    "ai-tetris": false,
    "guid-generator": false,
    dynaroster: false,
    strategoo: false,
    award: true,
    timeline: true,
    links: true,
    "clock-window": true,
    "about-me": true,
    projects: true,
  });
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Check if the device is mobile based on screen width
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Common breakpoint for mobile devices
    };

    // Initial check
    checkMobile();

    // Listen for window resize events
    window.addEventListener("resize", checkMobile);

    // Cleanup event listener
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
    if (!isMobile) {
      setWindows((prevWindows) => ({
        ...prevWindows,
        [windowClass]: false,
      }));
    }
  };

  const showToolbar = location.pathname !== "/cv" && !isMobile;

  // Render all windows for mobile regardless of their state
  const renderMobileWindows = () => {
    return (
      <div className="mobile-components-container">
        <AboutMe />
        <Award />
        <Projects />
        <Timeline />
        <Links />
        <Clock />
        <Strategoo />
        <RustiFlow />
        <DynaRoster />
        <BashBuddy />
        <AITetris />
        <ArtPortfolio />
        <GuidGenerator />
      </div>
    );
  };

  // Render desktop windows based on their state
  const renderDesktopWindows = () => {
    return (
      <div className="desktop-components-container">
        {windows["clock-window"] && <Clock onClose={handleWindowClose} />}
        {windows["projects"] && <Projects onClose={handleWindowClose} />}
        {windows["timeline"] && <Timeline onClose={handleWindowClose} />}
        {windows["links"] && <Links onClose={handleWindowClose} />}
        {windows["dynaroster"] && <DynaRoster onClose={handleWindowClose} />}
        {windows["strategoo"] && <Strategoo onClose={handleWindowClose} />}
        {windows["bashbuddy"] && <BashBuddy onClose={handleWindowClose} />}
        {windows["rustiflow"] && <RustiFlow onClose={handleWindowClose} />}
        {windows["art-portfolio"] && (
          <ArtPortfolio onClose={handleWindowClose} />
        )}
        {windows["ai-tetris"] && <AITetris onClose={handleWindowClose} />}
        {windows["guid-generator"] && (
          <GuidGenerator onClose={handleWindowClose} />
        )}
        {windows["about-me"] && <AboutMe onClose={handleWindowClose} />}
        {windows["award"] && <Award onClose={handleWindowClose} />}
      </div>
    );
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={isMobile ? renderMobileWindows() : renderDesktopWindows()}
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
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

export default App;
