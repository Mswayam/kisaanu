import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  HomeTabIcon,
  TasksTabIcon,
  VoiceTabIcon,
  AttendanceTabIcon,
  ProfileTabIcon,
} from './Icons';
import { useLanguage } from '../context/LanguageContext';

export const BottomNavBar = ({ activeTab = 'Home', onTabSelect }) => {
  const { t } = useLanguage();

  const tabs = [
    { key: 'Home', label: t('tabHome'), icon: (act) => <HomeTabIcon active={act} /> },
    { key: 'Tasks', label: t('tabTasks'), icon: (act) => <TasksTabIcon active={act} /> },
    { key: 'Voice', label: t('tabVoice'), icon: (act) => <VoiceTabIcon active={act} /> },
    { key: 'Attendance', label: t('tabAttendance'), icon: (act) => <AttendanceTabIcon active={act} /> },
    { key: 'Profile', label: t('tabProfile'), icon: (act) => <ProfileTabIcon active={act} /> },
  ];

  return (
    <View style={styles.navContainer}>
      <View style={styles.navInner}>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              activeOpacity={0.7}
              style={styles.tabButton}
              onPress={() => onTabSelect && onTabSelect(tab.key)}
            >
              {tab.icon(isActive)}
              <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    height: 64,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#EEF4EF',
    justifyContent: 'center',
    width: '100%',
  },
  navInner: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    maxWidth: 500,
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 8,
  },
  tabButton: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 4,
  },
  tabLabel: {
    fontSize: 10.5,
    fontWeight: '600',
    color: '#7C8E7F',
    marginTop: 3,
  },
  tabLabelActive: {
    color: '#1E6132',
    fontWeight: '800',
  },
});
