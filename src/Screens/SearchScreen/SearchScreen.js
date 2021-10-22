import React, { useState } from 'react'
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SearchScreen = (props) => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.headerUP}>
                <TouchableOpacity activeOpacity={0.5} style={styles.MenuLogoContainer} onPress={() => props.navigation.goBack()} >
                    <Icon
                        name="arrowleft"
                        size={24}
                        color='#cf0262'
                        style={{ alignSelf: 'center' }}
                    />
                </TouchableOpacity>
                <View style={styles.searchInputTextContainer}>
                    <GooglePlacesAutocomplete
                        placeholder='Search'
                        onPress={(data, details = null) => {
                            // 'details' is provided when fetchDetails = true
                            console.log(data, details);
                        }}
                        query={{
                            key: 'AIzaSyDztPW2zOu4D8Ltm9X_oogovWrfJHj-RJw',
                            language: 'en',
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default SearchScreen;


const styles = StyleSheet.create({
    headerUP: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        height: windowHeight * 0.065,
        width: windowWidth * 1.0,
        elevation: 0.002,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
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
    CartLogoContainer: {
        width: windowWidth * 0.2,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: windowWidth * 0.38
    },
    searchInputTextContainer: {
        backgroundColor: '#fff',
        width: windowWidth * 0.7,
        justifyContent: 'center',
        height: windowHeight * 0.05,
        borderRadius: 10
    },

})
