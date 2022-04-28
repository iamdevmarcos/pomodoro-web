import React from "react";
import { Container } from "./styles";

import { PomodoroTimer } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <PomodoroTimer defaultTimer={2000} />
    </Container>
  );
};

export default Home;
