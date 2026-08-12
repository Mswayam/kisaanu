import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';
import { SwipeCheckInButton } from '../components/SwipeCheckInButton';
import { useLanguage } from '../context/LanguageContext';

export interface AttendanceCheckInScreenProps {
  onNavigateProfile?: () => void;
  onNavigateToCheckOut?: () => void;
  onBack?: () => void;
  onTabSelect?: (tabKey: TabKey) => void;
}

export const AttendanceCheckInScreen: React.FC<AttendanceCheckInScreenProps> = ({
  onNavigateProfile,
  onNavigateToCheckOut,
  onTabSelect,
}) => {
  const { t } = useLanguage();
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  const [isCheckedIn, setIsCheckedIn] = useState<boolean>(false);

  const handleToggleCheckIn = (checkedState: boolean) => {
    setIsCheckedIn(checkedState);
    if (checkedState && onNavigateToCheckOut) {
      setTimeout(() => {
        onNavigateToCheckOut();
      }, 600);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />

      {/* Renu OS Dashboard Top Header */}
      <View style={styles.topHeader}>
        <View style={styles.headerLeft}>
          <TouchableOpacity activeOpacity={0.7} style={styles.hamburgerBtn}>
            <Text style={styles.hamburgerText}>☰</Text>
          </TouchableOpacity>
          <View style={styles.brandGroup}>
            <Text style={styles.brandTitle}>Renu OS</Text>
            <Text style={styles.brandSubtitle}>A Product of Kisaanu</Text>
          </View>
        </View>

        <View style={styles.headerRight}>
          {/* Notification Bell */}
          <TouchableOpacity activeOpacity={0.7} style={styles.bellBtn}>
            <Text style={styles.bellIcon}>🔔</Text>
            <View style={styles.bellBadge} />
          </TouchableOpacity>

          {/* User Profile Initial Avatar */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.profileAvatarBtn}
            onPress={() => setShowProfileMenu(!showProfileMenu)}
          >
            <Text style={styles.avatarInitial}>S</Text>
          </TouchableOpacity>
        </View>

        {/* Profile Dropdown Popup Menu */}
        {showProfileMenu && (
          <View style={styles.profileDropdown}>
            <View style={styles.profileDropdownHeader}>
              <View style={styles.dropdownAvatarSquare}>
                <Text style={styles.dropdownAvatarInitial}>S</Text>
              </View>
              <View style={styles.dropdownTextWrapper}>
                <Text style={styles.dropdownName}>Swayam Mhaske</Text>
                <Text style={styles.dropdownEmail}>swayammhaske61@gmail.com</Text>
              </View>
            </View>

            <View style={styles.dropdownDivider} />

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.dropdownItem}
              onPress={() => {
                setShowProfileMenu(false);
                if (onNavigateProfile) onNavigateProfile();
              }}
            >
              <Text style={styles.dropdownItemIcon}>👤</Text>
              <Text style={styles.dropdownItemText}>My Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.dropdownItem}
              onPress={() => {
                setShowProfileMenu(false);
                alert('Signed out successfully');
              }}
            >
              <Text style={[styles.dropdownItemIcon, { color: '#D32F2F' }]}>↳</Text>
              <Text style={[styles.dropdownItemText, { color: '#D32F2F' }]}>Sign Out</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Dashboard Title & Date */}
        <Text style={styles.dashboardTitle}>Dashboard</Text>
        <Text style={styles.dashboardDate}>Monday, 11 May 2026</Text>

        {/* Notifications On Badge */}
        <View style={styles.notificationBadgeRow}>
          <Text style={styles.badgeCheckIcon}>✓</Text>
          <Text style={styles.notificationBadgeText}>Notifications On</Text>
        </View>

        {/* Interactive Swipe Check-In Button */}
        <SwipeCheckInButton
          isCheckedIn={isCheckedIn}
          onToggleCheckIn={handleToggleCheckIn}
        />

        {/* MY PROGRESS Card */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.cardHeaderTitle}>MY PROGRESS</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Text style={styles.leaderboardLink}>Leaderboard →</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.levelRow}>
            <View style={styles.plantIconCircle}>
              <Text style={styles.plantIcon}>🌱</Text>
            </View>
            <View style={styles.levelInfoWrapper}>
              <Text style={styles.levelTag}>LEVEL 1</Text>
              <Text style={styles.levelTitle}>Newcomer</Text>
              <Text style={styles.levelSubtext}>100 coins to next level</Text>
            </View>

            <View style={styles.yieldContainer}>
              <Text style={styles.wheatIcon}>🌾</Text>
              <Text style={styles.yieldValue}>0</Text>
              <Text style={styles.yieldLabel}>TOTAL YIELD</Text>
            </View>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressHeaderRow}>
            <Text style={styles.progressLabel}>PROGRESS TO NEXT LEVEL</Text>
            <Text style={styles.progressPercent}>0%</Text>
          </View>
          <View style={styles.progressBarTrack}>
            <View style={[styles.progressBarFill, { width: '0%' }]} />
          </View>
        </View>

        {/* HOW TO INCREASE YIELD Card */}
        <View style={styles.card}>
          <Text style={styles.cardHeaderTitle}>HOW TO INCREASE YIELD</Text>
          <Text style={styles.yieldSubHeader}>COMPLETE ACTIVITIES TO HARVEST REWARDS</Text>

          <View style={styles.rewardItemBox}>
            <View style={styles.rewardLeft}>
              <View style={styles.clockIconCircle}>
                <Text style={styles.clockIcon}>🕒</Text>
              </View>
              <Text style={styles.rewardTitle}>Punch in before 11:15 AM...</Text>
            </View>

            <View style={styles.rewardValueTag}>
              <Text style={styles.rewardValueText}>+10 🌾</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="Attendance" onTabSelect={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#EDF5EE',
  },
  topHeader: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E2EBE3',
    position: 'relative',
    zIndex: 9999,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  hamburgerBtn: {
    paddingRight: 12,
  },
  hamburgerText: {
    fontSize: 22,
    color: '#1E6132',
    fontWeight: 'bold',
  },
  brandGroup: {
    justifyContent: 'center',
  },
  brandTitle: {
    fontSize: 16,
    fontWeight: '900',
    color: '#1E6132',
  },
  brandSubtitle: {
    fontSize: 9.5,
    color: '#657766',
    fontWeight: '600',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellBtn: {
    marginRight: 14,
    position: 'relative',
  },
  bellIcon: {
    fontSize: 20,
  },
  bellBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#1E6132',
  },
  profileAvatarBtn: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  profileDropdown: {
    position: 'absolute',
    top: 54,
    right: 16,
    width: 240,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    zIndex: 10000,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  profileDropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dropdownAvatarSquare: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dropdownAvatarInitial: {
    fontSize: 20,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  dropdownTextWrapper: {
    flex: 1,
  },
  dropdownName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#223324',
  },
  dropdownEmail: {
    fontSize: 11,
    color: '#708372',
  },
  dropdownDivider: {
    height: 1,
    backgroundColor: '#F0F4F0',
    marginVertical: 8,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemIcon: {
    fontSize: 16,
    marginRight: 10,
    color: '#1E6132',
  },
  dropdownItemText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#344636',
  },
  container: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 24,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  dashboardTitle: {
    fontSize: 24,
    fontWeight: '900',
    color: '#1A291C',
    marginBottom: 2,
  },
  dashboardDate: {
    fontSize: 13,
    fontWeight: '700',
    color: '#1E6132',
    marginBottom: 14,
  },
  notificationBadgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D9F2DD',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  badgeCheckIcon: {
    fontSize: 12,
    color: '#1E6132',
    fontWeight: '900',
    marginRight: 6,
  },
  notificationBadgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E6132',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 18,
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  cardHeaderTitle: {
    fontSize: 15,
    fontWeight: '900',
    color: '#1A291C',
    letterSpacing: 0.5,
  },
  leaderboardLink: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E6132',
  },
  levelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FCF8',
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
  },
  plantIconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#E5F3E7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  plantIcon: {
    fontSize: 22,
  },
  levelInfoWrapper: {
    flex: 1,
  },
  levelTag: {
    fontSize: 9.5,
    fontWeight: '900',
    color: '#708372',
    letterSpacing: 0.8,
  },
  levelTitle: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1A291C',
  },
  levelSubtext: {
    fontSize: 11,
    color: '#708372',
  },
  yieldContainer: {
    alignItems: 'center',
  },
  wheatIcon: {
    fontSize: 18,
  },
  yieldValue: {
    fontSize: 18,
    fontWeight: '900',
    color: '#E29A47',
  },
  yieldLabel: {
    fontSize: 8.5,
    fontWeight: '900',
    color: '#708372',
    letterSpacing: 0.5,
  },
  progressHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  progressLabel: {
    fontSize: 10,
    fontWeight: '800',
    color: '#708372',
    letterSpacing: 0.6,
  },
  progressPercent: {
    fontSize: 10,
    fontWeight: '800',
    color: '#708372',
  },
  progressBarTrack: {
    height: 8,
    backgroundColor: '#EEF4EF',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#1E6132',
  },
  yieldSubHeader: {
    fontSize: 10,
    fontWeight: '800',
    color: '#708372',
    letterSpacing: 0.6,
    marginBottom: 12,
  },
  rewardItemBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F7FCF8',
    borderRadius: 14,
    padding: 12,
  },
  rewardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  clockIconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E5F3E7',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  clockIcon: {
    fontSize: 15,
  },
  rewardTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: '#223324',
    flex: 1,
  },
  rewardValueTag: {
    backgroundColor: '#FFF5E6',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  rewardValueText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#E29A47',
  },
});
