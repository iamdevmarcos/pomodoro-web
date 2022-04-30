import React from "react";
import { TimerProps } from "../../../interfaces/timer";

import secondsToTime from "../../../utils/secondsToTime";

const Timer: React.FC<TimerProps> = ({ mainTime }) => {
  return <div className="container">{secondsToTime(mainTime)}</div>;
};

export default Timer;
