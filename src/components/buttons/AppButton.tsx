import React from 'react';
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native';

import { theme } from '../../theme';
import AppText from '../texts/AppText';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonTextWeight =
  | 'normal'
  | 'bold'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700';

type AppButtonProps = Omit<PressableProps, 'style'> & {
  title: string; // เช่น "บันทึก"

  variant?: ButtonVariant; // เช่น "primary", "outline"
  size?: ButtonSize; // เช่น "sm", "md", "lg"
  fullWidth?: boolean; // เช่น true

  backgroundColor?: string; // เช่น "#3A7C22"
  textColor?: string; // เช่น "#FFFFFF"
  borderColor?: string; // เช่น "#3A7C22"

  height?: number; // เช่น 56
  fontSize?: number; // เช่น 18
  lineHeight?: number; // เช่น 24
  fontWeight?: ButtonTextWeight; // เช่น "500", "600", "bold"

  pressedOpacity?: number; // เช่น 0.8

  style?: StyleProp<ViewStyle>; // style เพิ่มของปุ่ม
  textStyle?: StyleProp<TextStyle>; // style เพิ่มของข้อความ
};

type VariantStyles = {
  container: ViewStyle;
  textColor: string;
};

type SizeStyles = {
  container: ViewStyle;
  fontSize: number;
  lineHeight: number;
};

export default function AppButton({
  title,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled,

  backgroundColor,
  textColor,
  borderColor,

  height,
  fontSize,
  lineHeight,
  fontWeight,

  pressedOpacity = 0.9,

  style,
  textStyle,
  ...rest
}: AppButtonProps) {
  const isDisabled = disabled ?? false;

  const variantStyles = getVariantStyles({
    variant,
    disabled: isDisabled,
    backgroundColor,
    textColor,
    borderColor,
  });

  const sizeStyles = getSizeStyles(size);

  return (
    <Pressable
      {...rest}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.base,
        variantStyles.container,
        sizeStyles.container,
        height ? { minHeight: height } : null,
        fullWidth && styles.fullWidth,
        pressed && !isDisabled ? { opacity: pressedOpacity } : null,
        isDisabled && styles.disabled,
        style,
      ]}
    >
      <AppText
        variant="button"
        color={variantStyles.textColor}
        fontSize={fontSize ?? sizeStyles.fontSize}
        lineHeight={lineHeight ?? sizeStyles.lineHeight}
        fontWeight={fontWeight}
        style={textStyle}
      >
        {title}
      </AppText>
    </Pressable>
  );
}

function getVariantStyles({
  variant,
  disabled,
  backgroundColor,
  textColor,
  borderColor,
}: {
  variant: ButtonVariant;
  disabled: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
}): VariantStyles {
  switch (variant) {
    case 'secondary':
      return {
        container: {
          backgroundColor:
            backgroundColor ??
            (disabled ? theme.colors.border : theme.colors.primarySoft),
          borderWidth: 1,
          borderColor:
            borderColor ??
            (disabled ? theme.colors.border : theme.colors.primarySoft),
        },
        textColor:
          textColor ??
          (disabled ? theme.colors.textMuted : theme.colors.primary),
      };

    case 'outline':
      return {
        container: {
          backgroundColor: backgroundColor ?? 'transparent',
          borderWidth: 1,
          borderColor:
            borderColor ??
            (disabled ? theme.colors.border : theme.colors.primary),
        },
        textColor:
          textColor ??
          (disabled ? theme.colors.textMuted : theme.colors.primary),
      };

    case 'ghost':
      return {
        container: {
          backgroundColor: backgroundColor ?? 'transparent',
          borderWidth: 0,
        },
        textColor:
          textColor ??
          (disabled ? theme.colors.textMuted : theme.colors.primary),
      };

    case 'primary':
    default:
      return {
        container: {
          backgroundColor:
            backgroundColor ??
            (disabled ? theme.colors.border : theme.colors.primary),
          borderWidth: 1,
          borderColor:
            borderColor ??
            (disabled ? theme.colors.border : theme.colors.primary),
        },
        textColor: textColor ?? (disabled ? theme.colors.textMuted : '#FFFFFF'),
      };
  }
}

function getSizeStyles(size: ButtonSize): SizeStyles {
  switch (size) {
    case 'sm':
      return {
        container: {
          minHeight: 40,
          paddingHorizontal: theme.spacing.md,
          paddingVertical: theme.spacing.sm,
        },
        fontSize: theme.typography.size.sm,
        lineHeight: 18,
      };

    case 'lg':
      return {
        container: {
          minHeight: 56,
          paddingHorizontal: theme.spacing.xl,
          paddingVertical: theme.spacing.md,
        },
        fontSize: theme.typography.size.lg,
        lineHeight: 22,
      };

    case 'md':
    default:
      return {
        container: {
          minHeight: 48,
          paddingHorizontal: theme.spacing.lg,
          paddingVertical: theme.spacing.md,
        },
        fontSize: theme.typography.size.md,
        lineHeight: 20,
      };
  }
}

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  fullWidth: {
    width: '100%',
  },
  disabled: {
    opacity: 0.7,
  },
});
