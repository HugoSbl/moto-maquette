import styled from "styled-components";
import devices from "../../../styles/devices";

const Center = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  @media ${devices.tablet} {
    min-width: 30%;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 5em;
  color: white;
  font-family: "Russo One", sans-serif;
  width: 50%;
  @media ${devices.tablet} {
    min-width: 90%;
  }
`;

const Line = styled.div`
  height: 3px;
  width: 70%;
  background: linear-gradient(to right, #a75b12 20%, #ffffff 0%);
  margin: 0 1em 0 1em;
`;

const LeftArrowButton = styled.div`
  max-height: 100%;
  display: flex;
  align-items: center;
`;
const LeftArrow = styled.img`
  transform: rotate(180deg);
  height: 1em;
  margin-right: 1em;
`;

const RightArrowButton = styled.div`
  max-height: 100%;
  display: flex;
  align-items: center;
`;
const RightArrow = styled.img`
  margin-left: 1em;
  height: 1em;
`;

const VerticalLine = () => {
  return (
    <Center>
      <Container>
        <LeftArrowButton>
          <LeftArrow src={"/right-arrow.png"} />2
        </LeftArrowButton>
        <Line />
        <RightArrowButton>
          10
          <RightArrow src={"/right-arrow.png"} />
        </RightArrowButton>
      </Container>
    </Center>
  );
};

export default VerticalLine;
