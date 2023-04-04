import { TechnicalInformation } from "./technicals";
import styled from "styled-components";
import devices from "../../../styles/devices";

const GlobalContainer = styled.div`
  display: flex;
  align-items: center;
  color: white;
  padding: 1em;
  height: 10em;
  width: 100%;
  font-family: "DrukWide", sans-serif;
  justify-content: center;
  @media ${devices.tablet} and ${devices.laptopMax} {
    width: 45%;
  }
`;

const Center = styled.div`
  display: flex;
  width: 300px;
  align-items: center;
`;

const Title = styled.span`
  writing-mode: vertical-rl;
  margin-left: 1em; // demander a flo si on peut mieux faire
  font-size: 1.3em;
  font-weight: lighter;
  transform: rotate(180deg);
  opacity: 20%;
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2em;
`;

const Top = styled.span`
  font-weight: 100;
  margin-bottom: auto;
  font-size: 0.9em;
`;

const Middle = styled.span`
  font-family: "Russo One", sans-serif;
  margin-top: auto;
  margin-bottom: auto;
  font-size: 3em;
  font-weight: 900;
  line-height: 1.6em;
`;

const Bottom = styled.span`
  font-size: 0.9em;
  margin-left: 0.3em;
`;

const TechnicalInformationDisplayer = ({
  title,
  top,
  middle,
  bottom,
}: TechnicalInformation) => {
  return (
    <GlobalContainer>
      <Center>
        <Title>{title}</Title>
        <RightContainer>
          <Top>{top}</Top>
          <Middle>{middle}</Middle>
          <Bottom>{bottom}</Bottom>
        </RightContainer>
      </Center>
    </GlobalContainer>
  );
};

export default TechnicalInformationDisplayer;
