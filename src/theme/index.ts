import { tokens } from './tokens';

export const theme = {
  colors: {
    ...tokens.colors,
  },

  radius: {
    ...tokens.radius,
    // xs: 4,   // 4px
    // sm: 8,   // 8px
    // md: 12,  // 12px
    // lg: 16,  // 16px
    // xl: 24,  // 24px
    // pill: 999, // 999px
  },

  spacing: {
    none: tokens.spacing[0], // 0px
    xs: tokens.spacing[1], // 4px
    sm: tokens.spacing[2], // 8px
    md: tokens.spacing[3], // 12px
    lg: tokens.spacing[4], // 16px
    xl: tokens.spacing[5], // 20px
    xxl: tokens.spacing[6], // 24px
    xxxl: tokens.spacing[7], // 32px
    giant: tokens.spacing[8], // 48px
  },

  typography: {
    family: {
      ...tokens.fontFamily,
    },

    size: {
      ...tokens.fontSize,
      // xs: 10,  // 10px
      // sm: 12,  // 12px
      // md: 14,  // 14px
      // lg: 16,  // 16px
      // xl: 20,  // 20px
      // xxl: 24, // 24px
    },

    presets: {
      h1: {
        fontFamily: tokens.fontFamily.semibold,
        fontSize: tokens.fontSize.xxl, // 24px
      },

      h2: {
        fontFamily: tokens.fontFamily.semibold,
        fontSize: tokens.fontSize.xl, // 20px
      },

      title: {
        fontFamily: tokens.fontFamily.medium,
        fontSize: tokens.fontSize.lg, // 16px
      },

      body: {
        fontFamily: tokens.fontFamily.regular,
        fontSize: tokens.fontSize.md, // 14px
      },

      bodyMedium: {
        fontFamily: tokens.fontFamily.medium,
        fontSize: tokens.fontSize.md, // 14px
      },

      caption: {
        fontFamily: tokens.fontFamily.light,
        fontSize: tokens.fontSize.sm, // 12px
      },

      button: {
        fontFamily: tokens.fontFamily.medium,
        fontSize: tokens.fontSize.lg, // 16px
      },
    },
  },
} as const;

export type AppTheme = typeof theme;
