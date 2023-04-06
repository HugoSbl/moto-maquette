import Main from "../components/Main";
import styled from "styled-components";

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #020202;
  height: 100%;
  overflow-x: hidden;
`;

const CustomFont = styled.div`
  @font-face {
    font-family: "DrukWide";
    src: url("../styles/font/Druk-Wide-Bold.ttf") format("truetype");
  }
`;

const MaxWidth = styled.div``;

export default function Home() {
  return (
    <StyledBackground>
      <CustomFont>
        <Main />
      </CustomFont>
    </StyledBackground>
  );
}
