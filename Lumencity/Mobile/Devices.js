import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { theme } from './theme';
import DeviceCard from './DeviceCard';

export default function Devices() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Devices</Text>
          <View style={styles.headerButtons}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={{ color: theme.colors.primaryGreen, fontSize: 20 }}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={{ fontSize: 18, color: '#FFF' }}>🔔</Text>
              <View style={styles.notificationDot} />
            </TouchableOpacity>
          </View>
        </View>

        {/* SEARCH BAR */}
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput 
            style={styles.searchInput} 
            placeholder="Search devices..." 
            placeholderTextColor={theme.colors.textSecondary}
          />
        </View>

        {/* SECTION 1: SMART RECYCLING BINS */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={{ fontSize: 20, marginRight: 8 }}>🗑️</Text>
            <Text style={styles.sectionTitle}>Smart Recycling Bins</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>2</Text>
            </View>
          </View>
          <Text style={styles.arrowIcon}>▼</Text>
        </View>

        <DeviceCard 
          icon="♻️"
          title="Kitchen Smart Bin"
          status="Active"
          statusType="active"
          points="450 pts"
          pointsType="earned"
          detail="Apartment 4B"
          battery="98%"
        />

        <DeviceCard 
          icon="🍾"
          title="Community Glass Collector"
          status="Active"
          statusType="active"
          points="1,200 pts"
          pointsType="earned"
          detail="Central Plaza"
          battery="96%"
        />

        {/* SECTION 2: RESOURCE MONITORS */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionTitleRow}>
            <Text style={{ fontSize: 20, marginRight: 8 }}>🌱</Text>
            <Text style={styles.sectionTitle}>Resource Monitors</Text>
            <View style={styles.countBadge}>
              <Text style={styles.countText}>2</Text>
            </View>
          </View>
          <Text style={styles.arrowIcon}>▼</Text>
        </View>

        <DeviceCard 
          icon="💧"
          title="Smart Water Meter"
          status="Eco-Mode"
          statusType="eco"
          points="300 pts"
          pointsType="bonus"
          detail="Active monitoring"
          battery="97%"
        />

        <DeviceCard 
          icon="🔌"
          title="Energy Smart Plug"
          status="Standby"
          statusType="standby"
          points="Off-peak active"
          pointsType=""
          detail=""
          battery="65%"
        />

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 110, // Garante que a BottomNavigation não cubra o último item
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
  },
  headerButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: theme.colors.searchBarBg,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 12,
    borderWidth: 1,
    borderColor: '#262626',
    position: 'relative',
  },
  notificationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.primaryGreen,
    position: 'absolute',
    top: 10,
    right: 12,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.searchBarBg,
    borderRadius: 16,
    paddingHorizontal: 14,
    height: 48,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#262626',
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 14,
  },
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '600',
    color: theme.colors.textPrimary,
  },
  countBadge: {
    backgroundColor: '#262629',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  countText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    fontWeight: '600',
  },
  arrowIcon: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
});