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
import { OtpInput } from '../components/OtpInput';
import { useLanguage } from '../context/LanguageContext';

export interface OtpVerificationScreenProps {
  phoneNumber?: string;
  onNext?: () => void;
  onBack?: () => void;
}

export const OtpVerificationScreen: React.FC<OtpVerificationScreenProps> = ({
  phoneNumber = '+91 XXXXXXX123',
  onNext,
  onBack,
}) => {
  const { t } = useLanguage();
  const [timer, setTimer] = useState<number>(28);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTimer = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins < 10 ? '0' : ''}${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={styles.titleText}>{t('verifyTitle')}</Text>

        {/* Subtitle */}
        <Text style={styles.subtitleText}>
          {t('verifySubtitlePrefix')}
          <Text style={styles.phoneNumberHighlight}>{phoneNumber}</Text>
        </Text>

        {/* 6 Digit Input boxes */}
        <OtpInput codeLength={6} />

        {/* Resend text */}
        <View style={styles.resendRow}>
          <Text style={styles.didntReceiveText}>{t('didnReceiveCode')} </Text>
          <TouchableOpacity activeOpacity={0.7} disabled={timer > 0}>
            <Text style={[styles.resendText, timer > 0 && styles.resendDisabled]}>
              {t('resendOtp')} ({formatTimer(timer)})
            </Text>
          </TouchableOpacity>
        </View>

        {/* Verify & Continue Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.verifyBtn}
          onPress={() => {
            if (onNext) onNext();
          }}
        >
          <Text style={styles.verifyBtnText}>{t('verifyAndContinue')}</Text>
        </TouchableOpacity>

        {/* Change Number Link */}
        <TouchableOpacity activeOpacity={0.7} style={styles.changeNumContainer} onPress={onBack}>
          <Text style={styles.changeNumText}>{t('wrongNumberLink')}</Text>
        </TouchableOpacity>
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
    paddingTop: 24,
    paddingBottom: 32,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E6132',
    marginBottom: 8,
  },
  subtitleText: {
    fontSize: 14,
    color: '#607363',
    lineHeight: 20,
    marginBottom: 8,
  },
  phoneNumberHighlight: {
    fontWeight: '800',
    color: '#223325',
  },
  resendRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 28,
  },
  didntReceiveText: {
    fontSize: 13,
    color: '#708272',
  },
  resendText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E6132',
  },
  resendDisabled: {
    color: '#3B4E3E',
  },
  verifyBtn: {
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
    marginBottom: 20,
  },
  verifyBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  changeNumContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  changeNumText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E6132',
    textDecorationLine: 'underline',
  },
});
