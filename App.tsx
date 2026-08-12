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
import { LanguageProvider, useLanguage } from './src/context/LanguageContext';
import { WelcomeLanguageScreen } from './src/screens/WelcomeLanguageScreen';
import { MobileLoginScreen } from './src/screens/MobileLoginScreen';
import { OtpVerificationScreen } from './src/screens/OtpVerificationScreen';
import { PermissionsScreen } from './src/screens/PermissionsScreen';
import { DashboardHomeScreen } from './src/screens/DashboardHomeScreen';
import { TodaysTasksScreen } from './src/screens/TodaysTasksScreen';
import { TaskDetailsScreen } from './src/screens/TaskDetailsScreen';
import { TaskInProgressScreen } from './src/screens/TaskInProgressScreen';
import { CompleteTaskScreen } from './src/screens/CompleteTaskScreen';
import { PhotoProofScreen } from './src/screens/PhotoProofScreen';
import { VoiceProofScreen } from './src/screens/VoiceProofScreen';
import { VoiceNoteOptionalScreen } from './src/screens/VoiceNoteOptionalScreen';
import { SubmitProofScreen } from './src/screens/SubmitProofScreen';
import { SubmissionSuccessScreen } from './src/screens/SubmissionSuccessScreen';
import { AttendanceCheckInScreen } from './src/screens/AttendanceCheckInScreen';
import { AttendanceCheckOutScreen } from './src/screens/AttendanceCheckOutScreen';
import { VoiceActivityLogScreen } from './src/screens/VoiceActivityLogScreen';
import { InputLogScreen } from './src/screens/InputLogScreen';
import { NotificationsOfflineScreen } from './src/screens/NotificationsOfflineScreen';
import { FarmerProfileScreen, UserProfile } from './src/screens/FarmerProfileScreen';
import { NewRegistrationScreen, NewUser } from './src/screens/NewRegistrationScreen';
import { TabKey } from './src/components/BottomNavBar';

