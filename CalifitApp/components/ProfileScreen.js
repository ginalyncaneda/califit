import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const ProfileScreen = ({ navigation }) => {
    const navigateToEditProfile = () => {
        // Implement navigation logic to profile edit screen
        navigation.navigate('EditProfile');
    };

    return (
        <View style={styles.container}>
            {/* Personal Information Section */}
            <View style={styles.section}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.header}>Profile</Text>
                    <TouchableOpacity style={styles.editButton} onPress={navigateToEditProfile}>
                        <Text style={styles.editText}>Edit</Text>
                        <Icon name="chevron-right" size={15} color="#820000" />
                    </TouchableOpacity>
                </View>

                {/* Personal Information Section */}
                <Text style={styles.headerText}>Personal Information</Text>
                <InformationItem label="Name" value="John Doe" iconName="user" />
                <View style={styles.divider} />
                <InformationItem label="Age" value="28" iconName="mobile" />
                <View style={styles.divider} />
                <InformationItem label="Gender" value="Male" iconName="venus-mars" />
                <View style={styles.divider} />
            </View>

            {/* Authentication Information Section */}
            <View style={styles.section}>
                <Text style={styles.headerText}>Authentication Information</Text>
                <InformationItem label="Email" value="john.doe@example.com" iconName="envelope" />
                <View style={styles.divider} />
                <InformationItem label="Password" value="********" iconName="lock" />
                <View style={styles.divider} />
            </View>
        </View>
    );
};

const InformationItem = ({ label, value, iconName }) => (
    <View style={styles.informationRow}>
        <Icon name={iconName} size={20} color="#820000" style={styles.icon} />
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9E79F',
    },
    section: {
        margin: 20,
        marginTop: 50,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#820000',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#820000',
        marginBottom: 10,
        marginTop: 20,
    },
    editButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    editText: {
        color: '#820000',
        marginRight: 5,
        fontWeight: 'bold',
        fontSize: 16,
    },
    informationRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 10,
        marginLeft: 10,
    },
    label: {
        fontSize: 14,
        color: '#820000',
        flex: 1,
    },
    value: {
        fontSize: 16,
        color: '#000',
        flex: 3,
        textAlign: 'right',
        marginRight: 10,
    },
    divider: {
        borderBottomColor: '#820000',
        borderBottomWidth: 1,
        marginVertical: 5,
        marginRight: 10,
    },
    // Additional styles as needed...
});

export default ProfileScreen;
