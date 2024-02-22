import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import namepic from '../images/name.png';

const NameRegistration = () => {

  return (
    <View style={styles.container}>
        <Text>Name</Text>
        <Image source={namepic} style={styles.image} />
    </View>
  );
};


export default NameRegistration;
