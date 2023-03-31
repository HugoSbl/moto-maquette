import styled from "styled-components";
import TechnicalInformationBlock from "./TechnicalsInformationBlock";

export type TechnicalInformation = {
  title: string;
  top: string;
  middle: string;
  bottom: string;
};

const technicalsInformations: TechnicalInformation[] = [
  {
    title: "TOP SPEED",
    top: "6-SPEED CONSTANT-MESH",
    middle: "169 MPH",
    bottom: "272 KM/H",
  },
  { title: "POWER", top: "121 KW", middle: "162 HP", bottom: "9.250 RPM" },
  {
    title: "TORQUE",
    top: "8,800 RPM",
    middle: "130.5 NM",
    bottom: "96.3 LBF FT",
  },
  {
    title: "FUEL CAPACITY",
    top: "4.5 US GAL",
    middle: "17 L",
    bottom: "3.7 IMP GAL",
  },
];

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Technicals = () => {
  return (
    <Container>
      {technicalsInformations.map((technicalInformation) => (
        <TechnicalInformationBlock {...technicalInformation} />
      ))}
    </Container>
  );
};

export default Technicals;
