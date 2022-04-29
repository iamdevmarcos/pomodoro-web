import React, { useState } from "react";
import { PomodoroTimerProps } from "../../interfaces/pomodoro";

import { useInterval } from "../../hooks/useInterval";
import secondsToTime from "../../utils/secondsToTime";

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ defaultTimer }) => {
  const [mainTime, setMainTime] = useState(defaultTimer);

  useInterval(() => {
    setMainTime((prevState) => prevState - 1);
  }, 1000);

  return (
    <div>
      <h1>Tempo Padrão: {secondsToTime(mainTime)}</h1>
    </div>
  );
};

export default PomodoroTimer;
