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
import { MicIcon, CameraIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

export const VoiceProofScreen = ({ onStartVoice, onCancel, onBack }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Header with Red Close Button */}
      <View style={styles.headerRow}>
        <TouchableOpacity activeOpacity={0.7} onPress={onBack} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <View style={styles.backCircle}>
            <Text style={styles.backArrowText}>←</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{t('voiceProofTitle')}</Text>

        <TouchableOpacity activeOpacity={0.7} onPress={onCancel} hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}>
          <Text style={styles.closeBtn}>ⓧ</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Instruction Box */}
        <View style={styles.instructionBox}>
          <MicIcon />
          <Text style={styles.instructionTitle}>{t('recordVoiceStatementTitle')}</Text>
          <Text style={styles.instructionDesc}>{t('recordVoiceStatementDesc')}</Text>
        </View>

        {/* Proof Status Cards */}
        <View style={styles.statusGrid}>
          {/* Card 1: Photo Added */}
          <View style={styles.statusCard}>
            <CameraIcon />
            <Text style={styles.statusCardText}>{t('photoAddedBadge')}</Text>
          </View>

          {/* Card 2: Voice Pending */}
          <View style={[styles.statusCard, styles.statusCardPending]}>
            <MicIcon />
            <Text style={[styles.statusCardText, styles.statusCardTextPending]}>
              {t('voicePendingBadge')}
            </Text>
          </View>
        </View>

        {/* Ready to record action box */}
        <View style={styles.actionBox}>
          <Text style={styles.readyLabel}>{t('readyToRecordLabel')}</Text>
          <View style={styles.btnRow}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.startVoiceBtn}
              onPress={onStartVoice} // Go to Screen 12
            >
              <Text style={styles.startVoiceBtnText}>{t('startVoiceNoteBtn')}</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8} style={styles.cancelBtn} onPress={onCancel}>
              <Text style={styles.cancelBtnText}>{t('cancel')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F0',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  backCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAF3EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrowText: {
    fontSize: 18,
    color: '#1E6132',
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#1E6132',
    letterSpacing: 1.1,
  },
  closeBtn: {
    fontSize: 22,
    color: '#E53935',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 32,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  instructionBox: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 22,
    alignItems: 'flex-start',
    marginBottom: 20,
    elevation: 1,
  },
  instructionTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#223324',
    marginTop: 14,
    marginBottom: 8,
  },
  instructionDesc: {
    fontSize: 13,
    color: '#657767',
    lineHeight: 19,
  },
  statusGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 28,
  },
  statusCard: {
    flex: 1,
    height: 100,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  statusCardPending: {
    backgroundColor: '#EEF6EF',
    borderColor: '#C5DEC8',
  },
  statusCardText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#465A48',
    marginTop: 8,
  },
  statusCardTextPending: {
    color: '#1E6132',
  },
  actionBox: {
    alignItems: 'center',
  },
  readyLabel: {
    fontSize: 14,
    fontWeight: '800',
    color: '#344636',
    marginBottom: 16,
  },
  btnRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  startVoiceBtn: {
    flex: 1.2,
    height: 48,
    backgroundColor: '#1E6132',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  startVoiceBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  cancelBtn: {
    flex: 0.8,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#556957',
  },
});
