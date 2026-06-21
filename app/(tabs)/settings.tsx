import { View, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';

export default function SettingsScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeholder: "Search settings...",
        hideWhenScrolling: true,
      },
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>More/Settings Screen</Text>
    </View>
  );
}
