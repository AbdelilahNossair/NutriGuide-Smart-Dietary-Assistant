import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

const {width, height} = Dimensions.get('window');


export default function SettingsScreen({ navigation }) {
  const data = [
    { item: 'ITEM', calories: 'CALORIES', proteins: 'PROTEINS' },
    { item: 'Peach', calories: '59', proteins: '1.4g' },
    { item: 'Croissant', calories: '235', proteins: '4.6g' },
    { item: 'Cucumber', calories: '16', proteins: '0.7g' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <TouchableOpacity style={styles.Chatbutton} >
        <View style={styles.initialsContainer}>
          <View style={styles.initialsBox}>
            <Text style={styles.initialsText}>AN</Text>
          </View>
          <Text style={styles.text}>Abdelilah Nossair</Text>
        </View>
        </TouchableOpacity>
      </View>


      <View>
        <TouchableOpacity style={styles.Chatbutton} onPress={() => navigation.navigate('Account')}>
          <Text style={styles.buttonText}>Account Information</Text>
          <MaterialCommunityIcons name="chevron-right" size={30} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.Chatbutton} >
          <Text style={styles.buttonText}>Clear History</Text>
          <MaterialCommunityIcons name="chevron-right" size={30} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.Chatbutton} >
          <Text style={styles.buttonText}>Contact Us</Text>
          <MaterialCommunityIcons name="chevron-right" size={30} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.Chatbutton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Disconnect your account</Text>
          <MaterialCommunityIcons name="chevron-right" size={30} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity style={styles.Chatbutton} >
          <Text style={styles.DeletebuttonText}>Delete your account</Text>
          <MaterialCommunityIcons name="chevron-right" size={30} color="black" style={styles.arrowIcon} />
        </TouchableOpacity>
      </View>
    </ScrollView>

    
  );
}




const styles = StyleSheet.create({

  container: {
    flexGrow: 1,
    
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  Chatbutton: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', // This already ensures left and right alignment
    backgroundColor: 'white',
    paddingHorizontal: 20, // Adjust based on your design preference
    paddingVertical: 20,
    width: width*0.87, 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 10, // Adjust the space between the icon and the text as needed
  },
  arrowIcon: {
    // If additional styling for the arrow icon is needed
  },
  DeletebuttonText: {
    color: 'red',
    fontSize: 18,
    marginLeft: 10, // Adjust the space between the icon and the text as needed
  },
  initialsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // This centers the contents horizontally within the initialsContainer
    width: '100%', // Ensures the container stretches to fill the section
  },
  initialsBox: {
    width: 50,
    height: 50,
    backgroundColor: '#AD40AF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginRight: 20, // Keeps a space between the initials box and the name
  },
  initialsText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',

  },
  text: {
    fontSize: 20,

    color: '#333333',
  },
});
