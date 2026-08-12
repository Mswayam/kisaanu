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
import { LocationIcon, CameraIcon, MicIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

export interface PermissionsScreenProps {
  onFinish?: () => void;
  onBack?: () => void;
}

export const PermissionsScreen: React.FC<PermissionsScreenProps> = ({ onFinish, onBack }) => {
  const { t } = useLanguage();

  const permissionsList = [
    {
      id: 'location',
      icon: <LocationIcon />,
      title: t('locationPermissionTitle'),
      desc: t('locationPermissionDesc'),
    },
    {
      id: 'camera',
      icon: <CameraIcon />,
      title: t('cameraPermissionTitle'),
      desc: t('cameraPermissionDesc'),
    },
    {
      id: 'mic',
      icon: <MicIcon />,
      title: t('micPermissionTitle'),
      desc: t('micPermissionDesc'),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Title */}
        <Text style={styles.titleText}>{t('allowPermissionsTitle')}</Text>
        <Text style={styles.subtitleText}>{t('permissionsSubtitle')}</Text>

        {/* Permission Item Cards */}
        <View style={styles.cardsContainer}>
          {permissionsList.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.iconWrapper}>{item.icon}</View>
              <View style={styles.cardTextContent}>
                <Text style={styles.cardTitle}>{item.title}</Text>
                <Text style={styles.cardDesc}>{item.desc}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Allow All & Continue Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.allowBtn}
          onPress={() => {
            if (onFinish) onFinish();
          }}
        >
          <Text style={styles.allowBtnText}>{t('allowAllContinue')}</Text>
        </TouchableOpacity>

        {/* Footer info note */}
        <Text style={styles.footerNote}>{t('permissionsFooterNote')}</Text>
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
    marginBottom: 24,
  },
  cardsContainer: {
    marginBottom: 24,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E6EFE7',
    borderRadius: 14,
    padding: 16,
    marginBottom: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
    elevation: 1,
  },
  iconWrapper: {
    marginRight: 14,
  },
  cardTextContent: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#243326',
    marginBottom: 4,
  },
  cardDesc: {
    fontSize: 12.5,
    color: '#6A7C6C',
    lineHeight: 17,
  },
  allowBtn: {
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
  allowBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  footerNote: {
    fontSize: 12,
    color: '#839685',
    textAlign: 'center',
  },
});
