import React from "react";
import Window from "../Window/Window";
import "./Projects.css";

const Projects = () => {
  return (
    <Window title="MATISSE CALLEWAERT" className="projects">
      <h3>Stuff I've done</h3>
      <p>
        I've always loved solving problems and building cool things. I started
        with a master's in information theory and am now finishing my second in
        computer engineering. Along the way, I gained hands-on experience
        through internships at{" "}
        <a href="https://we-are.be" target="_blank" rel="noopener noreferrer">
          We Are
        </a>
        , where I worked with modern tech stacks and real-world software
        development.
      </p>
      <p>
        For my thesis projects, I built{" "}
        <a
          href="https://github.com/idlab-discover/RustiFlow"
          target="_blank"
          rel="noopener noreferrer"
        >
          RustiFlow
        </a>{" "}
        at{" "}
        <a
          href="https://idlab.technology/"
          target="_blank"
          rel="noopener noreferrer"
        >
          IDLab
        </a>
        , which even led to a published paper, and worked with{" "}
        <a
          href="https://www.datameister.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          DataMeister
        </a>{" "}
        on using machine learning to clean up 3D meshes. I also worked at{" "}
        <a
          href="https://www.alternatief.ai/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Alternatiefbv
        </a>
        , a SaaS company focused on invoice management and payment reminders.
      </p>
      <p>
        Outside of work, I redesigned a company website with a friend and built
        personal projects like{" "}
        <a
          href="https://github.com/matissecallewaert/ai-tetris"
          target="_blank"
          rel="noopener noreferrer"
        >
          ai-tetris
        </a>{" "}
        (a genetic algorithm for Tetris),
        <a
          href="https://github.com/matissecallewaert/bashbuddy"
          target="_blank"
          rel="noopener noreferrer"
        >
          bashbuddy
        </a>
        ,{" "}
        <a
          href="https://github.com/matissecallewaert/rshttps"
          target="_blank"
          rel="noopener noreferrer"
        >
          rshttp
        </a>
        ,{" "}
        <a
          href="https://github.com/matissecallewaert/art-portfolio"
          target="_blank"
          rel="noopener noreferrer"
        >
          art-portfolio
        </a>
        , and a{" "}
        <a
          href="https://github.com/matissecallewaert/GUID-generator"
          target="_blank"
          rel="noopener noreferrer"
        >
          GUID-generator
        </a>
        . I also contributed to{" "}
        <a
          href="https://github.com/ManuDeBuck/random-image-picker"
          target="_blank"
          rel="noopener noreferrer"
        >
          random-image-picker
        </a>{" "}
        because I love open-source projects.
      </p>
      <p>
        Everything I do is about learning, building, and pushing myself further.
        There's always something new to create!
      </p>
    </Window>
  );
};

export default Projects;
