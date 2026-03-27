import React from 'react';
import { StyleProp, Text, TextProps, TextStyle } from 'react-native';
import { theme } from '../../theme';

type Variant = keyof typeof theme.typography.presets;
type AppTextWeight = '300' | '400' | '500' | '600' | '700' | 'normal' | 'bold';

type Props = TextProps & {
  variant?: Variant;
  color?: string;

  fontSize?: number;
  lineHeight?: number;
  fontWeight?: AppTextWeight;
  fontFamily?: string;

  style?: StyleProp<TextStyle>;

  showSize?: boolean;
};

export default function AppText({
  variant = 'body',
  color,
  fontSize,
  lineHeight,
  fontWeight,
  fontFamily,
  style,
  showSize,
  children,
  ...rest
}: Props) {
  const preset = theme.typography.presets[variant];

  const finalFontSize = fontSize ?? preset.fontSize;
  const finalLineHeight =
    lineHeight ??
    (preset as TextStyle).lineHeight ??
    Math.round(finalFontSize * 1.5); // ✅ แนะนำ 1.5 สำหรับภาษาไทย

  const resolvedFontFamily = fontFamily ?? getFontFamilyByWeight(fontWeight);

  return (
    <Text
      {...rest}
      style={[
        preset,
        { color: color ?? theme.colors.textPrimary },
        resolvedFontFamily ? { fontFamily: resolvedFontFamily } : null,
        { fontSize: finalFontSize },
        { lineHeight: finalLineHeight }, // ✅ ใช้ค่าที่คำนวณแล้ว
        style,
      ]}
    >
      {children}
      {__DEV__ && showSize
        ? ` (${finalFontSize}px / ${finalLineHeight}px)`
        : null}
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
