import styled, { keyframes } from "styled-components";
import devices from "../../../styles/devices";

const ContainerPicturesAndJapanese = styled.div`
  display: flex;
  flex-direction: column;
  @media ${devices.laptopL} {
    height: 80%;
  }
`;

const MotoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5em 0 5em 0;
  @media ${devices.laptopL} {
    height: 75%;
    margin: 0;
  }
`;

const BikeAndLogoContainer = styled.div`
  width: 80%;
  position: relative;
  @media ${devices.laptopL} {
    height: 120%;
  }
`;

const MotorBike = styled.img`
  width: 100%;
  object-fit: contain;
  z-index: 1;
  @media ${devices.laptopL} {
    height: 100%;
  }
`;

const Headlights = styled.img`
  width: 20%;
  object-fit: contain;
  z-index: 1;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const RoundLogo = styled.img`
  width: 20%;
  top: 0.5em;
  right: 0;
  position: absolute;
  z-index: 2;
  transform-origin: center;
  animation: ${spin} 20s linear infinite;
  @media ${devices.laptop} {
    right: -5em;
  }
`;

const JapaneseTextContainer = styled.div`
  width: 100%;
  height: 6em;
  position: relative;
  @media ${devices.laptopL} {
    height: 25%;
  }
`;

const JapaneseText = styled.img`
  width: 150%;
  position: absolute;
  right: 0;
  z-index: 2;

  @media ${devices.tablet} {
    top: -2.5em;
  }
  @media ${devices.laptop} {
    //top: -5.5em;
    top: 0;
    bottom: 0;
    width: 125%;
  }
`;

const Pictures = () => {
  return (
    <ContainerPicturesAndJapanese>
      <MotoContainer>
        <BikeAndLogoContainer>
          <MotorBike src="/bike.png" alt="bike" />
          <RoundLogo src={"/roundLogo.png"} alt={"Round logo"} />
        </BikeAndLogoContainer>
        <Headlights src={"/headlight.png"} alt={"bike's headlight"} />
      </MotoContainer>
      <JapaneseTextContainer>
        <JapaneseText src={"/japanese.png"} alt={"japanese text"} />
      </JapaneseTextContainer>
    </ContainerPicturesAndJapanese>
  );
};

export default Pictures;
