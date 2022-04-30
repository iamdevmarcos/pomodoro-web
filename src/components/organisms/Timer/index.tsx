import React from "react";
import { TimerProps } from "../../../interfaces/timer";

import secondsToMinutes from "../../../utils/secondsToMinutes";

const Timer: React.FC<TimerProps> = ({ mainTime }) => {
  return <div className="container">{secondsToMinutes(mainTime)}</div>;
};

export default Timer;
