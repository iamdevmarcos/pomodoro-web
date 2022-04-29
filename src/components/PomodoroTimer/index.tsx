import React, { useState } from "react";
import { PomodoroTimerProps } from "../../interfaces/pomodoro";

import { useInterval } from "../../hooks/useInterval";

import { Timer, Button } from "../index";

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ defaultTimer }) => {
  const [mainTime, setMainTime] = useState(defaultTimer);

  useInterval(() => {
    setMainTime((prevState) => prevState - 1);
  }, 1000);

  return (
    <div className="timer">
      <h2>You are: working</h2>
      <Timer mainTime={mainTime} />
      <Button title="teste" onClick={() => alert("Starting...")} />
    </div>
  );
};

export default PomodoroTimer;
