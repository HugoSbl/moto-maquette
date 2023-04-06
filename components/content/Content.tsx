import Pictures from "./presentation/Pictures";
import Technicals from "./technical/technicals";
import Description from "./Description/Description";
import devices from "../../styles/devices";
import styled from "styled-components";

const GlobalContainer = styled.div`
  @media ${devices.laptopL} {
    display: flex;
    height: 82vh;
  }
`;

const ContainerPictureDescription = styled.div`
  @media ${devices.laptopL} {
    width: 80%;
    background-color: #020202;
    z-index: 1;
    height: 85vh;
  }
`;

const GoldBackground = styled.img`
  width: 30%;
  position: absolute;

  top: 0;
  right: 0;
  @media ${devices.laptopMax} {
    display: none;
  }
  @media ${devices.desktop} {
    top: -4em;
  }
  @media (min-width: 2600px) {
    display: none;
  }
`;

const Content = () => {
  return (
    <GlobalContainer>
      <ContainerPictureDescription>
        <Pictures />
        <Description />
      </ContainerPictureDescription>

      <GoldBackground src="/gold-background.png" />
      <Technicals />
    </GlobalContainer>
  );
};

export default Content;
