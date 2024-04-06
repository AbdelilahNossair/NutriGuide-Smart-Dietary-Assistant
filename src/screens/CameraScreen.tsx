import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Camera, CameraType, FlashMode, WhiteBalance } from 'expo-camera';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';

export default function CameraScreen({ navigation }) {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [flashMode, setFlashMode] = useState(FlashMode.off);
    const [zoom, setZoom] = useState(0); // Zoom level from 0 to 1
    const [whiteBalance, setWhiteBalance] = useState(WhiteBalance.auto);

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
      })();
    }, []);

    if (!permission) {
        return <View style={styles.container}><Text>Requesting permissions...</Text></View>;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text>No access to camera</Text>
                <TouchableOpacity onPress={() => requestPermission()} style={styles.featureButton}>
                    <MaterialIcons name="camera" size={40} color="white" />
                </TouchableOpacity>
            </View>
        );
    }

    //Flash still not working 
    const toggleFlash = () => {
        console.log('Toggling Flash');
        setFlashMode(flashMode === FlashMode.off ? FlashMode.on : FlashMode.off);
      };
      
      const toggleZoom = () => {
        console.log('Toggling Zoom', zoom);
        setZoom(zoom === 0 ? 0.01 : 0); // Adjust based on testing
      };
      
      const toggleNightMode = () => {
        console.log('Toggling Night Mode');
        setWhiteBalance(whiteBalance === WhiteBalance.auto ? WhiteBalance.fluorescent : WhiteBalance.auto);
      };
      


    return (
        <View style={styles.container}>
            <Camera 
                style={styles.camera} 
                type={type}
                flashMode={flashMode}
                zoom={zoom}
                whiteBalance={whiteBalance}
            >
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                {/* Feature Buttons */}
                <View style={styles.featuresContainer}>
                    <TouchableOpacity style={styles.featureButton} onPress={toggleFlash}>
                        <Ionicons name="flashlight" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureButton} onPress={toggleZoom}>
                        <Fontisto name="zoom" size={20} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.featureButton} onPress={toggleNightMode}>
                        <MaterialIcons name="nights-stay" size={20} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.scanButton} onPress={() => console.log('Scan action')}>
                        {/* Using barcode-scan icon for the Scan button */}
                        <Ionicons name="camera-outline" size={40} color="white" />
                    </TouchableOpacity>
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
    },
    backButton: {
        marginTop: 60,
        marginLeft: 30,
    },
    featuresContainer: {
        position: 'absolute',
        right: 20,
        top: 60,
        alignItems: 'center',
    },
    featureButton: {
        marginBottom: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30,
        padding: 10,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 40,
        alignSelf: 'center',
    },
    scanButton: {
        padding: 15,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 30, // Making it more round
    },
});
