import React, { useState } from "react";
import { Container } from "./styles";

import { PomodoroTimerProps } from "../../../interfaces/pomodoro";

import { useInterval } from "../../../hooks/useInterval";

import { Timer, Button } from "../../index";

const PomodoroTimer: React.FC<PomodoroTimerProps> = ({ defaultTime }) => {
  const [mainTime, setMainTime] = useState(defaultTime);

  useInterval(() => {
    setMainTime((prevState) => prevState - 1);
  }, 1000);

  return (
    <Container>
      <div className="timer">
        <h2>You are: working</h2>
        <Timer mainTime={mainTime} />

        <div className="controls">
          <Button title="teste" onClick={() => alert("Starting...")} />
          <Button title="teste" onClick={() => alert("Starting...")} />
          <Button title="teste" onClick={() => alert("Starting...")} />
        </div>

        <div className="details">
          <p>Testando: dnasjdnjsandjsandjnasjdnjsandjsandjsa</p>
          <p>Testando: dnasjdnjsandjsandjnasjdnjsandjsandjsa</p>
          <p>Testando: dnasjdnjsandjsandjnasjdnjsandjsandjsa</p>
          <p>Testando: dnasjdnjsandjsandjnasjdnjsandjsandjsa</p>
        </div>
      </div>
    </Container>
  );
};

export default PomodoroTimer;
