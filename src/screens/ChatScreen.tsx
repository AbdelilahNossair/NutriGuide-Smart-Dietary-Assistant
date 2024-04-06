import { MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, KeyboardAvoidingView, Platform, Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window')

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const sendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now(), text: inputText}]);
      setInputText('');
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
        <View style={[styles.messageContainer, styles.buttonRow]}>
            <MaterialCommunityIcons name="robot" size={30} color="#AD40AF" />
            <Text style={styles.messageText}>Hello, how may I assist you today?</Text>
          </View>
       
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.messageContainer}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={inputText}
          onChangeText={setInputText}
          style={styles.input}
          placeholder="Type a message..."
        />
        <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  buttonRow: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-around', // Evenly space the buttons
  },
  messageContainer: {
    margin: 10,
    padding: 10,
    backgroundColor: '#d3d3d3',
    width: width*0.95,
    borderRadius: 5,
  },
  messageText: {
    fontSize: 16,
    alignSelf: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 60,
    width: width*0.95,
    alignSelf: 'center'
  },
  input: {
    flex: 1,
    padding: 15,
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
  },
  sendButton: {
    backgroundColor: '#AD40AF',
    borderRadius: 5,
    justifyContent: 'center',
    padding: 10,
    marginLeft: 10,
  },
  sendButtonText: {
    color: '#ffffff',
  },
});

export default ChatScreen;
