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
  background: rgb(28, 44, 66, 0.4);
`;
