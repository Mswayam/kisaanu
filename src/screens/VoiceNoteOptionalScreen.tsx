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
import { useLanguage } from '../context/LanguageContext';

export interface VoiceNoteOptionalScreenProps {
  onFinish?: () => void;
  onBack?: () => void;
}

export const VoiceNoteOptionalScreen: React.FC<VoiceNoteOptionalScreenProps> = ({ onFinish, onBack }) => {
  const { t } = useLanguage();
  const [seconds, setSeconds] = useState<number>(8);
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
        <Text style={styles.pageTitle}>{t('voiceNoteOptionalTitle')}</Text>

        {/* Instructions */}
        <Text style={styles.instructionTitle}>{t('recordShortVoiceNoteTitle')}</Text>
        <Text style={styles.instructionDesc}>{t('recordShortVoiceNoteDesc')}</Text>

        {/* Audio Waveform Recording Box */}
        <View style={styles.recordingCard}>
          <Text style={styles.recordingTimer}>{formatTimer(seconds)}</Text>

          {/* Equalizer Waveform Animation Simulation */}
          <View style={styles.waveformContainer}>
            {[24, 38, 18, 48, 30, 42, 20, 36, 26, 44, 16].map((h, index) => (
              <View
                key={index}
                style={[
                  styles.waveformBar,
                  { height: isRecording ? h : 16 },
                ]}
              />
            ))}
          </View>

          {/* Status Indicator */}
          <View style={styles.recordingStatusRow}>
            <View style={styles.redDot} />
            <Text style={styles.recordingText}>
              {isRecording ? t('recordingText') : 'Paused'}
            </Text>
          </View>
        </View>

        {/* Task Tag Pill */}
        <View style={styles.taskTagPill}>
          <Text style={styles.taskTagText}>{t('taskTag')}</Text>
        </View>

        {/* Pause Recording Primary Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.pauseBtn}
          onPress={() => {
            setIsRecording(!isRecording);
            if (!isRecording && onFinish) {
              onFinish();
            }
          }}
        >
          <Text style={styles.pauseBtnText}>
            {isRecording ? '⏸️ Pause Recording' : '▶️ Resume Recording'}
          </Text>
        </TouchableOpacity>

        {/* Secondary Actions (Play Back / Re-record) */}
        <View style={styles.secondaryBtnRow}>
          <TouchableOpacity activeOpacity={0.8} style={styles.secondaryBtn}>
            <Text style={styles.secondaryBtnIcon}>▷</Text>
            <Text style={styles.secondaryBtnText}>{t('playBackBtn')}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={[styles.secondaryBtn, styles.reRecordBtn]}>
            <Text style={styles.reRecordIcon}>🗑️</Text>
            <Text style={styles.reRecordText}>{t('reRecordBtn')}</Text>
          </TouchableOpacity>
        </View>

        {/* Footer info note */}
        <Text style={styles.footerNote}>{t('voiceNoteFooterNote')}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 32,
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
  instructionTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#223324',
    marginBottom: 6,
  },
  instructionDesc: {
    fontSize: 13,
    color: '#657767',
    marginBottom: 24,
    lineHeight: 18,
  },
  recordingCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 18,
    paddingVertical: 28,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 18,
    elevation: 1,
  },
  recordingTimer: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1E6132',
    letterSpacing: 1.5,
    marginBottom: 16,
  },
  waveformContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    marginBottom: 16,
  },
  waveformBar: {
    width: 4,
    backgroundColor: '#2E7D32',
    borderRadius: 2,
    marginHorizontal: 3,
  },
  recordingStatusRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  redDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E53935',
    marginRight: 6,
  },
  recordingText: {
    fontSize: 12.5,
    fontWeight: '700',
    color: '#E53935',
  },
  taskTagPill: {
    backgroundColor: '#EEF6EF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 8,
    alignSelf: 'center',
    marginBottom: 24,
  },
  taskTagText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1E6132',
  },
  pauseBtn: {
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  pauseBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  secondaryBtnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  secondaryBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  secondaryBtnIcon: {
    fontSize: 14,
    color: '#344636',
    marginRight: 6,
  },
  secondaryBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#344636',
  },
  reRecordBtn: {
    marginRight: 0,
    marginLeft: 8,
  },
  reRecordIcon: {
    fontSize: 14,
    marginRight: 6,
  },
  reRecordText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#D32F2F',
  },
  footerNote: {
    fontSize: 12,
    color: '#839685',
    textAlign: 'center',
  },
});
