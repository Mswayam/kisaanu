import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export const SwipeCheckInButton = ({ isCheckedIn = false, onToggleCheckIn }) => {
  const [slidePos, setSlidePos] = useState(isCheckedIn ? 'right' : 'left');

  const handlePress = () => {
    const newPos = slidePos === 'left' ? 'right' : 'left';
    setSlidePos(newPos);
    if (onToggleCheckIn) {
      onToggleCheckIn(newPos === 'right');
    }
  };

  const isChecked = slidePos === 'right' || isCheckedIn;

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={[styles.container, isChecked && styles.containerChecked]}
      onPress={handlePress}
    >
      <View style={styles.contentRow}>
        <View style={styles.leftLabelGroup}>
          <Text style={[styles.statusText, isChecked && styles.statusTextChecked]}>
            {isChecked ? 'CHECKED IN' : 'READY STATUS'}
          </Text>
        </View>

        {/* Sliding Button Handle */}
        <View style={[styles.sliderHandle, isChecked && styles.sliderHandleRight]}>
          <Text style={styles.arrowIcon}>{isChecked ? '✓' : '➔'}</Text>
        </View>

        <Text style={[styles.swipeInstructionText, isChecked && styles.swipeInstructionChecked]}>
          {isChecked ? '08:05 AM' : 'SWIPE TO CHECK IN'}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D8E8DA',
    borderRadius: 28,
    paddingHorizontal: 6,
    justifyContent: 'center',
    marginBottom: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  containerChecked: {
    backgroundColor: '#EAF5EB',
    borderColor: '#1E6132',
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  leftLabelGroup: {
    alignItems: 'flex-start',
  },
  statusText: {
    fontSize: 11,
    fontWeight: '900',
    color: '#465A48',
    letterSpacing: 0.8,
  },
  statusTextChecked: {
    color: '#1E6132',
  },
  sliderHandle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#1E6132',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#1E6132',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  sliderHandleRight: {
    backgroundColor: '#1E6132',
    borderColor: '#1E6132',
  },
  arrowIcon: {
    fontSize: 18,
    fontWeight: '900',
    color: '#1E6132',
  },
  swipeInstructionText: {
    fontSize: 11.5,
    fontWeight: '800',
    color: '#1E6132',
    letterSpacing: 0.6,
  },
  swipeInstructionChecked: {
    color: '#1E6132',
  },
});
