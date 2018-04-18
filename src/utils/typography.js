import Typography from 'typography';

const typography = new Typography({
  title: 'PrideoftheMeadows',
  baseFontSize: '16px',
  baseLineHeight: '1.5',
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'Montserrat',
      styles: ['400']
    },
    {
      name: 'Lato',
      styles: ['400']
    },
    {
      name: 'Sacramento',
      styles: ['400']
    }
  ],
  headerFontFamily: ['Montserrat', 'serif'],
  bodyFontFamily: ['Lato', 'serif'],
  headerWeight: '400'
});

export default typography;
