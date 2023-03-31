import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.div`
  height: 3rem;
  border-bottom: red 1px solid;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;
const Img = styled.img`
  height: 65%;
  margin: 0 0 0.25em 0.25em;
`;

const NavHeader = () => (
  <StyledHeader>
    <Img src="/logoMontBlanc.png" alt="MontBlanc logo" />
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="">About</Link>
      </li>
    </ul>
  </StyledHeader>
);

export default NavHeader;
