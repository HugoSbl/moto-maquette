import styled from "styled-components";
import devices from "../../../styles/devices";

const Text = styled.div`
  color: white;
  font-family: "DrukWide", sans-serif;
  font-weight: 100;
  font-size: 0.8em;
  line-height: 1.8em;
  margin: 0 3em 0 1em;
  text-align: justify;
  @media ${devices.tablet} {
    font-size: 1em;
  }
  @media ${devices.laptopL} {
    margin: 0 1em 0 1em;
    line-height: 2.1em;
  }
`;

const textDescription = () => {
  return (
    <>
      <Text>
        The bike comes in all black, with a relatively modern appeal. Chrome
        accents in just the right places make the bike stand out, while the
        black-on-black satin text on the bike’s fork-guards helps highlight the
        company’s branding without being too direct or obvious.
      </Text>
    </>
  );
};

export default textDescription;
