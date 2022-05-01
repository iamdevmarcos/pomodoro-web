import React, { useCallback, useEffect, useState } from "react";
import { Container, TitleArea, Title, Flex, Menu } from "./styles";
import { PomodoroTimerProps } from "../../interfaces/pomodoro";

import { useInterval } from "../../hooks/useInterval";
import { secondsToTime } from "../../utils";

import { Timer, MenuItem } from "../index";

const bellStart = require("../../assets/sounds/bell-start.mp3");
const bellFinish = require("../../assets/sounds/bell-finish.mp3");
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

  const [firstTimeOnApp, setFirstTimeOnApp] = useState(true);

  const startWorking = useCallback(() => {
    setFirstTimeOnApp(false);

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
      <TitleArea>
        <Title>
          {firstTimeOnApp && "Vamos começar 😎"}

          {!firstTimeOnApp && (
            <>
              Você está:{" "}
              <strong>{working ? "Trabalhando 😎" : "Descansando 😴"}</strong>
            </>
          )}
        </Title>
      </TitleArea>

      <Flex>
        <div className="timer">
          <Timer mainTime={mainTime} />
        </div>

        {!firstTimeOnApp && (
          <div className="details">
            <p>
              Ciclos concluídos: <strong>{completedCycles}</strong>
            </p>
            <p>
              Tempo total: <strong>{secondsToTime(fullWorkingTime)}</strong>
            </p>
            <p>
              Pomodoros concluídos: <strong>{numbeOfPomodoros}</strong>
            </p>
          </div>
        )}
      </Flex>

      <Menu>
        {working && !timeCounter && (
          <MenuItem icon="rest" onClick={() => startResting(false)} />
        )}

        {!working && <MenuItem icon="play" onClick={startWorking} />}

        {working && (
          <MenuItem icon="pause" onClick={() => setTimeCounter(!timeCounter)} />
        )}
      </Menu>
    </Container>
  );
};

export default PomodoroTimer;
