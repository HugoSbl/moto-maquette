import styled, { keyframes } from "styled-components";

const ContainerPicturesAndJapanese = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const MotoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5em 0 5em 0;
  overflow: hidden;
`;

const BikeAndLogoContainer = styled.div`
  width: 80%;
  position: relative;
`;

const MotorBike = styled.img`
  width: 100%;
  object-fit: contain;
  z-index: 1;
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
  top: 0;
  right: 0;
  position: absolute;
  z-index: 2;
  transform-origin: center;
  animation: ${spin} 20s linear infinite;
`;

const JapaneseText = styled.img`
  width: 130%;
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

      <JapaneseText src={"/japanese.png"} alt={"japanese text"} />
    </ContainerPicturesAndJapanese>
  );
};

export default Pictures;
