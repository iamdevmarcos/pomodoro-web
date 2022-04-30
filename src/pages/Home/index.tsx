import React from "react";
import { Container } from "./styles";

import { PomodoroTimer } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <PomodoroTimer
        defaultTime={10}
        shortRestTime={5}
        longRestTime={5}
        cycles={4}
      />
    </Container>
  );
};

export default Home;
