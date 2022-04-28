import React, { useState } from "react";
import { useInterval } from "../../hooks/useInterval";

import { PomodoroTimerProps } from "../../interfaces/pomodoro";

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ defaultTimer }) => {
  const [mainTime, setMainTime] = useState(defaultTimer);

  useInterval(() => {
    setMainTime((prevState) => prevState - 1);
  }, 1000);

  return (
    <div>
      <div>Olá mundo</div>
      <h1>Tempo Padrão: {mainTime}</h1>
    </div>
  );
};

export default PomodoroTimer;
