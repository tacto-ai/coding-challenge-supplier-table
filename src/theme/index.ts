import { merge } from 'lodash';

import { colors, createTheme as createMuiTheme, ThemeOptions } from '@mui/material';
import type { Theme as MuiTheme } from '@mui/material/styles';

import { TactoBrandColors, TactoButtonColors, TactoFeedbackColors, TactoNeutralColors, TactoTextColors } from './colors';
import { softShadows } from './shadows';
import { TactoTableTypography, TactoTypography } from './typography';

const baseOptions: ThemeOptions = {
  direction: 'ltr',
  typography: TactoTypography,
  mixins: {
    toolbar: {
      minHeight: 72,
      '@media (min-width:0px) and (orientation: landscape)': {
        minHeight: 72,
      },
      '@media (min-width:600px)': {
        minHeight: 72,
      },
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          boxSizing: 'border-box',
          margin: 0,
          padding: 0,
        },
        html: {
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          height: '100%',
          width: '100%',
          background: TactoNeutralColors.white,
        },
        body: {
          height: '100%',
          width: '100%',
        },
        '#root': {
          height: '100%',
          width: '100%',
        },
        iframe: {
          border: 'none',
        },
        '::selection': {
          background: TactoBrandColors['400'],
          color: TactoTextColors.white,
        },
        '::-moz-selection': {
          background: TactoBrandColors['400'],
          color: TactoTextColors.white,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          '&$selected': {
            backgroundColor: `${TactoBrandColors['5']} !important`,
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: [
          TactoTableTypography.cellText1,
          {
            boxSizing: 'content-box',
          },
        ],
        sizeSmall: [TactoTableTypography.cellText2],
        head: {
          fontWeight: 700,
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent !important',
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 3,
          overflow: 'hidden',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          minWidth: '32px',
        },
      },
    },
  },
};

const themeOptions: ThemeOptions = {
  direction: 'ltr',
  palette: {
    mode: 'light',
    action: {
      active: TactoBrandColors['5'],
      hover: TactoBrandColors['5'],
      selected: TactoBrandColors['50'],
      disabled: TactoTextColors.disabled,
      disabledBackground: TactoButtonColors.disabled,
      focus: TactoButtonColors.disabled,
      hoverOpacity: 0.3,
    },
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: TactoBrandColors['400'],
      contrastText: TactoTextColors.white,
      light: TactoBrandColors['200'],
      dark: TactoBrandColors['600'],
    },
    secondary: {
      main: TactoBrandColors['100'],
      contrastText: TactoBrandColors['400'],
      light: TactoBrandColors['50'],
      dark: TactoBrandColors['200'],
    },
    ...TactoFeedbackColors,
    text: {
      primary: TactoTextColors.black,
      secondary: TactoTextColors.grey20,
      disabled: TactoTextColors.disabled,
    },
  },
  typography: TactoTypography,
  shadows: softShadows,
};

const createTheme = (): MuiTheme => {
  const theme = createMuiTheme(merge({}, baseOptions, themeOptions));
  return theme as MuiTheme;
};

export default createTheme;
