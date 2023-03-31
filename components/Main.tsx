import NavHeader from "./navigation/NavHeader";
import Content from "./content/Content";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const Main = () => {
  return (
    <Background>
      <NavHeader />
      <Content />
    </Background>
  );
};
export default Main;
