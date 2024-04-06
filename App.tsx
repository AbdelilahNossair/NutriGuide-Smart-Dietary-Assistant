import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './src/screens/WelcomeScreen.tsx';
import CameraScreen from './src/screens/CameraScreen.tsx';
import { View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import LoginScreen from './src/screens/LoginScreen.tsx';
import RegisterScreen from './src/screens/RegisterScreen.tsx';
import HomeScreen from './src/screens/HomeScreen.tsx';
import SettingsScreen from './src/screens/SettingsScreen.tsx'
import HistoryScreen from './src/screens/HistoryScreen.tsx';
// import ChatbotScreen from './ChatbotScreen.tsx'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} 
          options={({ navigation }) => ({ // Use navigation prop here
            headerShown: true,
            header: () => (
              <View style={{ height: 130, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10 , marginBottom: -130}}>
                <Text style={{ flex: 1, fontSize: 20, fontWeight: 'bold', color: '#333333', textAlign: 'center', marginTop: 50 }}></Text>
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Settings')} // Assuming 'Settings' is the route name
                  style={{ position: 'absolute', left: 30, top: 75 }} // Adjust the `right` value as needed
                >
                  <MaterialIcons name="settings" size={24} color="#333333" />
                </TouchableOpacity>
                <TouchableOpacity 
                  onPress={() => navigation.navigate('Login')} // Navigate to the Login screen
                  style={{ position: 'absolute', right: 30, top: 75 }}
                >
                  <MaterialIcons name="exit-to-app" size={24} color="#333333" />
                </TouchableOpacity>
              </View>
            ),
          })}
        />
        <Stack.Screen name="Camera" component={CameraScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen}  options={{ headerShown: true }}/>
        <Stack.Screen name="History" component={HistoryScreen}  options={{ headerShown: true }}/>
        {/*
        <Stack.Screen name="Chatbot" component={ChatbotScreen} options={{ headerShown: true }} />
        */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
