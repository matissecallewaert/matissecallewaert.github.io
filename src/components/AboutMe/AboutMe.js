import React from "react";
import Window from "../Window/Window";
import "./AboutMe.css";

const AboutMe = ({ onClose }) => {
  return (
    <Window
      title="https://about.me"
      className="about-me"
      type="browser"
      onClose={() => onClose && onClose("about-me")}
    >
      <h3>ABOUT ME</h3>
      <div className="about-me-content">
        <p>
          I'm an enthusiastic and motivated person who loves learning new things
          📚, tackling <strong>complex problems</strong>, and working in a{" "}
          <strong>team</strong> 🤝. I also enjoy staying active and pushing my
          physical limits 🏋️. Lately, I’ve been focusing on functional training,
          especially <strong>calisthenics</strong> 🤸, to build real strength
          and control. Beyond that, I love watching movies 🎬 and series 📺, and
          I occasionally dive into <strong>video games</strong> 🎮 for fun.
        </p>
        <img src="me.jpg" alt="Me" className="me" />
      </div>
    </Window>
  );
};

export default AboutMe;
