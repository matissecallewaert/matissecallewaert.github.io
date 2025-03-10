import React, { useState, useEffect } from "react";
import "@south-paw/typeface-minecraft";
import "./Clock.css";
import Window from "../Window/Window";

const Clock = ({ onClose }) => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    return `${hours}:${minutes}`;
  };

  return (
    <Window
      title="Clock"
      className="clock-window"
      onClose={() => onClose && onClose("clock-window")}
    >
      <div className="clock minecraft-dark-gray">{formatTime(time)}</div>
    </Window>
  );
};

export default Clock;
