import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native';
import { theme } from './theme';
import SettingRow from './SettingRow';

export default function Settings() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
        
        {/* TITULO PRINCIPAL */}
        <Text style={styles.headerTitle}>Settings</Text>

        {/* CARD DE PERFIL */}
        <View style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            {/* Simulando a foto com um placeholder cinza escuro de alto contraste se não houver imagem local */}
            <View style={styles.avatarPlaceholder}>
              <Text style={{ fontSize: 24 }}>👤</Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Alex Johnson</Text>
            <Text style={styles.profileEmail}>alex.johnson@lumencity.com</Text>
            <TouchableOpacity style={styles.manageButton}>
              <Text style={styles.manageButtonText}>Manage Profile  ›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* SEÇÃO: ACCOUNT */}
        <Text style={styles.sectionHeader}>ACCOUNT</Text>
        <View style={styles.blockContainer}>
          <SettingRow icon="🛡️" title="Security" />
          <SettingRow icon="🔒" title="Privacy" showBorder={false} />
        </View>

        {/* SEÇÃO: NOTIFICATIONS */}
        <Text style={styles.sectionHeader}>NOTIFICATIONS</Text>
        <View style={styles.blockContainer}>
          <SettingRow icon="🔔" title="Push Notifications" />
          <SettingRow icon="✉️" title="Email Notifications" showBorder={false} />
        </View>

        {/* SEÇÃO: PREFERENCES */}
        <Text style={styles.sectionHeader}>PREFERENCES</Text>
        <View style={styles.blockContainer}>
          <SettingRow icon="🌐" title="Language" rightText="English" />
          <SettingRow icon="🌙" title="Dark Mode" rightText="On" showBorder={false} />
        </View>

        {/* SEÇÃO: SUPPORT */}
        <Text style={styles.sectionHeader}>SUPPORT</Text>
        <View style={styles.blockContainer}>
          <SettingRow icon="❓" title="Help Center" />
          <SettingRow icon="🎧" title="Contact Us" showBorder={false} />
        </View>

        {/* SEÇÃO: ABOUT */}
        <Text style={styles.sectionHeader}>ABOUT</Text>
        <View style={styles.blockContainer}>
          <SettingRow icon="📄" title="Terms & Conditions" />
          <SettingRow icon="ℹ️" title="Version" rightText="1.3.0 (Build 45)" showBorder={false} />
        </View>

        {/* BOTÃO LOG OUT */}
        <TouchableOpacity style={styles.logoutButton}>
          <Text style={styles.logoutText}>🏃‍♂️ Log Out</Text>
        </TouchableOpacity>

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
    paddingBottom: 110, // Mantém a rolagem fluida acima do menu inferior
  },
  headerTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    color: theme.colors.textPrimary,
    marginBottom: 24,
  },
  profileCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 28,
  },
  avatarContainer: {
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    borderColor: theme.colors.primaryGreen, // Linha neon circular ao redor do perfil
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarPlaceholder: {
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: '#2C2C2E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 2,
  },
  profileEmail: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    marginBottom: 8,
  },
  manageButton: {
    backgroundColor: '#1C1C1E',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  manageButtonText: {
    color: theme.colors.primaryGreen,
    fontSize: 13,
    fontWeight: '600',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '700',
    color: theme.colors.textSecondary,
    marginBottom: 8,
    marginLeft: 4,
    letterSpacing: 0.5,
  },
  blockContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: 20,
    marginBottom: 24,
    overflow: 'hidden', // Garante que o efeito de clique respeite as bordas arredondadas do container
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#3A1C1C',
    backgroundColor: '#1A1010',
    marginTop: 8,
  },
  logoutText: {
    color: '#FF453A', // Vermelho idêntico ao padrão iOS/Android de logout
    fontSize: 16,
    fontWeight: '600',
  },
});