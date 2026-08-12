import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Header } from '../components/Header';
import { useLanguage } from '../context/LanguageContext';

export interface NewUser {
  name: string;
  phone: string;
  location: string;
  crop: string;
}

export interface NewRegistrationScreenProps {
  onRegisterSuccess?: (newUser: NewUser) => void;
  onBackToSignIn?: () => void;
}

export const NewRegistrationScreen: React.FC<NewRegistrationScreenProps> = ({ onRegisterSuccess, onBackToSignIn }) => {
  const { t } = useLanguage();
  const [fullName, setFullName] = useState<string>('');
  const [mobileNumber, setMobileNumber] = useState<string>('');
  const [villageLocation, setVillageLocation] = useState<string>('');
  const [selectedCrop, setSelectedCrop] = useState<string>('Paddy (Rice)');

  const cropOptions = [
    t('cropPaddy'),
    t('cropWheat'),
    t('cropSugarcane'),
    t('cropCotton'),
  ];

  const handleRegister = () => {
    if (!fullName || !mobileNumber) {
      alert('Please enter your full name and mobile number.');
      return;
    }
    const newUser: NewUser = {
      name: fullName,
      phone: `+91 ${mobileNumber}`,
      location: villageLocation || 'Sector 4B, Kisaanu Farm',
      crop: selectedCrop,
    };
    if (onRegisterSuccess) {
      onRegisterSuccess(newUser);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBackToSignIn} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Title & Subtitle */}
        <Text style={styles.titleText}>{t('registerTitle')}</Text>
        <Text style={styles.subtitleText}>{t('registerSubtitle')}</Text>

        {/* Full Name Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{t('fullNameLabel')}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={t('fullNamePlaceholder')}
            placeholderTextColor="#9AA89C"
            value={fullName}
            onChangeText={setFullName}
          />
        </View>

        {/* Mobile Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{t('mobileLabel')}</Text>
          <View style={styles.phoneBox}>
            <Text style={styles.countryCode}>+91</Text>
            <View style={styles.divider} />
            <TextInput
              style={styles.phoneInput}
              keyboardType="phone-pad"
              placeholder="98765 43210"
              placeholderTextColor="#9AA89C"
              value={mobileNumber}
              onChangeText={setMobileNumber}
            />
          </View>
        </View>

        {/* Farm Location Input */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{t('villageLocationLabel')}</Text>
          <TextInput
            style={styles.textInput}
            placeholder={t('villageLocationPlaceholder')}
            placeholderTextColor="#9AA89C"
            value={villageLocation}
            onChangeText={setVillageLocation}
          />
        </View>

        {/* Crop Selection */}
        <View style={styles.inputGroup}>
          <Text style={styles.inputLabel}>{t('cropTypeLabel')}</Text>
          <View style={styles.cropGrid}>
            {cropOptions.map((crop) => (
              <TouchableOpacity
                key={crop}
                activeOpacity={0.8}
                style={[
                  styles.cropPill,
                  selectedCrop === crop && styles.cropPillActive,
                ]}
                onPress={() => setSelectedCrop(crop)}
              >
                <Text
                  style={[
                    styles.cropPillText,
                    selectedCrop === crop && styles.cropPillTextActive,
                  ]}
                >
                  {crop}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Submit Register Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.submitBtn}
          onPress={handleRegister}
        >
          <Text style={styles.submitBtnText}>{t('registerSubmitBtn')}</Text>
        </TouchableOpacity>

        {/* Already Have Account Link */}
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.signInLinkBtn}
          onPress={onBackToSignIn}
        >
          <Text style={styles.signInLinkText}>{t('alreadyHaveAccount')}</Text>
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
    paddingTop: 18,
    paddingBottom: 32,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 22,
    fontWeight: '900',
    color: '#1E6132',
    marginBottom: 6,
  },
  subtitleText: {
    fontSize: 13.5,
    color: '#657767',
    marginBottom: 24,
    lineHeight: 18,
  },
  inputGroup: {
    marginBottom: 18,
  },
  inputLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#465A48',
    marginBottom: 8,
  },
  textInput: {
    height: 50,
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 12,
    paddingHorizontal: 14,
    fontSize: 14,
    color: '#223324',
    backgroundColor: '#FFFFFF',
  },
  phoneBox: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 12,
    paddingHorizontal: 14,
    backgroundColor: '#FFFFFF',
  },
  countryCode: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1E6132',
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#D5E2D6',
    marginHorizontal: 12,
  },
  phoneInput: {
    flex: 1,
    fontSize: 14,
    fontWeight: '600',
    color: '#223324',
    padding: 0,
  },
  cropGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  cropPill: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#F0F4F0',
    margin: 4,
    borderWidth: 1,
    borderColor: '#E2EBE2',
  },
  cropPillActive: {
    backgroundColor: '#1E6132',
    borderColor: '#1E6132',
  },
  cropPillText: {
    fontSize: 12.5,
    fontWeight: '600',
    color: '#465948',
  },
  cropPillTextActive: {
    color: '#FFFFFF',
  },
  submitBtn: {
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    elevation: 2,
  },
  submitBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  signInLinkBtn: {
    alignItems: 'center',
    paddingVertical: 6,
  },
  signInLinkText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E6132',
    textDecorationLine: 'underline',
  },
});
