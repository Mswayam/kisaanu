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
import { useLanguage } from '../context/LanguageContext';

export interface SubmissionSuccessScreenProps {
  onOkay?: () => void;
  onHome?: () => void;
}

export const SubmissionSuccessScreen: React.FC<SubmissionSuccessScreenProps> = ({ onOkay, onHome }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.mainContent}>
          {/* Big Green Check Circle */}
          <View style={styles.successCircle}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>

          {/* Success Title & Subtitle */}
          <Text style={styles.titleText}>{t('workSubmittedSuccessfullyTitle')}</Text>
          <Text style={styles.subtitleText}>{t('workSubmittedDesc')}</Text>

          {/* Receipt Details Box */}
          <View style={styles.receiptCard}>
            <View style={styles.receiptRow}>
              <Text style={styles.receiptLabel}>{t('submissionIdLabel')}</Text>
              <Text style={styles.receiptValue}>{t('submissionIdValue')}</Text>
            </View>
            <View style={styles.divider} />
            <View style={styles.receiptRow}>
              <Text style={styles.receiptLabel}>{t('workDoneLabel')}</Text>
              <Text style={styles.receiptValue}>{t('workDoneValue')}</Text>
            </View>
          </View>
        </View>

        {/* Buttons at bottom */}
        <View style={styles.bottomSection}>
          <TouchableOpacity activeOpacity={0.85} style={styles.okayBtn} onPress={onOkay}>
            <Text style={styles.okayBtnText}>{t('okay')}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.7} style={styles.homeLinkBtn} onPress={onHome}>
            <Text style={styles.homeLinkText}>{t('backToHomeLink')}</Text>
          </TouchableOpacity>
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
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 48,
    paddingBottom: 36,
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  mainContent: {
    alignItems: 'center',
  },
  successCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: '#1E6132',
    backgroundColor: '#EAF5EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  checkIcon: {
    fontSize: 38,
    color: '#1E6132',
    fontWeight: '900',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E6132',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitleText: {
    fontSize: 14,
    color: '#657767',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 36,
    paddingHorizontal: 12,
  },
  receiptCard: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 20,
    elevation: 1,
  },
  receiptRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  receiptLabel: {
    fontSize: 13,
    color: '#708372',
    fontWeight: '500',
  },
  receiptValue: {
    fontSize: 14,
    fontWeight: '800',
    color: '#223324',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F4F0',
    marginVertical: 14,
  },
  bottomSection: {
    width: '100%',
  },
  okayBtn: {
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  okayBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  homeLinkBtn: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  homeLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E6132',
    textDecorationLine: 'underline',
  },
});
