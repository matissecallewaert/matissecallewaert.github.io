import React from "react";
import Window from "../Window/Window";
import "./Projects.css";

const Projects = () => {
  return (
    <Window title="DESIGN.CC" className="projects">
      <h3>Stuff I've done</h3>
      <p>
        During daylight hours I work on climate at{" "}
        <a href="https://stripe.com/climate">Stripe</a> and{" "}
        <a href="https://frontierclimate.com/">Frontier</a>.
      </p>
      <p>
        In previous lives I've led design at{" "}
        <a href="https://carbondirect.com">Carbon Direct</a>, designed creator
        tools at <a href="https://spotify.design/">Spotify</a>, and helped
        improve core consumer experiences at{" "}
        <a href="https://airbnb.design/">Airbnb</a> &{" "}
        <a href="https://doordash.design/">DoorDash</a>.
      </p>
      <p>
        On the side, I'm usually either spending time in the great outdoors or
        working to green the web. I am an alum of the{" "}
        <a href="#">"Earth 1.0" cohort</a> at The Strange Foundation and I
        helped build community through <a href="#">Climate Designers</a>.
      </p>
      <p>
        On climate, I've been a part of the{" "}
        <a href="#">solar powered media project</a>. Most recently I wrote a
        foreword for the book on <a href="#">Sustainable Web Design</a>.
      </p>
      <img
        src="/api/placeholder/80/80"
        alt="Matisse's avatar"
        className="avatar"
      />
    </Window>
  );
};

export default Projects;
