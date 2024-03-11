import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Platform, Dimensions, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';

const LiveVideo = () => {
  const cameraRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraReady, setIsCameraReady] = useState(false);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'web') {
        setHasPermission(true);
        return;
      }
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  useEffect(() => {
    if (hasPermission) {
      setIsCameraReady(true);
    }
  }, [hasPermission]);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  const handleToggleRecording = () => {
    console.log("Button clicked");
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        style={styles.camera}
        type={Camera.Constants.Type.front}
        onCameraReady={() => setIsCameraReady(true)}
      />
      <TouchableOpacity style={styles.recordButton} onPress={handleToggleRecording}>
        <View style={[styles.innerRecordButton]} />
      </TouchableOpacity>
      {isCameraReady && (
        <View style={styles.overlay}>
          <Text style={styles.annotation}>Your pose annotations here</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFD700',
  },
  camera: {
    width: Dimensions.get('window').width - 30,
    height: Dimensions.get('window').height / 1.3,
    marginBottom: 30,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  annotation: {
    color: 'white',
    fontSize: 16,
  },
  recordButton: {
    alignSelf: 'center',
    marginBottom: 20,
    width: 70,
    height: 70,
    borderRadius: 40,
    backgroundColor: '#922B21',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerRecordButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
});

export default LiveVideo;