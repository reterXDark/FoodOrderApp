import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, ScrollView, FlatList, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import PIC from "../../Images/download.jpg";

const FoodDeliveryScreen = (props) => {
    const RoutNextScreen2 = () => {
        props.navigation.navigate('CartScreen')
    }
    const RoutNextScreen3 = () => {
        props.navigation.navigate('SearchScreen')
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
            <View style={styles.horBanner}>
                <TouchableOpacity style={styles.imageBANNER}>
                    <ImageBackground resizeMode={'cover'} source={require('../../Images/download.jpg')} style={{
                        alignSelf: 'center',
                        width: windowWidth * 0.9,
                        height: windowHeight * 0.2,
                        borderRadius: 10
                    }} />
                </TouchableOpacity>
                <View style={styles.textsCont}>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 7 }}>
                        <Text style={{ fontWeight: 'bold' }}>BombayChow - Layyalpur Galleria</Text>
                        <Icon2
                            name="star"
                            size={10}
                            color='gold'
                            style={{ alignSelf: 'center', marginLeft: windowWidth * 0.28 }}
                        />

                        <Text>3.9 (315)</Text>
                    </View>
                    <Text>$$ . Fast Food Take Away Eid</Text>
                    <Text style={{ fontWeight: 'bold' }}>Rs . 49 Rupee Fee</Text>
                </View>
            </View>
        )
    }



    return (

        <ScrollView nestedScrollEnabled={true}>
            <View style={styles.headerUP}>
                <TouchableOpacity activeOpacity={0.5} style={styles.MenuLogoContainer} onPress={() => props.navigation.goBack()}>
                    <Icon
                        name="arrowleft"
                        size={24}
                        color='#cf0262'
                        style={{ alignSelf: 'center' }}
                    />
                </TouchableOpacity>
                <View style={styles.cityLocation}>
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: '#cf0262' }}>Food Delivery</Text>
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
            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <TouchableOpacity style={styles.Search} activeOpacity={0.9} onPress={RoutNextScreen3}>
                    <View style={styles.searchLogoContainer}>
                        <Icon
                            name="search1"
                            size={24}
                            color='#cf0262'
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                    <View style={styles.searchTextContainer}>
                        <Text style={{ textAlign: 'justify' }}>Search For Resturant, cuisines &  . . </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.FilterContainer} activeOpacity={0.9}>
                    <View>
                        <Icon
                            name="filter"
                            size={24}
                            color='#cf0262'
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    data={DATA}
                    renderItem={CardFuntion}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>

        </ScrollView>
    )
}

export default FoodDeliveryScreen;

const styles = StyleSheet.create({
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
    },
    Search: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.03,
        alignSelf: 'flex-start',
        backgroundColor: '#f5f5f5',
        height: windowHeight * 0.06,
        width: windowWidth * 0.7,
        elevation: 0.002,
        borderRadius: 10,
        elevation: 2
    },
    FilterContainer: {
        backgroundColor: '#f5f5f5',
        width: 50,
        width: windowWidth * 0.13,
        height: windowHeight * 0.06,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight * 0.03,
        borderRadius: 10,
        elevation: 2,
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

    horBanner: {
        marginTop: windowHeight * 0.05,
        backgroundColor: '#f5f5f5',
        alignSelf: 'center',
        height: windowHeight * 0.32,
        width: windowWidth * 0.9,
        elevation: 2,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    },
    imageBANNER: {
        // backgroundColor: 'green',
        alignSelf: 'center',
        width: windowWidth * 1.0,
        height: windowHeight * 0.2,
    },
    textsCont: {
        marginTop: windowHeight * 0.02,
        margin: 10
    }
})
