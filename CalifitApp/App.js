import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './components/SplashScreen';
import MainPage from './components/MainPage';
import UserRegistration from './components/UserRegistration';
import WelcomePage from './components/WelcomePage';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <View style={[styles.container, { backgroundColor: '#F9E79F' }]}>
        {loading ? (
          <SplashScreen />
        ) : (
          // <UserRegistration />
          <WelcomePage />
        )}
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});