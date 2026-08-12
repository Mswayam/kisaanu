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
import { useLanguage } from '../context/LanguageContext';

export interface TaskDetailsScreenProps {
  onNext?: () => void;
  onBack?: () => void;
  onTabSelect?: (tabKey: TabKey) => void;
}

export const TaskDetailsScreen: React.FC<TaskDetailsScreenProps> = ({ onNext, onBack, onTabSelect }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Title Header */}
        <Text style={styles.pageTitle}>{t('taskDetailsTitle')}</Text>

        {/* Task Header Card */}
        <View style={styles.taskCard}>
          <View style={styles.cardHeaderRow}>
            <Text style={styles.taskTitle}>{t('fertilizerApplication')}</Text>
            <View style={styles.pendingBadge}>
              <Text style={styles.pendingBadgeText}>{t('pendingBadge')}</Text>
            </View>
          </View>
          <Text style={styles.taskLocation}>{t('riceZoneWest')}</Text>
        </View>

        {/* Instructions Card */}
        <View style={styles.instructionsCard}>
          <Text style={styles.instructionsHeader}>{t('instructionsTitle')}</Text>
          <Text style={styles.instructionsSubtitle}>{t('instructionsSubtitle')}</Text>

          <View style={styles.bulletList}>
            <Text style={styles.bulletItem}>{t('instruction1')}</Text>
            <Text style={styles.bulletItem}>{t('instruction2')}</Text>
            <Text style={styles.bulletItem}>{t('instruction3')}</Text>
          </View>
        </View>

        {/* Start Task Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.startTaskBtn}
          onPress={() => {
            if (onNext) onNext(); // Go to Screen 8 (Task In Progress)
          }}
        >
          <Text style={styles.startTaskBtnText}>
            {t('startTaskBtn')} <Text style={styles.arrowText}>→</Text>
          </Text>
        </TouchableOpacity>
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
    marginBottom: 20,
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 18,
    marginBottom: 18,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#223324',
    flex: 1,
  },
  pendingBadge: {
    backgroundColor: '#E8F5E9',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 10,
  },
  pendingBadgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#2E7D32',
  },
  taskLocation: {
    fontSize: 13,
    color: '#657767',
    fontWeight: '500',
  },
  instructionsCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.03,
    shadowRadius: 4,
  },
  instructionsHeader: {
    fontSize: 13,
    fontWeight: '800',
    color: '#465A48',
    letterSpacing: 0.8,
    marginBottom: 12,
  },
  instructionsSubtitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#253526',
    marginBottom: 12,
  },
  bulletList: {
    paddingLeft: 4,
  },
  bulletItem: {
    fontSize: 13,
    color: '#5C6F5E',
    lineHeight: 22,
    marginBottom: 6,
  },
  startTaskBtn: {
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
  },
  startTaskBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  arrowText: {
    fontSize: 18,
    fontWeight: '900',
  },
});
