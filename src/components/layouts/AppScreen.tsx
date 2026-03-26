import React from 'react';
import {
  Platform,
  StatusBar,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {
  Edge,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { theme } from '../../theme';

type AppScreenProps = {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  backgroundColor?: string;
  withTopInset?: boolean;
  withBottomInset?: boolean;
  statusBarStyle?: 'default' | 'light-content' | 'dark-content';
};

export default function AppScreen({
  children,
  style,
  backgroundColor = theme.colors.background,
  withTopInset = true,
  withBottomInset = true,
  statusBarStyle = 'dark-content',
}: AppScreenProps) {
  const insets = useSafeAreaInsets();

  const edges: Edge[] = [];
  if (withTopInset) edges.push('top');
  if (withBottomInset) edges.push('bottom');

  return (
    <>
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={
          Platform.OS === 'android' ? backgroundColor : undefined
        }
      />

      <SafeAreaView
        edges={edges}
        style={[styles.safeArea, { backgroundColor }]}
      >
        <View
          style={[
            styles.content,
            {
              backgroundColor,
              paddingLeft: insets.left,
              paddingRight: insets.right,
            },
            style,
          ]}
        >
          {children}
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});
