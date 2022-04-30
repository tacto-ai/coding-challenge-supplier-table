import { CSSInterpolation } from '@mui/material';
import { TypographyVariantsOptions } from '@mui/material/styles';

export type TableTypographyKeys = 'header1' | 'header2' | 'cellText1' | 'cellTextBold1' | 'cellText2' | 'cellTextBold2';

export const TactoTableTypography: Record<TableTypographyKeys, CSSInterpolation> = {
  cellText1: {
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: '1rem',
  },
  cellText2: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    lineHeight: '0.875rem',
  },
  cellTextBold1: {
    fontSize: '0.9375rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
  cellTextBold2: {
    fontSize: '0.8125rem',
    fontWeight: 700,
    lineHeight: '0.875rem',
  },
  header1: {
    fontSize: '0.9375rem',
    fontWeight: 700,
    lineHeight: '1rem',
  },
  header2: {
    fontSize: '0.8125rem',
    fontWeight: 700,
    lineHeight: '0.875rem',
  },
};

export const TactoTypography: TypographyVariantsOptions = {
  fontFamily: [
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 700,
  fontWeightBold: 900,
  htmlFontSize: 16,
  fontSize: 14,

  h1: {
    fontSize: '2.44rem',
    fontWeight: 900,
    lineHeight: 1.13,
    letterSpacing: '0.1px',
  },
  h2: {
    fontSize: '2.25rem',
    fontWeight: 900,
    lineHeight: 1.16,
    letterSpacing: '0.1px',
  },
  h3: {
    fontSize: '1.4375rem',
    fontWeight: 900,
    lineHeight: 1.39,
    letterSpacing: '0.1px',
  },
  h4: {
    fontSize: '1.1875rem',
    fontWeight: 700,
    lineHeight: 1.47,
    letterSpacing: '0.1px',
  },
  h5: {
    fontSize: '0.9375rem',
    fontWeight: 700,
    lineHeight: 1.6,
    letterSpacing: '0.1px',
  },
  h6: {
    fontSize: '0.8125rem',
    fontWeight: 700,
    lineHeight: 1.54,
  },
  body1: {
    fontSize: '0.9375rem',
    fontWeight: 400,
    lineHeight: 1.6,
  },
  body2: {
    fontSize: '0.8125rem',
    fontWeight: 400,
    lineHeight: 1.54,
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    letterSpacing: '1px',
    lineHeight: 1.33,
  },
  subtitle1: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.33,
  },
  subtitle2: {
    fontSize: '0.625rem',
    fontWeight: 400,
    lineHeight: 1.4,
  },
  button: {
    textTransform: 'none',
    fontSize: '0.9375rem',
    fontWeight: 700,
    lineHeight: 1.6,
  },
};
