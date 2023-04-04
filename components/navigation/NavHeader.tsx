import Link from "next/link";
import styled from "styled-components";
import ResponsiveNavBar from "./ResponsiveNavBar";

const StyledHeader = styled.div`
  height: 3rem;
  border-bottom: red 1px solid;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const ImgLogo = styled.img`
  height: 65%;
  margin: 0 0 0.25em 0.25em;
`;

const NavHeader = () => (
  <StyledHeader>
    <ImgLogo src="/logoMontBlanc.png" alt="MontBlanc logo" />
    <ResponsiveNavBar />
  </StyledHeader>
);

export default NavHeader;
