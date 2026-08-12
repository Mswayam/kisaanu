import React, { useState, useEffect } from 'react';
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
import { BottomNavBar, TabKey } from '../components/BottomNavBar';
import { useLanguage } from '../context/LanguageContext';

export interface VoiceActivityLogScreenProps {
  onSave?: () => void;
  onBack?: () => void;
  onTabSelect?: (tabKey: TabKey) => void;
}

export const VoiceActivityLogScreen: React.FC<VoiceActivityLogScreenProps> = ({ onSave, onBack, onTabSelect }) => {
  const { t } = useLanguage();
  const [seconds, setSeconds] = useState<number>(15);
  const [isRecording, setIsRecording] = useState<boolean>(true);

  useEffect(() => {
    let timer: any;
    if (isRecording) {
      timer = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRecording]);

  const formatTimer = (totalSecs: number): string => {
    const mins = Math.floor(totalSecs / 60);
    const secs = totalSecs % 60;
    const pad = (num: number) => (num < 10 ? `0${num}` : num);
    return `${pad(mins)}:${pad(secs)}`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t('voiceActivityLogTitle')}</Text>

        {/* Card Container */}
        <View style={styles.mainCard}>
          <Text style={styles.cardTitle}>{t('recordDailyActivityTitle')}</Text>
          <Text style={styles.cardDesc}>{t('recordDailyActivityDesc')}</Text>

          {/* Pulse Recording Circle */}
          <View style={styles.pulseOuterRing}>
            <View style={styles.pulseInnerCircle}>
              <Text style={styles.timerDisplay}>{formatTimer(seconds)}</Text>
              <Text style={styles.recordingStatusText}>RECORDING...</Text>
            </View>
          </View>

          {/* Date Badge */}
          <View style={styles.dateBadge}>
            <Text style={styles.dateBadgeText}>Date: 26/07/2026</Text>
          </View>

          {/* Stop & Save Button */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.stopSaveBtn}
            onPress={() => {
              setIsRecording(false);
              if (onSave) onSave();
            }}
          >
            <Text style={styles.stopSaveBtnText}>⏹ {t('stopAndSaveRecordingBtn')}</Text>
          </TouchableOpacity>
        </View>

        {/* Translation Disclaimer */}
        <Text style={styles.disclaimerText}>{t('voiceTranslateSubtext')}</Text>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="Voice" onTabSelect={onTabSelect} />
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
    marginBottom: 20,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 20,
    padding: 24,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#223324',
    marginBottom: 6,
  },
  cardDesc: {
    fontSize: 13,
    color: '#657767',
    marginBottom: 28,
  },
  pulseOuterRing: {
    width: 170,
    height: 170,
    borderRadius: 85,
    backgroundColor: '#E5F2E7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  pulseInnerCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: '#1E6132',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerDisplay: {
    fontSize: 28,
    fontWeight: '900',
    color: '#FFFFFF',
    letterSpacing: 1,
    marginBottom: 4,
  },
  recordingStatusText: {
    fontSize: 10,
    fontWeight: '800',
    color: '#A9D4B3',
    letterSpacing: 0.8,
  },
  dateBadge: {
    backgroundColor: '#EEF6EF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginBottom: 24,
  },
  dateBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E6132',
  },
  stopSaveBtn: {
    width: '100%',
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stopSaveBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#708372',
    textAlign: 'center',
    lineHeight: 18,
  },
});
