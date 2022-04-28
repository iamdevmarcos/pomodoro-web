import React from "react";

import GlobalStyles from "./styles/GlobalStyles";
import { Home } from "./pages";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Home />
    </>
  );
};

export default App;
