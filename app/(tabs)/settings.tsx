import { View, Text } from 'react-native';
import { useNavigation } from 'expo-router';
import { useEffect, useState } from 'react';

export default function SettingsScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "More / Search",
      headerLargeTitle: true,
      headerSearchBarOptions: {
        placeholder: "Search settings...",
        autoCapitalize: "none",
        tintColor: "#2563eb",
        hideWhenScrolling: true,
        onChangeText: (e: any) => setSearchQuery(e.nativeEvent.text),
        onSearchButtonPress: (e: any) => setSearchQuery(e.nativeEvent.text),
        onCancelButtonPress: () => setSearchQuery(""),
      },
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>More Screen</Text>
      <Text style={{ marginTop: 20 }}>Search Query: {searchQuery}</Text>
      
      <View style={{ height: 1000, marginTop: 40 }}>
        <Text style={{ color: 'gray' }}>Scroll down to see the search bar hide.</Text>
        <Text style={{ color: 'gray', marginTop: 10 }}>Notice that the tab bar division is squished on iOS 27.</Text>
      </View>
    </View>
  );
}
