import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import MainPage from './components/MainPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    // Simulate a delay (e.g., 3 seconds) before setting isLoading to false
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup the timeout on component unmount
  }, []); // Empty dependency array ensures the effect runs only once

  const handleStartPress = () => {
    setShowWelcome(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
          {showWelcome && (
            <>
              <Text style={{fontSize: 24}}>Welcome to CaliFit!</Text>
              <TouchableOpacity style={styles.button} onPress={handleStartPress}>
                <Text style={styles.buttonText}>Let's start</Text>
              </TouchableOpacity>
            </>
          )}
          {/* Add your main screen components here */}
          {!showWelcome && <MainPage />}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9E79F',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginTop: 50,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#922B21',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff', // Text color
    fontSize: 16,
  },
});