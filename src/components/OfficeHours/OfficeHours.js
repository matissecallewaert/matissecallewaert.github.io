import React from "react";
import Window from "../Window/Window";
import "./OfficeHours.css";

const OfficeHours = () => {
  return (
    <Window title="OFFICE HOURS" className="office-hours" type="browser">
      <p>Want to chat? I'm here.</p>
      <div>
        <a href="https://calendly.com/rachelyhe" className="button">
          CALENDLY
        </a>
        <a href="/faq" className="button">
          FAQ
        </a>
      </div>
    </Window>
  );
};

export default OfficeHours;
