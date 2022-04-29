import React from "react";
import { Container } from "./styles";

import { PomodoroTimer } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <PomodoroTimer defaultTimer={3600} />
    </Container>
  );
};

export default Home;
