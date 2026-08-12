import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Header } from '../components/Header';
import { BottomNavBar } from '../components/BottomNavBar';
import { useLanguage } from '../context/LanguageContext';

export const NotificationsOfflineScreen = ({ onCheckConnection, onBack, onTabSelect }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t('systemStatusTitle')}</Text>

        {/* Offline Graphic Circle */}
        <View style={styles.offlineCircle}>
          <Text style={styles.offlineIcon}>📡⚡</Text>
        </View>

        {/* Title & Subtitle */}
        <Text style={styles.offlineTitle}>{t('youAreOfflineTitle')}</Text>
        <Text style={styles.offlineDesc}>{t('youAreOfflineDesc')}</Text>

        {/* Sync Info Box */}
        <View style={styles.syncCard}>
          <Text style={styles.cloudIcon}>🌩️</Text>
          <Text style={styles.syncText}>{t('offlineSyncNote')}</Text>
        </View>

        {/* Check Connection Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.checkBtn}
          onPress={onCheckConnection}
        >
          <Text style={styles.checkBtnText}>{t('checkConnectionBtn')}</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="Home" onTabSelect={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAF8',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
    alignItems: 'center',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  pageTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#1E6132',
    letterSpacing: 1.1,
    textAlign: 'center',
    marginBottom: 32,
  },
  offlineCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#FDE8E8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  offlineIcon: {
    fontSize: 48,
  },
  offlineTitle: {
    fontSize: 22,
    fontWeight: '900',
    color: '#223324',
    marginBottom: 8,
  },
  offlineDesc: {
    fontSize: 14,
    color: '#657767',
    marginBottom: 36,
  },
  syncCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 16,
    marginBottom: 32,
    elevation: 1,
  },
  cloudIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  syncText: {
    flex: 1,
    fontSize: 12.5,
    color: '#556957',
    lineHeight: 18,
    fontWeight: '500',
  },
  checkBtn: {
    width: '80%',
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.8,
    borderColor: '#1E6132',
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBtnText: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E6132',
  },
});
