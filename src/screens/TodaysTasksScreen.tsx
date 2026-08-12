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
import { Header } from '../components/Header';
import { BottomNavBar, TabKey } from '../components/BottomNavBar';
import { ClockIcon, StarIcon } from '../components/Icons';
import { useLanguage } from '../context/LanguageContext';

export interface TodaysTasksScreenProps {
  onNavigate?: (screenId: number) => void;
  onTabSelect?: (tabKey: TabKey) => void;
}

export const TodaysTasksScreen: React.FC<TodaysTasksScreenProps> = ({ onNavigate, onTabSelect }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'today' | 'completed'>('today');

  const tasksList = [
    {
      id: 1,
      title: t('irrigatingCrops'),
      location: t('riceZoneNorth'),
      targetScreen: 8, // Task In Progress
    },
    {
      id: 2,
      title: t('fertilizerApplication'),
      location: t('riceZoneWest'),
      targetScreen: 7, // Task Details
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Title Header */}
      <View style={styles.headerRow}>
        <View style={{ width: 40 }} />
        <Text style={styles.headerTitle}>{t('farmingTasksTitle')}</Text>
        <View style={{ width: 40 }} />
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Segmented Control Tabs */}
        <View style={styles.segmentedContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.segmentTab, activeTab === 'today' && styles.segmentTabActive]}
            onPress={() => setActiveTab('today')}
          >
            <Text style={[styles.segmentText, activeTab === 'today' && styles.segmentTextActive]}>
              {t('tabTodayCount')}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.segmentTab, activeTab === 'completed' && styles.segmentTabActive]}
            onPress={() => setActiveTab('completed')}
          >
            <Text style={[styles.segmentText, activeTab === 'completed' && styles.segmentTextActive]}>
              {t('tabCompleted')}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Task Cards List */}
        {tasksList.map((task) => (
          <View key={task.id} style={styles.taskCard}>
            <View style={styles.taskCardHeader}>
              <Text style={styles.taskTitle}>{task.title}</Text>
              <ClockIcon />
            </View>
            <Text style={styles.taskLocation}>{task.location}</Text>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.doNowBtn}
              onPress={() => onNavigate && onNavigate(task.targetScreen)}
            >
              <Text style={styles.doNowBtnText}>{t('doNowBtn')}</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Trust Banner Note */}
        <View style={styles.trustBanner}>
          <StarIcon />
          <Text style={styles.trustBannerText}>{t('earnTrustBanner')}</Text>
        </View>
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavBar activeTab="Tasks" onTabSelect={onTabSelect} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAF8',
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#EEF4EF',
    paddingHorizontal: 20,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '900',
    color: '#1E6132',
    letterSpacing: 1.1,
    textAlign: 'center',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 18,
    paddingBottom: 24,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  segmentedContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 4,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  segmentTab: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  segmentTabActive: {
    backgroundColor: '#E8F3EA',
  },
  segmentText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#708372',
  },
  segmentTextActive: {
    color: '#1E6132',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 18,
    marginBottom: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },
  taskCardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  taskTitle: {
    fontSize: 17,
    fontWeight: '800',
    color: '#223324',
  },
  taskLocation: {
    fontSize: 13,
    color: '#657767',
    marginBottom: 16,
  },
  doNowBtn: {
    width: 96,
    height: 38,
    backgroundColor: '#1E6132',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  doNowBtnText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  trustBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF6EF',
    borderWidth: 1,
    borderColor: '#D7E9D9',
    borderRadius: 12,
    padding: 14,
    marginTop: 8,
  },
  trustBannerText: {
    flex: 1,
    fontSize: 12.5,
    fontWeight: '700',
    color: '#1E6132',
  },
});
