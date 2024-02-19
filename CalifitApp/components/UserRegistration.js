import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import LiveVideoCapture from './LiveVideoCapture';

export default function UserRegistration() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [genderOptionsVisible, setGenderOptionsVisible] = useState(false);
  const [showLiveVideoCapture, setShowLiveVideoCapture] = useState(false); 

  const handleRegistration = () => {
    setShowLiveVideoCapture(true);
  };

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

  return (
    <View style={styles.container}>
      {showLiveVideoCapture ? (
        <LiveVideoCapture />
      ) : (
        <View>
          <Text style={styles.title}>Create an Account</Text>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />
            <TextInput
              style={styles.input}
              placeholder="Age"
              value={age}
              onChangeText={setAge}
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={styles.input}
              onPress={toggleGenderOptions}
            >
              <Text>{gender || 'Select Gender'}</Text>
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
            <TextInput
              style={styles.input}
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleRegistration}>
              <Text style={styles.buttonText}>Create Account</Text>
            </TouchableOpacity>
            <View style={styles.footer}>
              <Text style={styles.footerText}>Already have an account?</Text>
              <TouchableOpacity>
                <Text style={styles.footerLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.orContainer}>
              <View style={styles.line} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.line} />
            </View>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../images/google.png')} style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Sign up with Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
              <Image source={require('../images/fb.png')} style={styles.socialIcon} />
              <Text style={styles.socialButtonText}>Sign up with Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'transparent',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderRadius: 10,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 20,
    marginLeft: 20,
  },
  input: {
    height: 40,
    width: 300,
    marginVertical: 10,
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 2,
    alignSelf: 'center'
  },
  button: {
    backgroundColor: '#922B21',
    borderRadius: 5,
    padding: 10,
    marginTop: 30,
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  genderOptions: {
    position: 'absolute',
    top: 80,
    left: 20,
    width: 150,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 2,
  },
  genderOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  footerText: {
    color: '#777',
    fontSize: 14,
  },
  footerLink: {
    color: '#922B21',
    fontSize: 14,
    marginLeft: 5,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  line: {
    height: 1,
    width: '40%',
    backgroundColor: '#ccc',
  },
  orText: {
    color: '#777',
    fontSize: 16,
    marginHorizontal: 10,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1.5,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  socialIcon: {
    height: 25,
    width: 25,
    marginRight: 10,
  },
  socialButtonText: {
    color: '#777',
    fontSize: 16,
  },
});