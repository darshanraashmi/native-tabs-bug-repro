import React from 'react';
import { NativeTabs } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs minimizeBehavior="onScrollDown">
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: "house", selected: "house.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="payments">
        <NativeTabs.Trigger.Label>Payments</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: "creditcard", selected: "creditcard.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="residents">
        <NativeTabs.Trigger.Label>Residents</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: "building.2", selected: "building.2.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="socialize">
        <NativeTabs.Trigger.Label>Socialize</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: "sparkles", selected: "sparkles" }} />
      </NativeTabs.Trigger>

      {/* This is the tab that fails to separate on iOS 18.1/18.2+ */}
      <NativeTabs.Trigger name="settings" role="search">
        <NativeTabs.Trigger.Label>More</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf={{ default: "square.grid.2x2", selected: "square.grid.2x2.fill" }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
