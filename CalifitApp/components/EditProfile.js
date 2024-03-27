import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EditProfile = ({ navigation }) => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        age: '30',
        gender: 'Male',
        email: 'johndoe@gmail.com',
        password: '',
        confirmPassword: '',
    });

    // Handle change for input fields
    const handleChange = (field, value) => {
        setProfile({ ...profile, [field]: value });
    };

    // Save profile changes
    const handleSaveProfile = () => {
        console.log('Profile saved:', profile);
        // Implement save logic...
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>Edit Profile</Text>
            </View>
            <View style={styles.section}>
                <ProfileField
                    label="Name"
                    value={profile.name}
                    iconName="user"
                    onChangeText={(value) => handleChange('name', value)}
                />
                <ProfileField
                    label="Age"
                    value={profile.age}
                    iconName="birthday-cake"
                    onChangeText={(value) => handleChange('age', value)}
                    keyboardType="numeric"
                />
                <ProfileField
                    label="Gender"
                    value={profile.gender}
                    iconName="venus-mars"
                    onChangeText={(value) => handleChange('gender', value)}
                />
                <ProfileField
                    label="Email"
                    value={profile.email}
                    iconName="envelope"
                    onChangeText={(value) => handleChange('email', value)}
                    keyboardType="email-address"
                />
                <ProfileField
                    label="Password"
                    value={profile.password}
                    iconName="lock"
                    onChangeText={(value) => handleChange('password', value)}
                    secureTextEntry
                />
                <ProfileField
                    label="Confirm Password"
                    value={profile.confirmPassword}
                    iconName="lock"
                    onChangeText={(value) => handleChange('confirmPassword', value)}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
                <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const ProfileField = ({ label, value, iconName, onChangeText, secureTextEntry, keyboardType }) => (
    <View style={styles.fieldContainer}>
        <Icon name={iconName} size={20} color="#820000" style={styles.icon} />
        <View style={styles.valueContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={value}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
            />
        </View>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9E79F',
    },
    headerContainer: {
        padding: 20,
        borderBottomColor: '#820000',
        borderBottomWidth: 1,
        marginBottom: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#820000',
    },
    section: {
        padding: 20,
    },
    fieldContainer: {
        flexDirection: 'column',
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#820000',
        paddingBottom: 10,
    },
    valueContainer: {
        marginLeft: 10,
    },
    icon: {
        marginBottom: 5,
    },
    label: {
        fontSize: 16,
        color: '#820000',
    },
    input: {
        fontSize: 16,
        color: '#000',
    },
    saveButton: {
        backgroundColor: '#820000',
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    saveButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
    // Additional styles as needed...
});

export default EditProfile;

