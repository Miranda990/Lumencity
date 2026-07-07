import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from './theme';

export default function BottomNavigation({ currentScreen, setCurrentScreen }) {
  return (
    <View style={styles.navContainer}>
      {/* Botão HOME */}
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => setCurrentScreen('Home')}
      >
        <Text style={[styles.navIcon, currentScreen === 'Home' && styles.activeText]}>🏠</Text>
        <Text style={[styles.navText, currentScreen === 'Home' && styles.activeText]}>Home</Text>
      </TouchableOpacity>

      {/* Botão ANALYTICS */}
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => setCurrentScreen('Analytics')}
      >
        <Text style={[styles.navIcon, currentScreen === 'Analytics' && styles.activeText]}>📈</Text>
        <Text style={[styles.navText, currentScreen === 'Analytics' && styles.activeText]}>Analytics</Text>
      </TouchableOpacity>

      {/* Botão DEVICES */}
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => setCurrentScreen('Devices')}
      >
        {/* Barra verde em cima do ícone ativo, igualzinho ao layout da foto */}
        {currentScreen === 'Devices' && <View style={styles.activeTopBar} />}
        <Text style={[styles.navIcon, currentScreen === 'Devices' && styles.activeText]}>⣿</Text>
        <Text style={[styles.navText, currentScreen === 'Devices' && styles.activeText]}>Devices</Text>
      </TouchableOpacity>

      {/* Botão SETTINGS */}
      <TouchableOpacity 
        style={styles.navItem} 
        onPress={() => setCurrentScreen('Settings')}
      >
        <Text style={[styles.navIcon, currentScreen === 'Settings' && styles.activeText]}>⚙️</Text>
        <Text style={[styles.navText, currentScreen === 'Settings' && styles.activeText]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    position: 'absolute',
    bottom: 24,
    left: 16,
    right: 16,
    backgroundColor: theme.colors.navBar,
    height: 72,
    borderRadius: 24,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    elevation: 10,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    flex: 1,
    position: 'relative',
  },
  navIcon: {
    fontSize: 20,
    color: theme.colors.textSecondary,
    marginBottom: 4,
  },
  navText: {
    fontSize: 11,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  activeText: {
    color: theme.colors.primaryGreen,
  },
  activeTopBar: {
    position: 'absolute',
    top: 0,
    width: 24,
    height: 3,
    backgroundColor: theme.colors.primaryGreen,
    borderBottomLeftRadius: 2,
    borderBottomRightRadius: 2,
  }
});