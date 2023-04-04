import VerticalLine from "./VerticalLine";
import TextDescription from "./TextDescription";
import styled from "styled-components";
import devices from "../../../styles/devices";

const Container = styled.div`
  margin: 2em 0;
  justify-content: center;

  @media ${devices.tablet} {
    display: flex;
  }
`;

const Description = () => {
  return (
    <Container>
      <VerticalLine />
      <TextDescription />
    </Container>
  );
};

export default Description;
