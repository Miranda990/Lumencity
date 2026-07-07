import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import { theme } from './theme';

export default function Analytics() {
  // Dados do gráfico de barras semanais [Dia, Valor]
  const weeklyData = [
    { day: 'Mon', value: 120, height: '40%' },
    { day: 'Tue', value: 180, height: '60%' },
    { day: 'Wed', value: 210, height: '70%' },
    { day: 'Thu', value: 260, height: '86%' },
    { day: 'Fri', value: 230, height: '76%' },
    { day: 'Sat', value: 160, height: '53%' },
    { day: 'Sun', value: 90, height: '30%' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Analytics</Text>
          <TouchableOpacity style={styles.notificationButton}>
            <Text style={{ fontSize: 18, color: '#FFF' }}>🔔</Text>
          </TouchableOpacity>
        </View>

        {/* MAIN CARD: TOTAL ECO-TOKENS */}
        <View style={styles.mainCard}>
          <View style={styles.mainCardLeft}>
            <View style={styles.tokenTitleRow}>
              <Text style={styles.leafIconSmall}>🍃</Text>
              <Text style={styles.mainCardLabel}>Total Eco-Tokens</Text>
            </View>
            <Text style={styles.tokenValue}>
              1,450 <Text style={styles.tokenUnit}>LUMEN</Text>
            </Text>
            <View style={styles.badgeUp}>
              <Text style={styles.badgeUpText}>▲ 12% this month</Text>
            </View>
            <Text style={styles.equivalentText}>Equivalent to $145.00 in rewards</Text>
          </View>
          
          {/* Símbolo de Token Grande Neon */}
          <View style={styles.mainCardRight}>
            <View style={styles.outerNeonCircle}>
              <View style={styles.innerNeonCircle}>
                <Text style={{ fontSize: 32, color: theme.colors.primaryGreen }}>🍃</Text>
              </View>
            </View>
          </View>
        </View>

        {/* MINI CARDS ROW (MWh Saved & L Saved) */}
        <View style={styles.miniCardsRow}>
          {/* Card Energia */}
          <View style={styles.miniCard}>
            <View style={styles.miniCardHeader}>
              <Text style={[styles.miniCardIcon, { color: theme.colors.primaryGreen }]}>⚡</Text>
              <View>
                <Text style={styles.miniCardValue}>24.8</Text>
                <Text style={styles.miniCardSub}>MWh Saved</Text>
              </View>
            </View>
            {/* Linha de Gráfico Simulada */}
            <View style={styles.sparkline}>
              <Text style={{ color: theme.colors.primaryGreen, fontSize: 12 }}>📈 ~~~~~~~~~~</Text>
            </View>
          </View>

          {/* Card Água */}
          <View style={styles.miniCard}>
            <View style={styles.miniCardHeader}>
              <Text style={[styles.miniCardIcon, { color: '#00D2FF' }]}>💧</Text>
              <View>
                <Text style={styles.miniCardValue}>12.5k</Text>
                <Text style={styles.miniCardSub}>L Saved</Text>
              </View>
            </View>
            {/* Linha de Gráfico Simulada */}
            <View style={styles.sparkline}>
              <Text style={{ color: '#00D2FF', fontSize: 12 }}>📈 ~~~~~~~~~~</Text>
            </View>
          </View>
        </View>

        {/* WEEKLY TOKEN EARNINGS (BAR CHART) */}
        <View style={styles.chartBlock}>
          <View style={styles.chartBlockHeader}>
            <Text style={styles.chartBlockIcon}>📊</Text>
            <Text style={styles.chartBlockTitle}>Weekly Token Earnings</Text>
          </View>
          
          <View style={styles.barChartContainer}>
            {/* Eixo Y de Valores */}
            <View style={styles.yAxis}>
              <Text style={styles.axisText}>300</Text>
              <Text style={styles.axisText}>225</Text>
              <Text style={styles.axisText}>150</Text>
              <Text style={styles.axisText}>75</Text>
              <Text style={styles.axisText}>0</Text>
            </View>

            {/* Colunas do Gráfico */}
            <View style={styles.barsArea}>
              {weeklyData.map((item, index) => (
                <View key={index} style={styles.barColumn}>
                  <Text style={styles.barValueText}>{item.value}</Text>
                  <View style={[styles.actualBar, { height: item.height }]} />
                  <Text style={styles.barDayText}>{item.day}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.legendRow}>
            <View style={[styles.legendDot, { backgroundColor: theme.colors.primaryGreen }]} />
            <Text style={styles.legendText}>Tokens Earned (LUMEN)</Text>
          </View>
        </View>

        {/* CONTRIBUTION BREAKDOWN */}
        <View style={styles.chartBlock}>
          <View style={styles.chartBlockHeader}>
            <Text style={styles.chartBlockIcon}>🍩</Text>
            <Text style={styles.chartBlockTitle}>Contribution Breakdown</Text>
          </View>

          <View style={styles.breakdownBody}>
            {/* Gráfico de Rosca Estilizado */}
            <View style={styles.donutContainer}>
              <View style={styles.donutSegmentGreen} />
              <View style={styles.donutSegmentYellow} />
              <View style={styles.donutSegmentBlue} />
              <View style={styles.donutCenter}>
                <Text style={{ fontSize: 24, color: theme.colors.primaryGreen }}>🍃</Text>
              </View>
            </View>

            {/* Legendas */}
            <View style={styles.breakdownLegends}>
              <View style={styles.breakdownRow}>
                <View style={[styles.breakdownDot, { backgroundColor: theme.colors.primaryGreen }]} />
                <Text style={styles.breakdownPercent}>45%</Text>
                <Text style={styles.breakdownLabel}>Recycling</Text>
              </View>
              <View style={styles.breakdownRow}>
                <View style={[styles.breakdownDot, { backgroundColor: '#FFC107' }]} />
                <Text style={styles.breakdownPercent}>35%</Text>
                <Text style={styles.breakdownLabel}>Energy Saving</Text>
              </View>
              <View style={styles.breakdownRow}>
                <View style={[styles.breakdownDot, { backgroundColor: '#00D2FF' }]} />
                <Text style={styles.breakdownPercent}>20%</Text>
                <Text style={styles.breakdownLabel}>Water Conservation</Text>
              </View>
            </View>
          </View>
        </View>

        {/* RECENT TRANSACTIONS */}
        <View style={styles.chartBlock}>
          <View style={styles.chartBlockHeader}>
            <Text style={styles.chartBlockIcon}>🕒</Text>
            <Text style={styles.chartBlockTitle}>Recent Transactions</Text>
          </View>

          {/* Transação 1 */}
          <View style={styles.transactionRow}>
            <Text style={styles.txIcon}>♻️</Text>
            <Text style={styles.txAmountGreen}>+50 LUMEN</Text>
            <Text style={styles.txDetails} numberOfLines={1}>Recycling Bin #4</Text>
            <Text style={styles.txTime}>Today, 10:24 AM</Text>
            <Text style={styles.txArrow}>›</Text>
          </View>

          {/* Transação 2 */}
          <View style={styles.transactionRow}>
            <Text style={styles.txIcon}>⚡</Text>
            <Text style={styles.txAmountGreen}>+20 LUMEN</Text>
            <Text style={styles.txDetails} numberOfLines={1}>Off-peak Energy Saving</Text>
            <Text style={styles.txTime}>Today, 08:15 AM</Text>
            <Text style={styles.txArrow}>›</Text>
          </View>

          {/* Transação 3 */}
          <View style={[styles.transactionRow, { borderBottomWidth: 0 }]}>
            <Text style={styles.txIcon}>💧</Text>
            <Text style={styles.txAmountGreen}>+15 LUMEN</Text>
            <Text style={styles.txDetails} numberOfLines={1}>Water Conservation</Text>
            <Text style={styles.txTime}>Yesterday, 09:42 PM</Text>
            <Text style={styles.txArrow}>›</Text>
          </View>
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
    paddingTop: 20,
    paddingBottom: 110,
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
  notificationButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#262626',
  },
  mainCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    padding: 20,
    flexDirection: 'row',
    marginBottom: 16,
  },
  mainCardLeft: {
    flex: 1,
  },
  tokenTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  leafIconSmall: {
    fontSize: 14,
    marginRight: 6,
  },
  mainCardLabel: {
    color: theme.colors.textSecondary,
    fontSize: 14,
    fontWeight: '500',
  },
  tokenValue: {
    fontSize: 36,
    fontWeight: '800',
    color: theme.colors.primaryGreen,
  },
  tokenUnit: {
    fontSize: 16,
    fontWeight: '500',
    color: theme.colors.textPrimary,
  },
  badgeUp: {
    backgroundColor: '#0A2F1D',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
    marginVertical: 12,
  },
  badgeUpText: {
    color: theme.colors.primaryGreen,
    fontSize: 12,
    fontWeight: '600',
  },
  equivalentText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
  },
  mainCardRight: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  outerNeonCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: theme.colors.primaryGreen,
    shadowColor: theme.colors.primaryGreen,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12251A',
  },
  innerNeonCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: theme.colors.primaryGreen,
    justifyContent: 'center',
    alignItems: 'center',
  },
  miniCardsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  miniCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    padding: 16,
    width: '48%',
    height: 100,
    justifyContent: 'space-between',
  },
  miniCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  miniCardIcon: {
    fontSize: 22,
    marginRight: 10,
  },
  miniCardValue: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  miniCardSub: {
    fontSize: 11,
    color: theme.colors.textSecondary,
  },
  sparkline: {
    marginTop: 8,
    opacity: 0.6,
  },
  chartBlock: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    padding: 20,
    marginBottom: 16,
  },
  chartBlockHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  chartBlockIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  chartBlockTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textPrimary,
  },
  barChartContainer: {
    flexDirection: 'row',
    height: 180,
    alignItems: 'flex-end',
  },
  yAxis: {
    justifyContent: 'space-between',
    height: '85%',
    paddingBottom: 22,
    marginRight: 10,
  },
  axisText: {
    color: theme.colors.textSecondary,
    fontSize: 11,
    textAlign: 'right',
    width: 24,
  },
  barsArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2E',
    height: '100%',
    paddingBottom: 20,
  },
  barColumn: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '100%',
    width: '11%',
  },
  barValueText: {
    color: theme.colors.primaryGreen,
    fontSize: 10,
    fontWeight: '600',
    marginBottom: 4,
  },
  actualBar: {
    width: '100%',
    backgroundColor: theme.colors.primaryGreen,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },
  barDayText: {
    color: theme.colors.textSecondary,
    fontSize: 11,
    position: 'absolute',
    bottom: -20,
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 6,
  },
  legendText: {
    color: theme.colors.textSecondary,
    fontSize: 12,
  },
  breakdownBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  donutContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 14,
    borderColor: theme.colors.primaryGreen, // Cor predominante base
  },
  donutSegmentYellow: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 14,
    borderColor: 'transparent',
    borderTopColor: '#FFC107',
    transform: [{ rotate: '45deg' }],
  },
  donutSegmentBlue: {
    position: 'absolute',
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 14,
    borderColor: 'transparent',
    borderBottomColor: '#00D2FF',
    transform: [{ rotate: '-40deg' }],
  },
  donutCenter: {
    width: 92,
    height: 92,
    borderRadius: 46,
    backgroundColor: theme.colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  breakdownLegends: {
    flex: 1,
    marginLeft: 24,
  },
  breakdownRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 6,
  },
  breakdownDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: 8,
  },
  breakdownPercent: {
    color: theme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '700',
    width: 38,
  },
  breakdownLabel: {
    color: theme.colors.textSecondary,
    fontSize: 13,
  },
  transactionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#262629',
  },
  txIcon: {
    fontSize: 16,
    marginRight: 10,
  },
  txAmountGreen: {
    color: theme.colors.primaryGreen,
    fontSize: 14,
    fontWeight: '700',
    width: 90,
  },
  txDetails: {
    flex: 1,
    color: theme.colors.textPrimary,
    fontSize: 14,
    fontWeight: '500',
    paddingRight: 4,
  },
  txTime: {
    color: theme.colors.textSecondary,
    fontSize: 12,
    marginRight: 8,
  },
  txArrow: {
    color: '#48484A',
    fontSize: 16,
    fontWeight: 'bold',
  },
});