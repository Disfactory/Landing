const mediaSize = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1440,
  '3xl': 1600,
  '4xl': 1920,
};
export const theme = {
  backgroundColor: {
    lightGreen: '#FBFDF0',
    green: '#EAF3BF',
    white: '#FFFFFF',
  },
  textColor: {
    darkGreen: '#2B4754',
    grassGreen: '#697F01',
    green: '#4C6821',
    darkBlue: '#107393',
    blue: '#CDE9E4',
    black: '#000000',
    gray: '#333333',
    red: '#FA6B62',
    brownGreen: '#4a5613',
    white: '#FFFFFF',
  },
  fontSize: {
    'title-main-xs': 'font-size:28px; line-height: 1.5; font-weight: 700;',
    'title-main-sm': 'font-size:32px; line-height: 1.5; font-weight: 700;',
    'title-main-md': 'font-size:38px; line-height: 1.5; font-weight: 700;',
    'subtitle-sm': 'font-size:22px; line-height: 1.8; font-weight: 400;',
    normal: 'font-size:16px; line-height: 1.8; font-weight: 400;',
    'normal-xl': 'font-size:22px; line-height: 1.8; font-weight: 400;',
  },
  breakpoint: {
    xs: `@media (min-width: ${mediaSize.xs}px)`,
    sm: `@media (min-width: ${mediaSize.sm}px)`,
    md: `@media (min-width: ${mediaSize.md}px)`,
    lg: `@media (min-width: ${mediaSize.lg}px)`,
    xl: `@media (min-width: ${mediaSize.xl}px)`,
    xxl: `@media (min-width: ${mediaSize.xxl}px)`,
    '3xl': `@media (min-width: ${mediaSize['3xl']}px)`,
    '4xl': `@media (min-width: ${mediaSize['4xl']}px)`,
  },
};

export default theme;
