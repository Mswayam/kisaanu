import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { BackArrowIcon } from './Icons';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

export const Header = ({ showBack = false, onBackPress, onNavigateProfile, onLogout }) => {
  const { t } = useLanguage();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <View style={styles.headerContainer}>
      {/* Left Container: Back Button (if inner page) + Professional App Name & Logo */}
      <View style={styles.leftContainer}>
        {showBack && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onBackPress}
            style={styles.backBtnWrapper}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <BackArrowIcon />
          </TouchableOpacity>
        )}

        <View style={styles.logoGroup}>
          <View style={styles.logoBadge}>
            <Text style={styles.logoLeafIcon}>🌾</Text>
          </View>
          <View style={styles.brandTitleWrapper}>
            <Text style={styles.brandTitleText}>KISAANU NEXUS</Text>
            <Text style={styles.brandTaglineText}>Renu OS Ecosystem</Text>
          </View>
        </View>
      </View>

      {/* Right Container: Language Toggle + Notification Bell + Profile Avatar */}
      <View style={styles.rightContainer}>
        {/* Language Switcher */}
        <LanguageToggle />

        {/* Notification Bell Icon */}
        <TouchableOpacity activeOpacity={0.7} style={styles.bellBtn}>
          <Text style={styles.bellIcon}>🔔</Text>
          <View style={styles.bellBadge} />
        </TouchableOpacity>

        {/* Profile Avatar Button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.profileAvatarBtn}
          onPress={() => setShowProfileMenu(!showProfileMenu)}
        >
          <Text style={styles.avatarInitial}>S</Text>
        </TouchableOpacity>
      </View>

      {/* Profile Popup Dropdown Menu */}
      {showProfileMenu && (
        <View style={styles.profileDropdown}>
          <View style={styles.profileDropdownHeader}>
            <View style={styles.dropdownAvatarSquare}>
              <Text style={styles.dropdownAvatarInitial}>S</Text>
            </View>
            <View style={styles.dropdownTextWrapper}>
              <Text style={styles.dropdownName}>Swayam Mhaske</Text>
              <Text style={styles.dropdownEmail}>swayammhaske61@gmail.com</Text>
            </View>
          </View>

          <View style={styles.dropdownDivider} />

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.dropdownItem}
            onPress={() => {
              setShowProfileMenu(false);
              if (onNavigateProfile) onNavigateProfile();
            }}
          >
            <Text style={styles.dropdownItemIcon}>👤</Text>
            <Text style={styles.dropdownItemText}>My Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.dropdownItem}
            onPress={() => {
              setShowProfileMenu(false);
              if (onLogout) onLogout();
            }}
          >
            <Text style={[styles.dropdownItemIcon, { color: '#D32F2F' }]}>↳</Text>
            <Text style={[styles.dropdownItemText, { color: '#D32F2F' }]}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E6EFE7',
    position: 'relative',
    zIndex: 9999,
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backBtnWrapper: {
    marginRight: 10,
  },
  logoGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoBadge: {
    width: 32,
    height: 32,
    borderRadius: 10,
    backgroundColor: '#E8F5E9',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  logoLeafIcon: {
    fontSize: 18,
  },
  brandTitleWrapper: {
    justifyContent: 'center',
  },
  brandTitleText: {
    fontSize: 14,
    fontWeight: '900',
    color: '#1E6132',
    letterSpacing: 0.8,
  },
  brandTaglineText: {
    fontSize: 9,
    fontWeight: '700',
    color: '#657766',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bellBtn: {
    marginLeft: 10,
    marginRight: 10,
    position: 'relative',
  },
  bellIcon: {
    fontSize: 18,
  },
  bellBadge: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#D32F2F',
  },
  profileAvatarBtn: {
    width: 34,
    height: 34,
    borderRadius: 10,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarInitial: {
    fontSize: 16,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  profileDropdown: {
    position: 'absolute',
    top: 54,
    right: 16,
    width: 240,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 8,
    zIndex: 10000,
    borderWidth: 1,
    borderColor: '#E6EFE7',
  },
  profileDropdownHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dropdownAvatarSquare: {
    width: 38,
    height: 38,
    borderRadius: 10,
    backgroundColor: '#00BFA5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  dropdownAvatarInitial: {
    fontSize: 18,
    fontWeight: '900',
    color: '#FFFFFF',
  },
  dropdownTextWrapper: {
    flex: 1,
  },
  dropdownName: {
    fontSize: 14,
    fontWeight: '800',
    color: '#223324',
  },
  dropdownEmail: {
    fontSize: 11,
    color: '#708372',
  },
  dropdownDivider: {
    height: 1,
    backgroundColor: '#F0F4F0',
    marginVertical: 8,
  },
  dropdownItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemIcon: {
    fontSize: 16,
    marginRight: 10,
    color: '#1E6132',
  },
  dropdownItemText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#344636',
  },
});
