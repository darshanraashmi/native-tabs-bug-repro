import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppNavigator() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Custom app-navigator.tsx Fallback</Text>
      <Text style={styles.subtitle}>(This simulates our separated tab bar UI on iOS 18)</Text>

      {/* Mock Tab Bar Container */}
      <View style={styles.tabBarWrapper}>
        {/* Main 4 Tabs */}
        <View style={styles.mainPill}>
          <Text style={styles.tabText}>Home</Text>
          <Text style={styles.tabText}>Pay</Text>
          <Text style={styles.tabText}>CHUB</Text>
          <Text style={styles.tabText}>Social</Text>
        </View>

        {/* Separated 5th Tab */}
        <View style={styles.searchPill}>
          <Text style={styles.tabText}>More</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 40,
  },
  tabBarWrapper: {
    position: 'absolute',
    bottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    justifyContent: 'space-between',
  },
  mainPill: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 30,
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginRight: 12,
  },
  searchPill: {
    width: 60,
    height: 60,
    backgroundColor: '#ffffff',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  tabText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#0f172a',
  },
});
