import React from 'react'
import { View, Text, StyleSheet, Dimensions, StatusBar, Image, TouchableOpacity } from 'react-native'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Logo from "../../Images/hm.png";


const LocationScreen = (props) => {
    const RoutNextScreen = () => {
        props.navigation.navigate('HomeScreen')
    }
    return (
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <StatusBar backgroundColor='#cf0262' barStyle='light-content' />
                <TouchableOpacity style={styles.LogoContainer} activeOpacity={0.9}>
                    <Image source={Logo} resizeMode={'cover'} style={{
                        width: 208,
                        height: 170,
                        // tintColor: 'white',
                        // backgroundColor: 'tomato'
                    }} />
                </TouchableOpacity>
                <View style={styles.logoTextContainer}>
                    <Text style={{ fontSize: 15, color: 'black' }}>Use Your Location to Show your Nearby Returant</Text>
                </View>
                <TouchableOpacity style={styles.locationButton} activeOpacity={0.8} onPress={RoutNextScreen}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Use Current Location</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity style={styles.locationText} activeOpacity={0.8}>
                <Text style={{ color: '#cf0262', textAlign: 'center' }}>Use Current Location</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LocationScreen

const styles = StyleSheet.create({
    mainContainer: {
        width: windowWidth * 1.0,
        height: windowHeight * 1.0,
        backgroundColor: '#fff',
        justifyContent: 'center'
    },
    subContainer: {
        marginTop: windowHeight * 0.3,
        // backgroundColor: 'green',
        // justifyContent: 'center'
    },
    LogoContainer: {
        // backgroundColor: 'gold',
        alignSelf: 'center'

    },
    logoTextContainer: {
        marginTop: windowHeight * 0.04,
        // backgroundColor: 'gold',
        alignSelf: 'center',
    },
    locationButton: {
        backgroundColor: '#cf0262',
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        width: windowWidth * 0.8,
        height: windowHeight * 0.06,
        elevation: 4,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    locationText: {
        // backgroundColor: 'gold',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-end',
        height: windowHeight * 0.15
    }
})