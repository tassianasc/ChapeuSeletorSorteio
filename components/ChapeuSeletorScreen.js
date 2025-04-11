import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const casas = ['Grifinória', 'Sonserina', 'Lufa-Lufa', 'Corvinal'];

export default function ChapeuSeletorScreen({ navigation }) {
  function sortearCasa() {
    const casa = casas[Math.floor(Math.random() * casas.length)];
    navigation.navigate('CasaSorteada', { casa });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🧙‍♂️ Bem-vindo ao Chapéu Seletor!</Text>
      <Button title="Sortear Casa" onPress={sortearCasa} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
});
