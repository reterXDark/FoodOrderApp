import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Dimensions, Image, TextInput } from 'react-native'
import Icon2 from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const ApplyVoucher = (props) => {
    const RoutNextScreen = () => {
        props.navigation.navigate('HomeScreen')
    }

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.headerUP}>
                <TouchableOpacity activeOpacity={0.5} style={styles.MenuLogoContainer} onPress={() => props.navigation.goBack()}>
                    <Icon2
                        name="circle-with-cross"
                        size={24}
                        color='#cf0262'
                        style={{ alignSelf: 'center' }}
                    />
                </TouchableOpacity>
                <View style={styles.cityLocation}>
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: '#cf0262' }}>Applying Voucher</Text>
                </View>
            </View>
            <View style={styles.SuperContainer}>
                <View style={styles.inpuutt}>
                    <TextInput placeholder='Voucher Code' />
                </View>
                <View>
                    <TouchableOpacity style={styles.locationButton} activeOpacity={0.8}>
                        <Text style={{ color: 'white', textAlign: 'center' }}>Apply</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default ApplyVoucher;

const styles = StyleSheet.create({
    headerUP: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#f5f5f5',
        height: windowHeight * 0.065,
        width: windowWidth * 1.0,
        elevation: 0.002,
        elevation: 10,
    },
    MenuLogoContainer: {
        // backgroundColor: 'green',
        width: windowWidth * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    cityLocation: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    SuperContainer: {
        backgroundColor: '#fff',
        width: windowWidth * 1.0,
        height: windowHeight * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    inpuutt: {
        backgroundColor: '#fff',
        width: windowWidth * 0.8,
        borderRadius: 5,
        paddingLeft: windowWidth * 0.05,
        elevation: 2

    },
    locationButton: {
        backgroundColor: '#cf0262',
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        width: windowWidth * 0.9,
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


