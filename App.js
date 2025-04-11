import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ChapeuSeletorScreen from './components/ChapeuSeletorScreen';
import CasaSorteadaScreen from './components/CasaSorteadaScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ChapeuSeletor">
        <Stack.Screen name="ChapeuSeletor" component={ChapeuSeletorScreen} options={{ title: 'Chapéu Seletor' }} />
        <Stack.Screen name="CasaSorteada" component={CasaSorteadaScreen} options={{ title: 'Casa Sorteada' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
