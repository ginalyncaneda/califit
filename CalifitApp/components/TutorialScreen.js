import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExerciseCard from './ExerciseCard'; // Adjust the path as necessary
import ip from '../images/inclinedpushup.png'; // Adjust the path
import ss from '../images/sumosquat.png'; // Adjust the path
import tc from '../images/tabletopcrunch.png'; // Adjust the path

const TutorialScreen = ({ navigation }) => {
    const handleExerciseSelect = (exercise) => {
        console.log('Selected Exercise:', exercise);
        // Implement navigation or any other action when an exercise card is pressed
    };

    return (
        <ScrollView style={styles.container}>
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
    exercisesContainer: {
        margin: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 40,
        marginLeft: 30,
        color: '#820000',
    },
});

export default TutorialScreen;
