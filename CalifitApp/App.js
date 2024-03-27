import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './components/SplashScreen';
import MainPage from './components/MainPage';
import UserRegistration from './components/UserRegistration';
import WelcomePage from './components/WelcomePage';
import NameRegistration from './components/NameRegistration';
import AgeRegistration from './components/AgeRegistration';
import GenderRegistration from './components/GenderRegistration';
import Login from './components/Login';
import ExerciseSelection from './components/ExerciseSelection';
import LiveVideoCapture from './components/LiveVideoCapture';
import LiveVideo from './components/LiveVideo';
import Dashboard from './components/Dashboard';
import Tabs from './components/Tabs';
import EditProfile from './components/EditProfile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="UserRegistration" component={UserRegistration} />
        <Stack.Screen name="NameRegistration" component={NameRegistration} />
        <Stack.Screen name="AgeRegistration" component={AgeRegistration} />
        <Stack.Screen name="GenderRegistration" component={GenderRegistration} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ExerciseSelection" component={ExerciseSelection} />
        <Stack.Screen name="LiveVideo" component={LiveVideo} />
        <Stack.Screen name="MainApp" component={Tabs} options={{ headerShown: false }} />
        
        {/* Add other screens as needed */}
      </Stack.Navigator>

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
