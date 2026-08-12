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
import { useLanguage } from '../context/LanguageContext';

import farmerWelcomeImg from '../../assets/images/farmer_welcome.png';

export const WelcomeLanguageScreen = ({ onNext, onRegister }) => {
  const { language, setLanguage, t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F7FAF7" />
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* Banner Illustration */}
        <View style={styles.imageContainer}>
          <Image
            source={typeof farmerWelcomeImg === 'string' ? { uri: farmerWelcomeImg } : farmerWelcomeImg}
            style={styles.bannerImage}
            resizeMode="cover"
          />
        </View>

        {/* Branding Section */}
        <View style={styles.brandingContainer}>
          <Text style={styles.brandTitle}>{t('brandName')}</Text>
          <Text style={styles.brandTagline}>{t('tagline')}</Text>
        </View>

        <View style={styles.spacer} />

        {/* Language Selection Section */}
        <Text style={styles.chooseLanguageText}>{t('chooseLanguageTitle')}</Text>

        {/* English Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.langButton,
            language === 'en' ? styles.langButtonSelected : styles.langButtonUnselected,
          ]}
          onPress={() => {
            setLanguage('en');
            if (onNext) onNext();
          }}
        >
          <Text style={[styles.langText, language === 'en' && styles.langTextSelected]}>
            {t('englishBtnLabel')} {language === 'en' ? '✓' : ''}
          </Text>
        </TouchableOpacity>

        {/* Hindi Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={[
            styles.langButton,
            language === 'hi' ? styles.langButtonSelected : styles.langButtonUnselected,
          ]}
          onPress={() => {
            setLanguage('hi');
            if (onNext) onNext();
          }}
        >
          <Text style={[styles.langText, language === 'hi' && styles.langTextSelected]}>
            {t('hindiBtnLabel')} {language === 'hi' ? '✓' : ''}
          </Text>
        </TouchableOpacity>

        {/* Footer info */}
        <Text style={styles.footerText}>{t('versionFooter')}</Text>

        {/* Action Choice: Existing User vs New Farmer */}
        <View style={styles.actionChoiceContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.registerBtn}
            onPress={onRegister}
          >
            <Text style={styles.registerBtnText}>{t('newFarmerRegister')}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.signInLinkBtn}
            onPress={onNext}
          >
            <Text style={styles.signInLinkText}>{t('alreadyHaveAccount')}</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F7FAF7',
  },
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 32,
    alignItems: 'center',
    flexGrow: 1,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  imageContainer: {
    width: '100%',
    height: 220,
    borderRadius: 20,
    overflow: 'hidden',
    marginTop: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },
  brandingContainer: {
    alignItems: 'center',
    marginTop: 28,
  },
  brandTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#1E6132',
    letterSpacing: 1.2,
    marginBottom: 6,
  },
  brandTagline: {
    fontSize: 15,
    color: '#5C7461',
    fontWeight: '500',
  },
  spacer: {
    flex: 1,
    minHeight: 30,
  },
  chooseLanguageText: {
    fontSize: 14,
    color: '#5A6F5D',
    fontWeight: '600',
    marginBottom: 16,
  },
  langButton: {
    width: '100%',
    height: 54,
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 6,
  },
  langButtonSelected: {
    backgroundColor: '#1E6132',
    elevation: 2,
    shadowColor: '#1E6132',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  langButtonUnselected: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2EBE2',
  },
  langText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2A362C',
  },
  langTextSelected: {
    color: '#FFFFFF',
  },
  footerText: {
    marginTop: 24,
    fontSize: 11,
    color: '#8A9E8D',
    fontWeight: '500',
  },
  actionChoiceContainer: {
    width: '100%',
    marginTop: 16,
    alignItems: 'center',
  },
  registerBtn: {
    width: '100%',
    height: 48,
    backgroundColor: '#E8F3EA',
    borderWidth: 1.2,
    borderColor: '#1E6132',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  registerBtnText: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E6132',
  },
  signInLinkBtn: {
    paddingVertical: 6,
  },
  signInLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E6132',
    textDecorationLine: 'underline',
  },
});
