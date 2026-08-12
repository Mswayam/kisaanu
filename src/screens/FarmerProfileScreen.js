import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import { Header } from '../components/Header';
import { BottomNavBar } from '../components/BottomNavBar';
import { AvatarIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

export const FarmerProfileScreen = ({ currentUser, onNavigateScreen, onLogout, onTabSelect }) => {
  const { t, language, setLanguage } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState(null); // 'personal' | 'attendance' | 'security' | null
  const [isEditing, setIsEditing] = useState(false);
  const [farmerName, setFarmerName] = useState(currentUser?.name || 'Swayam Mhaske');
  const [farmerPhone, setFarmerPhone] = useState(currentUser?.phone || '+91 98765 43210');
  const [farmLocation, setFarmLocation] = useState(currentUser?.location || 'Sector 4B, Kisaanu Farm');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={false} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t('farmerProfileTitle')}</Text>

        {/* Executive Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <AvatarIcon />
            <TouchableOpacity activeOpacity={0.8} style={styles.cameraEditBadge}>
              <Text style={styles.cameraIconText}>📷</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.userName}>{farmerName}</Text>
          <Text style={styles.userPhone}>{farmerPhone}</Text>

          <View style={styles.roleBadge}>
            <Text style={styles.roleBadgeText}>
              🌾 {currentUser?.crop || 'Farm Manager'} • {farmLocation}
            </Text>
          </View>

          {/* Performance Stats Row */}
          <View style={styles.statsRow}>
            <View style={styles.statCol}>
              <Text style={styles.statVal}>148</Text>
              <Text style={styles.statLabel}>{t('tasksCompletedLabel')}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statCol}>
              <Text style={styles.statVal}>98%</Text>
              <Text style={styles.statLabel}>{t('attendanceRateLabel')}</Text>
            </View>
            <View style={styles.statDivider} />
            <View style={styles.statCol}>
              <Text style={styles.statVal}>4.9 ⭐</Text>
              <Text style={styles.statLabel}>{t('trustRatingLabel')}</Text>
            </View>
          </View>
        </View>

        {/* Sub-Tab 1: Personal Information Card */}
        {activeSubTab === 'personal' && (
          <View style={styles.interactiveCard}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.cardTitle}>Personal & Farm Details</Text>
              <TouchableOpacity onPress={() => setIsEditing(!isEditing)}>
                <Text style={styles.editText}>{isEditing ? 'Cancel' : 'Edit'}</Text>
              </TouchableOpacity>
            </View>

            {isEditing ? (
              <View>
                <Text style={styles.label}>Name</Text>
                <TextInput style={styles.input} value={farmerName} onChangeText={setFarmerName} />
                <Text style={styles.label}>Phone</Text>
                <TextInput style={styles.input} value={farmerPhone} onChangeText={setFarmerPhone} />
                <Text style={styles.label}>Farm Location</Text>
                <TextInput style={styles.input} value={farmLocation} onChangeText={setFarmLocation} />
                <TouchableOpacity
                  style={styles.saveBtn}
                  onPress={() => setIsEditing(false)}
                >
                  <Text style={styles.saveBtnText}>{t('saveChanges')}</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.infoList}>
                <Text style={styles.infoRow}><Text style={styles.infoKey}>Full Name:</Text> {farmerName}</Text>
                <Text style={styles.infoRow}><Text style={styles.infoKey}>Mobile Number:</Text> {farmerPhone}</Text>
                <Text style={styles.infoRow}><Text style={styles.infoKey}>Farm Location:</Text> {farmLocation}</Text>
                <Text style={styles.infoRow}><Text style={styles.infoKey}>Crop Category:</Text> {currentUser?.crop || 'Paddy & Wheat'}</Text>
                <Text style={styles.infoRow}><Text style={styles.infoKey}>Kisaanu ID:</Text> #KN-94820</Text>
              </View>
            )}
          </View>
        )}

        {/* Sub-Tab 2: Attendance History Preview Card */}
        {activeSubTab === 'attendance' && (
          <View style={styles.interactiveCard}>
            <Text style={styles.cardTitle}>Recent Attendance Logs</Text>
            <View style={styles.logItem}>
              <Text style={styles.logDate}>Mon, 11 May 2026</Text>
              <Text style={styles.logStatus}>Checked In: 08:05 AM (Active)</Text>
            </View>
            <View style={styles.logItem}>
              <Text style={styles.logDate}>Sun, 10 May 2026</Text>
              <Text style={styles.logStatus}>08:00 AM - 06:00 PM (10 hrs)</Text>
            </View>
            <TouchableOpacity
              style={styles.viewFullBtn}
              onPress={() => onNavigateScreen(15)}
            >
              <Text style={styles.viewFullBtnText}>Open Full Attendance Screen →</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* Menu Settings Sub-Tabs List */}
        <View style={styles.menuContainer}>
          {/* Item 1: Personal Details */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuItem}
            onPress={() => setActiveSubTab(activeSubTab === 'personal' ? null : 'personal')}
          >
            <Text style={styles.menuIcon}>👤</Text>
            <Text style={styles.menuTitle}>{t('personalFarmDetailsMenu')}</Text>
            <Text style={styles.menuChevron}>{activeSubTab === 'personal' ? '▲' : '›'}</Text>
          </TouchableOpacity>

          {/* Item 2: Language Preference */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuItem}
            onPress={() => setLanguage(language === 'en' ? 'hi' : 'en')}
          >
            <Text style={styles.menuIcon}>🌐</Text>
            <Text style={styles.menuTitle}>{t('languagePreferencesMenu')}</Text>
            <View style={styles.langPillBadge}>
              <Text style={styles.langPillText}>{language === 'en' ? 'English' : 'हिंदी'}</Text>
            </View>
          </TouchableOpacity>

          {/* Item 3: Attendance History */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuItem}
            onPress={() => setActiveSubTab(activeSubTab === 'attendance' ? null : 'attendance')}
          >
            <Text style={styles.menuIcon}>📅</Text>
            <Text style={styles.menuTitle}>{t('attendanceHistoryMenu')}</Text>
            <Text style={styles.menuChevron}>{activeSubTab === 'attendance' ? '▲' : '›'}</Text>
          </TouchableOpacity>

          {/* Item 4: Material Inputs Log */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuItem}
            onPress={() => onNavigateScreen(18)}
          >
            <Text style={styles.menuIcon}>📋</Text>
            <Text style={styles.menuTitle}>{t('farmInputsLogMenu')}</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          {/* Item 5: System Connection Status */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuItem}
            onPress={() => onNavigateScreen(19)}
          >
            <Text style={styles.menuIcon}>📡</Text>
            <Text style={styles.menuTitle}>{t('systemStatusOfflineMenu')}</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          {/* Item 6: Help & Emergency */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.menuItem}
            onPress={() => alert('Emergency Hotline: 1800-KISAAN-HELP (1800-547-226)')}
          >
            <Text style={styles.menuIcon}>☎️</Text>
            <Text style={styles.menuTitle}>{t('helpSupportMenu')}</Text>
            <Text style={styles.menuChevron}>›</Text>
          </TouchableOpacity>

          {/* Item 7: Sign Out / Logout */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={[styles.menuItem, styles.redMenuItem]}
            onPress={onLogout}
          >
            <Text style={styles.menuIcon}>🚪</Text>
            <Text style={[styles.menuTitle, styles.redMenuTitle]}>
              {t('logoutMenu')}
            </Text>
            <Text style={[styles.menuChevron, styles.redMenuTitle]}>›</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="Profile" onTabSelect={onTabSelect} />
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
  profileCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 22,
    padding: 22,
    alignItems: 'center',
    marginBottom: 18,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
  },
  avatarWrapper: {
    position: 'relative',
  },
  cameraEditBadge: {
    position: 'absolute',
    bottom: -2,
    right: -2,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: '#1E6132',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  cameraIconText: {
    fontSize: 12,
  },
  userName: {
    fontSize: 21,
    fontWeight: '900',
    color: '#1A291C',
    marginTop: 12,
    marginBottom: 2,
  },
  userPhone: {
    fontSize: 13,
    color: '#657767',
    fontWeight: '600',
    marginBottom: 10,
  },
  roleBadge: {
    backgroundColor: '#EEF6EF',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginBottom: 20,
  },
  roleBadgeText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E6132',
  },
  statsRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#F0F4F0',
  },
  statCol: {
    flex: 1,
    alignItems: 'center',
  },
  statVal: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E6132',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 10.5,
    color: '#657767',
    fontWeight: '600',
  },
  statDivider: {
    width: 1,
    height: 26,
    backgroundColor: '#E6EFE7',
  },
  interactiveCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#1E6132',
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#1E6132',
  },
  editText: {
    fontSize: 13,
    fontWeight: '800',
    color: '#1E6132',
  },
  infoList: {
    paddingVertical: 4,
  },
  infoRow: {
    fontSize: 13,
    color: '#223324',
    marginBottom: 8,
  },
  infoKey: {
    fontWeight: '700',
    color: '#657767',
  },
  label: {
    fontSize: 11,
    color: '#657767',
    fontWeight: '700',
    marginBottom: 4,
  },
  input: {
    height: 42,
    borderWidth: 1,
    borderColor: '#E4ECE5',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 13,
    marginBottom: 10,
    color: '#223324',
  },
  saveBtn: {
    height: 42,
    backgroundColor: '#1E6132',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },
  saveBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  logItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F0',
  },
  logDate: {
    fontSize: 12,
    fontWeight: '700',
    color: '#223324',
  },
  logStatus: {
    fontSize: 11.5,
    color: '#1E6132',
  },
  viewFullBtn: {
    marginTop: 10,
    alignItems: 'center',
  },
  viewFullBtnText: {
    fontSize: 12,
    fontWeight: '800',
    color: '#1E6132',
  },
  menuContainer: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F4F0',
  },
  redMenuItem: {
    borderBottomWidth: 0,
    backgroundColor: '#FFF5F5',
  },
  menuIcon: {
    fontSize: 18,
    marginRight: 14,
  },
  menuTitle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '700',
    color: '#223324',
  },
  redMenuTitle: {
    color: '#D32F2F',
  },
  menuChevron: {
    fontSize: 18,
    color: '#A0B2A2',
    fontWeight: '700',
  },
  langPillBadge: {
    backgroundColor: '#E8F3EA',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  langPillText: {
    fontSize: 11.5,
    fontWeight: '800',
    color: '#1E6132',
  },
});
