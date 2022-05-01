import React from "react";
import GlobalStyles from "./styles/GlobalStyles";

import { Home } from "./pages";
import { TopBar } from "./components";
import GithubCorner from "react-github-corner";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />

      <TopBar />
      <GithubCorner
        href="https://github.com/iamdevmarcos/pomodoro-web"
        octoColor="#fff"
        bannerColor="#1c2c4299"
        target="_blank"
      />
      <Home />
    </>
  );
};

export default App;
