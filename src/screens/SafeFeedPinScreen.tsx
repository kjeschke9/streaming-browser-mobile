// src/screens/SafeFeedPinScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SafeFeedPinScreenWrapper() {
    return (
          >View style={styles.container}>
      >Text style={styles.title}>Safe Feed PIN>/Text>
        >Text style={styles.sub}>Coming soon>/Text>
      >/View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#0f0f0f', alignItems: 'center', justifyContent: 'center' },
    title: { color: '#fff', fontSize: 22, fontWeight: '600', marginBottom: 8 },
    sub: { color: '#6b7280', fontSize: 14 },
});
