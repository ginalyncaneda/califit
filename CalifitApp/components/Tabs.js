import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Dashboard from './Dashboard';
import TutorialScreen from './TutorialScreen';
import ChallengesScreen from './ChallengeScreen';
import ProfileScreen from './ProfileScreen';
import EditProfile from './EditProfile'; // Make sure to import EditProfile

const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();

// Define the Profile stack that includes ProfileScreen and EditProfile
function ProfileStackScreen() {
  return (
    <ProfileStack.Navigator screenOptions={{ headerShown: false }}>
      <ProfileStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <ProfileStack.Screen name="EditProfile" component={EditProfile} />
    </ProfileStack.Navigator>
  );
}

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Tutorial') {
            iconName = 'dumbbell';
          } else if (route.name === 'Challenges') {
            iconName = 'trophy';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <FontAwesome5 name={iconName} size={size} color={color} solid={focused} />;
        },
        tabBarActiveTintColor: '#820000',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Dashboard} />
      <Tab.Screen name="Tutorial" component={TutorialScreen} />
      <Tab.Screen name="Challenges" component={ChallengesScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />
    </Tab.Navigator>
  );
}
