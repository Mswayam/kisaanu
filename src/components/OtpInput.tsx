import React, { useRef, useState } from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

export interface OtpInputProps {
  codeLength?: number;
  onCodeFilled?: (code: string) => void;
}

export const OtpInput: React.FC<OtpInputProps> = ({ codeLength = 6, onCodeFilled }) => {
  const [code, setCode] = useState<string[]>(['4', '8', '2', '6', '0', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text.length > 0 && index < codeLength - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    const fullCode = newCode.join('');
    if (fullCode.length === codeLength && onCodeFilled) {
      onCodeFilled(fullCode);
    }
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent && e.nativeEvent.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      {Array.from({ length: codeLength }).map((_, index) => (
        <TextInput
          key={index}
          ref={(ref) => { inputRefs.current[index] = ref; }}
          style={[
            styles.otpBox,
            code[index] ? styles.otpBoxFilled : styles.otpBoxEmpty,
            index === 5 && styles.otpBoxActive, // matching screenshot state
          ]}
          maxLength={1}
          keyboardType="number-pad"
          value={code[index] || ''}
          onChangeText={(text) => handleChangeText(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          selectTextOnFocus
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
    width: '100%',
  },
  otpBox: {
    width: 48,
    height: 54,
    borderWidth: 1.5,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '700',
    color: '#1E6132',
    backgroundColor: '#FFFFFF',
  },
  otpBoxEmpty: {
    borderColor: '#D0DEC0',
  },
  otpBoxFilled: {
    borderColor: '#D0DEC0',
    backgroundColor: '#FAFDF9',
  },
  otpBoxActive: {
    borderColor: '#1E6132',
    backgroundColor: '#FFFFFF',
  },
});
