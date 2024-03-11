import React, { useEffect, useRef } from 'react';
import { View, Image, Animated, Easing, StyleSheet } from 'react-native';
import applogo from '../images/califit-logo.png';

const SplashScreen = ({ navigation }) => {
  const flipValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('WelcomePage');
    }, 3000); // Adjust the timing if needed

    Animated.timing(flipValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timer);
  }, [navigation]);

  const splashScreenStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9E79F',
  };

  const flip = flipValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ['0deg', '180deg', '360deg'],
  });

  return (
    <View style={splashScreenStyle}>
      <Animated.Image
        source={applogo}
        style={[styles.logo, { transform: [{ rotateY: flip }] }]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 230,
    height: 230,
  },
});

export default SplashScreen;
