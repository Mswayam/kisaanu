import React, { useState } from 'react';
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
import { BottomNavBar } from '../components/BottomNavBar';
import { useLanguage } from '../context/LanguageContext';

import satelliteMapImg from '../../assets/images/satellite_map.png';

export const AttendanceCheckOutScreen = ({ onCheckOut, onBack, onTabSelect }) => {
  const { t } = useLanguage();
  const [isCheckedOutDone, setIsCheckedOutDone] = useState(false);

  const handleConfirmCheckOut = () => {
    setIsCheckedOutDone(true);
    if (onCheckOut) {
      setTimeout(() => {
        onCheckOut();
      }, 1000);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t('checkOutTitle')}</Text>

        {isCheckedOutDone ? (
          <View style={styles.successCard}>
            <View style={styles.checkIconCircle}>
              <Text style={styles.checkIconText}>✓</Text>
            </View>
            <Text style={styles.successTitle}>{t('checkedOutSuccessMsg')}</Text>
            <Text style={styles.successSubtitle}>Your shift has been logged and recorded successfully.</Text>
          </View>
        ) : (
          <>
            {/* Active Shift Summary Banner */}
            <View style={styles.activeShiftBanner}>
              <View style={styles.greenPulseDot} />
              <View style={styles.bannerTextWrapper}>
                <Text style={styles.bannerTitle}>{t('youAreCheckedInAlert')}</Text>
                <Text style={styles.bannerSubtitle}>Shift active since 08:05 AM today</Text>
              </View>
            </View>

            {/* Time & Duration Breakdown Card */}
            <View style={styles.card}>
              <View style={styles.timeRow}>
                <Text style={styles.timeLabel}>{t('checkInTimeTodayLabel')}</Text>
                <Text style={styles.punchInVal}>08:05 AM</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.timeRow}>
                <Text style={styles.timeLabel}>{t('currentTimeLabel')}</Text>
                <Text style={styles.punchOutVal}>{t('currentTimeValue')}</Text>
              </View>

              <View style={styles.divider} />

              <View style={styles.durationBox}>
                <Text style={styles.durationLabel}>{t('shiftDurationLabel')}</Text>
                <Text style={styles.durationVal}>{t('shiftDurationValue')}</Text>
              </View>
            </View>

            {/* Verified Location Section */}
            <Text style={styles.sectionHeader}>{t('checkOutLocationTitle')}</Text>
            <View style={styles.mapCard}>
              <View style={styles.mapWrapper}>
                <Image
                  source={typeof satelliteMapImg === 'string' ? { uri: satelliteMapImg } : satelliteMapImg}
                  style={styles.mapImage}
                  resizeMode="cover"
                />
                <View style={styles.pinOverlay}>
                  <Text style={styles.pinIcon}>🎯</Text>
                </View>
              </View>

              <View style={styles.addressRow}>
                <Text style={styles.locationPinIcon}>📍</Text>
                <Text style={styles.addressText}>{t('mainGateLocation')}</Text>
              </View>
            </View>

            {/* Action Buttons */}
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.confirmCheckOutBtn}
              onPress={handleConfirmCheckOut}
            >
              <Text style={styles.confirmBtnText}>
                {t('confirmCheckOutBtn')} <Text style={styles.arrowText}>→</Text>
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.cancelStayBtn}
              onPress={onBack}
            >
              <Text style={styles.cancelStayBtnText}>Cancel & Stay Checked In</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="Attendance" onTabSelect={onTabSelect} />
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
    marginBottom: 18,
  },
  successCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#1E6132',
    borderRadius: 20,
    padding: 32,
    alignItems: 'center',
    marginVertical: 30,
  },
  checkIconCircle: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#EAF5EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  checkIconText: {
    fontSize: 32,
    color: '#1E6132',
    fontWeight: '900',
  },
  successTitle: {
    fontSize: 20,
    fontWeight: '900',
    color: '#1E6132',
    marginBottom: 8,
  },
  successSubtitle: {
    fontSize: 13,
    color: '#657767',
    textAlign: 'center',
  },
  activeShiftBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF6EF',
    borderWidth: 1.2,
    borderColor: '#C5DEC8',
    borderRadius: 14,
    padding: 14,
    marginBottom: 16,
  },
  greenPulseDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#1E6132',
    marginRight: 12,
  },
  bannerTextWrapper: {
    flex: 1,
  },
  bannerTitle: {
    fontSize: 14,
    fontWeight: '800',
    color: '#1E6132',
  },
  bannerSubtitle: {
    fontSize: 11.5,
    color: '#556957',
    marginTop: 1,
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
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 13,
    color: '#657767',
    fontWeight: '600',
  },
  punchInVal: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E6132',
  },
  punchOutVal: {
    fontSize: 15,
    fontWeight: '800',
    color: '#D32F2F',
  },
  divider: {
    height: 1,
    backgroundColor: '#F0F4F0',
    marginVertical: 12,
  },
  durationBox: {
    backgroundColor: '#F7FCF8',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
  durationLabel: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#657767',
    letterSpacing: 0.6,
    marginBottom: 2,
  },
  durationVal: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E6132',
  },
  sectionHeader: {
    fontSize: 12,
    fontWeight: '800',
    color: '#556957',
    letterSpacing: 0.6,
    marginBottom: 10,
  },
  mapCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 22,
    elevation: 1,
  },
  mapWrapper: {
    height: 170,
    width: '100%',
    position: 'relative',
  },
  mapImage: {
    width: '100%',
    height: '100%',
  },
  pinOverlay: {
    position: 'absolute',
    top: 65,
    left: '46%',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(211, 47, 47, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinIcon: {
    fontSize: 18,
  },
  addressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    backgroundColor: '#FFFFFF',
  },
  locationPinIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  addressText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#223324',
  },
  confirmCheckOutBtn: {
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
  },
  confirmBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  arrowText: {
    fontSize: 18,
    fontWeight: '900',
  },
  cancelStayBtn: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelStayBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#556957',
  },
});
