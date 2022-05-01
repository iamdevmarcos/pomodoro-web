import styled from "styled-components";

interface ContainerProps {
  icon: string;
}

export const Container = styled.div(
  ({ icon }: ContainerProps) => `
    width:50px;
    height:50px;
    background-image: url('/icons/${icon}.svg');
    background-position: center;
    background-size:cover;
    margin:10px 20px;
    transition: all ease 0.3s;
    
    &&:hover {
      opacity:0.4;
      border-radius:5px;

      cursor:pointer;
    }
`
);
