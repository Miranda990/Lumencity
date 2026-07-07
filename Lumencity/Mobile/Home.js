import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from './theme';
import MetricCard from './MetricCard';

// Ícones simulados por texto/formas simples para rodar em qualquer ambiente sem quebrar
const BellIcon = () => <View style={{ width: 6, height: 6, backgroundColor: theme.colors.primaryGreen, borderRadius: 3, position: 'absolute', top: 12, right: 14 }} />;
                        <Text style={{ fontSize: 18, color: '#FFF' }}>🔔</Text>;
const LeafIcon = () => <Text style={{ fontSize: 20, color: theme.colors.primaryGreen }}>🍃</Text>;
const LightIcon = () => <Text style={{ fontSize: 18, color: theme.colors.primaryGreen }}>💡</Text>;
const SolarIcon = () => <Text style={{ fontSize: 18, color: theme.colors.primaryGreen }}>☀️</Text>;
const CarIcon = () => <Text style={{ fontSize: 18, color: theme.colors.primaryGreen }}>🚗</Text>;

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Text style={styles.logoIcon}>☋</Text>
            <Text style={styles.logoText}>lumencity</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <BellIcon />
          </TouchableOpacity>
        </View>

        {/* GREETING */}
        <View style={styles.greetingContainer}>
          <Text style={styles.greetingTitle}>Hello, Alex</Text>
          <Text style={styles.greetingSubtitle}>Here's what's happening in your city today.</Text>
        </View>

        {/* MAIN EFFICIENCY CARD */}
        <View style={styles.mainCard}>
          <View style={styles.mainCardHeader}>
            <View style={styles.leafBadge}>
              <LeafIcon />
            </View>
            <View>
              <Text style={styles.mainCardTitle}>Energy Efficiency</Text>
              <Text style={styles.mainCardSubtitle}>Overall Efficiency</Text>
            </View>
          </View>

          <View style={styles.mainCardBody}>
            <View style={styles.leftMetrics}>
              <Text style={styles.efficiencyPercentage}>78%</Text>
              <View style={styles.statusBadge}>
                <Text style={styles.statusBadgeText}>Efficient</Text>
              </View>
              <Text style={styles.efficiencyDescription}>
                Great job! You're saving more energy than yesterday.
              </Text>
            </View>

            {/* CIRCULAR PROGRESS */}
            <View style={styles.rightChart}>
              <View style={styles.outerCircle}>
                <View style={styles.innerCircle}>
                  <Text style={styles.chartIcon}>⚡</Text>
                  <Text style={styles.chartPercentage}>78%</Text>
                  <Text style={styles.chartSubtext}>of target</Text>
                </View>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.viewInsightsButton}>
            <Text style={styles.viewInsightsText}>📊 View Insights  ›</Text>
          </TouchableOpacity>
        </View>

        {/* SMALL METRIC CARDS ROW */}
        <View style={styles.metricsRow}>
          <MetricCard 
            icon={<LightIcon />} 
            title="Smart Lighting" 
            value="92%" 
            status="Operational" 
            statusColor={theme.colors.primaryGreen}
          />
          <MetricCard 
            icon={<SolarIcon />} 
            title="Solar Output" 
            value="4.2" 
            unit="MW" 
            status="Live Output" 
            statusColor={theme.colors.accentGreen}
          />
          <MetricCard 
            icon={<CarIcon />} 
            title="City Traffic" 
            value="36%" 
            status="Moderate" 
            statusColor={theme.colors.primaryGreen}
          />
        </View>

        {/* ENERGY TREND PREVIEW HEADER (BOTTOM) */}
        <View style={styles.trendHeader}>
          <Text style={styles.trendTitle}>Energy Trend (24h)</Text>
          <Text style={styles.trendDropdown}>Last 24 Hours  ▾</Text>
        </View>

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
    paddingBottom: 100, // Espaço para não ser coberto pelo menu inferior
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 32,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIcon: {
    fontSize: 24,
    color: theme.colors.primaryGreen,
    fontWeight: 'bold',
    marginRight: 6,
  },
  logoText: {
    fontSize: 22,
    color: theme.colors.textPrimary,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingContainer: {
    marginBottom: 24,
  },
  greetingTitle: {
    fontSize: 32,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 6,
  },
  greetingSubtitle: {
    fontSize: 15,
    color: theme.colors.textSecondary,
  },
  mainCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 32,
    padding: 24,
    marginBottom: 16,
  },
  mainCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  leafBadge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#162C1E',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  mainCardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  mainCardSubtitle: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginTop: 2,
  },
  mainCardBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftMetrics: {
    flex: 1,
    paddingRight: 12,
  },
  efficiencyPercentage: {
    fontSize: 48,
    fontWeight: '800',
    color: theme.colors.textPrimary,
  },
  statusBadge: {
    backgroundColor: theme.colors.badgeGreenBg,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginVertical: 10,
  },
  statusBadgeText: {
    color: theme.colors.primaryGreen,
    fontSize: 12,
    fontWeight: '600',
  },
  efficiencyDescription: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginTop: 6,
  },
  rightChart: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircle: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderWidth: 6,
    borderColor: theme.colors.primaryGreen, // Representação visual do progresso de 78%
    borderBottomColor: '#2C2C2C', // Simula a porção restante do gráfico de rosca
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartIcon: {
    fontSize: 12,
    color: theme.colors.primaryGreen,
    marginBottom: 2,
  },
  chartPercentage: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  chartSubtext: {
    fontSize: 10,
    color: theme.colors.textSecondary,
  },
  viewInsightsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 24,
  },
  viewInsightsText: {
    color: theme.colors.primaryGreen,
    fontSize: 15,
    fontWeight: '600',
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  trendHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  trendTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  trendDropdown: {
    fontSize: 13,
    color: theme.colors.primaryGreen,
    fontWeight: '500',
  },
});