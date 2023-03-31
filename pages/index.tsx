import Main from "../components/Main";
import styled from "styled-components";

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #020202;
  overflow: hidden;
`;

export default function Home() {
  return (
    <StyledBackground>
      <Main />
    </StyledBackground>
  );
}
