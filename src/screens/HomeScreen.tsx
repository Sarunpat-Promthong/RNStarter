import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import AppButton from '../components/buttons/AppButton';
import AppText from '../components/texts/AppText';

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <AppText variant="h1">หัวข้อใหญ่</AppText>
      <AppButton title="ค่า default" size="lg" onPress={() => {}} />
    </SafeAreaView>
  );
}
