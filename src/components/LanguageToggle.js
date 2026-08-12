import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLanguage } from '../context/LanguageContext';

export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.pill, language === 'en' && styles.pillActive]}
        onPress={() => setLanguage('en')}
      >
        <Text style={[styles.text, language === 'en' && styles.textActive]}>
          EN
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        activeOpacity={0.8}
        style={[styles.pill, language === 'hi' && styles.pillActive]}
        onPress={() => setLanguage('hi')}
      >
        <Text style={[styles.text, language === 'hi' && styles.textActive]}>
          हिंदी
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#E8F1E9',
    borderRadius: 20,
    padding: 3,
    alignItems: 'center',
  },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 16,
  },
  pillActive: {
    backgroundColor: '#1E6132',
  },
  text: {
    fontSize: 12,
    fontWeight: '700',
    color: '#4A6B53',
  },
  textActive: {
    color: '#FFFFFF',
  },
});
