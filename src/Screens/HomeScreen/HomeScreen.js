import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image, FlatList, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
import PIC from "../../Images/photo-1567620905732-2d1ec7ab7445.jpg";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = (props) => {
    const RoutNextScreen = () => {
        props.navigation.navigate('SearchScreen')
    }
    const RoutNextScreen2 = () => {
        props.navigation.navigate('CartScreen')
    }
    const RoutNextScreen3 = () => {
        props.navigation.navigate('DailyDealsScreen')
    }
    const RoutNextScreen4 = () => {
        props.navigation.navigate('FoodDeliveryScreen')
    }


    const [DATA, setNewNoti] = useState([
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
        { Pic: PIC },
    ]);

    const CardFuntion = ({ item, index }) => {

        return (
            <TouchableOpacity style={{ margin: 10, elevation: 3, backgroundColor: '#fff' }} onPress={RoutNextScreen3}>
                <ImageBackground resizeMode={'stretch'} source={PIC} style={{
                    width: windowWidth * 0.4,
                    height: windowHeight * 0.25,
                    alignSelf: 'center',

                }} >
                </ImageBackground>

            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.headerUP}>
                <TouchableOpacity activeOpacity={0.5} style={styles.MenuLogoContainer} onPress={() => { props.navigation.openDrawer() }}>
                    <Icon2
                        name="menu"
                        size={24}
                        color='#cf0262'
                        style={{ alignSelf: 'center' }}
                    />
                </TouchableOpacity>
                <View style={styles.cityLocation}>
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: '#cf0262' }}>Faisalabad</Text>
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start' }}>Current Location</Text>
                </View>
                <TouchableOpacity activeOpacity={0.5} style={styles.CartLogoContainer} onPress={RoutNextScreen2}>
                    <Icon
                        name="shoppingcart"
                        size={24}
                        color='#cf0262'
                        style={{ alignSelf: 'center' }}
                    />
                </TouchableOpacity>

            </View>
            <ScrollView style={{ flex: 1, backgroundColor: 'white' }} >
                <View style={styles.WishingTextContainer}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Good Morning,</Text>
                    <Text style={{ marginTop: 8 }}>What's Your Dinner?There are 19 resturant in your area</Text>
                </View>
                <TouchableOpacity style={styles.Search} activeOpacity={0.9} onPress={RoutNextScreen}>
                    <View style={styles.searchLogoContainer}>
                        <Icon
                            name="search1"
                            size={24}
                            color='#cf0262'
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                    <View style={styles.searchTextContainer}>
                        <Text>Search For Shops & Resturant</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.twocards} >
                    <TouchableOpacity style={styles.card1} activeOpacity={0.9} onPress={RoutNextScreen4}>
                        <ImageBackground resizeMode={'contain'} source={{ uri: 'https://picsum.photos/300/400/?blur=5' }} style={{
                            alignSelf: 'center',
                            width: 165,
                            height: 220,
                            borderRadius: 10

                        }} >
                            <View style={{ marginLeft: 20, marginTop: windowHeight * 0.2 }}>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'justify' }}>Free Home Delivery</Text>
                                <Text style={{ color: 'white', fontSize: 10, textAlign: 'justify' }}>Order Food you Love</Text>
                            </View>

                        </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.card1} activeOpacity={0.9} onPress={RoutNextScreen4}>
                        <ImageBackground resizeMode={'contain'} source={{ uri: 'https://picsum.photos/300/400/?blur=8' }} style={{
                            alignSelf: 'center',
                            width: 165,
                            height: 220,
                            borderRadius: 10
                        }} >
                            <View style={{ marginLeft: 20, marginTop: windowHeight * 0.2 }}>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', textAlign: 'justify' }}>Pick Up</Text>
                                <Text style={{ color: 'white', fontSize: 10, textAlign: 'justify' }}>Your Food</Text>
                            </View>
                        </ImageBackground>
                    </TouchableOpacity>
                </View>
                <View style={styles.TextContainer}>
                    <Text style={styles.TextPopular}>Your Daily Deals</Text>
                </View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={CardFuntion}
                    keyExtractor={(item, index) => index.toString()}
                />
            </ScrollView>
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    WishingTextContainer: {
        // backgroundColor: 'tomato',
        alignSelf: 'flex-start',
        width: windowWidth * 0.45,
        marginLeft: windowWidth * 0.06,
        marginTop: windowHeight * 0.04
    },
    Search: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.03,
        alignSelf: 'center',
        backgroundColor: '#f5f5f5',
        height: windowHeight * 0.06,
        width: windowWidth * 0.9,
        elevation: 0.002,
        borderRadius: 10,
        elevation: 2
    },
    searchLogoContainer: {
        // backgroundColor: 'green',
        width: windowWidth * 0.2,
        alignItems: 'center',
        justifyContent: 'center'
    },
    searchTextContainer: {
        width: windowWidth * 0.6,
        justifyContent: 'center'
    },
    twocards: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.02,
        // backgroundColor: 'tomato',
        alignSelf: 'center',
        width: windowWidth * 0.9,
        height: windowHeight * 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card1: {
        // backgroundColor: 'blue',
        width: windowWidth * 0.4,
        height: windowHeight * 0.25,
        margin: 10,
        elevation: 3,
    },
    TextContainer: {
        // backgroundColor: 'blue',
        width: windowWidth * 0.6,
        marginLeft: windowWidth * 0.03,
        marginTop: windowHeight * 0.02
    },
    TextPopular: {
        color: 'black',
        fontSize: 20,
        fontWeight: '600',
    },
    headerUP: {
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: '#f5f5f5',
        height: windowHeight * 0.065,
        width: windowWidth * 1.0,
        elevation: 0.002,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
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
    }
})
