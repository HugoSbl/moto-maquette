import Pictures from "./presentation/Pictures";
import Technicals from "./technical/technicals";
import Description from "./Description/Description";
import devices from "../../styles/devices";
import styled from "styled-components";

const GlobalContainer = styled.div`
  @media ${devices.laptopL} {
    display: flex;
  }
`;

const Container = styled.div`
  @media ${devices.laptopL} {
    width: 80%;
    background-color: #020202;
    z-index: 1;
  }
`;

const GoldBackground = styled.img`
  width: 30%;
  position: absolute;

  top: 0em;
  right: 0em;
  @media ${devices.laptopMax} {
    display: none;
  }
`;

const Content = () => {
  return (
    <GlobalContainer>
      <Container>
        <Pictures />
        <Description />
      </Container>
      <GoldBackground src="/gold-background.png" />
      <Technicals />
    </GlobalContainer>
  );
};

export default Content;
