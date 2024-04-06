import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HistoryScreen({ navigation }) {
  // Assuming 'data' might be used later for listing historical entries
  const data = [
    { item: 'ITEM', calories: 'CALORIES', proteins: 'PROTEINS' },
    { item: 'Peach', calories: '59', proteins: '1.4g' },
    { item: 'Croissant', calories: '235', proteins: '4.6g' },
    { item: 'Cucumber', calories: '16', proteins: '0.7g' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={[styles.buttonRow, {marginBottom : 7}]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Camera')}>
          <MaterialIcons name="filter-list" size={30} color="white" />
          <Text style={styles.buttonText}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settingbutton} onPress={() => navigation.navigate('Settings')}>
          <View>
    <MaterialIcons name="arrow-upward" size={24} color="white"  />
    <MaterialIcons name="arrow-downward" size={24} color="white"  />
  </View>
          <Text style={styles.buttonText}>Order</Text>
        </TouchableOpacity>
        
      </View>

      

      {/* Ingredient Info Section */}
      <View style={styles.section}>

      <View style={styles.ingredientContainer}>
          {/* Image */}
          <Image
            source={require('../assets/images/ingredients/Cucumber.png')} // Update with your local image
            style={styles.ingredientImage}
          />
          {/* Ingredient Info */}
          <View style={styles.ingredientInfo}>
            <Text style={styles.text}>Ingredient Name: Cucumber</Text>
            <Text style={styles.text}>Calories: 4 kcal</Text>
            <Text style={styles.text}>Vitamins: B12, B6, C </Text>
            <Text style={styles.Goodtext}>Good</Text>
          </View>
        </View>


        <View style={styles.ingredientContainer}>
          {/* Image */}
          <Image
            source={require('../assets/images/ingredients/Tomato.png')} // Update with your local image
            style={styles.ingredientImage}
          />
          {/* Ingredient Info */}
          <View style={styles.ingredientInfo}>
            <Text style={styles.text}>Ingredient Name: Tomato</Text>
            <Text style={styles.text}>Calories: 18 kcal</Text>
            <Text style={styles.text}>Vitamins: C, K, and Potassium</Text>
            <Text style={styles.Goodtext}>Good</Text>
          </View>
        </View>


        <View style={styles.ingredientContainer}>
          {/* Image */}
          <Image
            source={require('../assets/images/ingredients/Sugar.png')} // Update with your local image
            style={styles.ingredientImage}
          />
          {/* Ingredient Info */}
          <View style={styles.ingredientInfo}>
            <Text style={styles.text}>Ingredient Name: Sugar</Text>
            <Text style={styles.text}>Calories: 180 kcal</Text>
            <Text style={styles.text}>Vitamins: - </Text>
            <Text style={styles.Badtext}>Bad</Text>
          </View>
        </View>



        <View style={styles.ingredientContainer}>
          {/* Image */}
          <Image
            source={require('../assets/images/ingredients/Apple.jpeg')} // Update with your local image
            style={styles.ingredientImage}
          />
          {/* Ingredient Info */}
          <View style={styles.ingredientInfo}>
            <Text style={styles.text}>Ingredient Name: Apple</Text>
            <Text style={styles.text}>Calories: 30 kcal</Text>
            <Text style={styles.text}>Vitamins: C</Text>
            <Text style={styles.Goodtext}>Good</Text>
          </View>
        </View>
        
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
  section: {
    width: '90%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  ingredientContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30
  },
  ingredientImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 50,
  },
  ingredientInfo: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333333',
  },
  Goodtext: {
    fontSize: 16,
    marginBottom: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  Badtext: {
    fontSize: 16,
    marginBottom: 5,
    color: 'red',
    fontWeight: 'bold',
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
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom:20
  },
  settingbutton: {
    flexDirection: 'row', // Align icon and text horizontally inside the button
    alignItems: 'center', // Center items vertically within the button
    backgroundColor: '#0A0A0A',
    paddingHorizontal: 50,
    paddingVertical: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    marginBottom:20
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8, // Space between the icon and the text
  },
});
