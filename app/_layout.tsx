import React, { useState } from 'react';
import { View, Text, Switch, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Stack } from 'expo-router';
import AppNavigator from './app-navigator';

export default function RootLayout() {
  const [isIOS27Fallback, setIsIOS27Fallback] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {/* Dev Toggle to simulate the conditional logic */}
      <SafeAreaView style={{ backgroundColor: '#e2e8f0', zIndex: 999 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 16 }}>
          <Text style={{ fontWeight: 'bold' }}>Simulate iOS 27 (Custom Navigator Fallback)</Text>
          <Switch value={isIOS27Fallback} onValueChange={setIsIOS27Fallback} />
        </View>
      </SafeAreaView>

      {/* 
        On Android, we ALWAYS use the custom JS fallback in production.
        On iOS, we let the toggle decide to simulate the iOS 26 vs 27 bug.
      */}
      {Platform.OS !== 'ios' || isIOS27Fallback ? (
        <AppNavigator />
      ) : (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" />
        </Stack>
      )}
    </View>
  );
}
