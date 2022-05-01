import React from "react";
import { Container } from "./styles";

const TopBar: React.FC = () => {
  return (
    <Container>
      <p>
        Desenvolvido com{" "}
        <a href="https://pt-br.reactjs.org/" rel="noreferrer" target="_blank">
          React
        </a>{" "}
        e criado com 🤍 por{" "}
        <a
          href="https://github.com/iamdevmarcos"
          rel="noreferrer"
          target="_blank"
        >
          Marcos Andre
        </a>
      </p>
    </Container>
  );
};

export default TopBar;
