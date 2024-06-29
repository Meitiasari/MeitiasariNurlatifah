import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './components/Home';
import About from './components/About';
import Kontak from './components/kontak';
import KontakDetail from './components/KontakDetail'; // Ensure the path is correct

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="DAFTAR KONTAK TEMAN SAYA" component={Kontak} />
        <Stack.Screen name="DETAIL KONTAK TEMAN SAYA" component={KontakDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

