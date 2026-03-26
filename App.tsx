import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './src/navigation/RootNavigator';
import { theme } from './src/theme';

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: theme.colors.primary,
    background: theme.colors.background,
    card: theme.colors.surface,
    text: theme.colors.textPrimary,
    border: theme.colors.border,
    notification: theme.colors.error,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
