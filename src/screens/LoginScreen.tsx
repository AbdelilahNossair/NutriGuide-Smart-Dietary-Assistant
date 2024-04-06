import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import CustomButton from '../components/CustomButton';
import InputField from '../components/InputField';


const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
      <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/misc/login.png')}

            style={styles.loginImage}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.loginText}>Login</Text>

        <InputField
          label="Email ID"
          icon={<MaterialIcons name="alternate-email" size={20} color="#666" style={styles.icon} />}
          inputType="email"
          keyboardType="email-address"
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
        />

        <InputField
          label="Password"
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          keyboardType="default" // Default keyboard without email-address type
          fieldButtonLabel="Forgot?"
          fieldButtonFunction={() => {}}
        />

        <CustomButton label="Login" onPress={() => navigation.navigate('Home')} />

        <Text style={styles.orText}>Or, login with ...</Text>

        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image
              source={require('../assets/images/misc/google.jpeg')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image
              source={require('../assets/images/misc/facebook.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image
              source={require('../assets/images/misc/twitter.png')}
              style={styles.socialIcon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerText}> Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    paddingHorizontal: 25,
  },
  loginText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 30,
    textAlign: 'center', // Assuming you want this centered
  },
  icon: {
    marginRight: 5,
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 50,
    // Assuming each button already has styling inside the component
  },
  socialButton: {
    borderColor: '#ddd',
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginLeft: 5,
    marginRight: 5
    // Adjust the size if necessary
  },
  socialIcon: {
    height: 35,
    width: 35,
    // You might need to adjust the size depending on your icons
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  registerText: {
    color: '#AD40AF',
    fontWeight: '700',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  loginImage: {
    height: 250, // Set the height you want for your image
    width: 250, // and the width
  },
});

export default LoginScreen;
