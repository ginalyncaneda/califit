import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import namepic from '../images/name.png';
// If NameRegistration is not directly rendered by a Stack.Screen, you might need to import useNavigation
// import { useNavigation } from '@react-navigation/native';

const NameRegistration = ({ navigation }) => { // Add navigation prop here
// const navigation = useNavigation(); // Uncomment if NameRegistration is not a direct child of the navigator

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');

    const handleNext = () => {
        navigation.navigate('AgeRegistration'); // Use the name you used for the AgeRegistration screen in your stack navigator
    };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.header}>Sign Up</Text>
        <Text style={styles.title}>What is your name?</Text>
        <Image source={namepic} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstname}
          onChangeText={setFirstname}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastname}
          onChangeText={setLastname}
        />
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
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
    formContainer: {
      flex: 1,
      width: '100%',
      maxWidth: 400,
      alignSelf: 'center',
      backgroundColor: '#820000',
      borderRadius: 10,
      padding: 20,
    },
    header: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 10,
      marginLeft: 20,
      textAlign: 'center',
      color: '#ffffff',
    },
    title: {
      fontSize: 45,
      fontWeight: 'semibold',
      marginBottom: 10,
      marginTop: 20,
      marginLeft: 20,
      textAlign: 'center',
      color: '#ffffff',
    },
    image: {
      width: 250,
      height: 250,
      marginBottom: 20,
      alignSelf: 'center',
    },
    text: {
      fontSize: 20,
      marginBottom: 20,
      color: 'white',
      textAlign: 'center',
    },
    input: {
      height: 40,
      width: 250,
      marginVertical: 10,
      borderWidth: 1.5,
      borderColor: '#ccc',
      borderRadius: 50,
      padding: 10,
      backgroundColor: '#fff',
      marginBottom: 10,
      alignSelf: 'center',
      textAlign: 'center',
    },
    button: {
      backgroundColor: 'black',
      paddingHorizontal: 30,
      paddingVertical: 15,
      borderRadius: 50,
      width: 100,
      alignSelf: 'flex-end',
      marginTop: 50,
    },
    buttonText: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });

export default NameRegistration;
