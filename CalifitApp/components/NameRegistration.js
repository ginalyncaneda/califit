import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import namepic from '../images/name.png';

const NameRegistration = () => {

  return (
    <View style={styles.container}>
        <Text>What is your name?</Text>
        <Image source={namepic} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#820000',
    },
    image: {
      width: 200,
      height: 200,
      marginBottom: 20,
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
      color: '#ffffff',
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'black',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 50,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
    },
  });


export default NameRegistration;
