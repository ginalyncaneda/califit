import React, { useState } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text, FlatList, Image } from 'react-native';
import applogo from '../images/califit-logo.png';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // Add your sign-in logic here
        console.log('Signing in with:', email, password);
    };

    return (
        <View style={styles.container}>
            <View>
                <View style={styles.formContainer}>
                    <Image source={applogo} style={styles.image} />
                    <Text style={styles.title}>Sign In</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address"
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={setPassword}
                        secureTextEntry
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Don't have an account?</Text>
                        <TouchableOpacity>
                            <Text style={styles.footerLink}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.orContainer}>
                        <View style={styles.line} />
                        <Text style={styles.orText}>OR</Text>
                        <View style={styles.line} />
                    </View>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../images/google.png')} style={styles.socialIcon} />
                        <Text style={styles.socialButtonText}>Sign in with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.socialButton}>
                        <Image source={require('../images/fb.png')} style={styles.socialIcon} />
                        <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: 'transparent',
    },
    formContainer: {
        flex: 1,
        width: '100%',
        maxWidth: 400,
        alignSelf: 'center',
        backgroundColor: 'transparent',
        borderRadius: 10,
        padding: 20,
    },
    image: {
        width: 150,
        height: 150,
        alignSelf: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 20,
        color: '#820000',
        textAlign: 'center',
    },
    input: {
        height: 40,
        width: 300,
        marginVertical: 10,
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        marginBottom: 5,
        alignSelf: 'center'
    },
    button: {
        backgroundColor: '#922B21',
        borderRadius: 50,
        padding: 10,
        marginTop: 30,
        alignItems: 'center',
        alignSelf: 'center',
        width: 300,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    footerText: {
        color: '#777',
        fontSize: 14,
    },
    footerLink: {
        color: '#922B21',
        fontSize: 14,
        marginLeft: 5,
    },
    orContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    line: {
        height: 1,
        width: '40%',
        backgroundColor: '#ccc',
    },
    orText: {
        color: '#777',
        fontSize: 16,
        marginHorizontal: 10,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1.5,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginTop: 20,
    },
    socialIcon: {
        height: 25,
        width: 25,
        marginRight: 10,
    },
    socialButtonText: {
        color: '#777',
        fontSize: 16,
    },
});