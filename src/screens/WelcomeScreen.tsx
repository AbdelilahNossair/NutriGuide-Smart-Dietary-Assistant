import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function WelcomeScreen({ navigation }) {
  const data = [
    { item: 'ITEM', calories: 'CALORIES', proteins: 'PROTEINS' },
    { item: 'Peach', calories: '59', proteins: '1.4g' },
    { item: 'Croissant', calories: '235', proteins: '4.6g' },
    { item: 'Cucumber', calories: '16', proteins: '0.7g' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <Text style={[styles.text, { marginBottom: 10 }]} >Welcome to Nutri World!</Text>
      </View>
      <View style={styles.section }>
        <View style={styles.initialsContainer}>
          <View style={styles.initialsBox}>
            <Text style={styles.initialsText}>AN</Text>
          </View>
          <Text style={styles.text}>Abdelilah Nossair</Text>
        </View>
      </View>
      <View style={[styles.buttonRow, {marginBottom : 7}]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
          <Ionicons name="camera-outline" size={30} color="white" />
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingbutton} onPress={() => navigation.navigate('Settings')}>
          <MaterialIcons name="settings" size={30} color="white" />
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
        
      </View>
      <View>
        <Text style={[styles.text, { marginBottom: 5, marginTop: 20}, {fontWeight : 'bold'}]} >History</Text>
      </View>
      <View>
        <Text style={[styles.text, { marginBottom: 10 }, {fontSize : 15}]} >Table of previously scanned ingredients</Text>
      </View>
      <View style={styles.section}>
        
       
        {data.map((row, index) => (
          <TouchableOpacity 
          key={index} 
          style={styles.tableRow}
          onPress={() => navigation.navigate('DetailsScreen')}
          disabled={index === 0} // Disable interaction for the header
        >
          <Text style={[styles.tableCell, index === 0 && styles.headerCell, index != 0 && {textDecorationLine: 'underline'}]}>{row.item}</Text>
          <Text style={[styles.tableCell, index === 0 && styles.headerCell]}>{row.calories}</Text>
          <Text style={[styles.tableCell, index === 0 && styles.headerCell]}>{row.proteins}</Text>
        </TouchableOpacity>
        
        ))}
      </View>
      <View>
        <TouchableOpacity style={styles.Chatbutton} onPress={() => navigation.navigate('Chatbot')}>
          <MaterialCommunityIcons name="robot" size={30} color="white" />
          <Text style={styles.buttonText}>Chat with Our Nutri Quide</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}




const styles = StyleSheet.create({
  headerCell: {
    fontStyle: 'italic',
    fontSize: 16,
    marginLeft: 41,
    color: '#32BEBE',
    fontWeight: 'bold',
    
    
  },
  container: {
    flexGrow: 1,
    
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-around', // Evenly space the buttons
    width: '90%', // Match the width of the section for alignment
    marginBottom: 20, // Space before the history section
  },
  button: {
    flexDirection: 'row', // Align icon and text horizontally inside the button
    alignItems: 'center', // Center items vertically within the button
    backgroundColor: '#AD40AF',
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  Chatbutton: {
    flexDirection: 'row', // Align icon and text horizontally inside the button
    alignItems: 'center', // Center items vertically within the button
    backgroundColor: '#502D73',
    paddingHorizontal: 65,
    paddingVertical: 20,
    width: '90%', 
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  settingbutton: {
    flexDirection: 'row', // Align icon and text horizontally inside the button
    alignItems: 'center', // Center items vertically within the button
    backgroundColor: '#0A0A0A',
    paddingHorizontal: 25,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8, // Space between the icon and the text
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1, // Add a light border for each row for separation
    borderBottomColor: '#E0E0E0',
    paddingVertical: 10, // Add padding to make each row taller
  },
  tableCell: {
    flex: 0,
    fontSize: 16,
    paddingHorizontal: 45,
    paddingVertical: 20,
    textAlign: 'center', // Center text in each cell
    backgroundColor: 'white', // Light grey background for each cell
    borderRadius: 5, // Slightly rounded corners for each cell
  },
  section: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 20,
    alignItems: 'center', // This ensures content is aligned to the center
    justifyContent: 'center', // Centers content vertically in the section
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
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
    backgroundColor: '#32BEBE',
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
