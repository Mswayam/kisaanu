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

export interface InputLogScreenProps {
  onAddEntry?: () => void;
  onBack?: () => void;
  onTabSelect?: (tabKey: TabKey) => void;
}

export const InputLogScreen: React.FC<InputLogScreenProps> = ({ onAddEntry, onBack, onTabSelect }) => {
  const { t } = useLanguage();

  const logs = [
    {
      id: 1,
      name: t('organicCompost'),
      badge: t('savedBadge'),
      isGreenBadge: true,
      qty: t('quantity25Bags'),
      location: t('sector4B'),
      date: t('date26Jul'),
    },
    {
      id: 2,
      name: t('ureaFertilizer'),
      badge: t('syncedBadge'),
      isGreenBadge: false,
      qty: t('quantity10Bags'),
      location: t('sector2A'),
      date: t('date25Jul'),
    },
    {
      id: 3,
      name: t('seedsWheat'),
      badge: t('syncedBadge'),
      isGreenBadge: false,
      qty: t('quantity50Kg'),
      location: t('mainWarehouse'),
      date: t('date24Jul'),
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Header Title */}
        <Text style={styles.pageTitle}>{t('activityLogTitle')}</Text>

        {/* Section Header */}
        <Text style={styles.sectionTitle}>{t('loggedFarmInputsTitle')}</Text>
        <Text style={styles.sectionDesc}>{t('loggedFarmInputsDesc')}</Text>

        {/* Input Log Cards */}
        {logs.map((item) => (
          <View key={item.id} style={styles.logCard}>
            <View style={styles.cardHeaderRow}>
              <Text style={styles.itemName}>{item.name}</Text>
              <View style={[styles.badge, item.isGreenBadge ? styles.greenBadge : styles.grayBadge]}>
                <Text style={[styles.badgeText, item.isGreenBadge ? styles.greenBadgeText : styles.grayBadgeText]}>
                  {item.badge}
                </Text>
              </View>
            </View>

            <View style={styles.gridRow}>
              <View style={styles.gridCol}>
                <Text style={styles.label}>Quantity</Text>
                <Text style={styles.value}>{item.qty}</Text>
              </View>

              <View style={styles.gridCol}>
                <Text style={styles.label}>Field Location</Text>
                <Text style={styles.value}>{item.location}</Text>
              </View>

              <View style={[styles.gridCol, { alignItems: 'flex-end' }]}>
                <Text style={styles.label}>Date</Text>
                <Text style={styles.value}>{item.date}</Text>
              </View>
            </View>
          </View>
        ))}

        {/* Add New Input Entry Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.addBtn}
          onPress={onAddEntry}
        >
          <Text style={styles.addBtnText}>{t('addNewInputEntryBtn')}</Text>
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
  sectionTitle: {
    fontSize: 18,
    fontWeight: '800',
    color: '#223324',
    marginBottom: 4,
  },
  sectionDesc: {
    fontSize: 13,
    color: '#657767',
    marginBottom: 20,
  },
  logCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
    elevation: 1,
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '800',
    color: '#1E6132',
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
  },
  greenBadge: {
    backgroundColor: '#E8F5E9',
  },
  greenBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#2E7D32',
  },
  grayBadge: {
    backgroundColor: '#F0F4F0',
  },
  grayBadgeText: {
    fontSize: 11,
    fontWeight: '700',
    color: '#657767',
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  gridCol: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    color: '#809482',
    marginBottom: 2,
  },
  value: {
    fontSize: 13,
    fontWeight: '800',
    color: '#223324',
  },
  addBtn: {
    height: 52,
    backgroundColor: '#1E6132',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
    elevation: 2,
  },
  addBtnText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
});
