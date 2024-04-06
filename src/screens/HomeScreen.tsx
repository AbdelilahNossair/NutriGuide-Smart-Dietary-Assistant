import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'react-native';
import Lottie from 'lottie-react-native';
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const {width, height}  =Dimensions.get('window');

export default function HomeScreen({navigation}){
    return (
        <View style={styles.container}>
            <Onboarding
                containerStyles = {{paddingHorizontal: 50}}
                showSkip={false} // Hide the Skip button
                showNext={false} // Hide the Next button
                showDone={false} // Hide the Done button
                onDone={() => { /* Handle the completion of the onboarding */ }}
                pages={[
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/images/misc/image_scan.jpg')} style={styles.lottie}/>
                                <TouchableOpacity style={styles.Chatbutton} onPress={() => navigation.navigate('Camera')}>
                                    <Ionicons name="camera-outline" size={30} color="white" />
                                <Text style={styles.buttonText}>Scan</Text>
                                </TouchableOpacity>
                            </View>
                            
                        ),

                        title: 'Where everything starts',
                        subtitle: 'Scan to get the information about the ingredients',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/images/misc/image_Chatbot.png')} style={styles.lottie}/>
                                <TouchableOpacity style={styles.Chatbutton} onPress={() => navigation.navigate('Chatbot')}>
                                <MaterialCommunityIcons name="robot" size={30} color="white" />
                                <Text style={styles.buttonText}>Nutri Guide</Text>
                                </TouchableOpacity>
                            </View>
                            
                        ),

                        title: 'Chat With Our Nutri Quide',
                        subtitle: 'Look For Recipes, Information, or even a Dietary Joke',
                    },
                    {
                        backgroundColor: '#fff',
                        image: (
                            <View style={styles.imageContainer}>
                                <Image source={require('../assets/images/misc/image_History.jpg')} style={styles.lottie}/>
                                <TouchableOpacity style={styles.Chatbutton} onPress={() => navigation.navigate('History')}>
                                    <Ionicons name="time-outline" size={30} color="white" />
                                <Text style={styles.buttonText}>History</Text>
                                </TouchableOpacity>
                            </View>
                            
                        ),

                        title: 'History of Scans',
                        subtitle: 'Retrieve information about already scanned ingredients',
                    },
                ]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    lottie:{
        width: width*0.9,
        height: width, 
        marginBottom: 20
    },
    Chatbutton: {
        flexDirection: 'row', // Align icon and text horizontally inside the button
        alignItems: 'center', // Center items vertically within the button
        backgroundColor: '#AD40AF',
        paddingHorizontal: 100    ,
        paddingVertical: 20,
        width: 300, 
        
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
        alignItems: 'center',
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 8, // Space between the icon and the text
      },
      imageContainer: {
        alignItems: 'center', // Centers everything horizontally within the container
        justifyContent: 'center', // Optionally center vertically if you want
      },
      

})