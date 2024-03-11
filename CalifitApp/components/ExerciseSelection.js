import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import tc from '../images/tabletopcrunch.png';
import ip from '../images/inclinedpushup.png';
import ss from '../images/sumosquat.png';


const ExerciseSelection = ({ navigation }) => {
    // State to keep track of the selected exercise
    const [selectedExercise, setSelectedExercise] = useState(null);

    // Function to handle exercise button press
    const handleSelectExercise = (exercise) => {
        setSelectedExercise(exercise); // Set the selected exercise
    };

    // Function to proceed to the next screen
    const handleProceed = () => {
        console.log(`Proceed with ${selectedExercise}`);
        // Here you can navigate to the next screen or perform any action with the selected exercise
    };

    // Function to determine button style based on selection
    const getButtonStyle = (exercise) => {
        return exercise === selectedExercise
            ? [styles.button, styles.selectedButton]
            : styles.button;
    };

    // Function to determine button text style based on selection
    const getButtonTextStyle = (exercise) => {
        return exercise === selectedExercise
            ? [styles.buttonText, styles.selectedButtonText] // Apply selected style
            : styles.buttonText; // Keep default style
    };

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.title}>Select exercise to record</Text>

                {/* Tabletop Crunch Button */}
                <TouchableOpacity
                    style={getButtonStyle('Tabletop Crunch')}
                    onPress={() => handleSelectExercise('Tabletop Crunch')}
                >
                    <Text style={getButtonTextStyle('Tabletop Crunch')}>Tabletop Crunch</Text>
                    <Image source={tc} style={styles.image} />
                </TouchableOpacity>

                {/* Inclined Pushup Button */}
                <TouchableOpacity
                    style={getButtonStyle('Inclined Pushup')}
                    onPress={() => handleSelectExercise('Inclined Pushup')}
                >
                    <Text style={getButtonTextStyle('Inclined Pushup')}>Inclined Pushup</Text>
                    <Image source={ip} style={styles.image} />
                </TouchableOpacity>

                {/* Sumo Squat Button */}
                <TouchableOpacity
                    style={getButtonStyle('Sumo Squat')}
                    onPress={() => handleSelectExercise('Sumo Squat')}
                >
                    <Text style={getButtonTextStyle('Sumo Squat')}>Sumo Squat</Text>
                    <Image source={ss} style={styles.image} />
                </TouchableOpacity>


                {/* Proceed Button */}
                <TouchableOpacity
                    style={styles.proceedButton}
                    onPress={handleProceed}
                    disabled={!selectedExercise} // Disable the proceed button if no exercise is selected
                >
                    <Text style={styles.proceedButtonText}>Proceed</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'F9E79F',
    },
    formContainer: {
        flex: 1,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 20,
    },
    title: {
        fontSize: 33,
        fontWeight: 'semibold',
        marginBottom: 10,
        marginTop: 40,
        marginLeft: 20,
        textAlign: 'center',
        color: 'black',
    },
    button: {
        alignItems: 'center',
        padding: 10,
        marginVertical: 5,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 20,
        backgroundColor: '#ffffff',
        width: 200,
        alignSelf: 'center',
    },
    buttonText: {
        color: 'black', // Default color
        fontWeight: 'bold',
        textAlign: 'center',
    },
    selectedButtonText: {
        color: 'white', // Color for selected state
    },
    proceedButton: {
        backgroundColor: 'black',
        paddingHorizontal: 30,
        paddingVertical: 15,
        borderRadius: 50,
        width: 200,
        alignSelf: 'center',
        marginTop: 30,
    },
    selectedButton: {
        backgroundColor: '#9F0202',
    },
    proceedButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginVertical: 5,
    },
});

export default ExerciseSelection;
