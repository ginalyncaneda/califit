import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, TouchableOpacity } from 'react-native';
import genderpic from '../images/gender.png';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const GenderRegistration = ({ navigation }) => { // Add navigation prop here
  // const navigation = useNavigation(); // Uncomment if GenderRegistration is not a direct child of the navigator

  const [gender, setGender] = useState('');
  const [genderOptionsVisible, setGenderOptionsVisible] = useState(false);

  const toggleGenderOptions = () => {
    setGenderOptionsVisible(!genderOptionsVisible);
  };

  const selectGender = (selectedGender) => {
    setGender(selectedGender);
    toggleGenderOptions();
  };

  const genderOptions = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
  ];

  const handleRegistration = () => {
    navigation.navigate('MainApp', { screen: 'Home' });
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
        <Text style={styles.title}>What is your gender?</Text>
        <Image source={genderpic} style={styles.image} />
        <TouchableOpacity
          style={styles.input}
          onPress={toggleGenderOptions}
        >
          <Text style={styles.selectedGender}>{gender || 'Select Gender'}</Text>
        </TouchableOpacity>
        {genderOptionsVisible && (
          <View style={styles.genderOptions}>
            <FlatList
              data={genderOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity onPress={() => selectGender(item.value)}>
                  <Text style={styles.genderOption}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        )}
        <TouchableOpacity style={styles.button} onPress={handleRegistration}>
          <Text style={styles.buttonText}>Finish</Text>
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
    backgroundColor: '#FFD700',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: '#FFD700',
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
  genderOptions: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1.5,
    borderColor: '#ccc',
    zIndex: 2,
    alignSelf: 'center',
    textAlign: 'center',
    width: 250,  // Set the width to match the input width
  },
  genderOption: {
    padding: 10,
    borderBottomWidth: 1.5,
    borderColor: '#ccc',
  },
  selectedGender: {
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


export default GenderRegistration;