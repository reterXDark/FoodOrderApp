import React, { useState } from 'react'
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity, Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/MaterialIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import Icon5 from 'react-native-vector-icons/Entypo';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const CheckoutScreen = (props) => {
    const RoutNextScreen = () => {
        props.navigation.navigate('PaymentMethodScreen')
    }
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
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
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: '#cf0262' }}>Checkout</Text>
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start', color: '#cf0262' }}>West Cannal Road</Text>
                </View>
            </View>
            <ScrollView style={styles.mainConatiner} >
                <View style={styles.deliveryAddConta}>
                    <View style={styles.hsd}>
                        <Icon2
                            name="location"
                            size={37}
                            color='#cf0262'
                            style={{ alignSelf: 'center', }}
                        />
                        <Text style={{ fontSize: 18, color: '#cf0262' }}>Delivery Address</Text>
                        <Icon2
                            name="pencil"
                            size={37}
                            color='#cf0262'
                            style={{ alignSelf: 'center' }}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', }}>
                        <View style={styles.mapView}>
                            <Text>Map Here Your Location</Text>
                        </View>
                    </View>
                    <View style={styles.addressTExt}>
                        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>lreom Insdpu</Text>
                        <Text style={{ fontSize: 16, }}>shvdhyw</Text>
                    </View>
                    <TouchableOpacity style={styles.AddDevInfo} activeOpacity={0.7}>
                        <Icon
                            name="plus"
                            size={20}
                            color='#cf0262'
                            style={{ alignSelf: 'center', }}
                        />
                        <Text style={{ fontSize: 15, color: '#cf0262', marginLeft: 20 }}>Add Delivery Information</Text>
                    </TouchableOpacity>
                    <View style={styles.SwithInfo} activeOpacity={0.7}>

                        <Text style={{ fontSize: 10, color: '#cf0262', marginLeft: 20 }}>Add Delivery Information Lorem ipsum Lorem ipsu</Text>
                        <View style={styles.switchContainer}>
                            <Switch
                                trackColor={{ false: "#767577", true: "#cf0262" }}
                                thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.PaymentDetailView}>
                    <View style={styles.hsd}>
                        <Icon3
                            name="payment"
                            size={30}
                            color='#cf0262'
                            style={{ alignSelf: 'center', }}
                        />
                        <Text style={{ margin: 5, fontSize: 18, color: '#000' }}>Payment Method</Text>
                        <TouchableOpacity onPress={RoutNextScreen}>
                            <Icon2
                                name="pencil"
                                size={37}
                                color='#cf0262'
                                style={{ alignSelf: 'center', marginLeft: windowWidth * 0.4 }}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.hsd}>
                        <Icon4
                            name="cash"
                            size={30}
                            color='#000'
                            style={{ alignSelf: 'center', }}
                        />
                        <Text style={{ margin: 5, fontSize: 18, color: '#000' }}>Cash</Text>
                    </View>
                </View>
                <View style={styles.orderSummeryContainer}>
                    <View style={styles.hsd}>
                        <Icon4
                            name="list-circle-outline"
                            size={30}
                            color='#cf0262'
                            style={{ alignSelf: 'center', }}
                        />
                        <Text style={{ margin: 5, fontSize: 18, color: '#000' }}>Order Summaray</Text>
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
                            <TouchableOpacity activeOpacity={0.5} style={styles.VoucherLogoContainer}>
                                <Icon5
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
                    </View>
                </View>
                <TouchableOpacity style={styles.locationButton} activeOpacity={0.8} onPress={RoutNextScreen}>
                    <Text style={{ color: 'white', textAlign: 'center' }}>Place Order</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default CheckoutScreen;

const styles = StyleSheet.create({
    headerUP: {
        flexDirection: 'row',
        alignSelf: 'center',
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
        marginBottom: windowHeight * 0.02,
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
    },
    mainConatiner: {
        width: windowWidth * 1.0,
        height: windowHeight * 1.0,
        backgroundColor: '#fff',
        // alignItems: 'center',
    },
    deliveryAddConta: {
        // flexDirection: 'row',
        width: windowWidth * 0.9,
        height: windowHeight * 0.35,
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3
    },
    mapView: {
        backgroundColor: '#fff',
        width: windowWidth * 0.8,
        height: windowHeight * 0.12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 2
    },

    addressTExt: {
        // backgroundColor: 'gold',
        width: windowWidth * 0.8,
        height: windowHeight * 0.06,
        justifyContent: 'center',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    AddDevInfo: {
        // backgroundColor: 'gold',
        flexDirection: 'row',
        width: windowWidth * 0.8,
        height: windowHeight * 0.05,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    SwithInfo: {
        // backgroundColor: 'gold',
        flexDirection: 'row',
        width: windowWidth * 0.8,
        height: windowHeight * 0.05,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    PaymentDetailView: {
        marginTop: windowHeight * 0.02,
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowHeight * 0.12,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        elevation: 2
    },
    AddPayInfo: {
        // backgroundColor: 'gold',
        flexDirection: 'row',
        width: windowWidth * 0.8,
        height: windowHeight * 0.05,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        borderBottomColor: '#eee',
        borderBottomWidth: 1
    },
    hsd: {
        flexDirection: 'row',
        width: windowWidth * 0.9,
        height: windowHeight * 0.05,
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'flex-start',
        marginLeft: windowWidth * 0.05,
    },
    orderSummeryContainer: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.35,
        alignSelf: 'center',
        marginTop: windowHeight * 0.02,
        backgroundColor: '#fff',
        alignItems: 'center',
        borderRadius: 10,
        elevation: 3
    },
    subtotalText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: windowWidth * 0.03
    },
    totalDetails: {
        // backgroundColor: 'tomato',
        height: windowHeight * 0.17,
        width: windowWidth * 0.9,
        marginTop: windowHeight * 0.02,
        justifyContent: 'space-between',
        borderBottomColor: '#eee',
        borderBottomWidth: 1,
    },
    VoucherLogoContainer: {
        // backgroundColor: 'green',
        width: windowWidth * 0.4,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        marginLeft: windowWidth * 0.02
    },
})


