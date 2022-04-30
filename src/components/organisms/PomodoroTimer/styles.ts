import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  margin: 50px 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  h2 {
    margin: 0;
    padding: 0;

    font-size: 30px;
    text-align: center;
  }

  .timer {
    font-size: 6rem;
    text-align: center;

    .controls {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .details {
      text-align: left;
      font-size: 1.2rem;

      margin: 20px auto !important;
    }

    button {
      background: #41e1ba;
      color: #000;

      font-size: 30px;

      border: 0;
      outline: 0;

      padding: 10px 20px;
      margin: 20px auto;

      cursor: pointer;
      transition: background-color 300ms ease-in-out;
    }
  }
`;
