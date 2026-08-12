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
import { BottomNavBar } from '../components/BottomNavBar';
import { useLanguage } from '../context/LanguageContext';

export const CompleteTaskScreen = ({ onYesCompleted, onNotYet, onStopTask, onTabSelect }) => {
  const { t } = useLanguage();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onNotYet} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t('taskCompleteTitle')}</Text>

        {/* Green Completion Banner Card */}
        <View style={styles.confirmBanner}>
          <View style={styles.checkCircle}>
            <Text style={styles.checkIcon}>✓</Text>
          </View>
          <Text style={styles.confirmBannerText}>{t('confirmCompletion')}</Text>
        </View>

        {/* Task Details Card */}
        <View style={styles.detailCard}>
          <Text style={styles.detailQuestion}>{t('didYouCompleteTask')}</Text>
          <Text style={styles.taskTitle}>{t('irrigationProcess')}</Text>
          <Text style={styles.taskLocation}>{t('atPeaZoneNorth')}</Text>
        </View>

        {/* Yes, Completed Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.yesBtn}
          onPress={onYesCompleted} // Go to Screen 10 (Photo Proof)
        >
          <Text style={styles.yesBtnText}>{t('yesCompletedBtn')}</Text>
        </TouchableOpacity>

        {/* Not Yet Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.notYetBtn}
          onPress={onNotYet} // Back to Screen 8
        >
          <Text style={styles.notYetBtnText}>{t('notYetBtn')}</Text>
        </TouchableOpacity>

        {/* Stop Task Red Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.stopBtn}
          onPress={onStopTask}
        >
          <Text style={styles.stopBtnText}>{t('stopTaskBtn')}</Text>
        </TouchableOpacity>
        <Text style={styles.stopSubtext}>{t('stopTaskSubtext')}</Text>
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
  confirmBanner: {
    backgroundColor: '#EAF5EB',
    borderWidth: 1,
    borderColor: '#CDE5CF',
    borderRadius: 16,
    paddingVertical: 24,
    alignItems: 'center',
    marginBottom: 18,
  },
  checkCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#1E6132',
    backgroundColor: '#EAF5EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkIcon: {
    fontSize: 24,
    color: '#1E6132',
    fontWeight: '900',
  },
  confirmBannerText: {
    fontSize: 17,
    fontWeight: '800',
    color: '#1E6132',
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  detailQuestion: {
    fontSize: 13,
    color: '#657767',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 19,
    fontWeight: '800',
    color: '#223324',
    marginBottom: 4,
  },
  taskLocation: {
    fontSize: 12.5,
    color: '#708372',
  },
  yesBtn: {
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    elevation: 2,
    shadowColor: '#1E6132',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  yesBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  notYetBtn: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24,
  },
  notYetBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#465948',
  },
  stopBtn: {
    height: 52,
    backgroundColor: '#D32F2F',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  stopBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  stopSubtext: {
    fontSize: 11.5,
    color: '#7D8E7E',
    textAlign: 'center',
  },
});
