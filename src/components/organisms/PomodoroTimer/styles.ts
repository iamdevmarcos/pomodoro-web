import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 40px;

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

export const Menu = styled.div`
  background-color: rgb(28, 44, 66, 0.6);
  max-width: 980px;
  display: flex;

  height: 70px;
  position: fixed;
  bottom: 20px;

  border: 1px solid #525f6f;
  border-radius: 10px;
`;
