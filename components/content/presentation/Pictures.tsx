import styled from "styled-components";

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

const MotorBike = styled.img`
  width: 80%;
  object-fit: contain;
`;

const Headlights = styled.img`
  width: 20%;
  object-fit: contain;
`;

const JapaneseText = styled.img`
  width: 130%;
`;

const Pictures = () => {
  return (
    <ContainerPicturesAndJapanese>
      <MotoContainer>
        <MotorBike src="/bike.png" alt="bike" />
        <Headlights src={"/headlight.png"} alt={"bike's headlight"} />
      </MotoContainer>

      <JapaneseText src={"/japanese.png"} alt={"japanese text"} />
    </ContainerPicturesAndJapanese>
  );
};

export default Pictures;
