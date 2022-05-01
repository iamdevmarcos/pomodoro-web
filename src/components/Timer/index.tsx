import React from "react";
import { TimerProps } from "../../interfaces/timer";

import { secondsToMinutes } from "../../utils";

const Timer: React.FC<TimerProps> = ({ mainTime }) => {
  return <div>{secondsToMinutes(mainTime)}</div>;
};

export default Timer;
