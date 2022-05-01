import styled from "styled-components";

export const Container = styled.div`
  color: #fff;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px;
`;

export const TitleArea = styled.div`
  margin-bottom: 30px;
`;

export const Title = styled.h2`
  margin: 0;
  padding: 0;

  font-size: 35px;
  font-weight: normal;
  text-align: center;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  .timer {
    font-size: 12rem;
    width: 100%;

    text-align: center;
  }

  .details {
    width: 100%;
    max-width: 400px;

    text-align: right;
    font-size: 1.8rem;
    font-weight: normal;
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
