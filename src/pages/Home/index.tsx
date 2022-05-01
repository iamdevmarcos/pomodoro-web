import React from "react";
import { Container, MaxArea, Menu } from "./styles";

import { PomodoroTimer, MenuItem } from "../../components";

const Home: React.FC = () => {
  return (
    <Container>
      <MaxArea>
        <PomodoroTimer
          defaultTime={1500} // 25 minutos, Tempo de foco
          shortRestTime={300} // 5 minutos, Tempo de descanso curto
          longRestTime={900} // 15 minutos, Tempo de descanso longo
          cycles={4} // A cada 4 ciclos o usuario ganha 1 descanso longo
        />
      </MaxArea>

      <Menu>
        <MenuItem icon="rest" />
        <MenuItem icon="play" />
        <MenuItem icon="pause" />
      </Menu>
    </Container>
  );
};

export default Home;
