import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Header } from '../components/Header';
import { BottomNavBar } from '../components/BottomNavBar';
import { useLanguage } from '../context/LanguageContext';

export const TaskInProgressScreen = ({ onFinish, onBack, onTabSelect }) => {
  const { t } = useLanguage();
  const [seconds, setSeconds] = useState(1536); // 25 mins 36 secs
  const [notes, setNotes] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (totalSecs) => {
    const hrs = Math.floor(totalSecs / 3600);
    const mins = Math.floor((totalSecs % 3600) / 60);
    const secs = totalSecs % 60;
    const pad = (num) => (num < 10 ? `0${num}` : num);
    return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Header Title */}
        <Text style={styles.pageTitle}>{t('taskInProgressTitle')}</Text>

        {/* Timer Card */}
        <View style={styles.timerCard}>
          <Text style={styles.timerLabel}>{t('timeElapsed')}</Text>
          <Text style={styles.timerDisplay}>{formatTimer(seconds)}</Text>
          <Text style={styles.timerStartedText}>{t('taskStartedTime')}</Text>
        </View>

        {/* Current Active Task Card */}
        <View style={styles.taskCard}>
          <Text style={styles.activeTaskLabel}>{t('currentActiveTask')}</Text>
          <Text style={styles.activeTaskTitle}>{t('irrigationProcess')}</Text>
          <Text style={styles.activeTaskLocation}>{t('locationPeaZone')}</Text>
        </View>

        {/* Notes Input Field */}
        <View style={styles.notesSection}>
          <Text style={styles.notesLabel}>{t('notesOptional')}</Text>
          <TextInput
            style={styles.notesInput}
            multiline={true}
            numberOfLines={4}
            placeholder={t('notesPlaceholder')}
            placeholderTextColor="#9AA89C"
            value={notes}
            onChangeText={setNotes}
          />
        </View>

        {/* Complete Task Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.completeBtn}
          onPress={() => {
            if (onFinish) onFinish();
          }}
        >
          <Text style={styles.completeBtnText}>{t('completeTaskBtn')}</Text>
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
  timerCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#1E6132',
    borderRadius: 18,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  timerLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#657766',
    letterSpacing: 0.8,
    marginBottom: 10,
  },
  timerDisplay: {
    fontSize: 34,
    fontWeight: '900',
    color: '#1E6132',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  timerStartedText: {
    fontSize: 12,
    color: '#7A8C7B',
    fontWeight: '500',
  },
  taskCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 18,
    marginBottom: 20,
  },
  activeTaskLabel: {
    fontSize: 12,
    fontWeight: '800',
    color: '#607361',
    letterSpacing: 0.6,
    marginBottom: 6,
  },
  activeTaskTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#223324',
    marginBottom: 4,
  },
  activeTaskLocation: {
    fontSize: 13,
    color: '#657767',
    fontWeight: '500',
  },
  notesSection: {
    marginBottom: 24,
  },
  notesLabel: {
    fontSize: 13,
    fontWeight: '700',
    color: '#465A48',
    marginBottom: 8,
  },
  notesInput: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 12,
    padding: 14,
    fontSize: 14,
    color: '#253526',
    height: 90,
    textAlignVertical: 'top',
  },
  completeBtn: {
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
  completeBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
