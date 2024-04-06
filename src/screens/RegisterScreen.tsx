import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Image, // Imported Image here
  StyleSheet,
} from 'react-native';

import DatePicker from 'react-native-date-picker';


import InputField from '../components/InputField';

import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
// Changed to Image components

import CustomButton from '../components/CustomButton';

const RegisterScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center'}}>
          <Image
            source={require('../assets/images/misc/login.png')}

            style={{height: 250, width: 250, transform: [{rotate: '-5deg'}]}}
          />
        </View>

        <Text style={styles.headerText}>Register</Text>

        <View style={styles.socialButtonsContainer}>
          {/* Replace SVGs with PNGs */}
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image source={require('../assets/images/misc/google.jpeg')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image source={require('../assets/images/misc/facebook.png')} style={styles.socialIcon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={styles.socialButton}>
            <Image source={require('../assets/images/misc/twitter.png')} style={styles.socialIcon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.orText}>Or, register with email ...</Text>

        <InputField
          label={'Full Name'}
          icon={
            <Ionicons
              name="person-outline"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
        }
            inputType="default"
          keyboardType="default" // Default keyboard without email-address type
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
          
        />

        <InputField
          label={'Email ID'}
          icon={
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#666"
              style={{marginRight: 5}}
            />
          }
          keyboardType="email-address"
          inputType="email"
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
          
        />

        <InputField
          label={'Password'}
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          keyboardType="default" // Default keyboard without email-address type
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
          
        />

        <InputField
          label={'Confirm Password'}
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          keyboardType="default" // Default keyboard without email-address type
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
        />


        <CustomButton label={'Register'} onPress={() => navigation.navigate('Home')} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
          }}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={{color: '#AD40AF', fontWeight: '700'}}> Login</Text>
          </TouchableOpacity>
        </View>

        {/*<View style={styles.loginRedirectContainer}>
          <Text>Already registered?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginText}> Login</Text>
          </TouchableOpacity>
        </View>
        */}
      </ScrollView>
    </SafeAreaView>
  );
};

// Styles (assuming unchanged elements are styled as before)
const styles = StyleSheet.create({
  headerText: {
    fontSize: 28,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
    marginTop: 20,
    textAlign: 'center', // Assuming you want this centered
  },
  orText: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 30,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
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
  loginRedirectContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 30,
  },
  loginText: {
    color: '#AD40AF',
    fontWeight: '700',
  },
  icon: {
    marginRight: 5,
  },
});

export default RegisterScreen;
