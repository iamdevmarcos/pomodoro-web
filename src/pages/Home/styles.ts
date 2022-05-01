import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;

  background-image: url("/bg.jpg");
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MaxArea = styled.div`
  max-width: 1024px;
  margin: 0 auto;
  width: 100%;

  border: 1px solid #525f6f;
  border-radius: 10px;
  background: rgb(28, 44, 66, 0.6);
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
