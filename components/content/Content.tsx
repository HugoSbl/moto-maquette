import Pictures from "./presentation/Pictures";
import Technicals from "./technical/technicals";
import Description from "./Description/Description";
import styled from "styled-components";

const GlobalContainer = styled.div``;

const Container = styled.div``;

const Content = () => {
  return (
    <GlobalContainer>
      <Container>
        <Pictures />
        <Description />
      </Container>
      <Technicals />
    </GlobalContainer>
  );
};

export default Content;
