import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function CasaSorteadaScreen({ route, navigation }) {
  const { casa } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.resultado}>🎉 Sua casa é:</Text>
      <Text style={styles.casa}>{casa}</Text>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  resultado: { fontSize: 22, marginBottom: 10 },
  casa: { fontSize: 32, fontWeight: 'bold', color: '#4B0082', marginBottom: 20 },
});
