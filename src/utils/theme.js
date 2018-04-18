import { css } from 'styled-components';

const sizes = {
  forSmallOnly: {
    max: true,
    width: 680
  },
  forSmallMediumOnly: {
    max: true,
    width: 991
  },
  forMediumUp: {
    max: false,
    width: 681
  }
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => {
    if (sizes[label]['max']) {
      return css`
        @media (max-width: ${sizes[label]['width'] / 16}em) {
          ${css(...args)};
        }
      `;
    } else {
      return css`
        @media (min-width: ${sizes[label]['width'] / 16}em) {
          ${css(...args)};
        }
      `;
    }
  };

  return acc;
}, {});

export const theme = {
  potmGreen: '#7ed321',
  defaultFontColor: '#777777',
  defaultHeaderColor: '#333333',
  desktopHeaderHeight: '80px',
  mobileHeaderHeight: '60px'
};
