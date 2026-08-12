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
import { BottomNavBar, TabKey } from '../components/BottomNavBar';
import { ClipboardIcon, CheckCircleIcon, MicIcon, CameraIcon, AvatarIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

export interface DashboardHomeScreenProps {
  onNavigate?: (screenId: number) => void;
  onTabSelect?: (tabKey: TabKey) => void;
}

export const DashboardHomeScreen: React.FC<DashboardHomeScreenProps> = ({ onNavigate, onTabSelect }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={false} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* User Greeting Header Row */}
        <View style={styles.userRow}>
          <View style={styles.userTextContainer}>
            <Text style={styles.greetingText}>{t('goodMorningUser')}</Text>
            <Text style={styles.dateText}>{t('todaysDate')}</Text>
          </View>
          <AvatarIcon />
        </View>

        {/* TODAY'S OVERVIEW Section */}
        <Text style={styles.sectionHeader}>{t('todaysOverview')}</Text>
        <View style={styles.overviewGrid}>
          {/* Card 1: Assigned Tasks */}
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.overviewCard}
            onPress={() => onNavigate && onNavigate(6)} // Go to Today's Tasks
          >
            <View style={styles.cardTopRow}>
              <ClipboardIcon />
              <View style={styles.activeBadge}>
                <Text style={styles.activeBadgeText}>{t('activeBadge')}</Text>
              </View>
            </View>
            <Text style={styles.cardBigValue}>2</Text>
            <Text style={styles.cardLabel}>{t('assignedTasks')}</Text>
          </TouchableOpacity>

          {/* Card 2: Checked In Today */}
          <View style={styles.overviewCard}>
            <View style={styles.cardTopRow}>
              <CheckCircleIcon />
              <View style={styles.doneBadge}>
                <Text style={styles.doneBadgeText}>{t('doneBadge')}</Text>
              </View>
            </View>
            <Text style={styles.cardMediumValue}>08:05 AM</Text>
            <Text style={styles.cardLabel}>{t('checkedInToday')}</Text>
          </View>
        </View>

        {/* QUICK ACTIONS Section */}
        <Text style={styles.sectionHeader}>{t('quickActions')}</Text>
        <View style={styles.quickActionsRow}>
          <TouchableOpacity activeOpacity={0.8} style={styles.quickActionCard}>
            <MicIcon />
            <Text style={styles.quickActionText}>{t('voiceLog')}</Text>
          </TouchableOpacity>

          <TouchableOpacity activeOpacity={0.8} style={styles.quickActionCard}>
            <CameraIcon />
            <Text style={styles.quickActionText}>{t('photoProof')}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="Home" onTabSelect={onTabSelect} />
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
    paddingTop: 20,
    paddingBottom: 24,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  userTextContainer: {
    flex: 1,
  },
  greetingText: {
    fontSize: 21,
    fontWeight: '800',
    color: '#1E6132',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 13,
    color: '#6A7D6C',
  },
  sectionHeader: {
    fontSize: 13,
    fontWeight: '800',
    color: '#556957',
    letterSpacing: 0.5,
    marginBottom: 14,
  },
  overviewGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  overviewCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 14,
    padding: 16,
    marginRight: 10,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 4,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  activeBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  activeBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E7D32',
  },
  doneBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 10,
  },
  doneBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E7D32',
  },
  cardBigValue: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1E6132',
    marginBottom: 4,
  },
  cardMediumValue: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1E6132',
    marginBottom: 8,
    marginTop: 6,
  },
  cardLabel: {
    fontSize: 12,
    color: '#607362',
    fontWeight: '500',
  },
  quickActionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  quickActionCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 14,
    paddingVertical: 14,
    marginRight: 10,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#253627',
    marginLeft: 10,
  },
});
