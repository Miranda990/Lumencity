import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { theme } from './theme';

const { width } = Dimensions.get('window');
// Calcula a largura dinâmica para caber 3 cards com espaçamento
const CARD_WIDTH = (width - 48) / 3; 

export default function MetricCard({ icon, title, value, unit, status, statusColor }) {
  return (
    <View style={styles.card}>
      <View style={styles.iconContainer}>
        {icon}
      </View>
      <Text style={styles.title} numberOfLines={2}>{title}</Text>
      <Text style={styles.value}>
        {value}{unit ? <Text style={styles.unit}> {unit}</Text> : null}
      </Text>
      <Text style={[styles.status, { color: statusColor || theme.colors.primaryGreen }]}>
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.surfaceSecondary,
    borderRadius: 24,
    padding: 16,
    width: CARD_WIDTH,
    minHeight: 160,
    justifyContent: 'space-between',
  },
  iconContainer: {
    marginBottom: 12,
  },
  title: {
    color: theme.colors.textSecondary,
    fontSize: 13,
    fontWeight: '500',
    lineHeight: 18,
  },
  value: {
    color: theme.colors.textPrimary,
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 4,
  },
  unit: {
    fontSize: 11,
    fontWeight: '500',
    color: theme.colors.textSecondary,
  },
  status: {
    fontSize: 12,
    fontWeight: '600',
  },
});