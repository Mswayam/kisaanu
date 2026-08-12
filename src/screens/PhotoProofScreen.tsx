import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { Header } from '../components/Header';
import { useLanguage } from '../context/LanguageContext';

import defaultPhotoImg from '../../assets/images/photo_proof.png';

export interface PhotoProofScreenProps {
  onNext?: () => void;
  onBack?: () => void;
}

export const PhotoProofScreen: React.FC<PhotoProofScreenProps> = ({ onNext, onBack }) => {
  const { t } = useLanguage();
  const [photoUri, setPhotoUri] = useState<any>(defaultPhotoImg);
  const [isCameraActive, setIsCameraActive] = useState<boolean>(false);
  const videoRef = useRef<any>(null);

  // Trigger Native File Picker (Gallery Option)
  const handleGalleryClick = () => {
    if (typeof document !== 'undefined') {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e: any) => {
        const file = e.target.files[0];
        if (file) {
          const url = URL.createObjectURL(file);
          setPhotoUri(url);
          setIsCameraActive(false);
        }
      };
      input.click();
    }
  };

  // Trigger Real Device Camera (Webcam / Mobile Camera)
  const handleStartCamera = async () => {
    if (typeof navigator !== 'undefined' && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        setIsCameraActive(true);
        const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.log('Camera access error:', err);
        handleGalleryClick(); // fallback to file picker
      }
    } else {
      handleGalleryClick();
    }
  };

  const handleCaptureSnapshot = () => {
    if (isCameraActive && videoRef.current) {
      const canvas = document.createElement('canvas');
      canvas.width = videoRef.current.videoWidth || 640;
      canvas.height = videoRef.current.videoHeight || 480;
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
        const dataUrl = canvas.toDataURL('image/jpeg');
        setPhotoUri(dataUrl);
      }

      // Stop camera tracks
      if (videoRef.current.srcObject) {
        videoRef.current.srcObject.getTracks().forEach((track: any) => track.stop());
      }
      setIsCameraActive(false);
    } else {
      handleStartCamera();
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <Header showBack={true} onBackPress={onBack} />

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        {/* Page Title */}
        <Text style={styles.pageTitle}>{t('photoProofTitle')}</Text>

        {/* Photo / Live Camera Preview Card */}
        <View style={styles.imageCard}>
          {isCameraActive ? (
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              style={{ width: '100%', height: '100%', objectFit: 'cover' } as any}
            />
          ) : (
            <Image
              source={typeof photoUri === 'string' ? { uri: photoUri } : photoUri}
              style={styles.previewImage}
              resizeMode="cover"
            />
          )}

          {/* Target Reticle Overlay */}
          <View style={styles.targetReticle}>
            <Text style={styles.reticleIcon}>🎯</Text>
          </View>
        </View>

        {/* Is Photo Clear Card */}
        <View style={styles.clearCard}>
          <Text style={styles.clearTitle}>{t('isPhotoClear')}</Text>
          <View style={styles.btnRow}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.yesClearBtn}
              onPress={onNext} // Go to Screen 11 (Voice Proof)
            >
              <Text style={styles.yesClearBtnText}>{t('yesClearBtn')}</Text>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.retakeBtn}
              onPress={handleStartCamera}
            >
              <Text style={styles.retakeBtnText}>{t('retakeBtn')}</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Current Task Location Badge */}
        <View style={styles.locationBadge}>
          <Text style={styles.locationPinIcon}>📍</Text>
          <View style={styles.locationTextWrapper}>
            <Text style={styles.locationLabel}>{t('currentTaskLocation')}</Text>
            <Text style={styles.locationValue}>{t('locationIrrigationPeaZone')}</Text>
          </View>
        </View>

        {/* Camera Control Bar */}
        <View style={styles.cameraControlBar}>
          {/* Gallery Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.cameraOptionBtn}
            onPress={handleGalleryClick}
          >
            <Text style={styles.cameraOptionIcon}>🖼️</Text>
            <Text style={styles.cameraOptionText}>{t('gallery')}</Text>
          </TouchableOpacity>

          {/* Shutter Button (Takes snapshot / toggles camera) */}
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.shutterOuterRing}
            onPress={handleCaptureSnapshot}
          >
            <View style={styles.shutterInnerCircle} />
          </TouchableOpacity>

          {/* Flash Button */}
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.cameraOptionBtn}
            onPress={handleStartCamera}
          >
            <Text style={styles.cameraOptionIcon}>📷</Text>
            <Text style={styles.cameraOptionText}>{isCameraActive ? 'Capture' : 'Camera'}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  container: {
    paddingHorizontal: 20,
    paddingTop: 16,
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
    marginBottom: 16,
  },
  imageCard: {
    width: '100%',
    height: 230,
    borderRadius: 18,
    overflow: 'hidden',
    marginBottom: 18,
    position: 'relative',
    backgroundColor: '#000000',
    elevation: 2,
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  targetReticle: {
    position: 'absolute',
    left: 20,
    top: 90,
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  reticleIcon: {
    fontSize: 20,
  },
  clearCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1.2,
    borderColor: '#E4ECE5',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 1,
  },
  clearTitle: {
    fontSize: 15,
    fontWeight: '800',
    color: '#223324',
    marginBottom: 14,
  },
  btnRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  yesClearBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#1E6132',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  yesClearBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  retakeBtn: {
    flex: 1,
    height: 44,
    backgroundColor: '#FFFFFF',
    borderWidth: 1.5,
    borderColor: '#D32F2F',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  retakeBtnText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#D32F2F',
  },
  locationBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF6EF',
    borderWidth: 1,
    borderColor: '#D7E9D9',
    borderRadius: 14,
    padding: 14,
    marginBottom: 24,
  },
  locationPinIcon: {
    fontSize: 20,
    marginRight: 12,
  },
  locationTextWrapper: {
    flex: 1,
  },
  locationLabel: {
    fontSize: 10.5,
    fontWeight: '800',
    color: '#526955',
    letterSpacing: 0.6,
  },
  locationValue: {
    fontSize: 13.5,
    fontWeight: '800',
    color: '#1E6132',
    marginTop: 2,
  },
  cameraControlBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F4F0',
  },
  cameraOptionBtn: {
    alignItems: 'center',
  },
  cameraOptionIcon: {
    fontSize: 22,
    marginBottom: 4,
  },
  cameraOptionText: {
    fontSize: 11,
    color: '#657766',
    fontWeight: '600',
  },
  shutterOuterRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: '#1E6132',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  shutterInnerCircle: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: '#1E6132',
  },
});
