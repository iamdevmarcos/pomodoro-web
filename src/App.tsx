import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { Home } from "./pages";
import { TopBar } from "./components";

const App: React.FC = () => {
  return (
    <>
      <TopBar />

      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;
