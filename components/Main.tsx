import NavHeader from "./navigation/NavHeader";
import Content from "./content/Content";
import styled from "styled-components";

const MaxWidth = styled.div`
  max-width: 2200px;
  margin: 0 auto;
  overflow: hidden;
`;

const Main = () => {
  return (
    <MaxWidth>
      <NavHeader />
      <Content />
    </MaxWidth>
  );
};
export default Main;
