import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import ExerciseCard from './ExerciseCard';
import tc from '../images/tabletopcrunch.png';
import ip from '../images/inclinedpushup.png';
import ss from '../images/sumosquat.png';

const TutorialScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tutorial</Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9E79F', // You can adjust the background color as needed
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#820000', // Adjust the text color as needed
  },
  button: {
      backgroundColor: '#9F0202',
      paddingVertical: 10,
      paddingHorizontal: 30,
      borderRadius: 30,
      marginTop: 10,
  },
  buttonText: {
      fontSize: 16,
      color: '#FFF',
      fontWeight: 'bold',
  },
  workoutCard: {
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      marginRight: 10, // Space between cards
      width: 125, // Set a fixed width for each card
      alignItems: 'center', // Center content horizontally
      justifyContent: 'center', // Center content vertically
      marginTop: 10,
  },
  workoutName: {
      fontSize: 16,
      color: '#820000',
      fontWeight: 'bold',
      marginBottom: 5,
      textAlign: 'center',
  },
  workoutProgress: {
      fontSize: 20,
      color: '#820000',
      fontWeight: 'bold',

  },
});

export default TutorialScreen;