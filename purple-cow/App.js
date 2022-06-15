import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppContent from './AppContent';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContent/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
