// noinspection CssUnknownProperty

import Link from "next/link";
import styled from "styled-components";
import ResponsiveNavBar from "./ResponsiveNavBar";
import devices from "../../styles/devices";

const StyledHeader = styled.div`
  height: 3rem;
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media ${devices.laptopL} {
    width: 70%;
    height: 8em;
  }
`;
const ImgLogo = styled.img`
  height: 65%;
  margin: 0 0 0.25em 0.25em;
  @media ${devices.laptopL} {
    height: 38%;
    margin-left: 1em;
  }
`;

const NavHeader = () => (
  <StyledHeader>
    <ImgLogo src="/logoMontBlanc.png" alt="MontBlanc logo" />
    <ResponsiveNavBar />
  </StyledHeader>
);

export default NavHeader;
