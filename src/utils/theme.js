import { css } from "styled-components";

const sizes = {
  forSmallOnly: 650,
  forSmallMediumOnly: 991
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    console.log("ARGS", args);

    return css`
      @media (max-width: ${sizes[label] / 16}em) {
        ${css(...args)};
      }
    `;
  };

  return acc;
}, {});

export const theme = {
  potmGreen: "#7ed321",
  defaultFontColor: "#777777",
  defaultHeaderColor: "#333333"
};
