// ProfileScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
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
});

export default ProfileScreen;
