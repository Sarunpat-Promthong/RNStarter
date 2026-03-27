// ComponentShowcaseScreen.tsx

import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import AppButton from '../components/buttons/AppButton';
import AppScreen from '../components/layouts/AppScreen';
import AppText from '../components/texts/AppText';
import { theme } from '../theme';

export default function ComponentShowcaseScreen() {
  return (
    <AppScreen>
      <ScrollView contentContainerStyle={styles.container}>
        {/* ================= TEXT ================= */}
        <AppText variant="h2">Text</AppText>

        <View style={styles.section}>
          <AppText>Default Body</AppText>
          <AppText variant="h1" showSize>
            Heading 1
          </AppText>
          <AppText variant="h2" showSize>
            Heading 2
          </AppText>
          <AppText variant="caption" showSize>
            Caption
          </AppText>
        </View>

        <View style={styles.section}>
          <AppText>Font Weight</AppText>
          <AppText fontWeight="300" showSize>
            Light 300
          </AppText>
          <AppText fontWeight="400" showSize>
            Regular 400
          </AppText>
          <AppText fontWeight="500" showSize>
            Medium 500
          </AppText>
          <AppText fontWeight="600" showSize>
            Semibold 600
          </AppText>
          <AppText fontWeight="700" showSize>
            Bold 700
          </AppText>
        </View>

        <View style={styles.section}>
          <AppText>Custom</AppText>

          <AppText color="red">Custom Color</AppText>

          <AppText fontSize={20} lineHeight={30} showSize>
            Custom Size
          </AppText>

          <AppText lineHeight={30} showSize>
            Custom LineHeight
          </AppText>
        </View>

        {/* ================= BUTTON ================= */}
        <AppText variant="h2">Buttons</AppText>

        <View style={styles.section}>
          <AppText>Primary</AppText>
          <AppButton title="Primary" showInfo />
          <AppButton title="Disabled" disabled showInfo />
        </View>

        <View style={styles.section}>
          <AppText>Variants</AppText>
          <AppButton title="Secondary" variant="secondary" showInfo />
          <AppButton title="Outline" variant="outline" showInfo />
          <AppButton title="Ghost" variant="ghost" showInfo />
        </View>

        <View style={styles.section}>
          <AppText>Sizes</AppText>
          <AppButton title="Small" size="sm" showInfo />
          <AppButton title="Medium" size="md" showInfo />
          <AppButton title="Large" size="lg" showInfo />
        </View>

        <View style={styles.section}>
          <AppText>Full Width</AppText>
          <AppButton title="Full Width Button" fullWidth showInfo />
        </View>

        <View style={styles.section}>
          <AppText>Custom</AppText>

          <AppButton
            title="Custom Color"
            backgroundColor="#FF5722"
            textColor="#FFFFFF"
            showInfo
          />

          <AppButton title="Rounded" borderRadius={30} showInfo />

          <AppButton
            title="Custom Size"
            height={60}
            fontSize={18}
            lineHeight={26}
            showInfo
          />
        </View>

        {/* 🔥 สำคัญ: test long text */}
        <View style={styles.section}>
          <AppText>Long Text</AppText>

          <AppButton
            title="This is a very long button text example for testing layout"
            fullWidth
            showInfo
          />
        </View>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 24,
  },
  section: {
    gap: 12,
    padding: 12,
    backgroundColor: theme.colors.surface,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
});
