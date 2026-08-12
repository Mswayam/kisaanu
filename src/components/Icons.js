import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const BackArrowIcon = () => (
  <View style={styles.backCircle}>
    <Text style={styles.backArrowText}>←</Text>
  </View>
);

export const LocationIcon = () => (
  <View style={styles.iconCircle}>
    <Text style={styles.iconText}>📍</Text>
  </View>
);

export const CameraIcon = () => (
  <View style={styles.iconCircle}>
    <Text style={styles.iconText}>📷</Text>
  </View>
);

export const MicIcon = () => (
  <View style={styles.iconCircle}>
    <Text style={styles.iconText}>🎙️</Text>
  </View>
);

export const LockIcon = () => (
  <Text style={styles.lockText}>🔒</Text>
);

export const CheckMarkIcon = () => (
  <Text style={styles.checkText}>✓</Text>
);

export const ClockIcon = () => (
  <Text style={styles.clockIconText}>🕒</Text>
);

export const StarIcon = () => (
  <Text style={styles.starIconText}>⭐</Text>
);

export const AvatarIcon = () => (
  <View style={styles.avatarCircle}>
    <Text style={styles.avatarText}>👳‍♂️</Text>
  </View>
);

export const ClipboardIcon = () => (
  <Text style={styles.cardHeaderIcon}>📋</Text>
);

export const CheckCircleIcon = () => (
  <Text style={styles.cardHeaderIcon}>☑️</Text>
);

// Bottom Nav Tab Icons
export const HomeTabIcon = ({ active }) => (
  <Text style={[styles.tabIcon, active && styles.tabIconActive]}>🏠</Text>
);

export const TasksTabIcon = ({ active }) => (
  <Text style={[styles.tabIcon, active && styles.tabIconActive]}>📋</Text>
);

export const VoiceTabIcon = ({ active }) => (
  <Text style={[styles.tabIcon, active && styles.tabIconActive]}>🎙️</Text>
);

export const AttendanceTabIcon = ({ active }) => (
  <Text style={[styles.tabIcon, active && styles.tabIconActive]}>📅</Text>
);

export const ProfileTabIcon = ({ active }) => (
  <Text style={[styles.tabIcon, active && styles.tabIconActive]}>👤</Text>
);

const styles = StyleSheet.create({
  backCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#EAF3EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backArrowText: {
    fontSize: 18,
    color: '#1E6132',
    fontWeight: 'bold',
    lineHeight: 20,
  },
  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#EAF4EB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconText: {
    fontSize: 20,
  },
  lockText: {
    fontSize: 13,
    marginRight: 4,
  },
  checkText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 'bold',
    marginLeft: 8,
  },
  clockIconText: {
    fontSize: 18,
    color: '#1E6132',
  },
  starIconText: {
    fontSize: 16,
    marginRight: 6,
  },
  avatarCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#FFE6C7',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#E29A47',
  },
  avatarText: {
    fontSize: 20,
  },
  cardHeaderIcon: {
    fontSize: 18,
    color: '#1E6132',
  },
  tabIcon: {
    fontSize: 19,
    opacity: 0.5,
  },
  tabIconActive: {
    opacity: 1,
  },
});
