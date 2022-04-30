import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import { PomodoroTimerProps } from "../../../interfaces/pomodoro";

import { useInterval } from "../../../hooks/useInterval";

import { Timer, Button } from "../../index";

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({
  defaultTime,
  longRestTime,
  shortRestTime,
  cycles,
}) => {
  const [mainTime, setMainTime] = useState(defaultTime);
  const [timeCounter, setTimeCounter] = useState(false);
  const [working, setWorking] = useState(false);
  const [resting, setResting] = useState(false);

  const startWorking = () => {
    setTimeCounter(true);
    setWorking(true);
    setResting(false);
    setMainTime(defaultTime);
  };

  const startResting = (long: boolean) => {
    setTimeCounter(true);
    setWorking(false);
    setResting(true);

    if (long) {
      setMainTime(longRestTime);
    } else {
      setMainTime(shortRestTime);
    }
  };

  useInterval(
    () => {
      setMainTime((prevState) => prevState - 1);
    },
    timeCounter ? 1000 : null
  );

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");
  }, [working, resting]);

  return (
    <Container>
      <div className="timer">
        <h2>You are: working</h2>
        <Timer mainTime={mainTime} />

        <div className="controls">
          <Button title="Work" onClick={startWorking} />
          <Button title="Rest" onClick={() => startResting(false)} />

          {!working && !resting && (
            <Button
              title={timeCounter ? "Pause" : "Play"}
              onClick={() => setTimeCounter(!timeCounter)}
            />
          )}
        </div>

        <div className="details">
          <p>Working: {working.toString()}</p>
          <p>Resting: {resting.toString()}</p>
          <p>TimeCounter: {timeCounter.toString()}</p>
          <p>Testando: dnasjdnjsandjsandjnasjdnjsandjsandjsa</p>
        </div>
      </div>
    </Container>
  );
};

export default PomodoroTimer;
