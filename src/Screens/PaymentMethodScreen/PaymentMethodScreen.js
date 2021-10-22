import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Modal, Animated, TouchableWithoutFeedback, TextInput, ScrollView } from 'react-native'
import CheckBox from '@react-native-community/checkbox';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/EvilIcons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const PaymentMethodScreen = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.headerUP}>
                <TouchableOpacity activeOpacity={0.5} style={styles.MenuLogoContainer} onPress={() => props.navigation.goBack()}>
                    <Icon1
                        name="circle-with-cross"
                        size={24}
                        color='#cf0262'
                        style={{ alignSelf: 'center' }}
                    />
                </TouchableOpacity>
                <View style={styles.cityLocation}>
                    <Text style={{ textAlign: 'center', alignSelf: 'flex-start', fontSize: 20, fontWeight: 'bold', color: '#cf0262' }}>Payment Method</Text>
                </View>
            </View>
            <View style={{ marginTop: windowHeight * 0.03 }}>
                <TouchableOpacity activeOpacity={0.9} style={styles.SelectPMethodCard} onPress={() => { setShowModal(true) }}>
                    <View style={styles.cardrepresent}>
                        <Icon2
                            name="credit-card"
                            size={24}
                            color='#000'
                            style={{ alignSelf: 'center', }}
                        />
                    </View>
                    <View style={styles.cardAllLogosAndText}>
                        <Text style={{ fontSize: 16, color: '#cf0262' }}>Credit or Debit Card</Text>
                        <View style={{ flexDirection: 'row', }}>
                            <Icon3
                                name="cc-visa"
                                size={15}
                                color='#000'
                                style={{ alignSelf: 'center', marginLeft: 5 }}
                            />
                            <Icon3
                                name="cc-mastercard"
                                size={15}
                                color='#000'
                                style={{ alignSelf: 'center', marginLeft: 5 }}
                            />
                            <Icon3
                                name="cc-paypal"
                                size={15}
                                color='#000'
                                style={{ alignSelf: 'center', marginLeft: 5 }}
                            />
                        </View>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <Icon1
                            name="chevron-small-right"
                            size={40}
                            color='#cf0262'
                            style={{ alignSelf: 'center', marginLeft: windowWidth * 0.18 }}
                        />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity activeOpacity={0.9} style={styles.SelectPMethodCard}>
                    <View style={styles.cardrepresent}>
                        <Icon3
                            name="money"
                            size={24}
                            color='#000'
                            style={{ alignSelf: 'center', }}
                        />
                    </View>
                    <View style={styles.cardAllLogosAndText}>
                        <Text style={{ fontSize: 16, color: '#cf0262' }}>Cash</Text>
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}>
                        <Icon3
                            name="dot-circle-o"
                            size={20}
                            color='#cf0262'
                            style={{ alignSelf: 'center', marginLeft: windowWidth * 0.20 }}
                        />
                    </View>
                </TouchableOpacity>
                <ScrollView>
                    <Modal
                        animationType={'slide'}
                        transparent={true}
                        visible={showModal}
                        onRequestClose={() => { setShowModal(!showModal) }}
                    >
                        <Animated.View style={styles.CustomModal}>
                            <View style={styles.cardNumInputCon}>
                                <TextInput placeholderTextColor='#000' placeholder='Card Number' keyboardType='decimal-pad' />
                            </View>
                            <View style={styles.DoubleInput}>
                                <View style={styles.cardDateInputCon}>
                                    <TextInput placeholderTextColor='#000' placeholder='MM/YYYY' keyboardType='ascii-capable' />
                                </View>
                                <View style={styles.cardCVCInputCon}>
                                    <TextInput placeholderTextColor='#000' placeholder='CVC' keyboardType='decimal-pad' />
                                    <View style={styles.cardrepresentInput}>
                                        <Icon2
                                            name="credit-card"
                                            size={24}
                                            color='#000'
                                            style={{ alignSelf: 'center', }}
                                        />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.checkBoxContainer}>
                                <CheckBox
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text>Save my Card</Text>
                            </View>
                            <View>
                                <TouchableOpacity activeOpacity={0.8} onPress={() => { setShowModal(false) }} style={styles.AddCardButton}>
                                    <Text style={{ color: 'white', textAlign: 'center' }}>Add Card</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.warnText}>
                                <Icon4
                                    name="privacy-tip"
                                    size={24}
                                    color='#000'
                                    style={{ alignSelf: 'center', }}
                                />
                                <Text style={{ marginLeft: windowWidth * 0.03, textAlign: 'center', alignSelf: 'center' }}>We'll kepp your payment safe</Text>
                            </View>
                        </Animated.View>
                    </Modal>
                </ScrollView>
            </View>
        </View>
    )
}

export default PaymentMethodScreen;

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
    SelectPMethodCard: {
        flexDirection: 'row',
        alignSelf: 'center',
        // backgroundColor: 'gold',
        width: windowWidth * 0.95,
        height: windowHeight * 0.06,
        alignItems: 'center',
    },
    cardrepresent: {
        // backgroundColor: 'tomato',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',

    },
    cardAllLogosAndText: {
        // backgroundColor: 'green',
        height: windowHeight * 0.056,
        width: windowWidth * 0.5,
        alignItems: 'flex-start',
        justifyContent: 'center',
        marginLeft: windowWidth * 0.07
    },
    CustomModal: {
        backgroundColor: '#eee',
        position: 'absolute',
        bottom: 0,
        height: windowHeight * 0.4,
        width: windowWidth * 1.0,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        elevation: 10,
        left: 0,
        right: 0,
    },
    cardNumInputCon: {
        backgroundColor: '#fff',
        width: windowWidth * 0.9,
        height: windowHeight * 0.055,
        borderWidth: 0.4,
        borderColor: 'silver',
        borderRadius: 6,
    },
    cardDateInputCon: {
        backgroundColor: '#fff',
        width: windowWidth * 0.4,
        height: windowHeight * 0.055,
        borderWidth: 0.4,
        borderColor: 'silver',
        borderRadius: 6,
    },
    cardCVCInputCon: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: windowWidth * 0.4,
        height: windowHeight * 0.055,
        borderWidth: 0.4,
        borderColor: 'silver',
        borderRadius: 6,
        justifyContent: 'space-between'
    },
    DoubleInput: {
        marginTop: windowHeight * 0.020,
        flexDirection: 'row',
        width: windowWidth * 0.9,
        justifyContent: 'space-between'
    },
    cardrepresentInput: {
        // backgroundColor: 'green',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    checkBoxContainer: {
        marginTop: windowHeight * 0.01,
        width: windowWidth * 0.9,
        flexDirection: 'row',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    AddCardButton: {
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
    warnText: {
        flexDirection: 'row',
        marginTop: windowHeight * 0.03,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    }
})
