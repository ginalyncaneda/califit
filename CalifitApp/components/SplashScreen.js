import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Text, StyleSheet, Animated, Easing } from 'react-native';
import applogo from '../images/califit-logo.png';

const SplashScreen = () => {
  const [loading, setLoading] = useState(true);
  const flipValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const splashScreenStyle = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  };

  const flip = flipValue.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [1, -1, 1],
  });

  Animated.timing(flipValue, {
    toValue: 1,
    duration: 2000,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  return (
    <View style={splashScreenStyle}>
      <Animated.Image
        source={applogo}
        style={{ width: 230, height: 230, transform: [{ scaleX: flip }] }}
      />
    </View>
  );
};

export default SplashScreen;