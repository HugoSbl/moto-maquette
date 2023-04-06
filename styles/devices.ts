const sizes = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2100px",
};

export const devices = {
  mobileS: `(min-width: ${sizes.mobileS})`,
  tablet: `(min-width: ${sizes.tablet})`,
  laptopMax: `(max-width: ${sizes.laptopL})`,
  laptop: `(min-width: ${sizes.laptop})`,
  laptopL: `(min-width: ${sizes.laptopL})`,
  desktop: `(min-width: ${sizes.desktop})`,
};

export default devices;
