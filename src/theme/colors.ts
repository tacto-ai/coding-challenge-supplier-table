import { cyan, lightBlue, purple } from '@mui/material/colors';

export type DefaultColorKeys = '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';

export type FeedbackColorKeys = 'main' | 'dark' | 'light' | 'darkText' | 'bg' | 'boarder';

export type FeedbackColorNames = 'success' | 'info' | 'warning' | 'error';

export type AccentColorKeys = DefaultColorKeys | 'A100' | 'A200' | 'A400' | 'A700';

export type AccentColorNames = 'amber' | 'deepOrange' | 'teal' | 'cyan' | 'lightBlue' | 'purple' | 'neutrals';

export type FeedbackColorMap = {
  [name in FeedbackColorNames]: { [key in FeedbackColorKeys]: string };
};

export type AccentColorMap = {
  [name in AccentColorNames]: { [key in AccentColorKeys]: string };
};

export const TactoNeutralColors: Record<'black' | 'white' | AccentColorKeys, string> = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161',
  black: '#000000',
  white: '#FFFFFF',
};

export const TactoAccentColors: AccentColorMap = {
  neutrals: TactoNeutralColors,
  amber: {
    50: '#FFF8E1',
    100: '#FFECB3',
    200: '#FFE082',
    300: '#FFD54F',
    400: '#FFCA28',
    500: '#FFC107',
    600: '#FFB300',
    700: '#FFA000',
    800: '#FF8F00',
    900: '#FF6F00',
    A100: '#FFE57F',
    A200: '#FFD740',
    A400: '#FFC400',
    A700: '#FFAB00',
  },
  deepOrange: {
    50: '#FBE9E7',
    100: '#FFCCBC',
    200: '#FFAB91',
    300: '#FF8A65',
    400: '#FF7043',
    500: '#FF5722',
    600: '#F4511E',
    700: '#E64A19',
    800: '#D84315',
    900: '#BF360C',
    A100: '#FF9E80',
    A200: '#FF6E40',
    A400: '#FF3D00',
    A700: '#DD2C00',
  },
  teal: {
    50: 'rgba(224, 242, 241, 1)',
    100: 'rgba(178, 223, 219, 1)',
    200: 'rgba(128, 203, 196, 1)',
    300: 'rgba(77, 182, 172, 1)',
    400: 'rgba(38, 166, 154, 1)',
    500: 'rgba(0, 150, 136, 1)',
    600: 'rgba(0, 137, 123, 1)',
    700: 'rgba(0, 121, 107, 1)',
    800: 'rgba(0, 105, 92, 1)',
    900: 'rgba(0, 77, 64, 1)',
    A100: 'rgba(167, 255, 235, 1)',
    A200: 'rgba(100, 255, 218, 1)',
    A400: 'rgba(29, 233, 182, 1)',
    A700: 'rgba(0, 191, 165, 1)',
  },
  cyan: cyan,
  lightBlue: lightBlue,
  purple: purple,
};

export const TactoBrandColors: Record<'5' | DefaultColorKeys, string> = {
  5: '#F5F5FF',
  50: '#E9E9FA',
  100: '#C6C6F6',
  200: '#A6A6F9',
  300: '#7676F5',
  400: '#4544E5',
  500: '#3534C6',
  600: '#2F2E9B',
  700: '#2E2E6B',
  800: '#2C2C52',
  900: '#242443',
};

export const TactoTextColors = {
  white: '#FFFFFF',
  black: 'rgba(33, 33, 33, 1)',
  grey10: 'rgba(158, 158, 158, 1)',
  grey20: 'rgba(117, 117, 117, 1)',
  disabled: 'rgba(189, 189, 189, 1)',
  brandHoverable: TactoBrandColors['600'],
  brandClickable: TactoBrandColors['400'],
};

export const TactoButtonColors = {
  primary: TactoBrandColors['400'],
  primaryHover: TactoBrandColors['600'],
  secondary: TactoBrandColors['100'],
  secondaryHover: TactoBrandColors['200'],
  disabled: TactoNeutralColors['200'],
};

export const TactoFeedbackColors: FeedbackColorMap = {
  success: {
    bg: '#EDF7ED',
    main: '#4CAF50',
    dark: '#3B873E',
    boarder: '#A5D6A7',
    darkText: '#1E4620',
    light: '#7BC67E',
  },
  info: {
    bg: '#E9F4FE',
    main: '#2196F3',
    dark: '#0B79D0',
    boarder: '#8FCAF8',
    darkText: '#2196F3',
    light: '#64B6F7',
  },
  warning: {
    bg: '#FFF5E5',
    main: '#FF9800',
    dark: '#C77700',
    boarder: '#FFCB7F',
    darkText: '#663D00',
    light: '#FFB547',
  },
  error: {
    bg: '#FEECEB',
    main: '#F44336',
    dark: '#E31B0C',
    boarder: '#F9A09A',
    darkText: '#621B16',
    light: '#F88078',
  },
};
