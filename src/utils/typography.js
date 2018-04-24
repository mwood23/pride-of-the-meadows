import Typography from 'typography';
import { theme } from './theme';

const typography = new Typography({
  title: 'PrideoftheMeadows',
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  scaleRatio: 2,
  // googleFonts: [
  //   {
  //     name: 'Montserrat',
  //     styles: ['400']
  //   },
  //   {
  //     name: 'Lato',
  //     styles: ['400']
  //   },
  //   {
  //     name: 'Sacramento',
  //     styles: ['400']
  //   }
  // ],
  headerFontFamily: ['Montserrat', 'serif'],
  bodyFontFamily: ['Lato', 'serif'],
  headerWeight: '400',
  overrideStyles: ({ adjustFontSizeTo, rhythm }, options, styles) => ({
    h1: {
      color: theme.defaultHeaderColor
    },
    h2: {
      color: theme.defaultHeaderColor
    },
    h3: {
      color: theme.defaultHeaderColor
    },
    h4: {
      color: theme.defaultHeaderColor
    },
    h5: {
      color: theme.defaultHeaderColor
    },
    h6: {
      color: theme.defaultHeaderColor
    },
    p: {
      color: theme.defaultFontColor
    },
    span: {
      color: theme.defaultFontColor
    },
    div: {
      color: theme.defaultFontColor
    }
  })
});

export default typography;
