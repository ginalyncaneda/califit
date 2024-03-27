import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import agepic from '../images/age.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const AgeRegistration = ({ navigation }) => { // Add navigation prop here
  const [age, setAge] = useState('');

  const handleNext = () => {
    navigation.navigate('GenderRegistration'); // Navigate to GenderRegistration screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.formcontainer}>
        <View style={styles.headerContainer}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconContainer}>
            <FontAwesome5 name="chevron-left" size={20} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.header}>Sign Up</Text>
        </View>
        <Text style={styles.title}>How old are you?</Text>
        <Image source={agepic} style={styles.image} />
        <TextInput
          style={styles.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
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
    backgroundColor: '#1E1E1E',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 10,
    padding: 20,
  },
  headerContainer: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    flex: 1,
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


export default AgeRegistration;