import React from "react";
import { Container } from "./styles";

import { PomodoroTimer } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <PomodoroTimer
        defaultTime={3600}
        shortRestTime={300}
        longRestTime={900}
        cycles={4}
      />
    </Container>
  );
};

export default Home;
