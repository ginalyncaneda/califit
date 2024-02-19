import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomePage = () => {
  const handleRegistration = () => {
    // Handle navigation or any other action when the button is pressed
    console.log('Start Your Journey');
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { fontSize: 24 }]}>Welcome!</Text>
      <Text style={[styles.text, { fontSize: 16 }]}>CaliFit welcomes you to a world of calisthenics innovation, 
                                where every rep brings you closer to your best self.
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleRegistration}>
        <Text style={styles.buttonText}>Start Your Journey</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
    color: '#820000',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#820000',
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default WelcomePage;
