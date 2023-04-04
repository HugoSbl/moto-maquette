import Link from "next/link";
import styled from "styled-components";
import devices from "../../styles/devices";

const Navigation = styled.ul`
  font-family: "Russo One", sans-serif;
  text-decoration: none;
  list-style: none;
  display: flex;
  color: white;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin: 0;
  padding: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

const ResponsiveNavbar = () => {
  return (
    <Navigation>
      <li>
        <NavLink href="/">BIKES</NavLink>
      </li>
      <li>
        <NavLink href="/">ACCESSORIES</NavLink>
      </li>
      <li>
        <NavLink href="/">NEW TECH</NavLink>
      </li>
      <li>
        <NavLink href="">EXPLORE</NavLink>
      </li>
    </Navigation>
  );
};

export default ResponsiveNavbar;
