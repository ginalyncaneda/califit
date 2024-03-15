import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import ExerciseCard from './ExerciseCard';
import applogo from '../images/califit-logo.png';
import tc from '../images/tabletopcrunch.png';
import ip from '../images/inclinedpushup.png';
import ss from '../images/sumosquat.png';

const Dashboard = ({ navigation }) => {

    const handleExerciseSelect = (exercise) => {
        // Here you can handle navigation to the detail screen for the selected exercise
        console.log('Selected Exercise:', exercise);
        navigation.navigate('ExerciseDetail', { exercise });
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header Container with App Logo, Greeting and Tagline */}
            <View style={styles.headerContainer}>
                <Image source={applogo} style={styles.logo} />
                <Text style={styles.greeting}>Hello, TEKNOY!</Text>
                <Text style={styles.tagline}>Let's workout to get some gains!</Text>
            </View>

            {/* Progress Container with Button */}
            <View style={styles.progressContainer}>
                <Text style={styles.progressTitle}>Progress</Text>
                <Text style={styles.progressSubtitle}>This week</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ExerciseSelection')}>
                    <Text style={styles.buttonText}>Let's Start</Text>
                </TouchableOpacity>
            </View>

            {/* Recent Workouts Section */}
            <View style={styles.recentWorkoutsContainer}>
                <Text style={styles.sectionTitle}>Recent</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.workoutsScrollContainer}>
                    {/* Static Workout Cards */}
                    {/* Repeat this block for each static workout card */}
                    <View style={styles.workoutCard}>
                        <Text style={styles.workoutName}>Sumo Squats</Text>
                        <Text style={styles.workoutProgress}>10/15</Text>
                        {/* Add more workout cards as needed */}
                    </View>

                    <View style={styles.workoutCard}>
                        <Text style={styles.workoutName}>Tabletop Crunches</Text>
                        <Text style={styles.workoutProgress}>10/15</Text>
                        {/* Add more workout cards as needed */}
                    </View>

                    <View style={styles.workoutCard}>
                        <Text style={styles.workoutName}>Inclined Pushups</Text>
                        <Text style={styles.workoutProgress}>10/15</Text>
                        {/* Add more workout cards as needed */}
                    </View>
                </ScrollView>
            </View>

            {/* Exercise Section */}
            <View style={styles.exercisesContainer}>
                <Text style={styles.sectionTitle}>Exercises</Text>
                
                    <ExerciseCard
                        image={ip}
                        title="Inclined Pushup"
                        onPress={() => handleExerciseSelect('Inclined Pushup')}
                    />

                    <ExerciseCard
                        image={ss}
                        title="Sumo Squat"
                        onPress={() => handleExerciseSelect('Sumo Squat')}
                    />

                    <ExerciseCard
                        image={tc}
                        title="Tabletop Crunch"
                        onPress={() => handleExerciseSelect('Tabletop Crunch')}
                    />
                    {/* Add more ExerciseCard components for other exercises */}
                
            </View>

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9E79F',
    },
    headerContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    greeting: {
        fontSize: 24,
        color: '#820000',
        fontWeight: 'bold',
    },
    tagline: {
        fontSize: 16,
        color: '#000',
    },
    progressContainer: {
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center',
    },
    progressTitle: {
        fontSize: 18,
        color: '#000',
        fontWeight: 'bold',
        color: '#820000',
    },
    progressSubtitle: {
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#820000',
    },
    button: {
        backgroundColor: '#9F0202',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 30,
        marginTop: 10,
    },
    buttonText: {
        fontSize: 16,
        color: '#FFF',
        fontWeight: 'bold',
    },
    sectionTitle: {
        fontSize: 18,
        color: '#820000',
        fontStyle: 'italic',
        fontWeight: 'bold',
        marginBottom: 10,
    },
    recentWorkoutsContainer: {
        marginHorizontal: 20,
        marginTop: 20,
    },
    workoutsScrollContainer: {
        flexDirection: 'row', // Horizontal scrolling
    },
    workoutCard: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginRight: 10, // Space between cards
        width: 125, // Set a fixed width for each card
        alignItems: 'center', // Center content horizontally
        justifyContent: 'center', // Center content vertically
        marginTop: 10,
    },
    workoutName: {
        fontSize: 16,
        color: '#820000',
        fontWeight: 'bold',
        marginBottom: 5,
        textAlign: 'center',
    },
    workoutProgress: {
        fontSize: 20,
        color: '#820000',
        fontWeight: 'bold',

    },
    // ... the rest of your styles
});

export default Dashboard;
