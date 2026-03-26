export const tokens = {
  colors: {
    primary: '#5B4FD4',
    primaryLight: '#8B7FF0',
    primarySoft: '#EBE9FA',
    textPrimary: '#1A1A1A',
    textSecondary: '#555555',
    textMuted: '#B0ADA6',
    border: '#EEECE8',
    surface: '#F5F4F1',
    background: '#FAFAFA',
    success: '#3A7C22',
    warning: '#D48A00',
    error: '#E84F4F',
  },

  radius: { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, pill: 999 },

  spacing: [0, 4, 8, 12, 16, 20, 24, 32, 48],

  fontSize: {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 20,
    xxl: 24,
  },

  fontFamily: {
    thin: 'IBM Plex Sans Thai Thin',
    extraLight: 'IBM Plex Sans Thai ExtraLight',
    light: 'IBM Plex Sans Thai Light',
    regular: 'IBM Plex Sans Thai',
    medium: 'IBM Plex Sans Thai Medium',
    semibold: 'IBM Plex Sans Thai SemiBold',
    bold: 'IBM Plex Sans Thai',
  },
} as const;
