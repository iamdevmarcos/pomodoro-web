import React, { useCallback, useEffect, useState } from "react";
import { Container } from "./styles";
import { PomodoroTimerProps } from "../../../interfaces/pomodoro";

import { useInterval } from "../../../hooks/useInterval";

import { Timer, Button } from "../../index";
import secondsToTime from "../../../utils/secondsToTime";

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

  const [workCycles, setWorkCycles] = useState(
    new Array(cycles - 1).fill(true)
  );
  const [completedCycles, setCompletedCycles] = useState(0);
  const [numbeOfPomodoros, setNumbeOfPomodoros] = useState(0);
  const [fullWorkingTime, setFullWorkingTime] = useState(0);

  const startWorking = useCallback(() => {
    setTimeCounter(true);
    setWorking(true);
    setResting(false);
    setMainTime(defaultTime);

    audioStartWorking.currentTime = 0;
    audioStartWorking.play();
  }, [defaultTime]);

  const startResting = useCallback(
    (long: boolean) => {
      setTimeCounter(true);
      setWorking(false);
      setResting(true);

      if (long) {
        setMainTime(longRestTime);
      } else {
        setMainTime(shortRestTime);
      }

      audioStopWorking.currentTime = 0;
      audioStopWorking.play();
    },
    [longRestTime, shortRestTime]
  );

  useInterval(
    () => {
      setMainTime((prevState) => prevState - 1);
      if (working) setFullWorkingTime((prevState) => prevState + 1);
    },
    timeCounter ? 1000 : null
  );

  useEffect(() => {
    if (working) document.body.classList.add("working");
    if (resting) document.body.classList.remove("working");

    if (mainTime > 0) return;

    if (working && workCycles.length > 0) {
      startResting(false);
      workCycles.pop();
    } else if (working && workCycles.length <= 0) {
      startResting(true);
      setWorkCycles(new Array(cycles - 1).fill(true));
      setCompletedCycles((prevState) => prevState + 1);
    }

    if (working) setNumbeOfPomodoros(numbeOfPomodoros + 1);
    if (resting) startWorking();
  }, [
    working,
    resting,
    mainTime,
    workCycles,
    startResting,
    cycles,
    numbeOfPomodoros,
    completedCycles,
    startWorking,
  ]);

  return (
    <Container>
      <div className="timer">
        <h2>Você está: {working ? "Trabalhando" : "Descansando"}</h2>
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
          <p>Ciclos concluidos: {completedCycles}</p>
          <p>Horas trabalhadas: {secondsToTime(fullWorkingTime)}</p>
          <p>Pomodoros concluidos: {numbeOfPomodoros}</p>
        </div>
      </div>
    </Container>
  );
};

export default PomodoroTimer;
