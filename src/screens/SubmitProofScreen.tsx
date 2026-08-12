import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Header } from '../components/Header';
import { useLanguage } from '../context/LanguageContext';

import photoProofImg from '../../assets/images/photo_proof.png';

export interface SubmitProofScreenProps {
  onSubmit?: () => void;
  onBack?: () => void;
}

export const SubmitProofScreen: React.FC<SubmitProofScreenProps> = ({ onSubmit, onBack }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t('submitProofTitle')}</Text>

        {/* REVIEW ATTACHMENTS Card */}
        <View style={styles.card}>
          <Text style={styles.cardHeaderTitle}>{t('reviewAttachmentsTitle')}</Text>

          {/* Attachment Item 1: Photo */}
          <View style={styles.attachmentItem}>
            <Image
              source={typeof photoProofImg === 'string' ? { uri: photoProofImg } : photoProofImg}
              style={styles.attachmentThumb}
            />
            <View style={styles.attachmentMeta}>
              <Text style={styles.attachmentTitle}>{t('fieldProofPhotoName')}</Text>
              <Text style={styles.attachmentSize}>{t('fieldProofPhotoSize')}</Text>
            </View>
            <Text style={styles.greenCheck}>✓</Text>
          </View>

          {/* Attachment Item 2: Voice Note */}
          <View style={styles.voiceAttachmentPill}>
            <View style={styles.voiceLeftRow}>
              <Text style={styles.micIconText}>🎙️</Text>
              <Text style={styles.voiceTitleText}>{t('voiceNoteProofTitle')}</Text>
            </View>
            <Text style={styles.playIconText}>▷</Text>
          </View>
        </View>

        {/* TASK DETAILS Card */}
        <View style={styles.card}>
          <Text style={styles.fieldLabel}>{t('farmingTaskLabel')}</Text>
          <Text style={styles.fieldValue}>{t('taskIrrigationPeaZone')}</Text>

          <View style={styles.divider} />

          <Text style={styles.fieldLabel}>{t('submissionTimestampLabel')}</Text>
          <Text style={styles.fieldValue}>{t('submissionTimestampValue')}</Text>
        </View>

        {/* Submit Work Proof Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.submitBtn}
          onPress={onSubmit} // Go to Screen 14 (Submission Success)
        >
          <Text style={styles.submitBtnText}>
            {t('submitWorkProofBtn')} <Text style={styles.arrowText}>→</Text>
          </Text>
        </TouchableOpacity>
      </ScrollView>
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
  card: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    elevation: 1,
  },
  cardHeaderTitle: {
    fontSize: 12,
    fontWeight: '800',
    color: '#526955',
    letterSpacing: 0.8,
    marginBottom: 14,
  },
  attachmentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
  },
  attachmentThumb: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
  },
  attachmentMeta: {
    flex: 1,
  },
  attachmentTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#223324',
  },
  attachmentSize: {
    fontSize: 11.5,
    color: '#708372',
    marginTop: 2,
  },
  greenCheck: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E6132',
  },
  voiceAttachmentPill: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#EEF6EF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  voiceLeftRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  micIconText: {
    fontSize: 16,
    marginRight: 8,
  },
  voiceTitleText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E6132',
  },
  playIconText: {
    fontSize: 14,
    color: '#1E6132',
  },
  fieldLabel: {
    fontSize: 11.5,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.6,
    marginBottom: 4,
  },
  fieldValue: {
    fontSize: 14.5,
    fontWeight: '800',
    color: '#223324',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F4F0',
    marginVertical: 14,
  },
  submitBtn: {
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#1E6132',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  submitBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  arrowText: {
    fontSize: 18,
    fontWeight: '900',
  },
});
