import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Header } from '../components/Header';
import { LockIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

import tractorLoginImg from '../../assets/images/tractor_login.png';

export interface MobileLoginScreenProps {
  onNext?: (phone: string) => void;
  onBack?: () => void;
}

export const MobileLoginScreen: React.FC<MobileLoginScreenProps> = ({ onNext, onBack }) => {
  const { t } = useLanguage();
  const [phoneNumber, setPhoneNumber] = useState<string>('98765 43210');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Banner Illustration */}
        <View style={styles.imageContainer}>
          <Image
            source={typeof tractorLoginImg === 'string' ? { uri: tractorLoginImg } : tractorLoginImg}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* Welcome Text */}
        <Text style={styles.titleText}>{t('welcomeBack')}</Text>
        <Text style={styles.subtitleText}>{t('loginSubtitle')}</Text>

        {/* Phone Input Box */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>{t('mobileNumberLabel')}</Text>
          <View style={styles.inputBox}>
            <Text style={styles.countryCode}>+91</Text>
            <View style={styles.divider} />
            <TextInput
              style={styles.textInput}
              keyboardType="phone-pad"
              value={phoneNumber}
              onChangeText={setPhoneNumber}
              placeholder={t('phonePlaceholder')}
              placeholderTextColor="#99A69B"
            />
          </View>
        </View>

        {/* Send OTP Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.sendOtpBtn}
          onPress={() => {
            if (onNext) onNext(phoneNumber);
          }}
        >
          <Text style={styles.sendOtpBtnText}>
            {t('sendOtp')} <Text style={styles.arrowText}>→</Text>
          </Text>
        </TouchableOpacity>

        {/* Disclaimer & Security Badge */}
        <View style={styles.footerContainer}>
          <Text style={styles.disclaimerText}>{t('disclaimerText')}</Text>
          <View style={styles.securityRow}>
            <LockIcon />
            <Text style={styles.securityText}>{t('secureInfo')}</Text>
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
  container: {
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 24,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 190,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 20,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '800',
    color: '#1E6132',
    marginBottom: 4,
  },
  subtitleText: {
    fontSize: 14,
    color: '#6A7D6D',
    marginBottom: 24,
  },
  inputSection: {
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 13,
    color: '#556657',
    fontWeight: '600',
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    borderWidth: 1.5,
    borderColor: '#1E6132',
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  countryCode: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E6132',
  },
  divider: {
    width: 1,
    height: 22,
    backgroundColor: '#C5D8C7',
    marginHorizontal: 12,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#2A362C',
    padding: 0,
  },
  sendOtpBtn: {
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
    marginBottom: 24,
  },
  sendOtpBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  arrowText: {
    fontSize: 18,
    fontWeight: '900',
  },
  footerContainer: {
    alignItems: 'center',
  },
  disclaimerText: {
    fontSize: 12,
    color: '#708373',
    textAlign: 'center',
    marginBottom: 10,
  },
  securityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  securityText: {
    fontSize: 12,
    color: '#1E6132',
    fontWeight: '600',
  },
});
