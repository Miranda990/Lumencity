import React, { useState } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import Home from './Home';
import Devices from './Devices'; 
import Analytics from './Analytics'; 
import Settings from './Settings';
import BottomNavigation from './BottomNavigation';
import { theme } from './theme';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home': return <Home />;
      case 'Analytics': return <Analytics />;
      case 'Devices': return <Devices />;
      case 'Settings': return <Settings />;
      default: return <Home />;
    }
  };

  return (
    <View style={styles.container}>
      {/* Esconde a barra de notificações do celular */}
      <StatusBar hidden={true} barStyle="light-content" backgroundColor={theme.colors.background} />
      
      {/* Renderiza a tela ativa */}
      {renderScreen()}
      
      <BottomNavigation currentScreen={currentScreen} setCurrentScreen={setCurrentScreen} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
});