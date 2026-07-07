import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from './theme';

export default function SettingRow({ icon, title, rightText, showBorder = true }) {
  return (
    <TouchableOpacity style={[styles.rowContainer, showBorder && styles.borderBottom]}>
      <View style={styles.leftGroup}>
        <Text style={styles.icon}>{icon}</Text>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.rightGroup}>
        {rightText ? <Text style={styles.rightText}>{rightText}</Text> : null}
        <Text style={styles.arrow}>›</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 16,
    height: 56,
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: '#262629',
  },
  leftGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontSize: 18,
    marginRight: 14,
    color: theme.colors.primaryGreen,
  },
  title: {
    color: theme.colors.textPrimary,
    fontSize: 16,
    fontWeight: '500',
  },
  rightGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightText: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    marginRight: 8,
  },
  arrow: {
    color: '#48484A',
    fontSize: 18,
    fontWeight: '600',
  },
});