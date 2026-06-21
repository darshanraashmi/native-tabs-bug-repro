# iOS 27 NativeTabs role="search" bug reproduction

This repository provides a minimal reproducible example for a bug where `unstable-native-tabs` fails to separate the `role="search"` accessory on iOS 27, even though it works perfectly on iOS 26.

## Architecture Context

In our production app, we route based on the OS:
- **iOS 18:** Uses a custom Javascript fallback (`app-navigator.tsx`).
- **iOS 26 & 27:** Uses `expo-router/unstable-native-tabs`.

## Steps to Reproduce

1. Install dependencies with `npm install`
2. Run the project on an **iOS 26** simulator/device. Notice the 5th tab ("More") has a separated, circular search accessory floating on the right side of the main tab bar pill. (This is the **expected behavior**).
3. Run the exact same project on an **iOS 27** simulator/device. Notice the 5th tab is squished into the main pill alongside the other 4 tabs, and the separated circular division is entirely missing. (This is the **broken behavior**).

## Relevant Code

The tab configuration is defined in `app/(tabs)/_layout.tsx`:

```tsx
<NativeTabs.Trigger name="settings" role="search">
  <NativeTabs.Trigger.Label>More</NativeTabs.Trigger.Label>
  <NativeTabs.Trigger.Icon sf={{ default: "square.grid.2x2", selected: "square.grid.2x2.fill" }} />
</NativeTabs.Trigger>
```

The destination stack (`app/(tabs)/settings.tsx`) correctly implements `headerSearchBarOptions`.
