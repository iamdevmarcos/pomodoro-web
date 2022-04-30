import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import { PomodoroTimerProps } from "../../../interfaces/pomodoro";

import { useInterval } from "../../../hooks/useInterval";

import { Timer, Button } from "../../index";

const bellStart = require("../../../assets/sounds/bell-start.mp3");
const bellFinish = require("../../../assets/sounds/bell-finish.mp3");

const audioStartWorking = new Audio(bellStart);
const audioStopWorking = new Audio(bellFinish);

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

    audioStartWorking.play();
    audioStartWorking.currentTime = 0;
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

    audioStopWorking.play();
    audioStopWorking.currentTime = 0;
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
          {!working && <Button title="Começar" onClick={startWorking} />}

          {working && !timeCounter && (
            <Button title="Descansar" onClick={() => startResting(false)} />
          )}

          {working && (
            <Button
              title={timeCounter ? "Pausar" : "Voltar"}
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