function MainNavigator() {
  const { t } = useLanguage();
  const [currentScreen, setCurrentScreen] = useState<number>(1);
  const [completed, setCompleted] = useState<boolean>(false);
  const [isCheckedIn, setIsCheckedIn] = useState<boolean>(true);
  const [currentUser, setCurrentUser] = useState<UserProfile>({
    name: 'Swayam Mhaske',
    phone: '+91 98765 43210',
    location: 'Sector 4B, Kisaanu Farm',
    crop: 'Paddy (Rice)',
  });

  const handleTabSelect = (tabKey: TabKey) => {
    if (tabKey === 'Home') setCurrentScreen(5);
    if (tabKey === 'Tasks') setCurrentScreen(6);
    if (tabKey === 'Voice') setCurrentScreen(17);
    if (tabKey === 'Attendance') setCurrentScreen(isCheckedIn ? 15 : 16);
    if (tabKey === 'Profile') setCurrentScreen(20);
  };

  const handleLogout = () => {
    setCurrentScreen(1);
  };

  const renderScreen = () => {
    if (completed) {
      return (
        <View style={styles.completedContainer}>
          <Text style={styles.completedIcon}>🎉</Text>
          <Text style={styles.completedTitle}>{t('completedTitle')}</Text>
          <Text style={styles.completedSubtitle}>{t('completedSubtitle')}</Text>
          <TouchableOpacity
            style={styles.restartBtn}
            onPress={() => {
              setCompleted(false);
              setCurrentScreen(1);
            }}
          >
            <Text style={styles.restartBtnText}>{t('restartDemo')}</Text>
          </TouchableOpacity>
        </View>
      );
    }

    switch (currentScreen) {
      case 1:
        return (
          <WelcomeLanguageScreen
            onNext={() => setCurrentScreen(2)}
            onRegister={() => setCurrentScreen(21)}
          />
        );
      case 2:
        return (
          <MobileLoginScreen
            onNext={() => setCurrentScreen(3)}
            onBack={() => setCurrentScreen(1)}
          />
        );
      case 3:
        return (
          <OtpVerificationScreen
            onNext={() => setCurrentScreen(4)}
            onBack={() => setCurrentScreen(2)}
          />
        );
      case 4:
        return (
          <PermissionsScreen
            onFinish={() => setCurrentScreen(5)}
            onBack={() => setCurrentScreen(3)}
          />
        );
      case 5:
        return (
          <DashboardHomeScreen
            onNavigate={(screenId: number) => setCurrentScreen(screenId)}
            onTabSelect={handleTabSelect}
          />
        );
      case 6:
        return (
          <TodaysTasksScreen
            onNavigate={(screenId: number) => setCurrentScreen(screenId)}
            onTabSelect={handleTabSelect}
          />
        );
      case 7:
        return (
          <TaskDetailsScreen
            onNext={() => setCurrentScreen(8)}
            onBack={() => setCurrentScreen(6)}
            onTabSelect={handleTabSelect}
          />
        );
      case 8:
        return (
          <TaskInProgressScreen
            onFinish={() => setCurrentScreen(9)}
            onBack={() => setCurrentScreen(7)}
            onTabSelect={handleTabSelect}
          />
        );
      case 9:
        return (
          <CompleteTaskScreen
            onYesCompleted={() => setCurrentScreen(10)}
            onNotYet={() => setCurrentScreen(8)}
            onStopTask={() => setCurrentScreen(6)}
            onTabSelect={handleTabSelect}
          />
        );
      case 10:
        return (
          <PhotoProofScreen
            onNext={() => setCurrentScreen(11)}
            onBack={() => setCurrentScreen(9)}
          />
        );
      case 11:
        return (
          <VoiceProofScreen
            onStartVoice={() => setCurrentScreen(12)}
            onCancel={() => setCurrentScreen(9)}
            onBack={() => setCurrentScreen(10)}
          />
        );
      case 12:
        return (
          <VoiceNoteOptionalScreen
            onFinish={() => setCurrentScreen(13)}
            onBack={() => setCurrentScreen(11)}
          />
        );
      case 13:
        return (
          <SubmitProofScreen
            onSubmit={() => setCurrentScreen(14)}
            onBack={() => setCurrentScreen(12)}
          />
        );
      case 14:
        return (
          <SubmissionSuccessScreen
            onOkay={() => setCurrentScreen(15)}
            onHome={() => setCurrentScreen(5)}
          />
        );
      case 15:
        return (
          <AttendanceCheckInScreen
            onNavigateProfile={() => setCurrentScreen(20)}
            onNavigateToCheckOut={() => {
              setIsCheckedIn(false);
              setCurrentScreen(16);
            }}
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 16:
        return (
          <AttendanceCheckOutScreen
            onCheckOut={() => {
              setIsCheckedIn(true);
              setCurrentScreen(15);
            }}
            onBack={() => setCurrentScreen(15)}
            onTabSelect={handleTabSelect}
          />
        );
      case 17:
        return (
          <VoiceActivityLogScreen
            onSave={() => setCurrentScreen(5)}
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 18:
        return (
          <InputLogScreen
            onAddEntry={() => setCurrentScreen(5)}
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 19:
        return (
          <NotificationsOfflineScreen
            onCheckConnection={() => setCurrentScreen(5)}
            onBack={() => setCurrentScreen(5)}
            onTabSelect={handleTabSelect}
          />
        );
      case 20:
        return (
          <FarmerProfileScreen
            currentUser={currentUser}
            onNavigateScreen={(screenId: number) => setCurrentScreen(screenId)}
            onLogout={handleLogout}
            onTabSelect={handleTabSelect}
          />
        );
      case 21:
        return (
          <NewRegistrationScreen
            onRegisterSuccess={(newUser: NewUser) => {
              setCurrentUser(newUser);
              setCurrentScreen(4); // Permissions then Dashboard
            }}
            onBackToSignIn={() => setCurrentScreen(2)}
          />
        );
      default:
        return <WelcomeLanguageScreen onNext={() => setCurrentScreen(2)} />;
    }
  };

  const screensList = [
    { id: 1, label: '1. Welcome' },
    { id: 21, label: '21. Register' },
    { id: 2, label: '2. Login' },
    { id: 3, label: '3. OTP' },
    { id: 4, label: '4. Permissions' },
    { id: 5, label: '5. Dashboard' },
    { id: 6, label: '6. Tasks' },
    { id: 7, label: '7. Details' },
    { id: 8, label: '8. Progress' },
    { id: 9, label: '9. Complete' },
    { id: 10, label: '10. Photo' },
    { id: 11, label: '11. Voice' },
    { id: 12, label: '12. Note' },
    { id: 13, label: '13. Submit' },
    { id: 14, label: '14. Success' },
    { id: 15, label: '15. Check-In' },
    { id: 16, label: '16. Check-Out' },
    { id: 17, label: '17. Voice Log' },
    { id: 18, label: '18. Input Log' },
    { id: 19, label: '19. Offline' },
    { id: 20, label: '20. Profile' },
  ];

  return (
    <SafeAreaView style={styles.mainWrapper}>
      <StatusBar barStyle="dark-content" backgroundColor="#1E6132" />

      {/* Screen Switcher Bar for Quick Preview */}
      <View style={styles.screenSelectorBar}>
        <Text style={styles.selectorLabel}>Preview Screen:</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {screensList.map((screen) => (
            <TouchableOpacity
              key={screen.id}
              style={[
                styles.screenChip,
                currentScreen === screen.id && !completed && styles.screenChipActive,
              ]}
              onPress={() => {
                setCompleted(false);
                setCurrentScreen(screen.id);
              }}
            >
              <Text
                style={[
                  styles.screenChipText,
                  currentScreen === screen.id && !completed && styles.screenChipTextActive,
                ]}
              >
                {screen.label}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Render Selected Screen */}
      <View style={styles.screenContainer}>{renderScreen()}</View>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainNavigator />
    </LanguageProvider>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: '#1E6132',
  },
  screenSelectorBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#144623',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#246F3C',
  },
  selectorLabel: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#A9D4B3',
    marginRight: 6,
  },
  screenChip: {
    paddingHorizontal: 9,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: '#1E6132',
    marginRight: 5,
  },
  screenChipActive: {
    backgroundColor: '#FFFFFF',
  },
  screenChipText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#D0E6D5',
  },
  screenChipTextActive: {
    color: '#1E6132',
  },
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  completedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#FFFFFF',
  },
  completedIcon: {
    fontSize: 54,
    marginBottom: 16,
  },
  completedTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1E6132',
    marginBottom: 8,
    textAlign: 'center',
  },
  completedSubtitle: {
    fontSize: 14,
    color: '#607363',
    textAlign: 'center',
    marginBottom: 30,
  },
  restartBtn: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    backgroundColor: '#1E6132',
    borderRadius: 12,
  },
  restartBtnText: {
    fontSize: 15,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
