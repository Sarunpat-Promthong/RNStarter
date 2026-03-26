import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { theme } from '../../theme';

type Variant = keyof typeof theme.typography.presets;
type AppTextWeight = '300' | '400' | '500' | '600' | '700' | 'normal' | 'bold';

type Props = TextProps & {
  variant?: Variant; // เช่น "body", "h1", "caption"
  color?: string; // เช่น theme.colors.primary หรือ "#1A1A1A"

  fontSize?: number; // เช่น 16
  lineHeight?: number; // เช่น 24
  fontWeight?: AppTextWeight; // เช่น "500", "600", "bold"
  fontFamily?: string; // เช่น "IBM Plex Sans Thai Medium"

  style?: StyleProp<TextStyle>; // style เพิ่มเติม
};

export default function AppText({
  variant = 'body',
  color,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  style,
  children,
  ...rest
}: Props) {
  const resolvedFontFamily = fontFamily ?? getFontFamilyByWeight(fontWeight);

  return (
    <Text
      {...rest}
      style={[
        theme.typography.presets[variant],
        { color: color ?? theme.colors.textPrimary },
        resolvedFontFamily ? { fontFamily: resolvedFontFamily } : null,
        fontSize ? { fontSize } : null,
        lineHeight ? { lineHeight } : null,
        style,
      ]}
    >
      {children}
    </Text>
  );
}

function getFontFamilyByWeight(weight?: AppTextWeight): string | undefined {
  switch (weight) {
    case '300':
      return theme.typography.family.light;
    case '400':
    case 'normal':
      return theme.typography.family.regular;
    case '500':
      return theme.typography.family.medium;
    case '600':
      return theme.typography.family.semibold;
    case '700':
    case 'bold':
      return theme.typography.family.bold;
    default:
      return undefined;
  }
}
