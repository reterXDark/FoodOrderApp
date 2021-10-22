import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import Logo from "../../Images/mainlogo.png";

const SplashScreen = (props) => {
    useEffect(() => {
        setTimeout(() => {
            const { navigate } = props.navigation;
            navigate("LocationScreen");
        }, 3000);
    });
    return (
        <View style={styles.mainContainer}>
            <StatusBar backgroundColor='#cf0262' barStyle='light-content' />
            <TouchableOpacity style={styles.LogoContainer} activeOpacity={0.9}>
                <Image source={Logo} resizeMode={'contain'} style={{
                    width: 250,
                    height: 250,
                    tintColor: 'white'
                }} />
            </TouchableOpacity>
            <View style={styles.logoTextContainer}>
                <Text style={{ fontSize: 40, fontWeight: 'bold', color: 'white' }}>Food</Text>
            </View>
        </View>

    )
}

export default SplashScreen;

const styles = StyleSheet.create({
    mainContainer: {
        width: windowWidth * 1.0,
        height: windowHeight * 1.0,
        backgroundColor: '#cf0262',
        justifyContent: 'center'
    },
    LogoContainer: {
        // backgroundColor: 'gold',
        alignSelf: 'center'
    },
    logoTextContainer: {
        // backgroundColor: 'gold',
        alignSelf: 'center',
    }
})
