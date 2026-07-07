import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { theme } from './theme';

export default function DeviceCard({ 
  icon, 
  title, 
  status, 
  statusType, // 'active', 'eco', 'standby'
  points, 
  pointsType, // 'earned', 'bonus'
  detail, 
  battery 
}) {
  
  const isEnabled = statusType === 'active' || statusType === 'eco';

  const getStatusColor = () => {
    if (statusType === 'active') return theme.colors.primaryGreen;
    if (statusType === 'eco') return theme.colors.primaryGreen; // Verde na foto
    if (statusType === 'standby') return theme.colors.statusYellow;
    return theme.colors.textSecondary;
  };

  return (
    <View style={styles.card}>
      {/* Lado Esquerdo: Ícone */}
      <View style={styles.iconContainer}>
        <Text style={styles.iconText}>{icon}</Text>
      </View>

      {/* Meio: Informações Principais */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        
        <View style={styles.statusRow}>
          <View style={[styles.statusDot, { backgroundColor: getStatusColor() }]} />
          <Text style={[styles.statusText, { color: getStatusColor() }]}>{status}</Text>
        </View>

        <Text style={styles.pointsText}>
          {points} <Text style={styles.pointsSub}>{pointsType}</Text>
        </Text>

        <Text style={styles.detailText}>{detail}</Text>
      </View>

      {/* Lado Direito: Switch e Bateria */}
      <View style={styles.rightContainer}>
        <Switch
          trackColor={{ false: '#3A3A3C', true: theme.colors.primaryGreen }}
          thumbColor={'#FFFFFF'}
          ios_backgroundColor="#3A3A3C"
          value={isEnabled}
          disabled={true} // Apenas visual como no layout estático da foto
        />
        <Text style={styles.batteryText}>📶 {battery}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  iconContainer: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: theme.colors.iconContainerBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2C2C2E',
  },
  iconText: {
    fontSize: 24,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  statusText: {
    fontSize: 13,
    fontWeight: '500',
  },
  pointsText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.primaryGreen,
    marginBottom: 4,
  },
  pointsSub: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    fontWeight: '400',
  },
  detailText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  rightContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 65,
  },
  batteryText: {
    fontSize: 11,
    color: theme.colors.textSecondary,
  },
});