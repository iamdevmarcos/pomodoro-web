import React from "react";
import { Container } from "./styles";

import { PomodoroTimer } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <PomodoroTimer
        defaultTime={1500} // 25 minutos, Tempo de foco
        shortRestTime={300} // 5 minutos, Tempo de descanso curto
        longRestTime={900} // 15 minutos, Tempo de descanso longo
        cycles={4} // A cada 4 ciclos o usuario ganha 1 descanso longo
      />
    </Container>
  );
};

export default Home;
