import React, { useState } from 'react'
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity, Dimensions, Image } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import PIC from "../../Images/meal.png";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CartScreen = (props) => {
    const [Selectedquantity, setSelectedquantity] = useState(0);
    const RoutNextScreen = () => {
        props.navigation.navigate('CheckoutScreen')
    }
    const RoutNextScreen2 = () => {
        props.navigation.navigate('ApplyVoucher')
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
            <View style={styles.orderSlider}>
                <View style={styles.sliderImager}>
                    <Image source={PIC} resizeMode={'contain'} style={{
                        width: 60,
                        height: 60,
                        alignSelf: 'center',
                        margin: 10
                    }} />
                </View>
                <View style={styles.sliderAllText}>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Lorem ipsum</Text>
                        <Text>Lorem </Text>
                    </View>
                    <View >
                        <Text style={{ textAlign: 'justify', fontWeight: 'bold', fontSize: 18 }}>Rs 454</Text>
                    </View>
                </View>
                <View style={styles.addIconCont}>
                    <TouchableOpacity activeOpacity={0.5} style={styles.MenuLogoContainer}>
                        <Icon
                            name="add-circle"
                            size={33}
                            color='#cf0262'
                            style={{ alignSelf: 'center' }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
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
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: '#cf0262' }}>Cart</Text>
                </View>
            </View>

            {/* {To Call when Cart is Empty} */}
            {/* <ScrollView style={{ flex: 1 }}>
                <View style={styles.subContainer}>
                    <TouchableOpacity style={styles.LogoContainer} activeOpacity={0.9}>
                        <Image source={Logo} resizeMode={'cover'} style={{
                            width: 300,
                            height: 300,
                            // tintColor: 'white',
                            // backgroundColor: 'tomato'
                        }} />
                    </TouchableOpacity>
                    <View style={styles.logoTextContainer}>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black' }}>Hungry?</Text>
                    </View>
                    <View style={styles.logosubTextContainer}>
                        <Text style={{ fontSize: 18, fontWeight: '100', color: 'black' }}>You haven't add anything in your cart!</Text>
                    </View>
                    <TouchableOpacity style={styles.locationButton} activeOpacity={0.8} onPress={RoutNextScreen}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 12 }}>Browse</Text>
                    </TouchableOpacity>

                </View>

            </ScrollView>*/}

            <View style={styles.devTimeAndDetails}>
                <View style={styles.DevTime}>
                    <Image source={require('../../Images/order.png')} resizeMode={'contain'} style={{
                        width: 80,
                        height: 80,
                        alignSelf: 'center',
                        margin: 10
                    }} />
                    <View style={styles.DevText}>
                        <Text>Estimated Delivery</Text>
                        <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Now (20 Min)</Text>
                    </View>
                </View>
                <View style={styles.pickerConta}>
                    <View style={styles.pickerContainer}>
                        <TouchableOpacity onPress={() => setSelectedquantity(Selectedquantity + 1)} style={styles.IncreBox}><Text>+</Text></TouchableOpacity>
                        <Text>{Selectedquantity}</Text>
                        <TouchableOpacity onPress={() => setSelectedquantity(Selectedquantity - 1)} style={styles.IncreBox}><Text>-</Text></TouchableOpacity>
                    </View>
                    <View>
                        <View style={styles.mealInfo}>
                            <Image source={require('../../Images/meal.png')} resizeMode={'contain'} style={{
                                width: 70,
                                height: 70,
                                alignSelf: 'center',
                                margin: 10
                            }} />
                            <View style={styles.mealInfoText}>
                                <Text>Deal 1</Text>
                            </View>
                            <View style={styles.mealRsText}>
                                <Text>Rs 400</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.flatelistContainer}>
                <Text style={{
                    marginTop: windowHeight * 0.01,
                    fontSize: 18,
                    fontWeight: 'bold',
                    textAlign: 'justify',
                    alignSelf: 'flex-start',
                    marginLeft: windowWidth * 0.05,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>Popular With Your Food</Text>
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={DATA}
                    renderItem={CardFuntion}
                    keyExtractor={(item, index) => index.toString()}
                    style={{
                        backgroundColor: '#eee',
                        alignSelf: 'center',
                    }}
                />
            </View>
            <View style={styles.totalDetails}>
                <View style={styles.subtotalText}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Subtotal</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Rs. 680.00</Text>
                </View>
                <View style={styles.subtotalText}>
                    <Text style={{ fontSize: 15, fontWeight: '100' }}>Delivery</Text>
                    <Text style={{ fontSize: 15, fontWeight: '100' }}>Rs. 49.00</Text>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.5} style={styles.VoucherLogoContainer} onPress={RoutNextScreen2}>
                        <Icon2
                            name="ticket"
                            size={30}
                            color='#cf0262'
                            style={{ alignSelf: 'center' }}
                        />
                        <Text style={{ marginLeft: windowWidth * 0.02, fontSize: 15, fontWeight: 'bold', color: '#cf0262' }}>Apply a Voucher</Text>
                    </TouchableOpacity>
                </View>
                <View></View>
            </View>
            <View>
                <View style={styles.subtotalText}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Total</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold' }}>Rs. 680.00</Text>
                </View>
                <TouchableOpacity style={styles.locationButton} activeOpacity={0.8} onPress={RoutNextScreen}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Review payment & Address</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default CartScreen;

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
    VoucherLogoContainer: {
        // backgroundColor: 'green',
        width: windowWidth * 0.4,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: windowWidth * 0.02
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
    logosubTextContainer: {
        marginTop: windowHeight * 0.01,
        // backgroundColor: 'gold',
        alignSelf: 'center',
    },
    locationButton: {
        backgroundColor: '#cf0262',
        alignSelf: 'center',
        marginTop: windowHeight * 0.01,
        width: windowWidth * 0.2,
        height: windowHeight * 0.05,
        elevation: 4,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    devTimeAndDetails: {
        // marginTop: windowHeight * 0.04,
        backgroundColor: '#fff',
        width: windowWidth * 1.0,
        height: windowHeight * 0.3,
        // justifyContent: 'center',
        alignItems: 'center',
        elevation: 2
    },
    DevTime: {
        marginTop: windowHeight * 0.02,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowHeight * 0.1,
        alignItems: 'center',
        elevation: 3,
        borderRadius: 10
    },
    DevText: {
        marginLeft: windowWidth * 0.05,
        justifyContent: 'center'

    },
    IncreBox: {
        backgroundColor: '#eee',
        width: 30,
        height: 30,
        borderRadius: 50,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
    },
    pickerConta: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.06,
        // backgroundColor: 'gold',
        width: windowWidth * 1.0,
        height: windowHeight * 0.1,
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    pickerContainer: {
        // backgroundColor: 'green',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mealInfo: {
        flexDirection: 'row'
    },
    mealInfoText: {
        justifyContent: 'center'
    },
    mealRsText: {
        marginLeft: windowWidth * 0.29,
        justifyContent: 'center'
    },
    orderSlider: {
        marginLeft: windowWidth * 0.04,
        marginTop: windowHeight * 0.01,
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 0.6,
        height: windowHeight * 0.13,
        justifyContent: 'center',
        elevation: 3,
        borderRadius: 10
    },
    sliderAllText: {
        // backgroundColor: 'tomato',
        alignItems: 'flex-start',
        justifyContent: 'space-around'
    },
    addIconCont: {
        // backgroundColor: 'green',
        width: windowWidth * 0.1,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: windowHeight * 0.04,
        marginLeft: windowWidth * 0.04
    },
    flatelistContainer: {
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        width: windowWidth * 1.0,
        height: windowHeight * 0.2
    },
    sliderImager: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    subtotalText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: windowWidth * 0.05
    },
    totalDetails: {
        // backgroundColor: 'tomato',
        height: windowHeight * 0.2,
        marginTop: windowHeight * 0.02,
        borderBottomColor: '#eee',
        borderBottomWidth: 1
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
})
