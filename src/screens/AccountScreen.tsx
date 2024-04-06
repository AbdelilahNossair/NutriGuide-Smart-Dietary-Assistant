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

const AccountScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [dobLabel, setDobLabel] = useState('Date of Birth');

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{paddingHorizontal: 25}}>

        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/misc/login.png')}

            style={styles.loginImage}
            resizeMode="contain"
          />
        </View>
 

        <Text style={styles.headerText}>Update Account Information</Text>


        <InputField
          label={'Change Full Name'}
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
          label={'Change Email ID'}
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
          label={'Old Password'}
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          keyboardType="default" // Default keyboard without email-address type
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
          
        />

        <InputField
          label={'New Password'}
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          keyboardType="default" // Default keyboard without email-address type
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
          
        />

        <InputField
          label={'Confirm New Password'}
          icon={<MaterialIcons name="lock-outline" size={20} color="#666" style={styles.icon} />}
          inputType="password"
          keyboardType="default" // Default keyboard without email-address type
          fieldButtonLabel=""
          fieldButtonFunction={() => {}}
        />


        <CustomButton label={'Change Information'} onPress={() => navigation.navigate('Home')} />

      </ScrollView>
    </SafeAreaView>
  );
};

// Styles (assuming unchanged elements are styled as before)
const styles = StyleSheet.create({
  headerText: {
    fontSize: 30,
    fontWeight: '500',
    color: '#333',
    marginBottom: 20,
    marginTop: 10,
    padding: 30,
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
  imageContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  loginImage: {
    height: 250, // Set the height you want for your image
    width: 250, // and the width
  },
});

export default AccountScreen;
