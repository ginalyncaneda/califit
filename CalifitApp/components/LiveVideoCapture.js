import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const LiveVideoCapture = () => {
  const [isRecording, setIsRecording] = useState(false);
  const cameraRef = useRef(null);

  const handleToggleRecording = () => {
    if (isRecording) {
      // Logic to stop recording
    } else {
      // Logic to start recording
    }
    setIsRecording(!isRecording);
  };

  return (
    <View style={styles.container}>
      <View style={styles.overlay}>
        <View style={styles.exerciseArea}>
          <Text style={styles.overlayText}>
            {isRecording ? 'Recording...' : 'Place Exercise Area Here'}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.recordButton} onPress={handleToggleRecording}>
        <View style={[styles.innerRecordButton, isRecording ? styles.recordingIndicator : null]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#FFD700',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  exerciseArea: {
    borderWidth: 2,
    backgroundColor: '#000000',
    borderColor: 'black',
    padding: 20,
    width: Dimensions.get('window').width - 40,
    height: Dimensions.get('window').height / 1.2,
    marginBottom: 80,
  },
  overlayText: {
    color: 'white',
    fontSize: 18,
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
  recordingIndicator: {
    backgroundColor: '#922B21',
  },
});

export default LiveVideoCapture;