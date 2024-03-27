import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const ExerciseCard = ({ image, title }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{title}</Text>
                <TouchableOpacity style={styles.startButton}>
                    <Text style={styles.startButtonText}>Learn</Text>
                </TouchableOpacity>

            </View>
            <Image source={image} style={styles.cardImage} />
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20, // Same as progressContainer
        padding: 20, // Same padding as progressContainer
        backgroundColor: '#FFF',
        borderRadius: 10,
        marginBottom: 20,
    },
    cardContent: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10, 
        textAlign: 'center',
    },
    cardImage: {
        width: 150,
        height: 150, 
    },
    startButton: {
        backgroundColor: '#9F0202',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    startButtonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
    },
    // ... add any additional styles you might need
});

export default ExerciseCard;
